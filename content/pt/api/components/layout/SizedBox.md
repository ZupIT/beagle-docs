---
title: SizedBox
weight: 338
description: Descrição da função SizedBox e seus atributos
---

---


## O que é?
O `SizedBox` é uma função que aplica um tamanho para o seu componente.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | componente para aplicar o estilo |
| width   | Int / Double / UnitValue                                                |      ✓       | Valor da largura |
| height   | Int / Double / UnitValue                                                 |      ✓       | Valor da altura |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:sizedbox.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "size" : {
      "width" : {
        "value" : 150.0,
        "type" : "REAL"
      },
      "height" : {
        "value" : 150.0,
        "type" : "REAL"
      }
    }
  }
}
-->

{{% playground file="sizedbox.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
SizedBox(
  width = 150,
  height = 150,
  self = Text("simple text")
    )
```

{{% /tab %}}
{{< /tabs >}}
