---
title: Widget
weight: 300
description: Descrição dos componentes do Widget e seus atributos
---

---

## O que é?

O Widget é uma classe abstrata que permite que um componente visual seja referenciado no Beagle. Quando um componente visual se estende do `widget`, ele herda 3 atributos que habilitam algum atributos e funcionalidades nos elementos visualizados.

{{% alert color="warning" %}}
É importante lembrar que, por default, essas estruturas são colocadas como nulas.
{{% /alert %}}

```kotlin
abstract class Widget : StyleComponent, AccessibilityComponent, IdentifierComponent {

    override var id: String? = null
    override var style: Style? = null
    override var accessibility: Accessibility? = null
}
```

Abaixo listamos todos os atributos que um widget pode receber. Mas se quiser um exemplo de uso e como criar um widget, veja a seção [**posicionamento de componentes.**]({{< ref path="/resources/components-positioning/" lang="pt" >}})

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
      <td style="text-align:left"><strong>id</strong>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">identifica o componente visual listado pelo <code>widget</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <strong>style</strong>
      </td>
      <td style="text-align:left">Style</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">define uma s&#xE9;rie de propriedades visuais.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>accessibility</strong>
      </td>
      <td style="text-align:left">Accessibility</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">define o conte&#xFA;do textual para uso de leitor de telas.</td>
    </tr>
  </tbody>
</table>

## Como usar?

No exemplo abaixo, utilizamos um Container para exemplificar os atributos de um widget. A classe que define um componente visual deve estender da classe `widget.`

{{< tabs id="T177" >}}
{{% tab name="JSON" %}}

<!-- json-playground:widget.json
{
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:text",
        "text" : "Sou um texto Server-Driven"
      }, {
        "_beagleComponent_" : "beagle:text",
        "text" : "Sou outro texto Server-Driven"
      } ],
      "id" : "SouUmWidget",
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
-->

{{% playground file="widget.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Container(
    listOf(
        Text("I'am a Server-Driven text"),
        Text("I'am another Server-Driven text")
    )

).setStyle {
            backgroundColor = "#ff8100"
            cornerRadius = CornerRadius(constant(25.0))
            size = Size.box(width = 70, height = 80)
            margin = EdgeValue.all(20)
            padding = EdgeValue.all(15)
            position = EdgeValue.only(0)
            flex = Flex(FlexDirection.ROW)
            positionType = PositionType.RELATIVE
            display = Bind.value(Display.FLEX)
        }.setAccessibility {
            accessible = true
            accessibilityLabel = "I have acessibility"
        }.setId("WidgetID")
```

{{% /tab %}}
{{< /tabs >}}
