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

A melhor maneira de entender o Beagle é vê-lo em ação. Aqui, mostraremos uma tela simples declarada via Beagle, contendo apenas textos, imagens e algumas configurações de estilo. No final desta seção, você estará familiarizado com os recursos mais comuns do Beagle.

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

{{% playground file="overview-simple-example.json" %}}

> Ao longo da documentação, você verá exemplos - como o acima - que usam uma ferramenta chamada **Playground**. Ao usá-la, você pode:
>
> - Ver rapidamente como o Beagle funciona;
> - Editar o código à esquerda e executá-lo para ver as mudanças visuais;
> - Selecionar plataformas diferentes para executar seu código.
> Para obter mais informações sobre esta ferramenta, consulte a [seção Playground]({{< ref path="playground/_index.md" >}}).

Como você pode ver ao lado esquerdo, estamos declarando nossa tela com JSON. Você pode supor que esse JSON é o que o seu backend fornece ao frontend por meio de uma resposta HTTP. O frontend irá interpretá-lo e renderizá-lo corretamente na tela da plataforma (como você pode ver ao lado direito). O Beagle fornece bibliotecas no backend e frontend para lidar completamente com esse fluxo de trabalho para você.

Só para deixar claro, neste exemplo, estamos usando JSON porque é a maneira mais direta de usar o Beagle, mas não é a mais produtiva e escalável. Na verdade, o Beagle tem uma "linguagem" (DSL em Kotlin) que você deve usar em seu backend para produzir esse mesmo JSON de uma maneira mais produtiva - com autocomplete e outros benefícios.

Verifique quais plataformas de frontend o Beagle suporta [na seção de plataformas e versões](#plataformas-e-versões). Todas renderizam componentes **nativamente**, por exemplo, se você usar o Beagle em um aplicativo móvel nativo Android ou iOS, as bibliotecas para essas plataformas usarão UIs nativas (Android Views e UIKit, respectivamente), e você pode até integrar seus próprios componentes nativos para trabalhar com o Beagle.

### Componentes

Agora, vamos dar uma olhada mais de perto nesse JSON, para que você possa entender melhor os recursos do Beagle. A primeira coisa a notar é a sua estrutura:

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {...},
  "children": [...]
}
```

Este é um **Component**, você pode ter certeza por causa do atributo `_beagleComponent_`. O Beagle vem com muitos componentes úteis (você pode navegar por eles [na seção de componentes]({{< ref path = "api/components/_index.md" >}})) e também pode definir seus próprios componentes, chamados de **Custom Components**, mas guarde isso para depois. O exemplo usa um componente simples e comum chamado [Container]({{< ref path = "api/components/layout/container.md" >}}) e permite que você *agrupe* os componentes `children`.

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

> Existem outros componentes com o atributo *children* (às vezes apenas *child*) como [Screen]({{< ref path="api/screen/_index.md" >}}) e [ListView]({{< ref path="api/components/layout/listview.md" >}}), e eles são usados para **compor hierarquias de views**.

Neste exemplo, existem 3 componentes dentro do *Container*: [Image]({{< ref path="api/components/ui/image/_index.md" >}}), [Text]({{< ref path="api/components/ui/text.md" >}}), e [Button]({{< ref path="api/components/ui/button.md" >}}). Cada um tem atributos diferentes para customizar sua renderização, e você pode ver todos os atributos disponíveis em suas respectivas documentações de API.

O componente *Image*, por exemplo, tem um atributo chamado `path` que pode receber caminhos `remote` ou `local` para os dados da imagem.
Confira abaixo, nós usamos a imagem `remote` fornecendo um `url` que o Beagle usará para fazer uma solicitação de rede quando o componente for renderizado:

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

> Você pode ter controle total da solicitação de rede acionada por esta imagem remota. Você só precisa configurar sua própria *Camada de Rede* como uma *Dependência do Beagle*. Para entender melhor como fazer isso, ou como configurar outras Dependências do Beagle, você pode verificar a [seção de Customização]({{< ref path="resources/customization/_index.md" >}}).

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

No *Container* do exemplo, estamos usando 3 atributos de estilo: `flex`, `size` e `backgroundColor`. Existem outras opções também, você pode vê-las na [seção Style]({{< ref path="api/widget.md#style-attributes" >}}).

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

O [componente Button]({{< ref path="api/components/ui/button.md" >}}) possui um atributo chamado `onPress` que pode receber uma lista de ações, as quais só serão executadas quando o botão for pressionado. Você pode ver todas as ações padrão do Beagle na [seção Actions]({{< ref path="api/actions/_index.md" >}}). Mas também é possível criar suas próprias ações (um processo semelhante a *Custom Componentes*), que chamamos de [Custom Actions]({{< ref path="resources/customization/_index.md" >}}).

Esse exemplo usa uma [ação Alert]({{< ref path="api/actions/alert.md" >}}), o que resulta na exibição de um componente de alerta quando alguém toca o botão. Você pode fazer isso no *Playground* e ver você mesmo.

Além de mostrar um alerta, você também pode utilizar ações para:

- Naveguar para outra tela com uma [ação Navigate]({{< ref path="api/actions/navigate/_index.md" >}}).
- Enviar uma requisição http com uma [ação SendRequest]({{< ref path="api/actions/sendrequest.md" >}}).
- Adicionar novas views na hierarquia atual de views com uma [ação AddChildren]({{< ref path="api/actions/addchildren.md" >}}).

Além disso, as ações são essenciais para se **criar telas complexas e dinâmicas**. Você pode ver mais sobre este tópico na [seção "Como fazer comunicação entre componentes"]({{< ref path="tutorials/how-to-make-communication-between-components.md" >}}).

---

## Conclusão e próximos passos

Depois de ver as partes mais essenciais do Beagle, você está pronto para mergulhar em tópicos mais avançados:

- Se quiser ver um exemplo mais complexo de um aplicativo que utiliza completamente o Beagle, você pode verificar [este repositório](https://github.com/ZupIT/beagle-adoption-demo). Ele possui um backend em Kotlin e frontends nativos para dispositivos móveis em Android e iOS.

- Se você deseja integrar o Beagle em seu aplicativo existente, você pode seguir o [guia de instalação]({{< ref path="get-started/installing-beagle/_index.md" >}}) de cada plataforma, e depois verificar a [seção de usando o Beagle]({{< ref path="get-started/using-beagle/_index.md" >}}).

- Se você deseja iniciar um novo projeto com o Beagle, você pode seguir o [guia de criação de um projeto do zero]({{< ref path="get-started/creating-a-project-from-scratch/_index.md" >}}).

- Se você quiser saber mais sobre uma API específica, use a [seção API]({{< ref path="api/_index.md" >}}).

- Se você não tiver certeza de como encontrar informações sobre um contexto específico, use o **campo de pesquisa no canto superior direito da tela** para pesquisar palavras em toda esta documentação.

### Visão geral da arquitetura do Beagle

![Uma visão geral da arquitetura do Beagle](/shared/beaglemobileback.png)

---

## Platformas e Versões

O Beagle possui diferentes bibliotecas/frameworks para cada plataforma suportada, na lista a seguir você pode ver e acessar as versões mais recentes:

{{% alert color="info" %}}
**Backend Kotlin:** [![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)

**Mobile**:

- **Android:** [![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)
- **iOS:** [![badge](https://img.shields.io/cocoapods/v/Beagle)](https://cocoapods.org/pods/Beagle)
- **React Native:** [![react native badge](https://img.shields.io/npm/v/@zup-it/beagle-react-native?logo=React)](https://www.npmjs.com/package/@zup-it/beagle-react-native)
- **Flutter:** *Em desenvolvimento, confira mais informações [nesta pasta](https://github.com/ZupIT/beagle/tree/master/flutter)*
- **SwiftUI and Compose:** *vamos tentar suportá-los no futuro*

**Web:**

- **Angular:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-angular?logo=Angular)](https://www.npmjs.com/package/@zup-it/beagle-angular)
- **React:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-react?logo=React)](https://www.npmjs.com/package/@zup-it/beagle-react)
{{% /alert %}}

### Entendendo os números da versão

A versão do Beagle segue o padrão de [versionamento semântico](https://semver.org/).

Entre plataformas, o último número (**patch**) costuma divergir, uma vez que alguns bugs ocorrem apenas em uma determinada plataforma. Assim, o seguinte exemplo é normal e esperado: ter a versão `1.0.0` no backend com `1.0.2` no Android, `1.0.0` no iOS, e `1.0.3` na web React.

A *documentação* apenas possui versões com números até o **minor**, por exemplo: `1.2`. No entanto, algumas definições de versões minor anteriores ainda podem estar presentes, mesmo que não sejam mais válidas. Se for o caso, tentaremos informar as versões em que essas definições ainda são válidas.
