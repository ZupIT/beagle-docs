---
title: Como criar novas actions
weight: 222
description: "Nesta seção, você confere como criar Actions Customizadas para serem usadas em eventos mas sendo tratadas pela aplicação frontend"
---

---

### Criando uma ação do frontend

No Beagle, é possível criar uma [**ação**]({{< ref path="/api/actions" lang="pt" >}}) customizada a partir de uma `CustomAction`.

1. Você deve criar a classe que implementa uma `Action`. Essa mesma classe irá fazer a requisição da implementação do método `execute` e irá ditar as ações na `action`.
2. O atributo listado `msg` é o único parâmetro que deve ser declarado na classe construtora.

O exemplo abaixo mostra um ação com **`Alert`:**

```swift
class CustomAction: Action {
    let msg: String?

    init(msg: String? = nil) {
        self.msg = msg
    }

    func execute(controller: BeagleController, origin: UIView) {
        let alert = UIAlertController(
        title: nil,
        message: msg,
        preferredStyle: .alert
        )

        controller.present(alert, animated: true)
    }

}
```

3. Para registrar a ação, apenas crie o método com todo seu custom action e chame o método do Beagle `registerCustomAction` para fazer o registro;

4. Chame o método criado no BeagleConfig, ele pode ser visto nesse [**exemplo**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="pt" >}}):

```swift
private func registerCustomAction() {
   Beagle.registerCustomAction("CustomAction", actionType: CustomAction.self)
}
```

### Criando uma ação no backend

Para criar essa ação, o seu código deve estar assim:

```kotlin
@RegisterAction
data class CustomAction(
val msg: String? = null
) : Action
```

Veja abaixo um exemplo de uma Ação em um componente do tipo Button:

{{< tabs id="T93" >}}
{{% tab name="JSON" %}}

```kotlin
{
  "_beagleComponent_": "beagle:button",
  "text": "Beagle Button",
  "onPress": [
    {
      "_beagleAction_": "custom:customAction",
      "msg": "Eu sou um Toast."
    }
  ]
}
```

{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Button(
   text = "Beagle Button",
   onPress = listOf(CustomAction("Eu sou um Toast"))
)
```

{{% /tab %}}
{{< /tabs >}}
