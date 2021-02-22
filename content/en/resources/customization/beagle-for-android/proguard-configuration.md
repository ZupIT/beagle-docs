---
title: Proguard configuration
weight: 136
description: 'You will find here, ProGuard description and configuration for Beagle.'
---

---

## Introduction

Beagle contains minimum rules necessary for its components to work without the need for your application to add any rules in ProGuard / R8. However, in the annotations `RegisterWidget` and ` RegisterAction` you need to fill them with their respective names and if you have an object inside your component you need to annotate it with `@ BeagleJson`

## Example

To ensure that your component works normally with ProGuard / R8 active, you should note the classes used with the annotation `@BeagleJson:`


```kotlin

@BeagleJson
enum class MyType {
    PASSWORD, TEXT;
}

@BeagleJson
data class MyText(val textOne: String, val textTwo: String)

@RegisterWidget("myText")
data class Text(
    val text: Bind<String>,
    val type: MyType,
    val myText: MyText,
) : WidgetView() {

    override fun buildView(rootView: RootView): TextView
     = TextView(rootView.getContext())

}

@RegisterAction("CustomAndroidAction")
data class CustomAndroidAction(
    val value: String,
    val intValue: Int
) : Action {
    override fun execute(rootView: RootView, origin: View) { }
}

```

{{% alert color="info" %}}
You also have to enable `minifyEnable` and `shrinkResources` on `buildType` declaring them as true to test the ProGuard obfuscation.
{{% /alert %}}

You must activate ProGuard in your IDE, to test it, you can use Android Studio, just add the listed configuration below:

```text
buildTypes {
    release {
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile(
            'proguard-android-optimize.txt'),
            'proguard-rules.pro'
    }
}
```
