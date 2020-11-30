---
title: "Componente com contexto"
description: >
  Nessa seção, você encontra a descrição do ContextComponent e mais detalhes de
  como ele funciona.
---

---

O `ContextComponent` é uma interface precisa ser implementada em componentes que usam o [**Contexto**](../../api/contexto.md#o-que-e), porque é onde está o atributo `context`.

## Componentes do Beagle com contexto:

1. \*\*\*\*[**Container**](../../api/componentes/layout/container.md)\*\*\*\*
2. \*\*\*\*[**SimpleForm**](../../api/componentes/form/simple-form-web.md)\*\*\*\*
3. \*\*\*\*[**PageView**](../../api/componentes/layout/pageview.md)\*\*\*\*
4. \*\*\*\*[**ScrollView**](../../api/componentes/layout/scrollview.md)\*\*\*\*
5. \*\*\*\*[**TabView**](../../api/componentes/ui/tabview.md)\*\*\*\*

## Componente customizado com contexto

Segue abaixo um exemplo de componente customizado com o contexto:

{% tabs %}
{% tab title="Android" %}
```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): WidgetView(), ContextComponent
```
{% endtab %}

{% tab title="BFF" %}
```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): Widget(), ContextComponent
```
{% endtab %}

{% tab title="iOS" %}
```swift
public struct CustomComponent: RawComponent, HasContext {
    public var context: Context?
    public var otherAttribute: String
}
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Se você quiser criar componentes customizados no iOS, é **necessário registrá-lo**! Veja como registrar [**aqui**](../customizacao/beagle-para-ios/custom-widgets.md#passo-2-registrar-o-widget).
{% endhint %}


