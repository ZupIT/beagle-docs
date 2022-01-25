---
title: Operadores para manipulação de string
weight: 369
description: >-
  Nesta seção, você encontra descrição completa dos Operadores para Manipulação
  de Strings.
---

---

## Quais são? 

| Operadores | Exemplo | Ação |
| :---: | :---: | :--- |
| concat | "@{concat\("cachorro", "quente"\)}" | Operador que concatena as strings que tiver como entrada. |
| capitalize | "@{capitalize\(brasil\)}" | Operador que transforma a primeira letra da string em uma letra maiúscula. |
| uppercase | "@{uppercase\(brasil\)}" | Operador que transforma a todas as letras de uma string em letras maiúsculas. |
| lowercase | "@{lowercase\(BRASIL\)}" | Operador que transforma a todas as letras de uma string em letras minúsculas. |
| substr | "@{substr\(brasil, 3\)}" | Operador que retorna uma substring da string de entrada. Essa operação pode ter 2 ou 3 entradas, onde o primeiro parâmetro é a string e o segundo e terceiro parâmetro são os limitadores da string. |

### Exemplo

Nesse exemplo, uma tela possui um texto com uma operação de `substring`, no qual sua frase é **'The book is on the table'** e os parâmetros **4, 11** ditam o limite dessa substring, a tornando a seguinte string '**book is on':**

{{< tabs id="T162" >}}
{{% tab name="JSON" %}}
<!-- json-playground:stringManipulation.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "The text bellow is a substring of `The book is on the table`."
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{substr('The book is on the table', 4, 11)}",
      "style" : {
        "backgroundColor" : "#00FF00"
      }
    } ]
  }
}
-->
{{% playground file="stringManipulation.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(child = 
    Container(
        children = listOf(
            Text(text = "The text bellow is a substring of `The book is on the table`."),
            Text(
                expressionOf("@{substr('The book is on the table', 4, 11)}")
            ).setStyle{ backgroundColor = constant("#00FF00") }
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

![](/shared/string.png)
