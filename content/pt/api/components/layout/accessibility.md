---
title: Accessibility
weight: 338
description: Descrição da função Accessibility e seus atributos
---

---


## O que é?

O `Accessibility` é uma função que aplica acessibilidade ao seu componente.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Componente que recebe as propriedades de acessibilidade. |
| accessible | Boolean | ✓ | Indica se o componente será interpretado como acessível. Padrão é `true`. |
| accessibilityLabel | String |   | Contém uma mensagem que será dita por programas como o `VoiceOver.` |
| isHeader | Boolean |  | Indica se o componente será interpretado como um cabeçalho. Padrão é `false`. |



## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:accessibility.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "accessibility" : {
    "accessible" : true,
    "accessibilityLabel" : "text",
    "isHeader" : false
  }
}
-->

{{% playground file="accessibility.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Accessibility(
  self = Text("simple text"),
  accessibilityLabel = "text"
    )
```

{{% /tab %}}
{{< /tabs >}}
