---
title: Android
weight: 6
description: "You will find here how to make Android's configuration to install Beagle."
---

---

## Requirements

Before you start to configure Beagle for your Android system, it's important to check out if you have already installed all the current versions of the following programs:

- **JDK 8+ language**
- **Android API level: at least 19 or higher**
- **Kotlin 1.3+**

## **Step 1: Dependencies' configuration**

You have to adjust your repository's dependencies to receive Beagle. To do so, use the following configurations to **download Beagle's library.**

For version prior to 1.1.0 add to build.gradle maven{url}:

```kotlin
allprojects {
    repositories {
        google()
        jcenter()
        maven {
            url 'https://dl.bintray.com/zupit/repo'
        }
    }
}
```

For version greater than or equal to 1.1.0 add to build.gradle mavenCentral ():

```kotlin
allprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
    }
}
```

{{% alert color="warning" %}}
The above configuration must be added to `allprojects{}`
{{% /alert %}}

## **Step 2: Include plugins**

Once you made the first configuration, now you have to include the kapt and Beagle's plugin as dependencies on your dependency manager, there are two options below to add the plugin.

The current release version of Beagle is[![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)

{{< tabs name="T200" >}}
{{% tab name="apply plugin" %}}

```kotlin
apply plugin: 'kotlin-kapt'

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

{{% /tab %}}
{{% tab name="plugins" %}}

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

{{% /tab %}}
{{< /tabs >}}

Insert the Beagle's release version on the place of`${beagle.version}`, in other words, put the Beagle's version highlighted in blue badge above without the **v character**.

For example: undefined-`ext.beagle.version = "0.2.8"`

{{% alert color="warning" %}}
Remember to always check if you're using the latest version of Beagle. To see this information, you just have to pass your mouse above the version number. After that, sync your machine.
{{% /alert %}}

## Next Steps

On this section, you made Beagle's **initial installation** on your application!  
Now, keep configuring Beagle:

👉Go to[ **initial configurations**](/get-started/using-beagle/android) to enable the use of Beagle on your Android project.

👉 If you want to go straight to practice, access our [**tutorial to create a project from scratch**](/get-started/creating-a-project-from-scratch/case-android/).
