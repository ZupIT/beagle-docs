---
title: SizedBox
weight: 110
description: Descrição da função SizedBox e seus atributos
---

---


## O que é?

O `SizedBox` é uma função para ajudá-lo a organizar o layout de sua visualização. Ele define o tamanho do componente passado como parâmetro com o valor fornecido. Isso é equivalente a definir a propriedade `style.size` do componente.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Componente para receber o estilo. |
| width   | Int / Double / UnitValue                                                |      ✓       | Valor da largura. |
| height   | Int / Double / UnitValue                                                 |      ✓       | Valor da altura. |


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
