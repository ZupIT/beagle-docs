---
title: Acessibilidade
weight: 253
description: 'Nesta seção, você encontra uma descrição sobre a API de Acessibilidade'
---

---

### O que é?

É um componente que habilita elementos de acessibilidade, como por exemplo, uma mensagem de texto que pode ser lida por um leitor de tela.

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| accessible | Boolean | ✓ | Indica se o componente será interpretado como acessível. Default é `true`. |
| accessibilityLabel | String |   | Uma mensagem que será dita por programas como o `VoiceOver.` |

{{% alert color="warning" %}}
Caso o backend não especifique acessibilidade, os valores padrões de cada plataforma serão utilizados.
{{% /alert %}}

### Como usar?

{{< tabs id="T105" >}}
{{% tab name="JSON" %}}
<!-- json-playground:acessibilidade.json
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
-->
{{% playground file="acessibilidade.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
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
{{% /tab %}}
{{< /tabs >}}

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/cloud/984d1316f43146f9a1341c478783d536/accessibility.json)
