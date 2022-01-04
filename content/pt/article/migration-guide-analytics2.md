---
title: "Guia descritivo para migração do Beagle Analytics 1.0 para o Beagle Analytics 2.0"
linkTitle: "Migrando para o Beagle Analytics 2"
weight: 1
description: >-
  Nesta seção descrevemos o Beagle Analytics de maneira geral e orientamos como fazer a migração da versão 1 para a 2 do Beagle Analytics.
---

---

## O que é o Beagle Analytics

O Analytics é uma funcionalidade do Beagle que faz o tagueamento de alguns eventos como o clique em um componente ou o carregamento de uma tela.

## Sobre o Analytics 1.0

Em sua primeira versão era necessário implementar um `ClickEvent` ou um `ScreenEvent` no Backend, como no exemplo abaixo:

```kotlin
ClickEvent(
   category = "category-button",
   label = "Label-button",
   value = "value-button"
)
```

```kotlin
ScreenEvent(
   screenName = "FALLBACK"
)
```

Esses eventos eram declarados em seus respectivos componentes no backend.
Por exemplo:

{{% alert color="success" %}}
O componente *`botão`* tinha uma propriedade chamada *`ClickAnalyticEvent`* que recebia o *`ClickEvent`*.
{{% /alert %}}

{{% alert color="success" %}}
Da mesma forma, a *`Screen`* tinha uma propriedade chamada *`ScreenAnalyticEvent`* que recebia um *`ScreenEvent`*.
{{% /alert %}}

Abaixo temos um exemplo do componente *`Botão`* declarado no backend:

```kotlin
Button(
   text = "Analytics 1",
   onPress = listOf(
       Alert("Analytics 1", "Tentando novamente!")
   ),
   clickAnalyticsEvent = ClickEvent(
       category = "category-button",
       label = "Label-button",
       value = "value-button"
   )
)
```

Uma vez declarados no Backend, os eventos *(com as informações listadas neles)* podem ser recuperados no Frontend a partir de uma classe customizada para manuseá-las.

- Essa classe estendia funcionalidades de uma classe interna do Beagle chamada *`Analytics`* que reunia as informações dos eventos em um objeto chamado *`event`*. Abaixo listamos a assinatura no Android para referência

```kotlin
@BeagleComponent
class SampleAnalytics: Analytics {
   override fun trackEventOnClick(event: ClickEvent) {
       //This code block will run when a ClickEvent is received
  Log.i("analytics1", "$event")
   }
   override fun trackEventOnScreenAppeared(event: ScreenEvent) {
       //This code block will run when a Screen is rendered
  Log.i("analytics1", "screenUp -> "+ event.screenName)
   }
   override fun trackEventOnScreenDisappeared(event: ScreenEvent) {
       //This code block will run when a Screen disappears
   }
}
```

{{% alert color="success" %}}
Dessa forma, sempre que um evento ocorre (como um ``click``, ou a apresentação ou desaparecimento de uma ``tela``) as funções descritas acima eram disparadas)
{{% /alert %}}

## Sobre o Analytics 2.0

O Analytics 2.0 melhorou a maneira como os eventos podem ser declarados no backend e recuperados no frontend, e mais, agora é possível habilitar o *`tracking`* para ações e propriedades sem ser necessário implementar o mapeamento de eventos no backend.

{{% alert color="success" %}}
Agora, basta configurar uma classe customizada no frontend que estenda suas funcionalidades de uma classe interna do Beagle chamada *`AnalycticsProvider`*. Ao criâ-la, você deve implementar algumas funções que vão receber os eventos e mapeá-los. As informações sobre os eventos ficam reunidas no objeto *``record``* que pode ser enviado para o seu serviço de analytics, como por exemplo o *Google Analytics Service*.
{{% /alert %}}

Abaixo, temos um exemplo da implementação no frontend Android

```kotlin
@BeagleComponent
class SampleAnalytics2:AnalyticsProvider {
   override fun getConfig(): AnalyticsConfig = object: AnalyticsConfig{
       override var actions: Map<String, List<String>>? = hashMapOf(
           "beagle:alert" to listOf("message")
       )
       override var enableScreenAnalytics: Boolean? = true
   }
   override fun createRecord(record: AnalyticsRecord) {
       Log.i("analytics2", record.toString())
   }
}
```

{{% alert color="success" %}}
Aqui, perceba que temos duas funções principais, a *`getConfig`* e o *``createRecord``*. A primeira é onde definimos quais ações e propriedades de cada ação que serão observadas. Sempre que a ação ocorrer, a segunda função, *``createRecord``*, vai exibir o registro criado.
{{% /alert %}}

A configuração geral sobre o que deve ou não gerar eventos de ``analytics`` fica no frontend, mas ainda é possível controlar os eventos a partir do backend.

Agora, a propriedade que recebe os eventos de analytics faz parte da ``ação``, e não mais do ``botão`` ou da `tela` como no Analytics 1. Essa propriedade se chama *`analytics`*

{{% alert color="success" %}}
A propriedade *`analytics`* recebe um elemento chamado *``ActionAnalyticsConfig``* que irá definir se a ação vai disparar eventos para o *``AnalyticsProvider``* lá no frontend.
{{% /alert %}}

Aqui temos um exemplo de ação que recebe configurações de analytics no backend

```kotlin
Alert(
   title = "Analytics 2",
   message = "Tentando novamente!",
   analytics = ActionAnalyticsConfig.Enabled(
       ActionAnalyticsProperties(
           attributes = listOf("message", "title")
       )
   )
)
```

Perceba que o *``ActionAnalyticsConfig``* está definido como *``.Enabled``*, ou seja, isso faz com que o frontend capture o evento que dispara informações e demonstre-o

O ActionAnalyticsConfig trás algumas propriedades consigo, e aqui listamos somente os *``atributos``* da ação da qual queremos informações, mas existe uma outra propriedade chamada *``AdditionalEntries``* que recebe informações extras, que podemos enviar com as demais informações no *``ActionAnalyticsConfig``*.

{{% alert color="warning" %}}
NOTA: Sobre a *``Screen``* (tela): Esses eventos são disparados automaticamente quando a tela aparece ou desaparece, e podem ser acessados a partir do objeto *``record``*
{{% /alert %}}

## Migrando do Analytics 1 para o Analytics 2

Vamos começar pelo backend. Embora não seja mais necessário criar eventos no backend, a funcionalidade está disponível para o Analytics 2 e o controle dos eventos pode ser realizado a partir do backend também.

Todas as informações, antes implementandas em atributos específicos na classe *``clickEvent``*, agora são enviadas automaticamente para o frontend, quando implementamos o *``ActionAnalyticsConfig``*.

1. Apague a implementação do *``ClickEvent``* ou *``ScreenEvent``*
2. Adicione o código *``ActionAnalyticsConfig.Enabled``* na propriedade *``analytics``* da *ação* que quer mapear.
3. Abaixo listamos o antes e depois de um *`botão`* com exemplos das funcionalidades de analytics no backend e as informações que serão recuperadas no frontend *(no exemplo abaixo listamos as informações em cada ``objeto`` no formato de string)*:

{{% alert color="warning" %}}

### Analytics 1

```kotlin
Button(
  text = "Analytics 1",
  onPress = listOf(
    Alert("Analytics 1", "Tentando novamente!")
  ),
  clickAnalyticsEvent = ClickEvent(
    category = "category-button",
    label = "Label-button",
    value = "value-button"
  )
)
```

**Info recebida no front:**
*ClickEvent(category=category-button,
label=Label-button,
value=value-button)*
{{% /alert %}}

{{% alert color="success" %}}

### Analytics 2

```kotlin
Button(
text = "Analytics 2",
onPress = listOf(
  Alert(
    title = "Analytics 2",
    message = "Tentando novamente!",
    analytics = ActionAnalyticsConfig.Enabled(
      ActionAnalyticsProperties(
        attributes = listOf("message", "title")
      )
 ...
)
```

**Info recebida no front:**
*AnalyticsRecord(
type=action,
platform=android,
attributes={message=Tentando novamente!, title=Analytics 2},
component={
id=6,
position={x=384.0, y=1329.0},
type=beagle:button},
beagleAction=beagle:alert,
event=onPress,
additionalEntries=null,
timestamp=1641235066016,
screen=/fallback-screen)*

**NOTA:** A `id` do componente (*``botão``*) que ativa a ação foi definida automaticamente pelo sistema, mas podemos definí-la a partir da função `setId` no backend
{{% /alert %}}

4. Agora no frontend, basta apagar a classe customizada para o analytics 1 e implementar uma nova classe para o analytics 2.
5. Siga o exemplo de classe do analytics 2 listado nesse guia para Android e teste com a ação *``Alert``*. 
6. Para outras plataformas (WEB, iOS), acesse os exemplos listados em nossa [documentação](/api/analytics/) para implementar o *``AnalysticsConfig``*.
7. Lembre-se de registrar as ações que quer acessar mesmo quando o backend não especificar nada na função *``getConfig()``* do *``AnalyticsProvider``*
8. Agora que o *``AnalyticsProvider``* foi implementado basta rodar sua aplicação e os eventos serão recebidos no frontend.

{{% alert color="warning" %}}
É importante ressaltar que as duas formas funcionam juntas e uma não interfere na outra até a versão 1.10 do Beagle. O Analytics 1.0 foi removido do Beagle na versão 2.0 e agora a única interface disponível no Framework é o Analytics 2 (chamado agora apenas de Analytics).
{{% /alert %}}
