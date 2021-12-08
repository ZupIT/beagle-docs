---
title: Operadores para manipulação de string
weight: 369
description: >-
  Nesta seção, você encontra descrição completa dos operadores para manipulação de strings.
---

---

## Quais são? 
Veja abaixo quais são os manipuladores de string: 
| Operadores | Exemplo | Ação |
| :---: | :---: | :--- |
| concat | concat(constant("cachorro"), constant("quente")) | Operador que concatena as strings que tiver como entrada. |
| capitalize | capitalize(constant("brasil")) | Operador que transforma a primeira letra da string em uma letra maiúscula. |
| uppercase | uppercase(constant("brasil")) | Operador que transforma a todas as letras de uma string em letras maiúsculas. |
| lowercase | lowercase(constant(("BRASIL")) | Operador que transforma a todas as letras de uma string em letras minúsculas. |
| substr | substr(constant("brasil"), constant(3)) | Operador que retorna uma substring da string de entrada. Essa operação pode ter 2 ou 3 entradas, onde o primeiro parâmetro é a string e o segundo e terceiro parâmetro são os limitadores da string. |

{{% alert color="warning" %}}
  Quando você utilizar as operações com a nova DSL, é necessário adicionar o método **toBindString( )** para fazer a conversão da operação para o tipo `Bind` de String.
 {{% /alert %}}

### Exemplo

O exemplo mostra uma tela que possui um texto com uma operação de `substring`. 
Ela contém a frase: 
- **'The book is on the table'** 
Os parâmetros são:
-  **4, 11**. 
Isso mostra o limite dessa substring, e ela se torna uma string: '**book is on':**

Veja abaixo:


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
fun screen() = Screen(
  child = Container(
            children = listOf(
                Text(text = constant("The text bellow is a substring of `The book is on the table`.")),
                Container(
                    children = listOf(
                        Text(substring(constant("The book is on the table"), constant(4), constant(11)))
                    )
                ).setStyle { backgroundColor = constant("#00FF00") }
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/string.png" width="250">}}
