---
title: How to release a Beagle's version local or remote
weight: 220
description: >-
 In this section, you will find how to release a version of Beagle locally or using a separate repository.
---

---

Follow the instructions according to the operational system you're using:


{{< tabs id="T91" >}}
{{% tab name="Android e Backend" %}}
## Configuring Gradle

If you work on Android or Backend's applications, you must configure the **`gradle.properties`** files that can be found on the root folder.This configuration works on remote and local versions.

As soon as you open the file, the first step is to change the version name that will be released.  For that, you can change the **`VERSION_NAME`** variable value to the value you wish. 


{{% alert color="info" %}}
This variable helps on referencing the version name when you import Beagle. 
{{% /alert %}}

Besides, you have to add a variable called **`RELEASE_SIGNING_ENABLED`** and attribute it to the `false` value. That means you don't need to sign a version, once that this configuration allows a Beagle's version release in local way or to an own repository. 

After you finish these configurations, you must have on your gradel the following variables according to the name you chose to your version (on this example, we used **`beagle-test`**):


```kotlin
gradle.properties (root platform)

VERSION_NAME=beagle-test 
RELEASE_SIGNING_ENABLED=false
```


## Publishing in a remote repository

At the end of the **`gradle.properties`** configuration, you have to configure a file that is on Beagle's root folder, in this case, the  **`maven-publish.gradle`**. On this file, add a target that will define:

* In which repository the version will be released.
* The necessary credentials to access this repository. 


| Keys | Definition |
| :--- | :--- |
| **releaseRepositoryUrl** | Repository's URL where the version will be released.|
| **repositoryUsername** | User name. |
| **repositoryPassword** | Password of the declared user name. |

Check out below a publishing example:


```bash
maven-publish.gradle (root project)

apply plugin: "com.vanniktech.maven.publish"

def versionName = System.env.VERSION_DEPLOY != null ? System.env.VERSION_DEPLOY : VERSION_NAME ?: ""

version = versionName

mavenPublish {
nexus {
    		stagingProfile = "br.com.zup"
	}
	targets {
    		uploadArchives {    
        	releaseRepositoryUrl = "https://meu-repo.com.br"
        	repositoryUsername = "username"
        	repositoryPassword = "password"
    		}
	}
}
```


## Publishing in a local repository

At the end of the **`gradle.properties`** configuration, you must run some **gradle's commands**.

To do so,  go to the root folder on the platform you wish to release the version (Android or Backend) and, in the terminal of your preference, run the following command:

**If you're using a Windows terminal:**

```bash
gradlew clean build publishToMavenLocal
```

**In case you're using another terminal:**

```bash
./gradlew clean build publishToMavenLocal
```

After you run the command, the version will be automatically released.  
{{% /tab %}}

{{% tab name="iOS" %}}
Unlike the Android and Backend configuration, you  don't have to configure the **`gradle.properties`** file on iOS applications, just go straight to the configurations according to the version you want to generate.

In this case, just go straight to the configurations according to the version you want to generate. 


## Publishing in a remote repository

### Using CocoaPods

On the `podfile`  file, like any other dependency, put Beagle and add the address of your repository, see the example below:


```text
pod 'Beagle', :git => 'https://github.com/profile/myrepo'
```

After you have configured the `podfile`, run the following command to download from your repository: 


```text
pod install
```

### Using Carthage

On the `Cartfilefile`, add the repository of your Beagle's version:

```text
github “YourUser/YourRepository”
```

## Publishing in a local repository

### Using CocoaPods

Open the terminal and go to Beagle's root folder and type the following command:

```text
pod spec create MyBeagle
```

And `MyBeagle.podspec`  will be created. Now open this file with a text editor and follow the example:

```swift
Pod::Spec.new do |spec|

spec.name = "MyBeagle"
spec.version = "1.0.0"
spec.summary = "A short description"
spec.description = "Complete description"

spec.platform = :ios, "12.2"

spec.source = { :path => '.' }
```

Now, run the command below on your terminal with the root folder of your project:

```text
pod install
```

### Using Carthage

On the `Cartfile`, add the directory of your Beagle's version like in the example below:


```text
git "file:////Users/beagle" "master"
```

{{% alert color="warning" %}}
Importante que você adicione o caminho completo do diretório com a sua versão do Beagle para que essa chamada funcione corretamente. 
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}