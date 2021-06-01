---
title: Android
weight: 6
description: >-
  Nesta seção, você encontra o passo a passo da configuração do Beagle no
  Android.
---

---

## Requisitos

Antes de configurar o Beagle para o seu sistema Android, é importante que você confirme as versões dos programas que estão instalados na sua máquina. Para a ferramenta funcionar, é necessário ter as seguintes versões: ‌

- **JDK 8+ language**
- **Android API level: pelo menos a 19 ou superior**
- **Kotlin 1.3+**

## **Passo 1: Configurar as dependências**

Você precisa ajustar as dependências do seu repositório para receber o Beagle. Para isso, utilize as configuração abaixo para fazer o **download da biblioteca**.

```kotlin
allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
```

{{% alert color="warning" %}}
A configuração acima deve ser adicionada em `allprojects{}`
{{% /alert %}}

## **Passo 2: Incluir os plugins**

Uma vez feita a primeira configuração, agora você precisa incluir o plugin do kapt e do Beagle como dependências dentro do seu gerenciador de dependências, segue abaixo um exemplo.

A versão atual do Beagle é: [![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)


```kotlin
plugins {
	id 'kotlin-kapt'
}

android {
    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_1_8
    }
}

ext.beagle_version = "${beagle_version}"

dependencies {
    implementation "br.com.zup.beagle:android:$beagle_version"
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
}
```

Insira a versão de release do Beagle no lugar de `${beagle.version}`, ou seja, coloque a versão do Beagle destacada em azul da badge acima, mas sem o **caracter v** que antecede os números de versão.

Por exemplo: undefined-`ext.beagle.version = "1.8.0"`

{{% alert color="warning" %}}
Lembre de sempre verificar se você está usando a versão mais recente do Beagle. Para saber disso, basta passar o mouse por cima do número da versão. Depois disso, sincronize com sua máquina.
{{% /alert %}}

## Próximos Passos

Nesta seção, você fez a **instalação inicial** do Beagle na sua aplicação!  
Para continuar a configurar o Beagle:

👉Vá para as [**configurações iniciais** ]({{< ref path="/get-started/using-beagle/android" lang="pt" >}})para habilitar uso do Beagle no seu projeto Android

👉 Se quiser ir direto para prática, acesse nosso [**tutorial para criar um projeto do zero**]({{< ref path="/get-started/creating-a-project-from-scratch/case-android/" lang="pt" >}})
