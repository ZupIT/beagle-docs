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

### Atributos do Style

Os principais atributos são:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Atributo</strong>
      </th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Obrigat&#xF3;rio</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><strong>backgroundColor</strong>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define a cor de fundo de um componente visual. Para isso, &#xE9; importante
        que a cor seja listada em formato hexadecimal, <strong>necessariamente come&#xE7;ando com #</strong>.
        Por exemplo: a cor branca em um background seria &quot;#FFFFFF</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>cornerRadius</strong>
      </td>
      <td style="text-align:left">CornerRadius</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define o arredondamento da borda desse componente</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>size</strong>
      </td>
      <td style="text-align:left">Size</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define o tamanho do componente com um valor <code>inteiro</code> . Este
        valor deve ser seguido da nota&#xE7;&#xE3;o <code>.unitPercent()</code> para
        definir um tamanho percentual em rela&#xE7;&#xE3;o a tela da aplica&#xE7;&#xE3;o,
        ou usando a nota&#xE7;&#xE3;o <code>.unitReal()</code> para definir um tamanho
        pontual em pixels. Um valor <code>80.unitPercent() </code>define que o componente
        ter&#xE1; um tamanho relativo a <strong>80%</strong> da tela. J&#xE1; <code>80.unitReal()</code>define
        o tamanho de <strong>80 pixels.</strong>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>margin</strong>
      </td>
      <td style="text-align:left">EdgeValue</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        Determina a <a href="../../resources/components-positioning/margin"><strong>margem</strong></a> que
          afeta o espa&#xE7;amento ao redor de um elemento, contribuindo para que
          ele se desloque de acordo com os limites internos do elemento pai e de
          seus irm&#xE3;os.
        A margem de um elemento contribui para o tamanho total de seu pai se,
          por exemplo, o elemento pai for dimensionado automaticamente.
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>padding</strong>
      </td>
      <td style="text-align:left">EdgeValue</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define espa&#xE7;os internos no componente, ele se comporta como uma esp&#xE9;cie
        de &quot;margem interna&quot; do elemento. Por exemplo, um container que
        tenha dois elementos visuais define um valor para <a href="../../resources/components-positioning/padding"><strong>padding</strong></a> para
        que os elementos internos n&#xE3;o fiquem &quot;colados&quot; nas margens
        internas.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>position</strong>
      </td>
      <td style="text-align:left">EdgeValue</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Adiciona padding a uma posi&#xE7;&#xE3;o. Para mais detalhes sobre seu
        funcionamento verifique nossa documenta&#xE7;&#xE3;o sobre o atributo
        <a
        href="../../resources/components-positioning/position"><strong>posi&#xE7;&#xE3;o</strong>
          </a><strong> </strong>em um layout de componentes.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>flex</strong>
      </td>
      <td style="text-align:left"><a href="../features/posicionamento-de-componentes/flex">Flex</a>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Respons&#xE1;vel por posicionar elementos na tela. Para mais detalhes
        verifique nossa documenta&#xE7;&#xE3;o sobre o<a href="../../resources/components-positioning/flex"><strong> Flex</strong></a><strong>.</strong>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>positionType</strong>
      </td>
      <td style="text-align:left">PositionType</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Respons&#xE1;vel por estabelecer a rela&#xE7;&#xE3;o de posicionamento
        entre este elemento e seus irm&#xE3;os.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>display</strong>
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

| Atributos              | Tipo    | Obrigatório | Definição                                |
| :--------------------- | :------ | :---------- | :--------------------------------------- |
| **accessible**         | Boolean |             | Habilita informações para acessibilidade |
| **accessibilityLabel** | String  |             | Define uma mensagem para acessibilidade  |

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
            cornerRadius = CornerRadius(25.0)
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
