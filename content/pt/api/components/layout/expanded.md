---
title: Expanded
weight: 338
description: Descrição da função Expanded e seus atributos
---

---


## O que é?
O `Expanded` é uma função que aplica os atributos de expansão do flex, ocupa o espaço disponível.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | componente para aplicar o estilo |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:expanded.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "size" : {
      "width" : {
        "value" : 100.0,
        "type" : "PERCENT"
      },
      "height" : {
        "value" : 100.0,
        "type" : "PERCENT"
      }
    },
    "flex" : {
      "alignSelf" : "STRETCH",
      "grow" : 1.0
    }
  }
}
-->

{{% playground file="expanded.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Expanded(
    self = Text(text = "simple text")
)
```

{{% /tab %}}
{{< /tabs >}}
