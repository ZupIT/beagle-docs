---
title: Widget
weight: 300
description: Descrição dos componentes do Widget e seus atributos
---

---

## O que é?

O Widget é uma classe abstrata que permite que um componente seja referenciado no Beagle. Quando um componente estende da classe `widget`, ele herda 3 propriedades que habilitam algum atributos e funcionalidades nos elementos visualizados.

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

Abaixo listamos todos os atributos que um widget pode receber.

## Quais seus atributos?

### Atributos do Widget

Os principais atributos desta classe são:
| **Atributo** | **Tipo**                                       | Obrigatório | **Definição**      |
| :----------- | :--------------------------------------------- | :---------: | :----------------- |
| id        | ​String |      | identifica o componente que o widget referencia |
| style | ​[Style]({{< ref path="/api/style/overview.md" lang="pt" >}})​ | | define uma série de propriedades de estilo. |
| accessibility | [Acessibility]({{< ref path="/api/components/accessibility.md" lang="pt" >}})​ | define uma mensagem para o leitor de telas. |

## Como usar?

No exemplo abaixo, utilizamos um Container (um componente padrão do Beagle) para demonstrar os atributos expostos pelo widget.

{{% alert color="success" %}}
  Componentes customizados precisam estender a classe `widget.` a partir de suas classes construturas.
{{% /alert %}}

{{< tabs id="T177" >}}
{{% tab name="JSON" %}}

<!-- json-playground:widget.json
{
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:text",
        "text" : "I am a Server-Driven text"
      }, {
        "_beagleComponent_" : "beagle:text",
        "text" : "I'am another Server-Driven text"
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
