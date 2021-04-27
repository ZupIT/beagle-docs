---
title: Column
weight: 338
description: Descrição da função Column e seus atributos
---

---


## O que é?

O `Column` é uma função que exibe seus filhos em uma matriz vertical.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| children     | List &lt;[ServerDriven Component]({{< ref path="/api/components" lang="pt" >}})&gt; |            | Os componentes abaixo deste componente na árvore.
| context      | [ContextData]({{< ref path="/api/context/" lang="pt" >}})                           |             | É o [contexto]({{< ref path="/api/context/" lang="pt" >}}) contido por este Widget.                                                    |
| onInit       | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                     |             | Um parâmetro que te possibilita definir uma lista de ações a serem executadas assim que esse Widget seja exibido. |
| styleId   | String                                                |             | Referencia o estilo configurado localmente a ser aplicado no container. |
| reverse   | Boolean                                                |             | Altera a ordem dos itens. Padrão é `false`. |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:column.json
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "simple text"
  } ],
  "style" : {
    "flex" : {
      "flexDirection" : "COLUMN"
    }
  }
}
-->

{{% playground file="column.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Column(
    children = listOf(
        Text(text = "simple text")
    )
)
```

{{% /tab %}}
{{< /tabs >}}
