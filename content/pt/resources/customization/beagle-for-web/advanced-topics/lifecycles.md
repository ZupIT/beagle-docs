---
title: Ciclos de vida (lifecycles)
weight: 186
---

---

Para entender melhor sobre renderização, recomendamos a leitura da seção [**estrutura de dados**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/data-structure" lang="pt" >}}).

Cada biblioteca do Beagle Web possui um processo definido de como busca, processa e renderiza a view. Há uma ordem que deve ser sempre respeitada e pontos de extensão (hooks), onde você pode executar seus códigos \(lifecycles\).

Veja o processo de renderização do Beagle Web:

![](/shared/beagle-view.png)

Os lifecycles \(ciclos de vida\) do Beagle, são:

- **BeforeStart**
- **BeforeViewSnapshot**
- **AfterViewSnapshot**
- **BeforeRender**

Eles podem ser usados como ganchos globais para o lifecycle:

```text
const config = {
  // ...
  lifecycles: {
    beforeStart: (payload) => {
      // ...
    },
    beforeViewSnapshot: (payload) => {
      // ...
    },
    afterViewSnapshot: (payload) => {
      // ...
    },
    beforeRender: (payload) => {
      // ...
    },
  }
}
```

Ou os hooks locais para os lifecycles na base do componente \(anotações\):

```text
// Attention: these won't work with production builds in Angular. Keep reading for more details.

@BeforeStart((textComponentPayload) => {
  // ...
})
@BeforeViewSnapshot((textComponentPayload) => {
  // ...
})
@AfterViewSnapshot((textComponentPayload) => {
  // ...
})
@BeforeRender((textComponentPayload) => {
  // ...
})
@Component({
  // ...
})
class Text {
  // ...
}
```

O exemplo acima não funciona com Angular quando for construído para produção, por causa do compilador. Para escrever um código para a leitura do compilador dele, você deve escolher duas opções:

1. Adicione o comentário`// @dynamic` antes de chamar a anotação:

```text
// @dynamic
@BeforeRender((textComponentPayload) => {
  // ...
})
@Component({
  // ...
})
class Text {
  // ...
}
```

2. Substitua a função da flecha para uma função comum e a exporte:

```text
export function beforeRender(textComponentPayload) {
  // ...
}

@BeforeRender(beforeRender)
@Component({
  // ...
})
class Text {
  // ...
}
```

Desde que as anotações não podem ser usadas por funções, se você tem algum componente funcional ou não quer usar as anotações, use normalmente as chamadas de funções:

```text
const Table = (props) => {
  // ...
}

BeforeStart((textComponentPayload) => {
  // ...
})(Table)
```

É importante notar que para o React, onde Higher Order Components \(HOC\) são comuns, o componente que recebe a anotação deve ser o final. Por isso, você deve aplicar ao nome do hoc `withTheme` ao seu componente:

```text
const MyComponent: FC = () => {
  // ...
}

// This is wrong, it has no effect!
// BeforeRender(myLifecycleFunction)(MyComponent)
// export default withTheme(MyComponent)

// You need to apply the decorator to the final component instead:
const MyComponentWithTheme = withTheme(MyComponent)
BeforeRender(myLifecycleFunction)(MyComponentWithTheme)
export default MyComponentWithTheme
```

O valor retornado do hook do lifecycle pode ser indefinido ou uma árvore. Se for uma árvore, o processo de renderização será descartar a árvore anterior e começar a trabalhar na árvore retornada pelo hook.

Para controlar o processo de renderização, além do lifecycles, o Beagle também oferece a Renderer API, que pode ser acessada por meio do `BeagleView.getRenderer()`. O BeagleView pode ser acessado via o componente BeagleRemoteView, por meio de atributos como `onCreateBeagleView` no Angular e o `viewRef` no React.

Outra forma de acessar o BeagleView é por meio do ViewContentManager API, que pode ser encontrado no `this.viewContentManager` no componente do Angular que extende o `BeagleComponent` ou no `props.viewContentManager` no React, um componente que implementa a interface do `BeagleComponent`.

## Processo e lifecycles

{{% alert color="info" %}}
Lifecycles deprecates the feature middlewares. Middlewares will still be supported at least until the next major version \(2.0.0\) and they will be interpreted as they were part of the global lifecycle `beforeViewSnapshot`.
{{% /alert %}}

Beagle possui um processo definido desde quando o payload é recebido até quando é renderizado na tela do browser. Há também os 'breakpoints' que é quando você faz seu processo, e isso é chamado de lifecycle.

### Processo para renderizar uma view

Veja os passos abaixo para renderizar a view:

1. Rode o hook global **beforeStart;**
2. Rode o hook **beforeStart** para cada componente;
3. Identifique os filhos de cada componente considerando a anotação "BeagleChildren";
4. Atribua um id para cada node que não tenha;
5. Remova qualquer propriedade do objeto que possua o valor null;
6. Se necessário, faça uma pré busca das views que serão acessadas em seguida;
7. Rode o hook global **beforeViewSnapshot**;
8. Rode o hook **beforeViewSnapshot** de cada componente;
9. Tire um captura de tela da árvore e reserve. A partir de agora, qualquer referência a a árvore renderizada, será da cópia dessa árvore.
10. Começe processando a cópia da captura de tela da view, o próximo lifecycle rodará em cima dessa cópia;
11. Rode o hook global **afterViewSnapshot**;
12. Rode o hook **afterViewSnapshot** para cada componente;
13. Deserialize as ações do Beagle em funções javascript;Deserialize beagle actions into javascript functions;
14. Avalie os contextos e expressões;
15. Interprete os estilos, convertendo o estilo do Beagle a sintaxe de estilo do css;
16. Rode o hook global **beforeRender**;
17. Rode o hook **beforeRender** para cada componente;
18. Passe a árvore do componente para a função de renderização. Essa função é diferente em Angular e React.

### Lifecycles

Existem quatro hooks de lifecycles, mas voê usará apenas dois: `beforeViewSnapshot` e `beforeRender`. A diferença entre eles é que o primeiro roda antes de qualquer expressão ou ação tenha sido avaliada e o segundo roda depois. É importante mencionar, quando você usar a **API Renderer**, `doFullRender` rodará ambos lifecycles, mas o `doPartialRender` rodará apenas o lifecycle `beforeRender.`

A regra simples para decidir se você uqer alterar a árvore via `beforeViewSnapshot` ou`beforeRender` é: se sua modificação não depende do resultado da expressão, use o `beforeViewSnapshot`, caso contrário, use o `beforeRender`.

O lifecycle hook recebe da árvore do Beagle e retorna nada ou uma árvore. Se for uma árvore, o processo de renderização discarta a árvore anterior e trabalha na retornada pelo hook.

- Lifecycle global: a árvore toda no Beagle.
- Componente lifecycle: a árvore significa uma branch correspondente ao componente.

Veja abaixo os detalhes de cada lifecycle:

### BeforeStart

Este lifecycle roda antes de tudo, aqui algumas modificações devem ser feitas antes que id seja atribuido ou qualquer propriedade filho seja computada. Se o seu payload não é tudo que o Beagle espera, aqui é onde você pode mudá-lo.

Desde que a tradução dos filhos ainda tenha sido rodada, os componentes decorados com `@BeforeStart` podem não rodar. Por exemplo, um texto dentro do componente `table` que tem seus filhos definidos pela propriedade `rows`. Nesse cenário o Beagle não sabe que rows representa os filhos de `table`, então ele ignoraria tudo dentro desse componente.

Esse é o único lifecycle onde novas nodes podem ser adicionadas a árvores que não tenha ids. Cada um deles, roda depois que os ids são atribuídos.

#### Exemplos de uso

#### **Custom ID generator**

Esse lifecycle pode ser usado para ignorar a geração de id padrão do Beagle e usar a sua própria. O Beagle apenas aceita ids aleatórios de nodes sem ids, você pode usar esse lifecycle para atribuir seu único ids para cada node:

```text
const config = {
  // ...
  lifecycles: {
    beforeStart: (tree) => {
      let next = 1

      function assignIds(data: any) {
        // if it's not a component or not a structure that can have a component inside, return
        if (!data || typeof data !== 'object') return
        // if it's an array, assign ids to the components inside
        if (Array.isArray(data)) return data.forEach(assignIds)
        // if it is a component node, assign an ID
        if (data._beagleComponent_) data.id = `myAppID-${next++}`
        // if it's an object, assign ids to the components inside
        const keys = Object.keys(data)
        keys.forEach(key => assignIds(data[key]))
      }

      assignIds(tree)
    }
  }
}
```

**Complex children calculation**

Um caso complexo seria a cálculo de `children`. Os children de uma tabela de componentes é a união de três propriedades `header`, `rows` e `footer`, mas isso não pode ser expressado via anotação `@BeagleChildren`, por isso esse lifecylce remove as propriedades do JSON original e cria a propriedade dos seus filhos, que seria a união das três propriedades.

```text
import { BeforeStart } from '@zup-it/beagle-web'

@BeforeStart((table) => {
  table.children = [header, ...rows, footer]
  delete table.header
  delete table.rows
  delete table.footer
})
class Table {
  // ...
}
```

O exemplo acima funciona apenas com componentes que possuem `children` como nome da propriedade que representa seus filhos. E se esse não for o caso, o lifecycle global pode ser usado.

### BeforeViewSnapshot

Esse roda logo antes do snapshot da view, é útil para alterar o payload, mas depois que os ids já fora atribuídos. Aqui é onde você deve modificar a árvore, já que os ids já estão atribuídos e a estrutura da árvore está pronta para ser atravessada.

{{% alert color="info" %}}
Tenha cuidado quando criar qualquer node nova, é preciso atribuir os ids a ela.
{{% /alert %}}

#### Exemplos de uso

### **Escrevendo um atalho para controlar os text-inputs**

O componente `beagle:textInput` pode ser controlado pelo contexto. Veja um exemplo, onde o valor de entrada do 'email' é controlado pela propriedade de contexto `email.adress` e a entrada de 'message' é controlado por `email.message`:

```text
{
  "_beagleComponent_": "beagle:container",
  "context": {
    "id": "email",
    "value": {
      "address": "",
      "message": ""
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "E-mail",
      "value": "@{email.address}",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "email",
          "path": "address",
          "value": "@{onChange.value}"
        }
      ]
    },
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "Message",
      "value": "@{email.message}",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "email",
          "path": "message",
          "value": "@{onChange.value}"
        }
      ]
    },
  ]
}
```

O ideal é criar um atalho para evitar repetições, por exemplo, quando um json traz a propriedade `model`, é criado uma estrutura automaticamente. No model, é preciso ser digitado qual valor de contexto irá controlar essa entrada, veja abaixo:

```text
{
  "_beagleComponent_": "beagle:container",
  "context": {
    "id": "email",
    "value": {
      "address": "",
      "message": ""
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "E-mail",
      "model": "email.address"
    },
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "Message",
      "model": "email.message"
    }
  ]
}
```

Para isso funcionar, é preciso escrever o lifecycle que irá transformar o `model` na estrutrua esperada:

```text
import { BeforeViewSnapshot } from '@zup-it/beagle-web'

@BeforeViewSnapshot((component) => {
  component.value = `@{${component.model}}`
  component.onChange = component.onChange || []
  const [contextId, ...path] = component.model.split('.')
  component.onChange.push({
    _beagleAction_: 'beagle:setContext',
    contextId,
    path: path ? path.join('.') : undefined,
    value: "@{onChange.value}"
  })
})
@Component({
  // ...
})
class TextInput {
  // ...
}
```

Com esse código, apesar de estar recebendo o model do backend, o payload processado pelo Beagle terá os valores esperados.

### **Cálculo complexo da children com o BeforeViewSnapshot**

O exemplo anterior poderia ter sido feito sem o risco de pular algum lifecycle do componente devido a propriedade children estar nomeada incorretamente. A única diferença é que você deve atribuir os ids:

```text
import { BeforeViewSnapshot, Tree, Component } from '@zup-it/beagle-web'

@BeforeStart((table) => {
  table.children = [header, ...rows, footer]
  delete table.header
  delete table.rows
  delete table.footer
  // assigns a random id for each component in the tree table.children
  Tree.forEach(table.children, Component.assignId)
})
class Table {
  // ...
}
```

### AfterViewSnapshot

Quando usar a API Renderer, há dois tipos de renderizar: renderização completa e renderização parcial. Os dois lifecycles anteriores funcionam na completa, enquanto esse e os próximos lifecycles funcionam nos dois.

As mudanças feitas aqui são válidas para a renderização atual. Qualquer atualização da view é feita por meio da árvore baseada na no snapshot da view, as modificações feitas nesse lifecycle não são permanentes e serão executadas a cada renderização. Se você tem uma propriedade `counter` com o valor 0 na árvore e no seu lifecycle é com o valor 1. Na quinta renderização completa, os valores de `counter` serão:

- BeforeStart: 5
- BeforeViewSnapshot: 5
- AfterViewSnapshot: 1
- BeforeRender: 1

Esse lifecycle pode ser usado para rodar o código necessário para que a view seja renderizada e não requer ações, contexto, expressões e estilos, pois já foram processados.

#### Exemplos de uso

Contextos são definidos, referenciados e manipulados no JSON da view. Mas, se você quiser acessar os dados da aplicação o Beagle oferece uma funcionalidade chamada [**Contexto Global**]({{< ref path="/api/context/global-context" lang="pt" >}}), que é possivel lidar com esse cenário. Se não tivesse essa função, o lifecycle AfterViewSnapshot também consegue lidar com isso.

Um exemplo, se você tem uma aplicação financeira e quer saber o balanço do usuário. Você deve garantir que cada haja a renderização de cada valor recente.

```text
{
  "_beagleComponent_": "container",
  "context": {
    "id": "user",
    "value": {
      "name": "",
      "balance": 0
    }
  },
  "children": [
    {
      "_beagleComponent_": "text",
      "text": "@{user.name}, your balance is $@{user.balance}"
    }
  ]
}
```

No JSON acima, o contexto `user` foi usado, onde começa com valores vazios e não há possibilidade de saber os valores corretos. Agora, substitua o valores do contexto por valores da sua aplicação, como abaixo:

```text
import Tree from '@zup-it/beagle-web'

function findContextById(tree, id) {
  const it = Tree.iterator(tree)
  let next = it.next()
  while (!next.done) {
    const component = next.value
    if (component.context && component.context.id === id) return component.context
    next = it.next()
  }
}

const config = {
  // ...
  lifecycles: {
    afterViewSnapshot: (payload) => {
      const userContext = findContextById(payload, 'user')
      const userData = getUserData() // this method gets the user data from the application
      userContext.name = userData.name
      userContext.balance = userData.balance
    }
  }
}
```

O código não pode ser feito antes do view ser snapshotted, porque o requisito é atualizar o valor em cada renderização. É importante mencionar que a ação `setContext` não funciona sob o contexto de `user`. Lifecycles podem ser usados, mas é recomendado usar o contexto global em casos de valores no Beagle view.

### BeforeRender

As alterações aqui são válidas apenas para a renderização atual e são executadas em todas as renderizações. A diferença entre BeforeRender e AfterViewSnapshot é a garantia de que todas as ações, expressões e estilos já foram processadas.

#### Exemplos de uso

Quando o backend decide expressar cores no seguintes formatos:`{ red: number, green: number, blue: number }`. Por exemplo, preto seria `{ red: 0, green: 0, blue: 0 }`. Isso não é válido para cores nos browsers, então é preciso converter o valor de cada propriedade de cor para validar o formato RGB. Veja abaixo a função:

```text
const colorProperties: ['color', 'backgroundColor', 'borderColor']

function fixColorCodes(componentPayload) {
  const style = componentPayload.style
  if (!style) return
  colorProperties.forEach((property) => {
    if (!style[property]) return
    style[property] = `rgb(${style[property].red}, ${style[property].green}, ${style[property].blue})`
  })
}
```

Agora, execute a função acima para cada componente na árvore. Se você quiser ter um comportamento dinâmico para a mudança de cor via contexto, veja o JSON abaixo:

```text
{
  "_beagleComponent_": "beagle:container",
  "context": {
    "id": "bgColor",
    "value": {
      "red": 255,
      "green": 255,
      "blue": 255
    },
  },
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "text": "My dynamically colored text",
      "style": {
        "backgroundColor": "@{bgColor}"
      }
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "red",
      "onPress": [
        {
          "_beagleAction_": "setContext",
          "contextId": "bgColor",
          "value": {
            "red": 255,
            "green": 0,
            "blue": 0
          }
        }
      ],
      "_beagleComponent_": "beagle:button",
      "text": "green",
      "onPress": [
        {
          "_beagleAction_": "setContext",
          "contextId": "bgColor",
          "value": {
            "red": 0,
            "green": 255,
            "blue": 0
          }
        }
      ],
      "_beagleComponent_": "beagle:button",
      "text": "blue",
      "onPress": [
        {
          "_beagleAction_": "setContext",
          "contextId": "bgColor",
          "value": {
            "red": 0,
            "green": 0,
            "blue": 255
          }
        }
      ]
    }
  ]
}
```

O texto começa com o fundo branco e quando o usuário apertar o botão, o fundo muda de cor. Se você chamar `fixColorCodes` antes do contexto ser validado, ele estará tentando executar sobre a string `@{bgColor}` ao invés do objeto `{ red: 255, green: 255, blue: 255 }` o que pode ocorrer um erro no tempo, já que eles não são propriedades da string.

BeforeStart, BeforeViewSnapshot and AfterViewSnapshot são executados antes de cada contexto ser avaliado, então tudo que pode ser afetado por ele deve ser executado no último lifecycle: BeforeRender:

```text
import { Tree } from '@zup-it/beagle-web'

const config = {
  // ...
  lifecycles: {
    // ...
    beforeRender: tree => Tree.forEach(tree, fixColorCodes),
  }
}
```
