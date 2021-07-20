---
title: API de renderização
weight: 187
---

---

Para controlar o processo de renderização, o Beagle permite você gerenciar quando uma nova renderização é feita na árvore do Beagle View. Você pode ter um componente que quando é clicado muda a árvore atual, para que um novo componente seja adicionado ou uma propriedade seja modificada.

Um cenário comum é quando você cria uma ação que muda a árvore atual, por exemplo, uma ação addChildren, quando executada deve ir a árvore atual e adicionar o filho ao componente com o id dado. Para fazer isso, é preciso ter uma forma de obter a árvore atual, modificá-la e avisar ao Beagle View para renderizar de novo.

A renderização pode ser feita em dois processos: a completa e a parcial. A primeira executa todos 
[**os passos da lista no início dessa página**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/lifecycles#process-to-render-a-view" lang="pt" >}})
e a segunda executa apenas o view snapshot e os passos 9 ao 18 da mesma lista.

### Acessando o Renderer

Cada Beagle View possui seu renderizador, para acessá-lo, você deve chamar o `beagleView.getRenderer()`.

Veja os exemplos de como obter uma referência ao renderizador:

- React: a referência ao `BeagleView` pode ser obtida por meio da propriedade do `viewRef` do `BeagleRemoteView:`

```typescript
import React, { FC, useRef, useEffect, MutableRefObject } from 'react'
import { BeagleRemoteView } from '@zup-it/beagle-react'
import { BeagleView } from '@zup-it/beagle-web'

const Home: FC = () => {
  const beagleView = useRef() as MutableRefObject<BeagleView | undefined>

  useEffect(() => {
    if (beagleView.current) {
      const renderer = beagleView.current.getRenderer()
    }
  }, [])

  return (
    <BeagleRemoteView path="/home" viewRef={beagleView} />
  )
}
```

- Angular: você pode usar o atributo `onCreateBeagleView` do componente `beagle-remote-view` :

```typescript
import { Component } from '@angular/core'
import { LoadParams, BeagleView } from '@zup-it/beagle-web'

@Component({
  selector: 'home',
  template: '',
})
export class Home {
  loadParams: LoadParams
  private beagleView: BeagleView

  constructor() {
    this.loadParams = { path: '/home' }
  }

  onCreateBeagleView(beagleView: BeagleView) {
    this.beagleView = beagleView
  }

  getRenderer() {
    return this.beagleView && this.beagleView.getRenderer()
  }
}
```

- Flutter: você pode usar o atributo `onCreateView` do `BeagleWidget`:

```dart
class Ref<T> {
  T current;
}

class Home extends StatelessWidget {
  Home({Key key}) : super(key: key);

  // holds a reference to the BeagleView in case you need direct access to it.
  final _beagleViewRef = Ref<BeagleView>();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: BeagleWidget(
        screenRequest: BeagleScreenRequest('/home'),
        onCreateView: (view) {
          _beagleViewRef.current = view;
        }
      ),
    );
  }
),
```

Quando dentro do componente renderizado pelo Beagle, você pode usar o ViewContentManager para acessar o BeagleView e obter o renderizador.

Quando dentro do action handler \(ações customizadas\), o Beagle View é provido via parametro que pode ser usado para obter o renderizador, veja o exemplo abaixo:

- React e Angular

```typescript
const MyCustomActionHandler: ActionHandler<MyCustomAction> = ({ action, beagleView }) => {
  const renderer = beagleView.getRenderer()
  // ...
}
```

- Flutter:
```dart
final ActionHandler myAction = ({action, view, element, context}) {
  final renderer = view.getRenderer();
  // ...
};
```

### Usando o Renderer

O renderizador possui duas funções principais: `doFullRender` e`doPartialRender`.

1. `doFullRender`: renderiza a árvore passada como parâmetro rodando todo os passos para renderização. Renderização completa deve ser feita toda vez que novas nodes são criadas.
2. `doPartialRender`: apenas roda a view snapshot e os passos depois disso. Renderização parcial deve ser usada para modificar nodes existentes.

A árvore recebida pelo `doFullRender` é do tipo `BeagleUIElement`, ela pode ou não ter ids. A árvore recebida pelo `doPartialRender` é do tipo `IdentifiableBeagleUIElement`,
onde todo nó, obrigatoriamente, possui ids.

Além do tipo de árvore, não há diferença na forma que o `doFullRender` e o `doPartialRender` são chamados. Eles aceitam os seguintes parâmetros:

1. O primeiro é a árvore/component a renderizar;
2. O segundo é a âncora (opcional). Se a âncora não for especificada, assume-se como âncora o nó raiz. Se a âncora é especificada, a árvore passada como parametro será anexada à árvore atual, na mesma posiçao que o nó com id referenciado por `anchor`. Como o anexo é feito é definido pelo terceiro parâmetro.
3. O terceiro é o modo (opcional). Se o modo não é definido, ele é tratado como `replaceComponent`. Há 4 modos diferentes:
   - `replaceComponent`: substitui o nó apontado por `anchor`.
   - `replace`: substitui os filhos do nó apontado por `anchor`.
   - `prepend`: adiciona aos filhos do nó apontado por `anchor`, colocando os novos nós antes dos nós existentes.
   - `append`: adiciona aos filhos do nó apontado por `anchor`, colocando os novos nós após os nós existentes.

Existe um terceiro método adicional usado para renderizar listas baseadas em templates de forma eficiente: o `doTemplateRender`.

O `doTemplateRender` renderiza de acordo com um template manager (gerenciador de templates) e uma matriz de contextos.

Cada linha na matriz de contextos representa uma iteração e cada coluna representa o valor de uma variável do template.
Por exemplo, imagine um template com as variáveis `@{name}`, `@{sex}` e `@{address}`. Agora suponha que queremos renderizar
três entradas diferentes com esse template. Veja um exemplo abaixo de uma matriz que poderia ser usada para esse exemplo.

```
[
  [{ id: 'name', value: 'John' }, { id: 'sex', value: 'M' }, { id: 'address', value: { street: '42 Avenue', number: '256' } }],
  [{ id: 'name', value: 'Sue' }, { id: 'sex', value: 'F' }, { id: 'address', value: { street: 'St Monica St', number: '85' } }],
  [{ id: 'name', value: 'Paul' }, { id: 'sex', value: 'M' }, { id: 'address', value: { street: 'Bv Kennedy', number: '877' } }],
]
```

Note que o parâmetro `contexts` adiciona à hierarquia de contextos que já existe na árvore, não é uma troca, i.e. ainda é possível
usar os contextos declarados na árvore corrente.

Para cada linha da matriz de contextos, um template é escolhido de acordo com a propriedade `case`, que é uma expressão Beagle que
resolve para booleano. `case` é resolvido de acordo com os contextos declarados na árvore e com a matriz de contextos passada por
parâmetro na linha/iteração atual. Se nenhum template atende às condições, então o template padrão (default) é usado. Se não existe
um default, a iteração é ignorada.

Após processar todos os itens, a árvore resultante é anexada à árvore atual no nó de id igual ao parâmetro `anchor`.

O parâmetro `componentManager` é opcional e usado para modificar o componente resultante de cada iteração. Isso pode ser útil
quando se deseja, por exemplo, manipular os ids de cada elemento da lista. O `componentManager` é uma função que recebe o componente
gerado e o índice, retornando o componente modificado.

**Parâmetros**
1. templateManager: templates usados para renderizar cada linha da matriz de contextos.
2. anchor: id do nó na árvore corrente onde anexar elementos gerados.
3. contexts: matriz de contextos onde cada linha representa um item para renderizar de acordo com o `templateManager`.
4. componentManager: opcional. Quando especificado, o componente passa por essa função antes de ser processado, possibilitando modificações.

### **Exemplos:**

```text
/* example 1: renders a container with an empty list */
beagleView.getRenderer().doFullRender({
  _beagleComponent_: 'beagle:container',
  children: [
    _beagleComponent_: 'custom:list',
    id: 'list',
  ],
})

/* example 2: adds a property to the root of the currently rendered tree */
const current = beagleView.getTree()
current.newProperty = 'new'
beagleView.getRenderer().doPartialRender(current)

/* example 3: adds an element to the "custom:list" inside the container */
const item = {
  _beagleComponent_: 'beagle:container',
  children: [
    { _beagleComponent_: 'beagle:text', text: 'Client name: Jasnah Kholin' },
    { _beagleComponent_: 'beagle:text', text: 'Client age: 30' }
  ]
}
// we should always do full renders when creating new nodes
beagleView.getRenderer().doFullRender(item, 'list', { mode: 'append' })
```

{{% alert color="info" %}}
Com a API de renderização é possível alterar a view sempre que se quiser. Mas, _"com grandes poderes, vêm grandes responsabilidades"_.
É importante saber qual o melhor momento para se disparar uma nova renderização, e.g. pode ser uma má ideia fazer uma nova renderização
antes da renderização corrente finalizar. Tome o Angular como exemplo, se `renderer.doFullRender(tree, componentId, 'replaceComponent')`
é chamado no cliclo de vida `onInit` de um componente com id `componentId`, o Beagle vai remover o componente da árvore antes mesmo dele
ter a chance de ser completamente renderizado.
{{% /alert %}}

## API ViewContentManager
Recomenda-se não chamar manualmente as APIs de renderização, a não ser que absolutamente necessário. Isso é importante, pois assim que essas
APIs são chamadas dentro de um componente, esses componentes se tornam acoplados ao Beagle, o que não é boa coisa, pois assim, dependem do
Beagle para funcionarem.

Considerando os componentes padrões fornecidos pelo Beagle, o ListView e o LazyComponent são bons exemplos de componentes que precisam acessar
essas APIs, já que eles precisam controlar a renderização eles mesmos. Se seu componente realmente precisa desse "super-poder", isso pode
ser feito via o `ViewContentManager`.

O `ViewContentManager` provê uma forma de acessar a BeagleView e o nó da árvore atual que deu origem ao componente renderizado. Com isso, é possível
acessar e chamar a renderização desse componente específico.

### Acessando o ViewContentManager

Veja abaixo exemplos de como acessar o `ViewContentManager` para um componente que carrega uma view do Beagle de forma assíncrona e a renderiza como
seu filho.

#### React

O `ViewContentManager` pode ser acessado dentro to componente do React, se ele implementar a interface do BeagleComponente.

```typescript
import React, { FC, useEffect } from 'react'
import { BeagleComponent } from '@zup-it/beagle-react'

interface LazyInterface extends BeagleComponent {
  url: string,
}

const LazyComponent: FC<LazyInterface> = ({ url, viewContentManager, children }) => {
  async function loadUrl() {
    /* Once the component implements the BeagleComponent interface, we have access to the
    viewContentManager, but if the component was not instantiated by Beagle, the viewContentManager
    will be undefined. We must verify it before continuing. */
    if (!viewContentManager) {
      return console.error('The LazyComponent cannot be instantiated outside a Beagle context.')
    }
    const response = await fetch(url)
    const jsonView: string = await response.json()
    const elementId = viewContentManager.getElementId()
    viewContentManager.getBeagleView().getRenderer().doFullRenderer(jsonView, elementId, 'replace')
  }

  useEffect(loadUrl, [])

  return children?.length ? children : <p>Loading...</p>
}
```

Isso acontece quando a fonte de dados ou template mudam.

#### Angular

No Angular, se você precisar acessar o ViewContentManager, a classe do componente deve extender o `BeagleComponent`, então você pode referenciar a `this.viewContentManager`.

```typescript
import { Component, Input, AfterViewInit } from '@angular/core'
import { BeagleComponent } from '@zup-it/beagle-angular'

@Component({
  // ...
  template: '<p *ngIf="isLoading">Loading...</p><ng-content></ng-content>',
})
export class ListView extends BeagleComponent implements AfterViewInit {
  @Input() url: string
  isLoading = true

  private async loadUrl() {
    /* Once the component implements the BeagleComponent interface, we have access to the
    viewContentManager, but if the component was not instantiated by Beagle, the viewContentManager
    will be undefined. We must verify it before continuing. */
    if (!this.viewContentManager) {
      return console.error('The LazyComponent cannot be instantiated outside a Beagle context.')
    }
    const response = await fetch(url)
    const jsonView: string = await response.json()
    const elementId = viewContentManager.getElementId()
    this.viewContentManager.getBeagleView().getRenderer().doFullRenderer(jsonView, elementId, 'replace')
    this.isLoading = false
  }

  ngAfterViewInit() {
    this.loadUrl()
  }
}
```

#### Flutter
No Flutter, pelo menos por enquanto, não é possível acessar o `ViewContentManager`. Para atingir o mesmo comportamento, é necessário usar a view
passada como parâmetro para o `ComponentBuilder`, Veja o exemplo abaixo:

```dart
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

import 'package:beagle/beagle.dart';
import 'package:beagle/interface/beagle_view.dart';
import 'package:beagle/model/tree_update_mode.dart';
import 'package:after_layout/after_layout.dart';

class LazyComponent extends StatefulWidget {
  const LazyComponent({
    Key key,
    this.url,
    this.id,
    this.view,
    this.child,
  }) : super(key: key);

  final String url;
  final String id;
  final BeagleView view;
  final Widget child;

  @override
  _LazyComponent createState() => _LazyComponent();
}

class _LazyComponent extends State<LazyComponent> with AfterLayoutMixin<LazyComponent> {
  Future<void> _loadView async () {
    final response = await http.get(Uri.parse(widget.url));
    final jsonMap = jsonDecode(result.body);
    final loadedView = BeagleUIElement(jsonMap);
    widget.view.getRenderer().doFullRender(loadedView, widget.id, TreeUpdateMode.replace);
  }

  @override
  void afterFirstLayout(BuildContext context) {
    _loadView()
  }

  @override
  Widget build(BuildContext context) {
    return widget.child ?? Text('Loading...');
  }
}

ComponentBuilder LazyComponentBuilder() {
  return (element, children, view) {
    return BeagleLazyComponent(
      key: element.getKey(),
      url: element.getAttributeValue('url'),
      id: element.getId(),
      view: view,
      child: children.isEmpty ? null : children[0],
    );
  };
}
```

O mixin `AfterLayout` pode ser encontrado [aqui](https://github.com/fluttercommunity/flutter_after_layout).

### Usando o ViewContentManager (React e Angular)

O ViewContentManager possui as seguintes propriedades e funções: have the following properties/functions

<table>
  <thead>
    <tr>
      <th style="text-align:left">Propriedade</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <code>getElement()</code>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna a node na &#xE1;rvore do Beagle respons&#xE1;vel pela renderiza&#xE7;&#xE3;o
        do componente.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <code>getElementId()</code>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">atalho para o <code>getElement().id</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>getBeagleView()</code>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna o BeagleView respons&#xE1;vel pela view contendo o componente.</td>
    </tr>
  </tbody>
</table>

## Atualizando a view com o resultado da requisição (React e Angular)

Caso você precisa atualizar a view atual com a árvore que vem do backend, você deve usar o [**método fetch do `BeagleView`**](https://github.com/ZupIT/beagle-web-core/blob/master/pt/beagle-view#Fetching-a-view). Isso irá internamente usar todo o mecanismo de cache do Beagle e também a parte de renderização.
