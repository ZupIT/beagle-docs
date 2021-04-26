---
title: Row
weight: 338
description: Descrição do componente Row e seus atributos
---

---


## O que é?
O `Row` é um componente que exibe seus filhos em uma matriz horizontal.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                       | Obrigatório | **Definição**                                                                                                     |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| children     | List &lt;[ServerDriven Component]({{< ref path="/api/components" lang="pt" >}})&gt; |            | Os componentes abaixo deste componente na árvore.
| context      | [ContextData]({{< ref path="/api/context/" lang="pt" >}})                           |             | É o [contexto]({{< ref path="/api/context/" lang="pt" >}}) contido por este Widget.                                                    |
| onInit       | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                     |             | Um parâmetro que te possibilita definir uma lista de ações a serem executadas assim que esse Widget seja exibido. |
| styleId   | String                                                |             | Referencia o estilo configurado localmente a ser aplicado no container. |
| reverse   | Boolean                                                |             | Exibe seus elementos da direita para a esquerda. |


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
