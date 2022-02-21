---
  title: Visão Geral
  weight: 1
  description: >-
    Nesta seção, você encontra informações iniciais sobre o Beagle antes de se
    aprofundar no produto.
---

---

## O que é o Beagle?

Beagle é uma **ferramenta de código aberto** que ajuda os desenvolvedores a implementar **Server-Driven UI** que funcione em **múltiplas plataformas**.

Ao utilizar o Beagle, desenvolvedores podem:

{{% alert color="success" %}}
- **Rapidamente alterar o layout, dados, fluxo de navegação, ou até mesmo lógica**, apenas alterando código no backend.
- **Ser mais independentes das lojas mobile**, como App Store e Play Store, porque a maioria das mudanças não precisarão de uma atualização no aplicativo.
- **Ter mais confiança de que aplicações se comportarão de forma semelhante em plataformas diferentes**, pois o código será compartilhado e padronizado entre backend e frontend.
- **Testar facilmente novas hipóteses de negócio ou fazer correções em tempo real nas aplicações** para melhorar a experiência dos usuários e receber feedback.
{{% /alert %}}

## Como o Beagle funciona?

A melhor maneira de entender o Beagle é vê-lo em ação. Por isso, mostraremos **como construir uma tela simples com o Beagle**.

Comentaremos sobre cada pedaço da tela (texto, imagem, botão, e configurações de estilo), e deixaremos links para outras partes da documentação que entram em mais detalhes. Ao final dessa página, você se familiarizará com os recursos mais comuns do Beagle.

> Os links para outras páginas são apenas para informações mais detalhadas, não há necessidade de acessá-los imediatamente.

Dito isso, aqui está a tela que discutiremos:

<!-- json-playground:overview-simple-example.json
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "flex": {
      "flexDirection": "COLUMN",
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    },
    "size": {
      "height": {
        "value": 100,
        "type": "PERCENT"
      }
    },
    "backgroundColor": "#FFF"
  },
  "children": [
    {
      "_beagleComponent_": "beagle:image",
      "path": {
        "_beagleImagePath_": "remote",
        "url": "https://i.ibb.co/rvRN9kv/logo.png"
      },
      "style": {
        "size": {
          "width": {
            "value": 242,
            "type": "REAL"
          },
          "height": {
            "value": 225,
            "type": "REAL"
          }
        }
      }
    },
    {
      "_beagleComponent_": "beagle:text",
      "text": "Welcome to Beagle playground! \nUse the left panel to start coding!",
      "textColor": "#000",
      "alignment": "CENTER",
      "style": {
        "margin": {
          "all": {
            "value": 40,
            "type": "REAL"
          }
        }
      }
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Click here to show an Alert",
      "onPress": [
        {
          "_beagleAction_": "beagle:alert",
          "title": "My Title",
          "message": "Alert message"
        }
      ]
    }
  ]
}
-->

{{% playground file="overview-simple-example.json" language="pt" %}}

> Ao longo da documentação, você verá exemplos - como o acima - que usam uma ferramenta que fizemos chamada **Playground**. Ao usá-la, você pode:
>
> - Ver rapidamente como o Beagle funciona;
> - Editar o código à esquerda, executá-lo, e observar o resultado;
> - Selecionar plataformas diferentes para executar seu código.
>
> Para obter mais informações sobre esta ferramenta, consulte a [seção Playground]({{< ref path="playground/_index.md" >}}).

Como você pode ver ao lado esquerdo, estamos declarando nossa tela com JSON. Esse JSON seria o quê o backend fornece ao frontend por meio de uma resposta HTTP. O frontend, então, irá interpretá-lo e renderizá-lo corretamente na tela da plataforma (como no lado direito). O Beagle fornece bibliotecas no backend e frontend que lidam com esse fluxo para você.

Nos exemplos, utilizamos JSON porque é a maneira mais direta de se usar o Beagle. No entanto, o Beagle também possui uma "linguagem" (DSL em Kotlin) que você pode usar em seu backend para produzir esse mesmo JSON de uma maneira mais produtiva – com autocomplete e outros benefícios.

Verifique quais plataformas frontend o Beagle suporta na [seção de plataformas e versões](#plataformas-e-versões). Todas renderizam componentes **nativamente**, ou seja, se você usar o Beagle em um aplicativo móvel nativo Android ou iOS, as bibliotecas para essas plataformas usarão UIs nativas (Android Views e UIKit, respectivamente), e você pode até integrar seus próprios componentes nativos para funcionarem com o Beagle.

### Componentes

Agora, vamos dar uma olhada mais de perto nesse JSON, para que você possa entender melhor os recursos do Beagle. A primeira coisa a notar é a sua estrutura:

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {...},
  "children": [
    {
      "_beagleComponent_": "beagle:image",
      ...
    },
    {
      "_beagleComponent_": "beagle:text",
      ...
    },
    {
      "_beagleComponent_": "beagle:button",
      ...
    }
  ]
}
```

Para o Beagle, toda estrutura que contém o atributo `_beagleComponent_` será interpretada como um **Component**. O primeiro é um componente simples e comum chamado [Container]({{< ref path="api/components/layout/container.md" >}}), que permite *agrupar* componentes `children`. Ele possui 3 filhos: [Image]({{< ref path="api/components/ui/image/_index.md" >}}), [Text]({{< ref path="api/components/ui/text.md" >}}), e [Button]({{< ref path="api/components/ui/button.md" >}}). Cada um tem atributos diferentes para customizar sua renderização, e você pode ver todos os atributos disponíveis em suas respectivas documentações de API.

O componente *Image*, por exemplo, tem um atributo chamado `path` para saber onde estão os dados da imagem, que pode ser `remote` ou `local`.
Confira abaixo, nós usamos o path `remote` fornecendo uma `url` que o Beagle usará para criar uma requisição remota quando o componente for renderizado:

```json
{
  "_beagleComponent_": "beagle:image",
  "path": {
    "_beagleImagePath_": "remote",
    "url": "https://i.ibb.co/rvRN9kv/logo.png"
  },
  "style": {...}
}
```

> Você pode ter controle total da requisição acionada por esta imagem remota. Você só precisa configurar sua própria *Camada de Rede* como uma *Dependência do Beagle*. Para entender melhor como fazer isso, ou como configurar outras Dependências do Beagle, você pode verificar a seção de Customização de cada plataforma ([Android]({{< ref path="android/customization" >}}), [iOS]({{< ref path="ios/customization" >}}), [Flutter]({{< ref path="flutter/network/image-downloader" >}}), [Web]({{< ref path="web/commons" >}}).

O Beagle já vem com vários componentes úteis, você pode navegar por todos eles na [seção de componentes]({{< ref path = "api/components/_index.md" >}}). Há outros componentes, por exemplo, que possuem o atributo *children* (às vezes apenas *child*) como o [Screen]({{< ref path="api/components/layout/screen/_index.md" >}}) e o [ListView]({{< ref path="api/components/layout/listview.md" >}}), e eles são usados para **compor hierarquias de views** como o *Container*. Também é possível definir seus próprios componentes, chamados de Custom Components ([Android]({{< ref path="android/customization/widgets/overview" >}}), [iOS]({{< ref path="ios/customization/custom-widget/overview" >}}), [Flutter]({{< ref path="flutter/extensions/components" >}}), [Web]({{< ref path="web/commons/custom-component" >}}), e utilizá-los de forma muito similar a um componente que já vem no Beagle.

### Style

Vamos dar uma olhada mais de perto no atributo `style`, que descreve como posicionar componentes e seus filhos:

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "flex": {
      "flexDirection": "COLUMN",
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    },
    "size": {
      "height": {
        "value": 100,
        "type": "PERCENT"
      }
    },
    "backgroundColor": "#FFF"
  },
  "children": [...]
}
```

A maioria dos componentes tem esse atributo, que é responsável por uma feature importante do Beagle: **os desenvolvedores têm controle *via backend* no posicionamento de views**. Você pode experimentar isso alterando o atributo `flexDirection` para **`ROW`** no Playground, e você verá as mesmas views posicionadas horizontalmente. Em seu aplicativo real, você pode implantar essa mesma mudança no backend, e isso será refletido *imediatamente* no frontend – mesmo em plataformas móveis, você não precisa de atualizações nas lojas.

> Muitas ferramentas desenvolvidas internamente para Server Driven UI não permitem esse tipo de poder sobre o posicionamento de views, e isso já vem pronto com o Beagle.

No *Container* do exemplo, estamos usando 3 atributos de estilo: `flex`, `size` e `backgroundColor`. Existem outras opções também, você pode vê-las na [seção Style]({{< ref path="api/components/widget.md#style-attributes" >}}).

#### Flex

O atributo `flex` permite que você **use o mesmo Motor de Layout em diferentes plataformas**. Isso pode ser uma grande vantagem para o seu time, pois todas as plataformas posicionarão as views de acordo com as mesmas regras, e você não precisará "duplicar" a lógica de layout para cada plataforma.

- Se você tem experiência com desenvolvimento web, provavelmente já sabe como usar o `flex`, pois ele é usado como um [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) multiplataforma. Para obter esse resultado, o Beagle usa uma biblioteca chamada [Yoga](https://yogalayout.com), biblioteca multiplataform desenvolvida em C++ pelo Facebook, e também usada em outros projetos (por exemplo: React Native).

- Se você não estiver familiarizado com o Flexbox, verifique [a seção de posicionamento]({{< ref path="resources/components-positioning/_index.md" >}}) e a [documentação do Yoga](https://yogalayout.com/docs) para obter mais detalhes.

### Ações

Finalmente, vamos falar sobre *Actions*, uma maneira de adicionar *dinamismo em tempo de execução* a um componente Beagle. No exemplo, há uma ação dentro de um botão:

```json
{
  "_beagleComponent_": "beagle:button",
  "text": "Click here to show an Alert",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "title": "My Title",
      "message": "Alert message"
    }
  ]
}
```

O [componente Button]({{< ref path="api/components/ui/button.md" >}}) possui um atributo chamado `onPress` que pode receber uma lista de ações, as quais só serão executadas quando o botão for pressionado. Você pode ver todas as ações padrão do Beagle na [seção Actions]({{< ref path="api/actions/_index.md" >}}). Mas também é possível criar suas próprias ações (um processo semelhante a *Custom Componentes*), que chamamos de Custom Actions ([Android]({{< ref path="android/customization/action/overview" >}}), [iOS]({{< ref path="ios/customization/custom-actions/overview" >}}), [Flutter]({{< ref path="flutter/extensions/actions" >}}), [Web]({{< ref path="web/commons/customized-actions" >}}).

Esse exemplo usa uma [ação Alert]({{< ref path="api/actions/alert.md" >}}), o que resulta na exibição de um componente de alerta quando alguém toca o botão. Você pode fazer isso no *Playground* e ver você mesmo.

Além de mostrar um alerta, você também pode utilizar ações para:

- Naveguar para outra tela com uma [ação Navigate]({{< ref path="api/actions/navigate/_index.md" >}}).
- Enviar uma requisição http com uma [ação SendRequest]({{< ref path="api/actions/sendrequest.md" >}}).
- Adicionar novas views na hierarquia atual de views com uma [ação AddChildren]({{< ref path="api/actions/addchildren.md" >}}).

Além disso, as ações são essenciais para se **criar telas complexas e dinâmicas**. Você pode ver mais sobre este tópico na [seção "Como fazer comunicação entre componentes"]({{< ref path="/android/tutorials/how-to-make-communication-between-components.md" >}}).

---

## Conclusão e próximos passos

Depois de ver as partes mais essenciais do Beagle, você está pronto para mergulhar em tópicos mais avançados:

- Se quiser ver um exemplo mais complexo de um aplicativo que utiliza completamente o Beagle, você pode verificar [este repositório](https://github.com/ZupIT/beagle-adoption-demo). Ele possui um backend em Kotlin e frontends nativos para dispositivos móveis em Android e iOS.

- Se você deseja iniciar um novo projeto com o Beagle ou integrar o Beagle em seu aplicativo já existente, você pode seguir o guia de instalação de cada plataforma ([Android]({{< ref path="android/getting-started.md" >}}), [iOS]({{< ref path="ios/getting-started.md" >}}), [Flutter]({{< ref path="flutter/getting-started.md" >}}), [Web]({{< ref path="web/commons/creating-a-project-from-scratch.md" >}}).

- Se você quiser saber mais sobre uma API específica, use a [seção API]({{< ref path="api/_index.md" >}}).

- Se você não tiver certeza de como encontrar informações sobre um contexto específico, use o **campo de pesquisa no canto superior direito da tela** para pesquisar palavras em toda esta documentação.

### Visão geral da arquitetura do Beagle

![Uma visão geral da arquitetura do Beagle](/shared/beaglemobileback.png)

---

## Platformas e Versões

O Beagle possui diferentes bibliotecas/frameworks para cada plataforma suportada, na lista a seguir você pode ver e acessar as versões mais recentes:

{{% alert color="info" %}}
**Backend Kotlin:** [![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/framework)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)

**Mobile**:

- **Android:** [![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)
- **iOS:** [![badge](https://img.shields.io/cocoapods/v/Beagle)](https://cocoapods.org/pods/Beagle)
- **Flutter:** *Em desenvolvimento, confira mais informações [nesta pasta](https://github.com/ZupIT/beagle/tree/master/flutter)*
- **SwiftUI and Compose:** *vamos tentar suportá-los no futuro*

**Web:**

- **Angular:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-angular?logo=Angular)](https://www.npmjs.com/package/@zup-it/beagle-angular)
- **React:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-react?logo=React)](https://www.npmjs.com/package/@zup-it/beagle-react)
{{% /alert %}}
