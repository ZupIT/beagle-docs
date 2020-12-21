---
title: Container
weight: 338
description: Descrição do componente Container e seus atributos
---

---

## O que é?

O `Container` é um componente responsável por conter outros componentes dentro de si. 

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo**  | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| children | List &lt;[ServerDriven Component](../../widget)&gt; | ✓ | Define a lista de componentes que fazem parte do container |
| context | [ContextData](../../../../contexto/) |   | É o [contexto](../../contexto/) contido por este Widget. |
| onInit | List&lt;[Action](../../acoes/)&gt; |   | Um parâmetro que te possibilita definir uma lista de ações a serem executadas assim que esse Widget seja exibido. |

## Como usar?

{{< tabs name="T145" >}}
{{% tab name="JSON" %}}
```kotlin
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
          "_beagleComponent_": "beagle:text",
          "text": "@{myContext.value}"
        }
    ],
    "context": {
        "id": "myContext",
        "value": "Hello world!" 
    }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    children = listOf(
        Text(text = "@{myContext.value}")
    ),
    context = ContextData(
        id = "myContext",
        value = "Hello World!"
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [ Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/container.json)​
