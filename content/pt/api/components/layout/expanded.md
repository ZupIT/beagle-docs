---
title: Expanded
weight: 70
description: Descrição da função Expanded e seus atributos
---

---


## O que é?

O `Expanded` é uma função para ajudá-lo a organizar o layout de sua visualização. Faz com que o componente passado como parâmetro expanda seu tamanho para todo o espaço disponível. Isso é obtido definindo `width` para 100%,` height` para 100%, `alignSelf` para` STRETCH` e `grow` para 1,0.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Componente para receber o estilo. |


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
