---
title: Como registrar uma nova operação
weight: 375
description: 'Nesta seção, você encontra descrição completa das Custom Operations.'
---

---

Depois que você viu que é possível realizar[ **Operações**](/pt/api/contexto/operações) do tipo soma, subtração, etc, utilizando o contexto, você também pode criar a sua própria operação na plataforma que você quiser: 

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

{{% tab name="Android" %}}

O registro de uma operação no android é feito através de uma interface chamada Operation, veja abaixo:

```java
interface Operation {
    fun execute(vararg params: OperationType?): OperationType
}
```
No parametro do método execute temos um atributo do tipo `OperationType`, esse atributo retorna o tipo da operação.

Segue abaixo a sealed class OperationType com os tipos de retorno que beagle suporta.

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

Para registrar sua operação customizada, você deve seguir três passos:

1. Crie uma classe e coloque o nome que desejar.
2. Coloque anotação `@RegisterOperation(name = "name-your-operation")` sobre o nome da classe.
3. Implemente a interface Operation.

Segue abaixo um exemplo de operação customizada, no caso criamos uma operação de validação de cpf.

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
Pronto! Sua operação já pode ser utilizada!

{{% /tab %}}
{{< /tabs >}}

## Exemplo

Veja abaixo o exemplo utilizando a operação `isValidCpf` que foi criada acima, onde o texto do componente `Text` varia de acordo com o resultado da verificação se o CPF é válido ou não:

{{< tabs id="T166" >}}
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
{{% playground file="customOperation.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
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
