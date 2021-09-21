---
title: Operadores lógicos
weight: 365
description: 'Nesta seção, você encontra descrição completa dos operadores lógicos.'
---

---

## Quais são? 

Veja abaixo quais são os operadores lógicos:
| Operadores | Ação |
| :---: | :--- | :--- |
| condition\(\) | Operador de condição que avalia dois elementos e verifica qual é a condição verdadeira. |
| not\(\) | Operador de negação que tem como entrada apenas um valor, e sua função é simplesmente inverter esse valor. |
| and\(\) | Operador que recebe duas entradas e resulta em um valor **VERDADEIRO** se os dois valores de entrada da operação forem **VERDADEIROS**, caso contrário o resultado é **FALSO**. |
| or\(\) | Operador que recebe duas entradas E resulta em um valor **VERDADEIRO** se ao menos **UM** dos dois valores de entrada da operação for **VERDADEIRO**, caso contrário o resultado é **FALSO**. |

### Exemplo

Este exemplo é uma tela que utiliza duas operações lógicas `**condition**` e `**or**`; 
Há duas possibilidades no resultado: 
1. Caso o resultado da condição `or` for verdadeira o texto do componente `Text` se torna **true**.
2. Se for falso ele atribui ao texto o valor de **false.**

{{< tabs id="T160" >}}
{{% tab name="JSON" %}}
<!-- json-playground:logical.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "navigationBar" : {
    "title" : "Operations",
    "showBackButton" : true
  },
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "The text in green bellow will show if the result of `TRUE OR FALSE"
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{condition(or(true, false), 'true', 'false')}",
      "style" : {
        "backgroundColor" : "#00FF00"
      }
    } ]
  }
}
-->
{{% playground file="logical.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(title = "Operations", showBackButton = true),
    fun screen() = Screen(
    navigationBar = NavigationBar(title = "Operations", showBackButton = true),
    child = Container(
            children = listOf(
                Text(text = constant("The text in green bellow will show if the result of `TRUE OR FALSE")),
                Text(condition(or(constant(true), constant(false)), constant(true), constant(false)).toBindString()
                ).setStyle{ backgroundColor = "#00FF00" }
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/logic.png" width="250">}}
