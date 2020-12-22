---
title: Proguard configuration
weight: 136
description: 'You will find here, ProGuard description and configuration for Beagle.'
---

---

## Introduction

When a obfuscation method is used, it is necessary that some rules are implemented to make sure the IDs internally used in Beagle are not obfuscated or minimized. 

## Example

To make sure it happes, you have to add the following rules to the Proguard file **`android-rules.pro`.**

```markup
proguard-rules.pro

# Beagle uses coroutines in network requests
-keep class kotlinx.coroutines.experimental.android.AndroidExceptionPreHandler { *; }

# Beagle does reflection on generic parameters
-keepattributes Signature, InnerClasses, EnclosingMethod

# Beagle does reflection on method and parameter annotations
-keepattributes RuntimeVisibleAnnotations, RuntimeVisibleParameterAnnotations
-dontwarn org.jetbrains.annotations.**
-keep class kotlin.Metadata { *; }

# Yoga is a dependency used on Beagle
-keep @com.facebook.proguard.annotations.DoNotStrip class * { *; }

# Customized classes for Beagle
-keep @br.com.zup.beagle.annotation.** class * { *; }
-keep @br.com.zup.beagle.android.annotation.** class * { *; }
-keep class * extends br.com.zup.beagle.android.widget.**

# Core classes in Beagle
-keep class br.com.zup.beagle.android.action.** { *; }
-keep class br.com.zup.beagle.android.widget.** { *; }
-keep class br.com.zup.beagle.android.components.** { *; }
-keep class br.com.zup.beagle.android.context.** { *; }
-keep class br.com.zup.beagle.widget.** { *; }
-keep class br.com.zup.beagle.core.** { *; }
-keep class br.com.zup.beagle.analytics.** { *; }
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
