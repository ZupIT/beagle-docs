---
title: Operadores de conversão
weight: 370
description: Nesta seção, você encontra a descrição dos operadores de conversão.'
---

---

## Quais são?

| Operadores | Exemplo | Ação  |
| :---: | :---: | :--- |
| int | "@{int\('2'\)}" | Operador que recebe uma entrada do tipo **double** ou **string** e converte para **int** se possível, retorna **null** caso contrário.  |
| double | "@{double\(1\)}" | Operador que recebe uma entrada do tipo **int** ou **string** e converte para **double** se possível, retorna **null** caso contrário.   |
| string | "@{string\(1.2\)}" | Operador que recebe uma entrada do tipo **int**, **double** or **bool** e converte para **string** se possível, retorna **null** caso contrário.   |

### Exemplo

Suponha que exista um operador [custom]({{< ref path="/api/operations/how-to-register-a-new-operation" lang="pt" >}}) `factorial` que recebe um parâmetro **int** e retorna o fatorial desse número. Podemos utilizar o operador `int` para converter o valor "5" do contexto com id `content`, veja abaixo:

{{< tabs id="T179" >}}
{{% tab name="JSON" %}}
<!-- json-playground:conversionOperator.json
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "@{factorial(int(content))}"
  } ],
  "context" : {
    "id" : "content",
    "value" : "5"
  }
}
-->
{{% playground file="conversionOperator.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(child = 
    Container(
        context = ContextData(id = "content", value = constant("5")),
        children = listOf(
            Text(
                expressionOf("@{factorial(int(content))}")
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
