---
title: Basis
weight: 78
description: This section lists information about the Basis property
---

---

## Basis

This property defines **the standard size of an item along the main axis**. It could change according to the element caracteristics, which means:

- If the father element has a **Flex value** set as: `FlexDirection: row`.The basis will define the screen **width**;
- If the father element has a **Flex Value** set as: `FlexDirection: column`.The basis defines the screen **height**.

## How is it used

### FlexDirection: row

Here you see the **`flexDirection: row`** is used to set the screen **`width` size:**

{{< figure src="/shared/captura-de-tela-2020-06-04-a-s-15.48.12.png" width="150">}}

{{< tabs id="T63" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
	return Container(
		children = listOf(
			createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          basis = UnitValue.real(100)
                      }
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
          }
}
```

{{% /tab %}}

{{% tab name="Swift" %}}

```swift
private func screen() -> Screen {
        return
            Screen(
                navigationBar: NavigationBar(title: "Flex"),
                child:
                Container(children: [
                    createText(backgroundColor: "#142850",text: "1")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#dd7631",text: "2")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#649d66",text: "3")
                        .applyFlex(Flex().basis(100)),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                        )
                )
        )

    }
```

{{% /tab %}}
{{< /tabs >}}

### FlexDirection Column

Here the **`flexDirection: column`** is used to set the screen `height` size

{{< figure src="/shared/captura-de-tela-2020-06-04-a-s-16.01.56.png" width="150">}}

{{< tabs id="T64" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          basis = UnitValue.real(100)
                      }
              )
          ).setFlex {
              flexDirection = FlexDirection.COLUMN
          }
    }
```

{{% /tab %}}

{{% tab name="Swift" %}}

```swift
 private func screen() -> Screen {
        return
            Screen(
                navigationBar: NavigationBar(title: "Flex"),
                child:
                Container(children: [
                    createText(backgroundColor: "#142850",text: "1")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#dd7631",text: "2")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#649d66",text: "3")
                        .applyFlex(Flex().basis(100)),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.column)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### Basis with UnitType.AUTO

It is also possible to put `UnitValue (0.0, UnitType.AUTO)` when using the `basis`. In this case, the value `0.0` is not relevant, because using `UnitType.AUTO` the main axis will be adjusted according to the size of the content. Unless a `size` fixed value is also set for the component in the same direction as the main axis.

{{< tabs id="T65" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
	return Container(
		children = listOf(
			createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               basis = UnitValue(0.0, UnitType.AUTO)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          basis = UnitValue(0.0, UnitType.AUTO)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          basis = UnitValue(0.0, UnitType.AUTO)
                      }
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
          }
}
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
For more information about Basis, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).
{{% /alert %}}
