---
title: Row
weight: 50
description: Descrição da função Row e seus atributos
---

---


## O que é?

O `Row` é uma função para ajudá-lo a organizar o layout de sua visualização. Ele cria um `Container` que exibe seu conteúdo em uma linha horizontal. Isso é equivalente a criar um `Container` com` flexDirection` igual a `ROW`.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| children     | List &lt;[ServerDriven Component]({{< ref path="/api/components" lang="pt" >}})&gt; |            | O conteúdo desta linha, ou seja, seus filhos.
| context      | [ContextData]({{< ref path="/api/context/" lang="pt" >}})                           |             | É o [contexto]({{< ref path="/api/context/" lang="pt" >}}) vinculado a este widget.                                                    |
| onInit       | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                     |             | Um parâmetro que te possibilita definir uma lista de ações a serem executadas assim que esse Widget seja exibido. |
| styleId   | String                                                |             | Referencia o estilo configurado localmente a ser aplicado no container. |
| reverse   | Boolean                                                |             | Exibe seus elementos da direita para a esquerda. Padrão é `false`. |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:row.json
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "simple text"
  } ],
  "style" : {
    "flex" : {
      "flexDirection" : "ROW"
    }
  }
}
-->

{{% playground file="row.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Row(
    children = listOf(
        Text(text = "simple text")
    )
)
```

{{% /tab %}}
{{< /tabs >}}
