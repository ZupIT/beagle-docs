---
title: Analytics 2.0
weight: 209
description: "Aqui, você encontrará mais informações sobre as funcionalidades do Analytics."
---

---

## Introdução

Analytics é uma funcionalidade poderosa e simples que o Beagle oferece, ela dá aos desenvolvedores controle sobre o rastreamento de ações e navegação em seu aplicativo e pode ser usada em associação com qualquer serviço analítico que desejem.

Nos próximos tópicos, você aprenderá como habilitar o reporte de eventos e configurá-lo de acordo com as suas necessidades.

## Analytics provider

A primeira coisa que precisamos para habilitar a funcionalidade Analytics é criar um provedor que implemente a interface abaixo

| **Propriedade**  | Definição  | Tipo  |
| :---  |  :----  |  :---  |
| **getConfig** | O Beagle usa essa configuração para saber como lidar com eventos analíticos e chama esse método sempre que um evento acontece, a fim de acessar a configuração analítica global mais atualizada. Esta função deve sempre retornar um [AnalyticsConfig]({{< ref "#configuracao-do-analytics-com-payload" >}}). Se você estiver carregando sua configuração de forma assíncrona, é recomendado que você passe uma configuração que [bloqueie todos os registros]({{< ref "#desativando-a-análise-de-payload-de-configuração" >}}) até que as configurações remotas estejam totalmente carregadas | `Method` |
| **createRecord**  | O Beagle chamará esse método para fornecer a você um registro (`AnalyticsRecord`) gerado para um evento. Se você não quiser enviar uma solicitação para cada análise gerada pelo Beagle, é uma boa ideia implementar um mecanismo de lote dentro desta função.  | `Method` |

Agora, escolha a plataforma com a qual você está usando o Beagle para ver exemplos de como configurar o provedor em seu aplicativo

{{< tabs >}}

{{% tab name="Web" %}}


Abra seu arquivo de configuração de serviço Beagle e crie uma função implementando a interface `AnalyticsProvider` como a seguinte:

```ts
...

import { AnalyticsProvider, AnalyticsConfig, AnalyticsRecord } from '@zup-it/beagle-web'

function analytics(): AnalyticsProvider {

  function getConfig() {
    return {
        enableScreenAnalytics: true,
        actions: {
          'beagle:setContext': ['contextId', 'path', 'value']
        }
      }
  }

  function createRecord(record: AnalyticsRecord) {
    console.log('Record', record)
  }

  return {
    getConfig,
    createRecord
  }
}

export default createBeagleUIService<any>({
  ...
  analyticsProvider: analytics()
})

```

{{% /tab %}}

{{% tab name="Android" %}}

Crie uma classe com a anotação `@BeagleComponent` e implemente a interface `AnalyticsProvider`.

```kotlin
@BeagleComponent
class AnalyticsProviderImpl : AnalyticsProvider{
    override fun getConfig(): AnalyticsConfig? = object : AnalyticsConfig{
        override var enableScreenAnalytics: Boolean? = true

        override var actions: Map<String, List<String>>? = hashMapOf(
            "beagle:setContext" to listOf("contextId", "path", "value")
        )
    }

    override fun createRecord(record: AnalyticsRecord) {
        Log.d("analytics", record)
    }

}
```

{{% /tab %}}

{{% tab name="iOS" %}}

1) Declare sua implementação AnalyticsProvider em seu projeto:

```swift
import Beagle

class MyAnalyticsProvider: AnalyticsProvider {

    func getConfig() -> AnalyticsConfig? {
        return AnalyticsConfig(
            enableScreenAnalytics: true,
            actions: [
                "beagle:setcontext": ["contextId", "path", "value"]
            ]
        )
    }

    func createRecord(_ record: AnalyticsRecord) {
        // here you could just send `record` to your analytics backend
        print(record)
    }

}
```

2) Defina o provedor declarado como uma dependência do Beagle. Você provavelmente definirá todas as dependências do Beagle no mesmo arquivo, portanto, seu código deve ser semelhante a este:

```swift
let dependencies = BeagleDependencies()
...

dependencies.analyticsProvider = MyAnalyticsProvider()

...

Beagle.dependencies = dependencies
```

{{% /tab %}}

{{< /tabs >}}

{{% alert color="warning" %}}
 Observação: Normalmente, o método "getConfig" faria uma solicitação HTTP para obter a configuração JSON remotamente, mas para o propósito deste exemplo, criamos um objeto local retornando sua estrutura esperada.
{{% /alert %}}

## Como funciona ?

Assim que terminar de configurar o AnalyticsProvider, você estará pronto para começar a definir os eventos que deseja reportar em seu aplicativo, há duas maneiras de fazer isso: `ActionAnalyticsConfig` e` AnalyticsConfig`.

Você pode usar as duas maneiras de configuração ou escolher aquele que melhor se adapta à sua solução. Um ponto importante a ser observado aqui é que o `ActionAnalyticsConfig` tem prioridade sobre o` AnalyticsConfig`, o que significa que se você configurar o mesmo evento de reporte para ambos o `ActionAnalyticsConfig` será usado.

veja a seguir mais detalhes sobre as duas maneiras de mapear as análises

{{% alert color="warning" %}}
 Observação: para usar o `ActionAnalyticsConfig`, sua ação, no Android, deve implementar a interface` AnalyticsAction` em vez de `Action` e, no iOS, sua ação deve implementar o protocolo` AnalyticsAction` em vez de `Action`

{{% /alert %}}

### Configuração de ação

A maneira mais fácil de habilitar ou desabilitar o rastreamento com o Beagle é por meio do BFF, você pode simplesmente habilitar quais ações deseja reportar adicionando a elas a propriedade ``analytics``.

#### Desativando o rastreamento

Para desativar a análise, primeiro escolhemos a ação e adicionamos a propriedade analytics a ela com um valor false, o resultado em JSON seria algo como o seguinte:

```json
{
  "_beagleComponent_": "beagle:button",
  "text": "Button with analytics",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushStack",
      "analytics": false
    }
  ]
}
```

Agora veja um exemplo declarativo:

{{< tabs >}}
{{% tab name="Kotlin" %}}

```kotlin
Button(
    "Button with analytics",
    onPress = listOf(
        Navigate.PushStack(
            route = Route.Remote(url = "/screen-2"),
            analytics = ActionAnalyticsConfig.Disabled()
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

A propriedade analytics, entretanto, aceita dois tipos de valores, pode ser um booleano que quando definido como falso desabilita o reporte para aquela ação (veja o exemplo anterior) ou pode ser uma estrutura que habilita o rastreamento, veja abaixo:

#### Habilitando análises

Quando ativado, o analytics pode ser configurado para enviar dados extras e detalhados sobre o componente e a ação, para fazer isso, o JSON final deve ser como do exemplo abaixo:

```json
{
  "_beagleComponent_": "beagle:button",
  "text": "Button with analytics",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushStack",
      "analytics": {
        "additionalEntries": {
          "extra": "Extra information"
        },
        "attributes": [
          "route"
        ]
      },
      "route": {
        "url": "/myRoute.json"
      }
    }
  ]
}
```


Esta configuração permite um melhor manuseio de cada uma das ações diretamente do payload de cada tela. No exemplo anterior, passamos dentro da chave analytics duas novas propriedades:

o `additionalEntries` que pode ser qualquer coisa que você precise e no nosso caso estamos passando um texto simples;

a propriedade `attributes` tem que ser uma das propriedades da ação, em nosso exemplo, estamos passando o valor `route` que corresponde ao atributo da nossa ação que será utilizada no registro do analytics.

A seguir, você aprenderá como gerar esse mesmo exemplo.

### ActionAnalyticsConfig e ActionAnalyticsProperties

O `ActionAnalyticsConfig` é uma classe que além do método disabled que mostramos antes, também oferece um método enabled que aceita um parâmetro do tipo` ActionAnalyticsProperties` detalhado a seguir

<!-- **ActionAnalyticsProperties** -->

| **Propriedade**           | Definição                                                     | Tipo             |
| :--------------------- | :------------------------------------------------------------- | :--------------- |
| **attributes**         | Lista de atributos a serem expostos à interface analytics    | `Array <string>`   |
| **additionalEntries**  | Quaisquer dados adicionais que você queira enviar junto com a ação | `Map<string, any>` |


Usando esta interface, você pode controlar individualmente as ações e também as propriedades da ação que deseja enviar para o método `createRecord`
do [`AnalyticsProvider`]({{< ref "#analytics-provider" >}}). No próximo exemplo iremos mostrar como utilizar o `ActionAnalyticsConfig`.

{{< tabs >}}
{{% tab name="Kotlin" %}}

```kotlin
Button(
    "Button with analytics",
    onPress = listOf(
        Navigate.PushStack(
            analytics = ActionAnalyticsConfig.Enabled(
                ActionAnalyticsProperties(
                    attributes = listOf("route"),
                    additionalEntries = hashMapOf("extra" to "Extra information")
                )
            ),
            route = Route.Remote(url = "/myRoute.json")
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

### Configuração do Analytics com payload

Outra forma de usar a funcionalidade Analytics é com um payload de configuração que contém as ações ou eventos de navegação a serem reportados. Essa configuração geralmente será solicitada e retornada no método [`getConfig`]({{< ref "#analytics-provider" >}}).

A biblioteca oferece uma interface API para nos guiar pela configuração, veja abaixo.

**AnalyticsConfig**

| **Propriedade**                  | Definição                          | Type |
| :-----------                  | :---------------------------------- | :-------- |
| **enableScreenAnalytics**     | O padrão é `true`, quando `false`, nenhuma análise será gerada por este sistema quando uma tela for carregada  | `boolean` |
| **actions**  | Um mapa de ações que permite criar registros no analytics. Por padrão, nenhuma ação cria registros. Neste mapa, cada chave é uma _beagleAction_, enquanto os valores são a vetores de strings. O valor indica quais propriedades da ação dada serão reportadas  | `Map<String, Array<String>>` |

Veja abaixo um exemplo de formato de payload esperado

```js
{
  enableScreenAnalytics: true,
  actions: {'beagle:pushView': ['route.screen'], 'beagle:alert': ['']}
}
```

Observe no exemplo anterior que habilitamos a análise para eventos de tela, o que significa que toda vez que ocorrer uma ação de navegação, o método de reporte será chamado para criar um registro para a rota atual com seus dados e identificador. O segundo atributo é uma estrutura de mapa de [**Beagle actions**]({{< ref "/api/actions/" >}}) e para cada ação um Array de strings, podemos então controlar as ações que queremos reportadas e quais atributos dessa ações devem ser repassados ​​para criar seus registros.


#### Desabilitando a genração de eventos pelo payload

O método `getConfig` sempre espera que você retorne um` AnalyticsConfig`, mas às vezes esse método pode demorar um pouco mais se você estiver carregando o payload de um servidor externo. Neste caso, recomendamos que você desabilite todos os registros analytics até que uma configuração válida e mais confiável seja carregada, veja a seguir como desabilitar todos os registros analytics

```js
{
  enableScreenAnalytics: false,
  actions: {}
}
```

### Analytics Record

Depois de configurar seu provedor, toda vez que ocorre um evento no Beagle, o método [`createRecord`]({{< ref "#analytics-provider" >}}) é chamado e dá acesso a um parâmetro do tipo `AnalyticsRecord` .

Existem 2 tipos de `AnalyticsRecord`: *Screen* para eventos de navegação e *Action* para eventos acionados por ação

#### Action

| **Propriedade**         | Definição                                                     | tipo             |
| :--------------------| :------------------------------------------------------------- | :--------------- |
| **type**             | O tipo do registro, neste caso 'action'  | `string`          |
| **platform**         | A plataforma a partir da qual o evento foi gerado, por exemplo: WEB Angular, Android, iOS      |   `string`   |
| **beagleAction**     | A ação do Beagle que gerou o registro  | `string`          |
| **component**        | O componente Beagle que gerou o registro   | `Object`   |
| **event**            | O nome do evento que gerou o registro, por exemplo: onPress | `string`          |
| **screen**           | A tela à qual o componente pertence   | `string`   |
| **timestamp**        | A representação unix da hora em que o registro foi criado    |  [`unix time`](https://www.unixtimestamp.com/)    |

#### Screen

| **Propriedade**         | Definição                                                     | tipo             |
| :--------------------| :------------------------------------------------------------- | :--------------- |
| **type**             | O tipo do registro, neste caso 'screen' | `string`          |
| **platform**         | A plataforma a partir da qual o evento foi gerado, por exemplo: WEB Angular, Android, iOS      |  `string`   |
| **route**     | A rota ou identificador de tela  | `string`          |
| **timestamp**        | A representação unix da hora em que o registro foi criado    |  [`unix time`](https://www.unixtimestamp.com/)   |
