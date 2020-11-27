---
title: Configuração do Proguard
weight: 117
description: >-
  Nesta seção, você encontra a descrição da configuração do ProGuard para o
  Beagle.
---

---

## Introdução

Quando um método de ofuscação é usado, é necessário que algumas regras sejam implementadas para garantir que os nomes e os IDs usados  internamente pelo Beagle, não sejam ofuscados ou minificados. 

## Exemplo

Para garantir isso, você deve adicionar as seguintes regras no arquivo **`android-rules.pro`** do ProGuard:

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

{% hint style="info" %}
Aqui, você também habilita o `minifyEnable` e `shrinkResources` no `buildType` declarando-os como _**true**_ ****para testar a ofuscação do ProGuard.
{% endhint %}

Para testar o ProGuard você deve ativá-lo na sua IDE, você pode usar o Android Studio, adicione a configuração listada abaixo: 

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
