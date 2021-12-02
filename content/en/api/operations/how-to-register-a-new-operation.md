---
title: How to register a new operation
weight: 350
description: You will find here how to register a new operation.
---

---

After you've seen it is possible to make addition, subtraction and other operations using context, you can also create your own operation in the platform you want:  

{{< tabs id="T147" >}}
{{% tab name="iOS" %}}
</br>
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

{{% tab name="Android" %}}
</br>
You must the `Operation` interface in order to register a new operation on Android. The example below shows this interface signature


```java
interface Operation {
    fun execute(vararg params: OperationType?): OperationType
}
```
The following class shows the OperationType class details. This class holds the return types supported on Beagle.


```java 
sealed class OperationType(open val value: Any?) {
    data class TypeString(override val value: String) : OperationType(value)
    data class TypeBoolean(override val value: Boolean) : OperationType(value)
    data class TypeNumber(override val value: Number) : OperationType(value)
    data class TypeJsonArray(override val value: JSONArray) : OperationType(value)
    data class TypeJsonObject(override val value: JSONObject) : OperationType(value)
    object Null : OperationType(null)
}
```

To register a custom operation you must: 

1. Create a class and enter the name you want.
2. Place an annotation `@RegisterOperation (name =" name-your-operation ")` over the class name.
3. Implement the Operation interface.

The following example shows a custom operation that validates a CPF register number 

```java
@RegisterOperation(name = "isValidCpf")
class IsValidCPFOperation : Operation {
    override fun execute(vararg params: OperationType?): OperationType {
        val cpf = params[0]?.value as String
        return OperationType.TypeBoolean(isCPF(cpf))
    }

    @Suppress("ReturnCount")
    private fun isCPF(document: String): Boolean {
        if (TextUtils.isEmpty(document)) return false

        val numbers = arrayListOf<Int>()

        document.filter { it.isDigit() }.forEach {
            numbers.add(it.toString().toInt())
        }

        if (numbers.size != 11) return false

        for (n in 0..9) {
            val digits = arrayListOf<Int>()
            repeat((0..10).count()) { _ -> digits.add(n) }
            if (numbers == digits) return false
        }

        val dv1 = ((0..8).sumBy { (it + 1) * numbers[it] }).rem(11).let {
            if (it >= 10) 0 else it
        }

        val dv2 = ((0..8).sumBy { it * numbers[it] }.let { (it + (dv1 * 9)).rem(11) }).let {
            if (it >= 10) 0 else it
        }

        return numbers[9] == dv1 && numbers[10] == dv2
    }
}
```
Done! Your operation can be used now! 

{{% /tab %}}

{{% tab name="Web" %}}
</br>
Registering custom operations in web apps is pretty straight forward

You first have to create a function receiving any parameters you need and with the logic for your use case.

Let's see an example on how we would create an action to validate a CPF register number, re-using a validation library.

```
import { createBeagleUIService } from '@zup-it/beagle-react'
import { cpf } from 'cpf-cnpj-validator';


function myCustomOperation(cpfInput: string): boolean {
  if (!cpfInput) return false
  return cpf.isValid(cpfInput)
}


export default createBeagleUIService({
  baseUrl: '',
  customOperations: {
    isValidCpf: myCustomOperation
  },
  components: {},
})

```

It is as simple as that, the two highlights in the previous code are:
  1. Create a custom function receiving the same parameters you intend to send from the JSON
  2. Add to your Beagle Service initializer the ``customOperations`` key which will receive a map of ``key:value`` pairs where the key is the name of the custom action and the value is the function you just created.


Done! Your operation can be used now!

{{% /tab %}}
{{< /tabs >}}

## Example

See below an example using the `isvalidCpf` operation that was created above, where the text component `Text` will vary according the verification result, if the CPF is valid or not: 

{{< tabs id="T148" >}}
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

{{< figure src="/shared/customoperation.gif" width="250">}}


