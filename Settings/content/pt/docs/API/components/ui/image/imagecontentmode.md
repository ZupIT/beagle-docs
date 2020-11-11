---
title: "ImageContentMode"
description: >
    Nesta seção, você encontra a descrição da classe ImageContentMode.
---

É uma classe `ENUM` responsável por definir como a imagem declarada será visualizada na UI.

{% tabs %}
{% tab title="Kotlin DSL" %}
```kotlin
enum class ImageContentMode {
    FIT_XY,
    FIT_CENTER,
    CENTER_CROP,
    CENTER
}
```
{% endtab %}
{% endtabs %}

Ele pode ser configurado como `FIT_XY`, `FIT_CENTER`, `CENTER_CROP` e `CENTER`: 

1. **FIT\_XY:** Considera a escala X e Y de forma que a imagem de origem dê match com as dimensões  previstas para visualização no UI. Isso pode alterar a proporção da imagem. 
2. **FIT\_CENTER:** Considera a escala computada que irá manter a proporção original da imagem e ainda garantir que ela encaixe inteiramente no espaço destinado no UI. Pelo menos um dos eixos \(X ou Y\) irá servir. O resultado é centralizado já no local da imagem. 
3. **CENTER\_CROP:** Considera a escala uniforme \(mantendo a proporção da imagem\) de forma que ambas as dimensões \(largura e altura\) da imagem que será igual ou maior à dimensão correspondente na visualização no UI. 
4. **CENTER:** imagem de centro que pode ser visualizada, mas não redimensionada.

