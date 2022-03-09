---
title: Beagle View
weight: 3
description: >-
  Nesta seção, você aprende como manipular a Beagle View e iniciar novas renderizações.
---

---

# Introdução
O BeagleView é a estrutura mais importante do Beagle Flutter. Este é o objeto responsável por manter a representação da view, processar o JSON e notificar cada listener quando algo mudar. Cada BeagleView tem um objeto chamado "renderer", que é usado para fazer alterações na árvore de UI atual.

O Beagle Navigator é responsável por criar BeagleViews. Cada página do navegador está associada a um BeagleWidget e cada BeagleWidget é instanciado pelo StackNavigator com um BeagleView.

# A interface BeagleView
A interface do BeagleView é composta pelos seguintes métodos:

- **onChange**: escuta as alterações no BeagleView. Usado internamente pelo BeagleWidget para se atualizar com a árvore de interface mais recente.
- **getRenderer**: retorna o Renderer, responsável por alterar a árvore de UI.
- **getTree**: retorna uma cópia da árvore de UI atual.
- **getNavigator**: retorna o navegador que criou este BeagleView.
- **onAction**: escuta as ações do Beagle acionadas no BeagleView. Usado internamente pelo gerenciador de ações.
- **destruir**: destrói o BeagleView, removendo todos os "listeners" ativos. Usado internamente pelo BeagleWidget para evitar chamadas para widgets que não existem mais.

De todos os métodos acima, três deles são especialmente interessantes para o desenvolvedor usando a biblioteca Beagle: `getRenderer`, `getNavigator` e `getTree`. Eles podem ser usados para alterar a UI de dentro do componente ou fazer a navegação para outra página.

Alguns exemplos de componentes padrão que usam a BeagleView (package beagle_components):


- **ListView**: A partir de um template e conjunto de dados, altera a árvore do Beagle UI para criar a interface final iterando sob o conjunto de dados e repetindo o template enquanto altera os valores da iteração atual.
- **LazyComponent**: Carrega o JSON da Url fornecida e altera o conteúdo dos componentes.

# Acessando a BeagleView a partir de um Widget
Para ter acesso a BeagleView responsável pela árvore atual, você pode fazer uso do terceiro parâmetro do método `buildForBeagle` do ComponentBuilder.

Veja o exemplo do ComponentBuilder do Widget padrão "LazyComponent";

```dart
class _LazyBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, view) {
    final initialState = element.getAttributeValue('initialState');
    return BeagleLazyComponent(
      path: element.getAttributeValue('path'),
      initialState: initialState == null ? null : BeagleUIElement(initialState),
      beagleId: element.getId(),
      view: view,
      child: children.isEmpty ? Container() : children[0],
    );
  }
}
```
Se não puder receber o BeagleView do ComponentBuilder, você pode também acessá-lo pelo BuildContext, contando que o contexto descenda de um BeagleWidget. Para isso, use o método utilitário `findAncestorBeagleView(context)`.

# Acessando a BeagleView de um action handler
Cada action handler recebe um BeagleView através do parâmetro `view`. Veja abaixo um exemplo de uma ação que adiciona um texto (parameter "text") a um nó de um componente (parameter "target", id do nó).

```dart
import 'package:beagle/beagle.dart';

final Map<String, ActionHandler> actions = {
  'custom:addText': ({required action, required element, required view, required context}) {
    final textNode = {'_beagleComponent_': 'beagle:text', text: action.getAttributeValue('text')};
    view.getRenderer().doFullRenderer(textNode, TreeUpdateMode.append, action.getAttributeValue('target'))
  },
  // ...
}
```

# Acessando a BeagleView a partir de um BuildContext

O BeagleView pode ser acessado a partir do BuildContext, desde que o contexto descenda de um BeagleWidget. A função que encontra o BeagleView dado um BuildContext é `findAncestorBeagleView(context)`.

# O renderer
A parte mais útil do BeagleView é seu "renderer". Um "renderer" é um objecto contendo as seguintes funções:

## doFullRender
Altera a árvore de interface adicionando ou substituindo uma parte da árvore atual. Aceita os seguintes parâmetros:

1. O nó (branch) a ser adicionado ou substituído (`BeagleUIElement`). Obrigatório.
2. A âncora, ou seja, o id (`String`) do nó onde o novo componente deve ser colocado. Caso não seja informado, o nó raiz é utilizado.
3. O modo de inserção do novo componente (`TreeUpdateMode`). Os modos disponíveis são:
- `replaceComponent`: este é o valor padrão, usado caso nenhum modo seja fornecido. O modo `replaceComponent` substitui o nó identificado no 2º parâmetro pela árvore fornecida no 1º parâmetro.
- `replace`: substitui todo o conjunto de filhos do nó identificado pelo 2º parâmetro.
- `append`: adiciona o novo nó ao final da lista de filhos do nó identificado pelo 2º parâmetro.
- `prepend`: adiciona o novo nó no início da lista de filhos do nó identificado pelo 2º parâmetro.

i.e. se apenas o primeiro parâmetro for passado, uma nova árvore será renderizada.

Veja abaixo como o `LazyComponent`usa este método:

```dart
Future<void> _fetchLazyView() async {
  try {
    final component = await beagle.viewClient.fetch(RemoteView(widget.path));
    widget.view.getRenderer().doFullRender(component, widget.beagleId, TreeUpdateMode.replace);
  } catch (err) {
    beagle.logger.error('BeagleLazyComponent: error: $err');
  }
}
```

No código acima, `beagle` é o BeagleService atual. Para ver como obter uma referência ao BeagleService atual, consulte [este artigo]({{< ref path="/flutter/other/beagle-service" lang="pt" >}}). `widget.view` é o BeagleView passado pelo ComponentBuilder do LazyComponent. `widget.beagleId` também foi fornecido pelo ComponentBuilder e é o id do nó na árvore da interface do Beagle.

Para verificar a implementação completa, visite nosso repositório github e procure pelo widget `BeagleLazyComponent`.

## doPartialRender
Faz o mesmo que `doFullRender`, mas em menos etapas. É um método mais rápido que assume que o nó já existe na árvore e apenas algumas propriedades foram modificadas. Isso é útil para ações como `setContext`, onde basta atualizar alguns valores, sem alterar a estrutura da árvore.

Se você não sabe qual método chamar, prefira usar `doFullRender`. Os parâmetros dos dois métodos são exatamente os mesmos.

## doTemplateRender
Este é o método de renderização mais complexo e raramente é necessário. É usado para criar componentes como ListView e GridView. Imagine que você precise renderizar vários nós de uma vez usando um "template", e esse "template" usa expressões que devem ser avaliadas com o valor da iteração atual. Fazer isso com os outros dois métodos seria muito ineficiente, então esse método recebe um template, um conjunto de valores e cria os nós de acordo, com um único evento de renderização.

O `doTemplateRender` aceita os seguintes parâmetros:

- `TemplateManager templateManager`: conjunto de "templates" a serem usados. É mais de um porque diferentes tipos de elementos no conjunto de dados podem ter "templates" diferentes. Obrigatório.
- `String âncora`: o id do nó onde a nova ramificação deve ser colocada. Obrigatório.
- `List<List<BeagleDataContext>> contexts`: matriz de contextos onde cada linha representa um item a ser renderizado de acordo com o templateManager. Obrigatório.
- `Função BeagleUIElement(BeagleUIElement, int)? componentManager`: Quando definido, o "template" resultante passa por essa função antes de ser finalmente renderizado. É uma chance de alterar propriedades como os ids. Opcional.
- `TreeUpdateMode? modo`: O modo para inserir os novos nós. O valor padrão é `replace`. Verifique todas as opções disponíveis na seção anterior. Opcional.

Para ver um exemplo de como este método pode ser usado, verifique a implementação do widget `DynamicList` no pacote `beagle_components`.
