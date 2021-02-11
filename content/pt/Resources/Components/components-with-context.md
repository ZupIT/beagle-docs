---
title: Componente com contexto
weight: 91
description: >-
  Nessa seção, você encontra a descrição do ContextComponent e mais detalhes de
  como ele funciona.
---

---

O `ContextComponent` é uma interface precisa ser implementada em componentes que usam o [**Contexto**]({{< ref path="/api/context#o-que-é" lang="pt" >}}), porque é onde está o atributo `context`.

## Componentes do Beagle com contexto:

1. [**Container**]({{< ref path="/api/components/layout/container" lang="pt" >}})
2. [**SimpleForm**]({{< ref path="/api/components/forms/simple-form" lang="pt" >}})
3. [**PageView**]({{< ref path="/api/components/layout/pageview" lang="pt" >}})
4. [**ScrollView**]({{< ref path="/api/components/layout/scrollview" lang="pt" >}})
5. [**TabView**]({{< ref path="/api/components/ui/tabview" lang="pt" >}})

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
Se você quiser criar componentes customizados no iOS, é **necessário registrá-lo**! Veja como registrar [**aqui**]({{< ref path="/resources/customization/beagle-for-ios/custom-widgets#passo-2-registrar-o-widget" lang="pt" >}}).
{{% /alert %}}
