---
title: How to register a new operation
weight: 350
description: You will find here how to register a new operation.
---

---

After you've seen it is possible to make addition, subtraction and other operations using context, you can also create your own operation in the platform you want:  

{{< tabs id="T147" >}}
{{% tab name="iOS" %}}
The registration of an operation on iOS is through `OperationsProvider`protocol, see below: 

```swift
public protocol OperationsProvider {
    func register(operationId: String, handler: @escaping OperationHandler)
    func evaluate(with operation: Operation, in view: UIView) -> DynamicObject
}
```

To register your customized operation, you have to do two things: 

1. Provide an id for this operation; 
2. Provide to it an action that it will happen through a closure of the type `OperationHandler.`

The `OperationHandler` is a `typealias` of a code block that returns  `DynamicObject` through a parameter of `[DynamicObject]` type.

```swift
public typealias OperationHandler = (_ parameters: [DynamicObject]) -> DynamicObject
```

Now, to register your new operation you have to use `BeagleDependencies,` where you can access the  `OperationsProvider`, which has the register function. 

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

Done! Your operation can be used now! 
{{% /tab %}}
{{< /tabs >}}

## Example

See below an example using the `isvalidCpf` operation that was created above, where the text component `Text` will vary according the verification result, if the CPF is valid or not: 

{{< tabs id="T148" >}}
{{% tab name="JSON" %}}
<!-- json-playground:customOperation.json
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
-->
{{% playground file="customOperation.json" language="en" %}}
{{% /tab %}}
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
{{< /tabs >}}

![](/customoperation.gif)
