---
title: Imagecontentmode
weight: 291
description: Here you'll find a ImageContentMode description.
---

---

It's an `ENUM` class responsible to define how the stated image will be visualized on UI.

{{< tabs name="T117" >}}
{{% tab name="Kotlin DSL" %}}
```kotlin
enum class ImageContentMode {
    FIT_XY,
    FIT_CENTER,
    CENTER_CROP,
    CENTER
}
```
{{% /tab %}}
{{< /tabs >}}

It can be configured as `FIT_XY`, `FIT_CENTER`, `CENTER_CROP` and `CENTER`: 

1. **FIT\_XY:** Considers the X and Y scale so the original image matches to the predicted dimensions for the UI visualization. It can change the image proportion. 
2. **FIT\_CENTER:** Considers a computed scale that will keep the image's original proportion and also guarantees that it entirely fits on the UI's space. At least two axes \(X or Y\) will serve. The result is centralized on the image's local. 
3. **CENTER\_CROP:** Considers an uniform scale \(keeping the image's proportion\) so both image's dimensions \(width and height\) will be equal or bigger than the dimension correspondent to UI's view. 
4. **CENTER:** center image that will be visualized, but not redimensioned.
