---
title: "Analytics"
description: >
    Nesta seção, você encontra uma descrição de como preparar a aplicação para mapear informações para o analytics.
---
---
## O que é?

Como a maioria dos projetos usam alguma forma de marcação/tags para agrupar dados sobre o comportamento do usuário, o Beagle oferece uma ajuda para você conseguir essas informações.

É necessário configurar a sua plataforma para que o analytics funcione, segue abaixo os passos para a configuração: 

### Configuração 

* Selecione uma opção de cofiguração: 

{% tabs %}
{% tab title="ANDROID " %}
Para que o Analytics funcione no seu projeto **Android**, você precisa adicionar uma classe que implemente a interface do Analytics. Anote essa classe com o @BeagleComponent. 

```kotlin
@BeagleComponent
class SampleAnalytics: Analytics {

    override fun trackEventOnClick(event: ClickEvent) {
        //TODO: send click event to your tagging library
    }

    override fun trackEventOnScreenAppeared(event: ScreenEvent) {
        //TODO: send screen appeared event to your tagging library
    }

    override fun trackEventOnScreenDisappeared(event: ScreenEvent) {
        //TODO: send screen disappeared event to your tagging library 
    }

}
```
{% endtab %}

{% tab title="IOS " %}
Para que o Analytics funcione no seu projeto **iOS**, você precisa adicionar a classe que implemente o protocolo Analytics e passar a instanciá-la nas dependências do Beagle: 

```kotlin
import BeagleUI

class SampleAnalytics: Analytics {
    func trackEventOnScreenAppeared(_ event: AnalyticsScreen) {
        //TODO: send screen appeared event to your tagging library
    }
    
    func trackEventOnScreenDisappeared(_ event: AnalyticsScreen) {
        //TODO: send screen disappeared event to your tagging library
    }
    
    func trackEventOnClick(_ event: AnalyticsClick) {
        //TODO: send click event to your tagging library
    }
}
```

passando a implementação de Analytics para o Beagle Dependencies:

```text
let dependencies = BeagleDependencies()
dependencies.analytics = SampleAnalytics()
Beagle.dependencies = dependencies
```
{% endtab %}

{% tab title="WEB" %}
Para que o Analytics funcione no seu projeto **Web**, você precisa criar um handler para os eventos de clique e screen:

```text
import { ClickEvent, ScreenEvent } from '@zup-it/beagle-web/types'

const analyticsHandler = {
  trackEventOnClick: (event: ClickEvent) => {
    //handle click event
  },
  trackEventOnScreenAppeared: (event: ScreenEvent) => {
    //handle screen appeared event
  },
  trackEventOnScreenDisappeared: (event: ScreenEvent) => {
    //handle screen disappeared event
  }
}
```

Agora basta adicionar a propriedade analytics nos arquivos de configuração da biblioteca dependendo do framework utilizado:

**Para Angular**, abra o arquivo `beagle.module.ts` e altere como no exemplo:

```text
@BeagleModule({
  ...
  analytics: analyticsHandler
})
```

**Para React**, abra o arquivo de configuração da biblioteca e siga o exemplo:

```text
export default createBeagleUIService<any>({
    ...
    analytics: analyticsHandler
})
```
{% endtab %}
{% endtabs %}

A feature de marcação foi adicionada em apenas alguns componentes dos comportamentos mais usados. Segue abaixo a descrição e os exemplos:

### Opção Click 

Para marcação do **click event** de um widget, foi adicionado o botão e o Touchable Widgets da propriedade **clickAnalyticsEvent** com os seguintes atributos: 

* **Category**: essa variável especifica o tipo de objeto com qual teve alguma interação. É um atributo obrigatório.
* **Label**: permite que você forneça mais contexto sobre a interação. É um atributo opcional.
* **Value**: o valor de um evento. É um atributo opcional.

Segue abaixo um exemplo de click event da marcação de um botão: 

{% tabs %}
{% tab title="BACKEND - BFF" %}
```text
{
        "_beagleType_": "beagle:component:button",
        "text": "Test",
        "clickAnalyticsEvent": {
                "category": "Category",
                "label": "Label",
                "value": "Value"
        }
}
```
{% endtab %}

{% tab title="ANDROID" %}
```kotlin
Button(
    text = "Test", 
    clickAnalyticsEvent = ClickEvent(
        category = "Category",
        label = "Label",
        value = "value"
    )
)
```
{% endtab %}

{% tab title="IOS" %}
```swift
Button(
    text: "Test",
    clickAnalyticsEvent: .init(
        category: "Category",
        label: "Label",
        value: "Value"
    )
)
```
{% endtab %}
{% endtabs %}

### ‌Opção ScreenView 

Quando for marcar uma tela que aparece e desaparece, é preciso adicionar um componente com a propriedade **screenAnalyticsEvent** com o seguinte atributo: 

* **ScreenName**: nome da tela que irá aparecer. 

Segue abaixo um exemplo de evento de ScreenView com a tela marcada:

{% tabs %}
{% tab title="BACKEND - BFF" %}
```kotlin
{
        "_beagleType_": "beagle:component:screencomponent",
        "child": {
                "_beagleType_": "beagle:component:button",
                "text": "Test"
        },
        "screenAnalyticsEvent": {
                "screenName": "ScreenName"
        }
}
```
{% endtab %}

{% tab title="ANDROID" %}
```kotlin
Screen(
    child = Button("test"),
    screenAnalyticsEvent = ScreenEvent(
        screenName = "ScreenName"
    )
)
```
{% endtab %}

{% tab title="IOS" %}
```swift
Screen(
    child: Button(text: "Test"),
    screenAnalyticsEvent: : .init(
        screenName: "ScreenName"
    )
)
```
{% endtab %}
{% endtabs %}



