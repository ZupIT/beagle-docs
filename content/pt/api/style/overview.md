---
title: Visão Geral
weight: 10
type: overview
description: Descrição do Style e seus atributos
---

---
## O que é?

É uma classe que define os parâmetros de estilo e posicionamento dos componentes do Beagle.

| Atributos | Tipo | Obrigatório | Definição |
| :-------- | :--- | :---------: | :-------- |
| backgroundColor | Bind\<String\> | | Define a cor de fundo em um componente. Deve ser listado com um formato de cor hexadecimal. Por exemplo, digite "#FFFFFF" para um fundo BRANCO. |
| cornerRadius | [CornerRadius]({{< ref path="/api/style/corner-radius.md" >}}) | | Define se o canto do componente é arredondado. Você pode definir um valor para o parâmetro `radius` que será aplicado a todos os cantos ou pode definir um valor para cada um dos cantos, como` topLeft`, `bottomLeft`,` topRight` e `bottomRight` |
| borderColor | Bind\<String\> | | Define a cor da borda de um componente. Formatos suportados: #RRGGBBAA e #RGBA. |
| borderWidth | Bind\<Double\> | | Define a largura da borda de um componente.
| [size]({{< ref path="resources/components-positioning/size.md" >}}) | [Size]({{< ref path="/api/style/size.md" >}}) | | Adiciona um tamanho a uma view. Clique no link do parâmetro [size]({{< ref path="resources/components-positioning/size.md" >}}) para mais detalhes.
| [margin]({{< ref path="resources/components-positioning/margin.md" >}})| [EdgeValue]({{< ref path="/api/style/edge-value.md" >}}) | | Adiciona espaçamento ao redor de um componente. Um componente com margem se deslocará dos limites de seu pai, mas também deslocará a localização de quaisquer irmãos. A margem de um componente contribui para o tamanho total de seu pai, se o pai for dimensionado automaticamente. Clique no link do parâmetro [margin]({{< ref path="resources/components-positioning/margin.md" >}}) para mais detalhes. |
| [padding]({{< ref path="resources/components-positioning/padding.md" >}}) | [EdgeValue]({{< ref path="/api/style/edge-value.md" >}}) | | Adiciona um espaço interno as laterais de um componente ao qual é aplicado. O `padding` no Yoga atua como se fosse um box-sizing: border-box. O preenchimento não será adicionado ao tamanho total de um elemento se ele tiver um conjunto de tamanho explícito. Para visualizações com tamanho automático, o preenchimento aumentará o tamanho do componente e também deslocará a localização de quaisquer filhos. Clique no link do parâmetro [padding]({{< ref path="resources/components-positioning/padding.md" >}}) para mais detalhes.
| [position]({{< ref path="resources/components-positioning/position.md" >}}) | [EdgeValue]({{< ref path="/api/style/edge-value.md" >}}) | | Adiciona espaço a posição de um componente. Clique no parâmetro [position]({{< ref path="resources/components-positioning/position.md" >}}) para mais detalhes.|
| [flex]({{< ref path="resources/components-positioning/flex.md" >}}) | Flex | | Define a propriedade `flex` no componente em que é aplicado. Clique no link do parâmetro [flex]({{< ref path="resources/components-positioning/flex.md" >}}) para mais detalhes |
| [positionType]({{< ref path="resources/components-positioning/positiontype.md" >}}) | PositionType | | Define a propriedade `position type` para definir a relação de um componente com seus componentes-parentes. Ele pode ser definido como `relative` ou `absolute`. Clique no link do parâmetro [positionType]({{< ref path="resources/components-positioning/positiontype.md" >}}) para mais detalhes.|
| [display]({{< ref path="resources/components-positioning/display.md" >}}) | Bind\<Display\> | | Habilita a propriedade `flex` para todos os filhos diretos do componente em que é aplicado. Clique no link do parêmtro [display]({{< ref path="resources/components-positioning/display.md" >}}) para mais detalhes.

## Como usar?

O exemplo abaixo é um `Botão` que possui alguns parâmetros de estilo (Style) definidos. Os parâmetros listados acima que não implementados abaixo, estão listados na seção [`Posicionamento do componente`]({{< ref path="resources/components-positioning" >}}).

{{< tabs id="T108" >}}
{{% tab name="JSON" %}}

<!-- json-playground:condition.json
{
  "_beagleComponent_":"beagle:screenComponent",
  "child":{
    "_beagleComponent_":"beagle:container",
    "children":[
      {
        "_beagleComponent_":"beagle:button",
        "text":"Click",
        "onPress":[
          {
            "_beagleAction_":"beagle:alert",
            "title":"Styled Button",
            "message":"This button has got the Style!"
          }
        ],
        "style":{
          "backgroundColor":"#3C7503",
          "cornerRadius":{
            "radius":20,
            "topLeft":0,
            "bottomRight":0
          },
          "borderColor":"#ff6681",
          "borderWidth":5,
          "size":{
            
          },
          "flex":{
            
          }
        }
      }
    ]
  }
}
-->

{{% playground file="condition.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```text
Container(
            children = listOf(
                Button(
                    text = "Click",
                    onPress = listOf(
                        Alert(
                            title = "Styled Button",
                            message = "This button has got the Style!"
                        )
                    )
                ).setStyle {
                    backgroundColor = constant("#3C7503")
                    borderColor = constant("#ff6681")
                    borderWidth = constant(5.0)
                    cornerRadius = CornerRadius(
                        radius = constant(20.0),
                        topLeft = constant(0.0),
                        bottomRight = constant(0.0)
                    )
                }
            )
)

```

{{% /tab %}}
{{< /tabs >}}


