---
title: Componente com contexto
weight: 91
description: >-
  Nessa seção, você encontra a descrição do ContextComponent e mais detalhes de
  como ele funciona.
---

---

O `ContextComponent` é uma interface precisa ser implementada em componentes que usam o [**Contexto**](/pt/home/api/context#o-que-é), porque é onde está o atributo `context`.

## Componentes do Beagle com contexto:

1. [**Container**](/pt/home/api/components/layout/container)
2. [**SimpleForm**](/pt/home/api/components/forms/simple-form)
3. [**PageView**](/pt/home/api/components/layout/pageview)
4. [**ScrollView**](/pt/home/api/components/layout/scrollview)
5. [**TabView**](/pt/home/api/components/ui/tabview)

## Componente customizado com contexto

Segue abaixo um exemplo de componente customizado com o contexto:

{{< tabs id="T71" >}}
{{% tab name="Android" %}}

```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): WidgetView(), ContextComponent
```

{{% /tab %}}

{{% tab name="BFF" %}}

```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): Widget(), ContextComponent
```

{{% /tab %}}

{{% tab name="iOS" %}}

```swift
public struct CustomComponent: RawComponent, HasContext {
    public var context: Context?
    public var otherAttribute: String
}
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="warning" %}}
Se você quiser criar componentes customizados no iOS, é **necessário registrá-lo**! Veja como registrar [**aqui**](/pt/home/resources/customization/beagle-for-ios/custom-widgets#passo-2-registrar-o-widget).
{{% /alert %}}
