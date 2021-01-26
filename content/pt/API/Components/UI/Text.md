---
title: Text
weight: 325
description: Descrição do componente Text e seus atributos
---

---

## O que é?

O componente `Text` é responsável por definir o texto nativamente usando informações server-driven.

A estrutura é representada como mostrado abaixo:

| Atributo  | Tipo                                                  | Obrigatório | Definição                                                           |
| :-------- | :---------------------------------------------------- | :---------: | :------------------------------------------------------------------ |
| text      | String ou [**Binding**](/pt/api/context#binding) |      ✓      | Define o conteúdo em texto a ser exibido.                           |
| styleId   | String                                                |             | Referencia o estilo configurado localmente a ser aplicado no texto. |
| textColor | String                                                |             | Define a cor do texto em hexadecimal.                               |
| alignment | [**TextAlignment**](#textalignment)                   |             | Define o alinhamento do conteúdo do texto.                          |

### TextAlignment

| Atributo | Definição                                                         |
| :------- | :---------------------------------------------------------------- |
| LEFT     | conteúdo alinhado à **esquerda** dentro do visualizador de texto. |
| CENTER   | conteúdo alinhado no **centro** dentro do visualizador de texto.  |
| RIGHT    | conteúdo alinhado à **direita** dentro do visualizador de texto.  |

## Como usar?

{{< tabs id="T140" >}}
{{% tab name="JSON" %}}

<!-- json-playground:text.json
{
    "_beagleComponent_": "beagle:text",
    "text": "Hello World!"
}
-->

{{% playground file="text.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Text(text = "Hello World!")
```

{{% /tab %}}
{{< /tabs >}}
