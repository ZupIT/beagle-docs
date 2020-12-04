---
title: Widget
weight: 392
description: Descrição dos componentes do Widget e seus atributos
---

---

## O que é?

O Widget é uma classe abstrata que permite que um componente visual seja referenciado no Beagle. Quando um componente visual se estende do `widget`, ele herda 3 atributos que habilitam algum atributos e funcionalidades nos elementos visualizados. 

{{% alert color="warning" %}}
É importante lembrar que, por default, essas estruturas são colocadas como nulas.
{{% /alert %}}

```kotlin
abstract class Widget : StyleComponent, 
                        AccessibilityComponent,
                        IdentifierComponent {

    override var id: String? = null
    override var style: Style? = null
    override var accessibility: Accessibility? = null
}
```

Abaixo listamos todos os atributos que um widget pode receber. Mas se quiser um exemplo de uso e como criar um widget, veja a seção [**posicionamento de componentes.**](../features/layout-de-componentes/)

## Quais seus atributos?

### Atributos do Widget 

Os principais atributos desta classe são: 

<table>
  <thead>
    <tr>
      <th style="text-align:left">Atributo</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Obrigat&#xF3;rio</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">identifica o componente visual listado pelo <code>widget</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p><b>style</b>
        </p>
      </td>
      <td style="text-align:left">Style</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">define uma s&#xE9;rie de propriedades visuais.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessibility</b>
      </td>
      <td style="text-align:left">Accessibility</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">define o conte&#xFA;do textual para uso de leitor de telas.</td>
    </tr>
  </tbody>
</table>

### Atributos do Style 

Os principais atributos são: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Atributo</b>
      </th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Obrigat&#xF3;rio</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>backgroundColor</b>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define a cor de fundo de um componente visual. Para isso, &#xE9; importante
        que a cor seja listada em formato hexadecimal, <b>necessariamente come&#xE7;ando com #</b>.
        Por exemplo: a cor branca em um background seria &quot;#FFFFFF</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>cornerRadius</b>
      </td>
      <td style="text-align:left">CornerRadius</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define o arredondamento da borda desse componente</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>size</b>
      </td>
      <td style="text-align:left">Size</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define o tamanho do componente com um valor <code>inteiro</code> . Este
        valor deve ser seguido da nota&#xE7;&#xE3;o <code>.unitPercent()</code> para
        definir um tamanho percentual em rela&#xE7;&#xE3;o a tela da aplica&#xE7;&#xE3;o,
        ou usando a nota&#xE7;&#xE3;o <code>.unitReal()</code> para definir um tamanho
        pontual em pixels. Um valor <code>80.unitPercent() </code>define que o componente
        ter&#xE1; um tamanho relativo a <b>80%</b> da tela. J&#xE1; <code>80.unitReal()</code>define
        o tamanho de <b>80 pixels.</b>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>margin</b>
      </td>
      <td style="text-align:left">EdgeValue</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p>Determina a <a href="../features/layout-de-componentes/margin.md"><b>margem</b></a> que
          afeta o espa&#xE7;amento ao redor de um elemento, contribuindo para que
          ele se desloque de acordo com os limites internos do elemento pai e de
          seus irm&#xE3;os.</p>
        <p>A margem de um elemento contribui para o tamanho total de seu pai se,
          por exemplo, o elemento pai for dimensionado automaticamente.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>padding</b>
      </td>
      <td style="text-align:left">EdgeValue</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define espa&#xE7;os internos no componente, ele se comporta como uma esp&#xE9;cie
        de &quot;margem interna&quot; do elemento. Por exemplo, um container que
        tenha dois elementos visuais define um valor para <a href="../features/layout-de-componentes/padding.md"><b>padding</b></a> para
        que os elementos internos n&#xE3;o fiquem &quot;colados&quot; nas margens
        internas.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>position</b>
      </td>
      <td style="text-align:left">EdgeValue</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Adiciona padding a uma posi&#xE7;&#xE3;o. Para mais detalhes sobre seu
        funcionamento verifique nossa documenta&#xE7;&#xE3;o sobre o atributo
        <a
        href="../features/layout-de-componentes/position.md"><b>posi&#xE7;&#xE3;o</b>
          </a><b> </b>em um layout de componentes.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>flex</b>
      </td>
      <td style="text-align:left"><a href="../features/layout-de-componentes/flex.md">Flex</a>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Respons&#xE1;vel por posicionar elementos na tela. Para mais detalhes
        verifique nossa documenta&#xE7;&#xE3;o sobre o<a href="../features/layout-de-componentes/flex.md"><b> Flex</b></a><b>.</b>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>positionType</b>
      </td>
      <td style="text-align:left">PositionType</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Respons&#xE1;vel por estabelecer a rela&#xE7;&#xE3;o de posicionamento
        entre este elemento e seus irm&#xE3;os.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>display</b>
      </td>
      <td style="text-align:left">Display</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define se o elemento vinculado a esse <code>widget</code> ser&#xE1; posicionado
        pelo Flex.</td>
    </tr>
  </tbody>
</table>

### Atributos do Accessibility

Os principais atributos são: 

| Atributos | Tipo | Obrigatório | Definição |
| :--- | :--- | :--- | :--- |
| **accessible** | Boolean |   | Habilita informações para acessibilidade |
| **accessibilityLabel**  | String |   | Define uma mensagem para acessibilidade |

## Como usar?

No exemplo abaixo, utilizamos um Container para exemplificar os atributos de um widget. A classe que define um componente visual deve estender da classe `widget.`

{{< tabs name="T178" >}}
{{% tab name="JSON" %}}
```markup
{
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:text",
        "text" : "I'am a Server-Driven text"
      }, {
        "_beagleComponent_" : "beagle:text",
        "text" : "I'am another a Server-Driven text"
      } ],
      "id" : "WidgetID",
      "style" : {
        "backgroundColor" : "#ff8100",
        "cornerRadius" : {
          "radius" : 25.0
        },
        "size" : {
          "width" : {
            "value" : 70.0,
            "type" : "PERCENT"
          },
          "height" : {
            "value" : 80.0,
            "type" : "REAL"
          }
        },
        "margin" : {
          "all" : {
            "value" : 20.0,
            "type" : "REAL"
          }
        },
        "padding" : {
          "all" : {
            "value" : 15.0,
            "type" : "REAL"
          }
        },
        "position" : {
          "left" : {
            "value" : 0.0,
            "type" : "REAL"
          }
        },
        "flex" : {
          "flexDirection" : "ROW"
        },
        "positionType" : "RELATIVE",
        "display" : "FLEX"
      },
      "accessibility" : {
        "accessible" : true,
        "accessibilityLabel" : "I have acessibility"
      }
    }
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    listOf(
        Text("I'am a Server-Driven text"),
        Text("I'am another Server-Driven text")
    )
    
).applyStyle(
    Style(backgroundColor = "#ff8100",
        cornerRadius = CornerRadius(25.0),
        size = Size(width = 70.unitPercent(), height = 80.unitReal()),
        margin = EdgeValue(all = 20.unitReal()),
        padding = EdgeValue(all = 15.unitReal()),
        position = EdgeValue(0.unitReal()),
        flex = Flex(FlexDirection.ROW),
        positionType = PositionType.RELATIVE,
        display = Display.FLEX)
        
).applyAccessibility(accessibility = Accessibility(
    accessible = true,
    accessibilityLabel = "I have acessibility")
    
).setId("WidgetID")

```
{{% /tab %}}
{{< /tabs >}}

### 👇 Teste esse componente no Web Playground

{% embed url="https://beagle-playground.netlify.app/\#/demo/default-components/container.json" %}}
