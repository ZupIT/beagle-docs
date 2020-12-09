---
title: Pageview
weight: 342
description: Descrição do componente Page View e seus atributos
---

---

## O que é?

O componente `PageView` é um container especializado em apresentar páginas que são exibidas na horizontal e podem conter um indicador de páginas. Essas páginas podem ser qualquer objeto server-driven.

{{% alert color="info" %}}
O Page View se refere ao seu tamanho quando visualizado em dispositivos Mobile \(Android e iOS\). O **tamanho** dele é determinado pelo elemento pai em que está contido, ou seja, a largura \(width\) e a altura \(height\) será definida pelo componente pai.   
  
Por exemplo, um `PageView` pode ser declarado dentro de um [**Container**](container) e sua largura e altura são responsáveis por determinar o tamanho do Page View. 
{{% /alert %}}

A sua estrutura é representada como mostrado abaixo:  

<table>
  <thead>
    <tr>
      <th style="text-align:left">Atributo</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:center">Obrigat&#xF3;rio</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">children</td>
      <td style="text-align:left">List&lt;<a href="../"><b>ServerDrivenComponent</b></a>&gt;</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">
        <p></p>
        <p>Define a lista de componentes visuais (server-driven) contidos na<code>PageView</code>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">context</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="../../contexto/"><b>ContextData</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:center"></td>
        <td style="text-align:left">&#xC9;<b> </b>o <a href="../../contexto/"><b>contexto</b></a> contido neste
          Widget</td>
    </tr>
    <tr>
      <td style="text-align:left">onPageChange</td>
      <td style="text-align:left">List&lt;Action&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Lista de a&#xE7;&#xE3;o que &#xE9; executada quando a pagina selecionada
        &#xE9; alterada</td>
    </tr>
    <tr>
      <td style="text-align:left">currentPage</td>
      <td style="text-align:left">Int</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Identificador de qual pagina est&#xE1; selecionada</td>
    </tr>
    <tr>
      <td style="text-align:left">showArrow</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left"><b>Esse atributo &#xE9; especifico para plataforma web</b>. Ele habilita
        setas para mudan&#xE7;a de p&#xE1;gina.</td>
    </tr>
  </tbody>
</table>

## Como usar?

No exemplo abaixo segue um PageView contendo três páginas onde cada uma delas tem um Text que é definido por Contexto. Toda vez que há mudança de página o contexto é redefinido.

{{< tabs name="T148" >}}
{{% tab name="JSON" %}}
```kotlin
{
   "_beagleComponent_":"beagle:container",
   "children":[
      {
         "_beagleComponent_":"beagle:pageView",
         "children":[
            {
               "_beagleComponent_":"beagle:text",
               "text":"Page 1",
               "alignment":"CENTER"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Page 2",
               "alignment":"CENTER"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Page 3",
               "alignment":"CENTER"
            }
         ],
         "onPageChange":[
            {
               "_beagleAction_":"beagle:setContext",
               "contextId":"context",
               "value":"@{onPageChange}"
            }
         ],
         "currentPage":"@{context}"
      },
      {
         "_beagleComponent_":"beagle:pageIndicator",
         "selectedColor":"#000000",
         "unselectedColor":"#888888",
         "numberOfPages":3,
         "currentPage":"@{context}"
      }
   ],
   "context":{
      "id":"context",
      "value":0
   }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    children = listOf(
        PageView(
            children = (1..3).map { 
                Text(
                    text = "Page $it", 
                    alignment = TextAlignment.CENTER
                ) 
            },
            onPageChange = listOf(SetContext("context", "@{onPageChange}")),
            currentPage = expressionOf("@{context}")
        ),
        PageIndicator(
            numberOfPages = 3,
            selectedColor = BLACK,
            unselectedColor = LIGHT_GREY,
            currentPage = expressionOf("@{context}")
        )
    ),
    context = ContextData(
        id = "context", 
        value = 0
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### [👉 Teste esse componente no Web Playground​](https://beagle-playground.netlify.app/#/demo/default-components/pageview.json)
