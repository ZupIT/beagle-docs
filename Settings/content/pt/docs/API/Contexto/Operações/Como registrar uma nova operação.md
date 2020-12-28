---
title: Como registrar uma nova operação
weight: 375
description: 'Nesta seção, você encontra descrição completa das Custom Operations.'
---

---

Depois que você viu que é possível realizar[ **Operações**](/pt/docs/api/contexto/operações) do tipo soma, subtração, etc, utilizando o contexto, você também pode criar a sua própria operação na plataforma que você quiser: 

{{< tabs id="T165" >}}
{{% tab name="iOS" %}}
O registro de uma operação no iOS é feito através de um protocolo chamado `OperationsProvider`, veja abaixo:

```swift
public protocol OperationsProvider {
    func register(operationId: String, handler: @escaping OperationHandler)
    func evaluate(with operation: Operation, in view: UIView) -> DynamicObject
}
```

Para registrar sua operação customizada, você deve fazer duas coisas:

1. Prover um id para essa operação;
2. Prover a ela a ação que irá acontecer por meio de uma closure do tipo `OperationHandler.`

O `OperationHandler` é um `typealias` de um bloco de código que retorna `DynamicObject` por meio de parâmetros do tipo `[DynamicObject].`

```swift
public typealias OperationHandler = (_ parameters: [DynamicObject]) -> DynamicObject
```

Agora, para registrar a sua nova operação basta utilizar o `BeagleDependencies,` onde nele você acessa o `OperationsProvider`, no qual tem a função de registro.

```swift
let dependencies = BeagleDependencies()

dependencies.operationsProvider.register(operationId: "isValidCpf") { parameters in
    let anyParameters = parameters.map { $0.asAny() }
    if let intParameters = anyParameters.first as? Int {
        let stringParameters = String(intParameters)
        return .bool(stringParameters.isValidCPF)
    } else if let stringParameters = anyParameters.first as? String {
        return .bool(stringParameters.isValidCPF)
    }
    return nil
}
```

Pronto! Sua operação já pode ser utilizada!
{{% /tab %}}
{{< /tabs >}}

## Exemplo

Veja abaixo o exemplo utilizando a operação `isValidCpf` que foi criada acima, onde o texto do componente `Text` varia de acordo com o resultado da verificação se o CPF é válido ou não:

{{< tabs id="T166" >}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(title = "Custom operation", showBackButton = true),
    child = Container(
        context = ContextData("cpf", "00000000000"),
        children = listOf(
            Button("CPF atual: @{cpf}", onPress = listOf(
                SetContext(
                    contextId = "cpf",
                    value = "42249625000"
                )
            )),
            Text(text = "@{condition(isValidCpf(cpf), 'cpf is valid', 'cpf is not valid')}")
        )
    )
)
```
{{% /tab %}}

{{% tab name="JSON" %}}
```kotlin
{
  "_beagleComponent_" : "beagle:screenComponent",
  "navigationBar" : {
    "title" : "Custom operation",
    "showBackButton" : true
  },
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:button",
      "text" : "CPF atual: @{cpf}",
      "onPress" : [ {
        "_beagleAction_" : "beagle:setContext",
        "contextId" : "cpf",
        "value" : "42249625000"
      } ]
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{condition(isValidCpf(cpf), 'cpf is valid', 'cpf is not valid')}"
    } ],
    "context" : {
      "id" : "cpf",
      "value" : "00000000000"
    }
  }
}
```
{{% /tab %}}
{{< /tabs >}}

![](/customoperation.gif)
