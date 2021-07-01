---
title: Padding
weight: 130
description: Descrição da função Padding e seus atributos
---

---


## O que é?

O `Padding` é uma função para ajudá-lo a organizar o layout do seu componente. Ele cria um espaço entre o componente passado como parâmetro e seu conteúdo, definindo seu `padding` (  propriedade de estilo) para o valor fornecido.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Componente para receber o estilo. |
| padding   | EdgeValue                                                |      ✓       | Preenchimento a ser aplicado no componente. |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:padding.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "padding" : {
      "all" : {
        "value" : 40.0,
        "type" : "REAL"
      }
    }
  }
}
-->

{{% playground file="padding.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Padding(
  padding = EdgeValue.all(40),
  self = Text("simple text")
    )
```

{{% /tab %}}
{{< /tabs >}}
