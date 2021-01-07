---
title: Backend
weight: 12
description: 'Here, you''ll find how to configure a backend with Beagle.'
---

---

{{% alert color="danger" %}}
Before you get started, you must know that the steps below are for JVM languages. 

For other languages, your server needs to serve JSON following our API. Also, check out our [**cache**](/resources/cache/) and [**platform specification**](/resources/components/platform-sorting) mechanisms, which you may wish to implement as the clients already support them.
{{% /alert %}}

## Requirements 

Before you integrate Beagle to your application to run it on the backend, it's important to check out if you have installed all the current versions of the following programs:

* **JDK 8+ language \(Kotlin 1.3+ is recommended\)**
* **Maven 3+**
* **Jackson 2+**

If you already have updated all the programs above, then just go to the following instructions.

## Installation

### Step 1: Create a micro-service

When you create a micro-service, we recommend using your team's established mechanisms. If that's not your case, you can just follow the configurations below. 

{{% alert color="warning" %}}
If your team works with micro-services using a framework other than Spring or Micronaut, see [**Beagle Framework**](/resources/customization/beagle-for-backend/beagle-framework) instead.
{{% /alert %}}

For a simple setup, you can choose between 2 frameworks to create your [**BFF**](/key-concepts#backend-for-frontend): 

#### [Micronaut](https://micronaut.io/) 

> A modern, JVM-based, full-stack framework for building modular, easily testable micro-service and serverless applications.

#### [Spring](https://spring.io/)

> Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity has made it the world's most popular Java framework.

Once you choose the framework you'll work with, proceed with the configurations below:

{{< tabs id="T0" >}}
{{% tab name="Micronaut" %}}
### Creating a micro-service

#### Micronaut &lt;= 1.3

As described on [**Micronaut's quick start**](https://docs.micronaut.io/1.3.3/guide/index.html#quickStart), create your application through a CLI tool with this command: 

```kotlin
$ mn create app bff --build maven --lang kotlin
```

This will create an executable Micronaut project using Kotlin and Maven in a directory called `bff`. Open this project on the chosen IDE and follow the following steps to set the dependencies.

#### Micronaut &gt;= 2.0

If you want to use Micronaut 2.0, you can use the new website, very similar to Spring. 

* Click on the link below to download a zip file of the project with the image's option below:  [**Micronaut Launch para Beagle Micronaut Starter**](https://launch.micronaut.io/create/DEFAULT/com.example.bff?lang=kotlin&build=maven&test=junit&javaVersion=JDK_8).

![Micronaut Launch with recommendation to start a Beagle project with Micronaut](/image%20%28108%29.png)

* This configuration uses: 
  * Kotlin with Maven for`Java 8` \(compatible with this version\);
  * `Junit` like the unit tests library. 
* Unzip the file and open the extracted folder in your IDE.
{{% /tab %}}

{{% tab name="Spring" %}}
### Create a micro-service

Use Spring's Initializr to create a project for your micro-service. Click the following link, [**Spring Initializr for Beagle Spring Starter**](https://start.spring.io/#!type=maven-project&language=kotlin&packaging=jar&jvmVersion=1.8&groupId=com.example&artifactId=bff&name=bff&description=Demo%20project%20for%20Beagle%20BFF%20using%20Spring%20Boot&packageName=com.example.bff&dependencies=actuator),  to get recommended settings.

![Spring Initializr with recommended settings for a BFF with Spring, using Beagle Spring Starter](/image%20%288%29.png)

* These settings are: 
  * Maven dependency manager;
  * Kotlin with JAR packaging and Java 8+ compatibility;
  * Spring Boot Actuator dependency.
* Click `GENERATE` to download a zip file containing your project.
* Unzip the file and open the extracted folder in your IDE.
{{% /tab %}}
{{< /tabs >}}

### Step 2: Configure dependencies \(&lt; 1.1.0\)

Once you created and configured the micro-services, you have to add the address of our nexus. To do so, add the following to your `pom.xml`, found in the root of the generated project:


```markup
<repositories>
    <repository>
        <id>bintray-zupit-repo</id>
        <url>https://dl.bintray.com/zupit/repo</url>
    </repository>
</repositories>
```


### Step 3: Include starter dependency

Lastly, you have to add the dependency for the Beagle starter to your backend. In that case, the framework you chose will define the dependency's name \(`artifactId`\) should be done.

Click on the tab of the framework you're using and follow the steps to continue the configuration.

{{< tabs id="T1" >}}
{{% tab name="Micronaut Starter" %}}
### Additional Requirements:

{{% alert color="info" %}}
This starter also configures version **1.3.3** of**`micronaut-runtime`**module in your BFF
{{% /alert %}}

To follow this requirement, you just have to add the dependency below to your `pom.xml`. 

* The current release version of Beagle is: [![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)


```markup
<dependency>
	<groupId>br.com.zup.beagle</groupId>
	<artifactId>beagle-micronaut-starter</artifactId>
	<version>${beagle.version}</version>
</dependency>
```

{{% /tab %}}

{{% tab name="Spring Starter" %}}
### Additional Requirements:

{{% alert color="info" %}}
This starter also configures version **2.2.5** of**`spring-boot-starter-web`**module in your BFF
{{% /alert %}}

To follow this requirement, you just have to add the dependency below to your `pom.xml`. 

* To check which Beagle's version is:[![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)


```markup
<dependency>
	<groupId>br.com.zup.beagle</groupId>
	<artifactId>beagle-spring-starter</artifactId>
	<version>${beagle_version}</version>
</dependency>
```


Insert the Beagle's release version on the place of`${beagle.version}`, in other words, put the Beagle's version highlighted in blue badge above without the **`v character`**.

For example:

![https://img.shields.io/bintray/v/zupit/repo/beagle](/image%20%28107%29.png)-`ext.beagle.version = "0.2.8"`

{{% alert color="warning" %}}
Remember to always check if you're using the latest version of Beagle. To see this information, you just have to pass your mouse above the version number. After that, sync your machine.
{{% /alert %}}

Well done, your initial configuration is ready to be used! 

You can check a screen or server-driven component[ **to test the BFF**](/get-started/using-beagle/). 

{{% alert color="danger" %}}
Spring Boot has a known problem involving `WebMvcConfigurationSupport`. Its presence replaces other configurations, including the ones in Beagle's Spring Starter.

In case you face a similar problem, we suggest you replace it for`WebMvcConfigurer.`   
  
To see more about it, access [**this issue on Github.**](https://github.com/spring-projects/spring-boot/issues/12751)
  
The annotation`@EnableWebMvc`causes the same problem, which means that you should replace it.
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

{{% alert color="success" %}}
Well done, your initial configuration is ready to be used! 
{{% /alert %}}

You can see more of [**how to use Beagle on the backend**](/get-started/using-beagle/backend) or how to test a BFF with server-driven components.

## **Next Steps** 

On this section, you made Beagle's **initial installation** on your application!  
To keep configuring Beagle:

👉Go to [**initial configurations**](/get-started/using-beagle/backend) to enable the use of Beagle on your Web project.

👉 If you want to go straight to practice, access our [**tutorial to create a projeto from zero**.](/get-started/creating-a-project-from-scratch/case-backend)
