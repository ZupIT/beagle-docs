---
title: Styled
weight: 338
description: Descrição da função Styled e seus atributos
---

---


## O que é?

O `Styled` é uma função para ajudá-lo a organizar o layout e o estilo de sua visualização. É uma maneira simples de definir várias propriedades de estilo ao mesmo tempo.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Componente para receber o estilo. |
| block   | Style.() -> Unit                                                |      ✓       | Função para aplicar a estilização. |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:styled.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "backgroundColor" : "#f1f1f1",
    "flex" : {
      "alignSelf" : "CENTER"
    }
  }
}
-->

{{% playground file="styled.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Styled(
        self = Text("simple text")
    ) {
        backgroundColor = "#f1f1f1"
        flex.alignSelf = AlignSelf.CENTER
    }
```

{{% /tab %}}
{{< /tabs >}}
