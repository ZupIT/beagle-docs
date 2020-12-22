---
title: Addchildren
weight: 257
description: >-
  Nesta seção, você encontra a definição do AddChildrenAction e detalhes de seus
  atributos
---

---

## O que é?

A ação `AddChildrenAction` é responsável por adicionar - no início ou no final - ou trocar todas as views que foram herdadas de  `Widget`  e que aceitam filhos.

A estrutura do **AddChildrenAction** é:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| componentId | String | ✓ | Define o id do Widget, no qual deseja adicionar as views. |
| value | List&lt;ServerDrivenComponent&gt; | ✓ | Define a lista de filhos que deseja adicionar. |
| mode | Mode |   | Define o posicionamento de onde os filhos serão inseridos na lista ou se o conteúdo da lista será substituído. **Por padrão o modo definido é `APPEND`.** |

### Mode

É um `ENUM`, cujos valores são:

| Valor | Definição |
| :--- | :--- |
| APPEND | Adiciona a view no final da lista de filhos. |
| PREPEND | Adiciona a view no começo da lista de filhos. |
| REPLACE | Substitui todos os filhos do widget. |

## Como usar?

Veja abaixo um exemplo de um botão que ao clicado adiciona uma view de texto:

{{< tabs id="T106" >}}
{{% tab name="JSON" %}}
<!-- json-playground:addChildrenAction.json
{
"_beagleComponent_": "beagle:container",
"id": "containerId",
"children": [
   {
   "_beagleComponent_":"beagle:button",
   "text":"AddChildren",
   "onPress":[
      {
         "_beagleAction_":"beagle:addChildren",
         "componentId":"containerId",
         "value":[
            {
               "_beagleComponent_":"beagle:text",
               "text":"New text added"
            }
         ],
         "mode":"APPEND"
      }
   ]
}

]
}
-->
{{% playground file="addChildrenAction.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Container(
    children = listOf(
        Button("AddChildren", onPress = listOf(
            AddChildrenAction(
                componentId = "containerId",
                value = listOf(
                    Text("New text added")
                ),
				mode = Mode.APPEND
            )
        ))
    )
).apply { id = "containerId" }
```
{{% /tab %}}
{{< /tabs >}}
