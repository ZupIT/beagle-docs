---
title: Componente com contexto
<<<<<<< HEAD
weight: 91
description: >-
  Nessa seção, você encontra a descrição do ContextComponent e mais detalhes de
  como ele funciona.
=======
weight: 94
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
O `ContextComponent` é uma interface precisa ser implementada em componentes que usam o [**Contexto**](../../api/contexto.md#o-que-e), porque é onde está o atributo `context`.

## Componentes do Beagle com contexto:

1. [**Container**](../../api/componentes/layout/container.md)
2. [**SimpleForm**](../../api/componentes/form/simple-form-web.md)
3. [**PageView**](../../api/componentes/layout/pageview.md)
4. [**ScrollView**](../../api/componentes/layout/scrollview.md)
5. [**TabView**](../../api/componentes/ui/tabview.md)

## Componente customizado com contexto

Segue abaixo um exemplo de componente customizado com o contexto:



```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): WidgetView(), ContextComponent
```



```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): Widget(), ContextComponent
```



```swift
public struct CustomComponent: RawComponent, HasContext {
    public var context: Context?
    public var otherAttribute: String
}
```



{{% alert color="warning" %}}
Se você quiser criar componentes customizados no iOS, é **necessário registrá-lo**! Veja como registrar [**aqui**](../customizacao/beagle-para-ios/custom-widgets.md#passo-2-registrar-o-widget).
{{% /alert %}}
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
