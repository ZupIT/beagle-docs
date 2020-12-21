---
title: Display
weight: 84
description: This section lists information about the Display property
---

---

## Display

This property defines how this component displays.That allows a container to be `flexible` or `blocked` according to the value defined. The Display also provides a flexible context for all of its direct child elements. 

In this property, we have two attributes: 

* Flex
* None

### **Flex** 

When this value is set it allows the elements to be flexible.

### **None** 

When this value is set, the elements won't be shown on the screen, thus having their height and width 0.

![](https://lh6.googleusercontent.com/3cy2o8XKmTf0wequEI5ycerpdW48FvjiyXGvpfDtg3sOq3qz6ZJnKPQhVZ-9B0ed7GyUGGNQwfQbk1uEzDEADfmouCFPlrWWpjemG7yKHuhYkjvoY3zCe0nKVgYCqVWJA3VGS6_-)

### 

{{< tabs name="T68" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(display = FlexDisplay.NONE)
                ),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(flexDirection = FlexDirection.ROW,
                alignItems = AlignItems.CENTER,
                justifyContent = JustifyContent.CENTER,
                grow = 1.0
            )
        )
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
                    createText(backgroundColor: "#142850",text: "1"),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().display(.none)),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .justifyContent(.center)
                            .alignItems(.center)
                            .alignItems(.center)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

**For more information about Display, check out the [**Yoga Layout documentation**](https://yogalayout.com/docs/flex/).**
