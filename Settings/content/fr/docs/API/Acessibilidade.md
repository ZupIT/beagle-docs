---
title: Acessibilidade
<<<<<<< HEAD
weight: 239
description: 'Nesta seção, você encontra uma descrição sobre a API de Acessibilidade'
=======
weight: 255
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
### O que é?

Por enquanto, existem dois atributos comuns de acessibilidade entre todas as plataformas que o Beagle suporta.

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| accessible | Boolean | ✓ | Indica se o componente será interpretado como acessível. Default é `true`. |
| accessibilityLabel | String |   | Uma mensagem que será dita por programas como o `VoiceOver.` |

{{% alert color="warning" %}}
Caso o backend não especifique acessibilidade, os valores padrões de cada plataforma serão utilizados.
{{% /alert %}}

### Como usar?



```typescript
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "accessibility": {
            "accessibilityLabel": "Image Label",
            "accessible": true
          }
    }
  ]
}
```



```kotlin
Container(
        children = listOf(
            Image(
                path = ImagePath.Remote("https://i.ibb.co/rvRN9kv/logo.png")
            ).applyAccessibility(
                accessibility = Accessibility(true, "Image Label")
            )
        )
    )
```



### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/cloud/984d1316f43146f9a1341c478783d536/accessibility.json)
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
