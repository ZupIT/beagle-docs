---
title: Margin
weight: 338
description: Descrição da função Margin e seus atributos
---

---


## O que é?

O `Margin` é uma função para ajudá-lo a organizar o layout de sua visualização. Ele cria um espaço entre o componente passado como parâmetro e o conteúdo externo, definindo suas margens para o valor fornecido.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Componente para receber o estilo. |
| margin   | EdgeValue                                                |      ✓       | Margem a ser aplicado no componente. |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:margin.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "margin" : {
      "all" : {
        "value" : 40.0,
        "type" : "REAL"
      }
    }
  }
}
-->

{{% playground file="margin.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Margin(
  margin = EdgeValue.all(40),
  self = Text("simple text")
    )
```

{{% /tab %}}
{{< /tabs >}}
