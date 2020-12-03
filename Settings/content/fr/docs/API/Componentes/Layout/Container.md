---
title: Container
<<<<<<< HEAD
weight: 324
description: Descrição do componente Container e seus atributos
=======
weight: 342
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## O que é?

O `Container` é um componente responsável por conter outros componentes dentro de si. 

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo**  | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| children | List &lt;[ServerDriven Component](../../widget.md)&gt; | ✓ | Define a lista de componentes que fazem parte do container |
| context | [ContextData](../../contexto.md) |   | É o [contexto](../../contexto.md) contido por este Widget. |
| onInit | List&lt;[Action](../../api-acoes/)&gt; |   | Um parâmetro que te possibilita definir uma lista de ações a serem executadas assim que esse Widget seja exibido. |

## Como usar?



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



### 👉 [ Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/container.json)​
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
