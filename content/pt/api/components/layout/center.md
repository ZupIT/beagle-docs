---
title: Center
weight: 338
description: Descrição da função Center e seus atributos
---

---


## O que é?

O `Center` é uma função para ajudá-lo a organizar o layout de sua visualização. Ele centraliza o componente passado como parâmetro definindo `justifyContent`,` alignItems`, `alignSelf` e` alignContent` como `CENTER`.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Componente para receber o estilo. |


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
