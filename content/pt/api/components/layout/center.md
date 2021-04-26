---
title: Center
weight: 338
description: Descrição da função Center e seus atributos
---

---


## O que é?
O `Center` é uma função que aplica os atributos de centralização do flex.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | componente para aplicar o estilo |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:center.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "flex" : {
      "justifyContent" : "CENTER",
      "alignItems" : "CENTER",
      "alignSelf" : "CENTER",
      "alignContent" : "CENTER"
    }
  }
}
-->

{{% playground file="center.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Center(
    self = Text(text = "simple text")
)
```

{{% /tab %}}
{{< /tabs >}}
