---
title: Operadores de comparação
weight: 367
description: 'Nesta seção, você encontra descrição completa dos Operadores de Comparação.'
---

---

## Quais são? 

<table>
  <thead>
    <tr>
      <th style="text-align:center">Operadores</th>
      <th style="text-align:left">Exemplo</th>
      <th style="text-align:left">A&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center">
        gt
        (Maior)
      </td>
      <td style="text-align:left">&quot;@{gt(3,4)}</td>
      <td style="text-align:left">Operador que recebe duas entradas e resulta em <strong>verdadeiro</strong> se o primeiro
        valor for <strong>maior</strong> que o segundo.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        gte
        (Maior ou Igual)
      </td>
      <td style="text-align:left">&quot;@{gte(3,4)}&quot;</td>
      <td style="text-align:left">Operador que recebe duas entradas e resulta em <strong>verdadeiro</strong> se o primeiro
        valor for <strong>maior ou igual</strong> ao segundo.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        lt
        (Menor)
      </td>
      <td style="text-align:left">@{lt(3,4)}&quot;</td>
      <td style="text-align:left">Operador que recebe duas entradas e resulta em <strong>verdadeiro</strong> se o primeiro
        valor for <strong>menor</strong> que o segundo.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        lte
        (Menor ou igual)
      </td>
      <td style="text-align:left">&quot;@{lte(3,4)}&quot;</td>
      <td style="text-align:left">Operador que recebe duas entradas e resulta em <strong>verdadeiro</strong> se o primeiro
        valor for <strong>menor ou igual</strong> ao segundo.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        eq
        (Igual)
      </td>
      <td style="text-align:left">&quot;@{eq(4,4)}&quot;</td>
      <td style="text-align:left">Operador que recebe duas entradas e resulta em <strong>verdadeiro</strong> se o os
        dois valores s&#xE3;o <strong>iguais</strong>.</td>
    </tr>
  </tbody>
</table>

### Exemplo

Aqui, o exemplo é de uma tela que utiliza a operação de comparação **lt**, que verifica se o valor da soma de counter e:

* Se o resultado da condição do `or` for verdadeira, o texto do componente `Text` se torna **true;**
* Caso falso ele atribui ao texto o valor de **false.**

{{< tabs id="T161" >}}
{{% tab name="JSON" %}}
<!-- json-playground:comparisonOperators.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "navigationBar":{
      "title":"Operations",
      "showBackButton":true
   },
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"The text bellow will show if 4 is below 5 or not"
         },
         {
            "_beagleComponent_":"beagle:text",
            "text":"@{condition(lt(4, 5), 'less then 5', 'greater then 5')}",
            "style":{
               "backgroundColor":"#00FF00"
            }
         }
      ]
   }
}
-->
{{% playground file="comparisonOperators.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(
        title = "Operations",
        showBackButton = true
    ),
    child = Container(
        children = listOf(
            Text(text = "The text bellow will show if 4 is below 5 or not"),
            Text(expressionOf(
                    "@{condition(lt(4, 5), 'less then 5', 'greater then 5')}")
            ).applyStyle(Style(backgroundColor = "#00FF00"))
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

![](/shared/comparison.png)
