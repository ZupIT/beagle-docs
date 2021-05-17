---
title: "Beagle gRPC"
weight: 1
description: >-
  In this section, you will find all information related to a backend Library that provides a gRPC service allowing your gRPC application to support Beagle Screens.
---

## What is gRPC?

gRPC is a new and fast growing technology that allows different systems to communicate through a network connection. It's based on
**HTTP 2** and is an alternative to the more common standard **REST**. The gRPC proposal is that the client interacts with the
server through simple function calls. These functions are code automatically generated via the gRPC tool.

[Learn more...](https://grpc.io/)

## How Beagle gRPC works?

This library allows you to create Beagle applications using gRPC. It acts as a translator, converting the beagle's JSON contract
to a protocol buffer, allowing your BFF to connect with any gRPC application. The lib provides an abstraction that implements a
gRPC service that makes it possible to register your screens, and a method that returns them to a gRPC client.

## How to use Beagle gRPC in your BFF project

{{% alert color="warning" %}}

- Requirements:
  - JDK 8+
- It is recommended that you use a lib with springboot or micronaut to help on usability. Follow both examples below.

{{% /alert %}}

### Step 1: Create gRPC project

{{< tabs id="n7139528701" >}}
{{% tab name="Spring Boot" %}}

#### Use spring project generator

- You can access [spring website here](https://start.spring.io) and generate a zip project with the basic settings already configured.

![](/shared/Screenshot-spring-initializer-grpc-example.png)

{{% /tab %}}

#### Use micronaut project generator

- You can access [micronaut website here](https://micronaut.io/launch/) and generate a zip project with the basic settings already configured

{{% tab name="Micronaut" %}}
![](/shared/Screenshot-micronaut-grpc-example.png)
{{% /tab %}}
{{< /tabs >}}

- Now, you can extract zip folder generated, and open with your favorite IDE. We recomended Intellij Community.

### Step 2: Install Beagle gRPC lib

- Open the gradle.build file (or pom.xml if you choose maven) in your project root and add the Beagle gRPC library

{{< tabs id="n01023810872619" >}}
{{% tab name="Spring Boot" %}}

#### Gradle project

```groovy
dependencies {
  ...
  implementation("br.com.zup:beagle-grpc-backend:0.0.1")
  implementation("net.devh:grpc-server-spring-boot-starter:2.11.0.RELEASE")
}
```

#### Maven project

```xml
<dependencies>
    ...
    <dependency>
        <groupId>net.devh</groupId>
        <artifactId>grpc-server-spring-boot-starter</artifactId>
        <version>2.11.0.RELEASE</verion>
    </dependency>
    <dependency>
        <groupId>br.com.zup</groupId>
        <artifactId>beagle-grpc-backend</artifactId>
        <version>0.0.1</verion>
    </dependency>
</dependencies>
```

{{% /tab %}}

{{% tab name="Micronaut" %}}

#### Gradle project

```groovy
dependencies {
  ...
  implementation("br.com.zup:beagle-grpc-backend:0.0.1")
}
```

#### Maven project

```xml
<dependencies>
    <dependency>
        <groupId>br.com.zup</groupId>
        <artifactId>beagle-grpc-backend</artifactId>
        <version>0.0.1</verion>
    </dependency>
</dependencies>
```

{{% /tab %}}
{{< /tabs >}}

### Step 3: Create a Beagle Screen

#### Using Beagle screen builders

- Create a class named HomeScreen and extend it from ScreenBuilder , that is a beagle framework class

```kotlin
import br.com.zup.beagle.widget.layout.Container
import br.com.zup.beagle.widget.layout.Screen
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.beagle.widget.ui.Text

class HomeScreen(private val parameters: String) : ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                Text("Hello. This is a $parameters!")
            )
        )
    )
}
```

- Create another class named SplashScreen that extends from ScreenBuilder too.

```kotlin
import br.com.zup.beagle.core.Style
import br.com.zup.beagle.ext.applyStyle
import br.com.zup.beagle.widget.action.Navigate
import br.com.zup.beagle.widget.action.Route
import br.com.zup.beagle.widget.core.EdgeValue
import br.com.zup.beagle.widget.core.UnitValue
import br.com.zup.beagle.widget.layout.Screen
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.beagle.widget.ui.Button

object SplashScreen : ScreenBuilder {
    override fun build() = Screen(
        child = Button(
            text = "Button example",
            onPress = listOf(
                Navigate.PushView(
                    Route.Remote(
                        "text",
                        true
                    )
                )
            ),
        ).applyStyle(
            style = Style(
                margin = EdgeValue(
                    top = UnitValue.real(15)
                )
            )
        )
    )
}
```

### Step 4: Create a gRPC service

#### Using Beagle grpc lib

- Create a class named MyBeagleAppService and extend it from BeagleScreenService

{{< tabs id="tab-9192" >}}
{{% tab name="Spring Boot" %}}

```kotlin
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.grpcbff.interceptor.BeagleHeadersInterceptor
import br.com.zup.grpc.BeagleScreenService
import net.devh.boot.grpc.server.service.GrpcService
import br.com.zup.grpcbff.screen.HomeScreen
import br.com.zup.grpcbff.screen.SplashScreen

@GrpcService
class MyBeagleAppService: BeagleScreenService() {
    override fun screens(): Map<String, (String) -> ScreenBuilder> {
        return mapOf(
            "home" to { params -> HomeScreen(params) },
            "splash" to { SplashScreen },
        )
    }
}
```

{{% /tab %}}
{{% tab name="Micronaut" %}}

```kotlin
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.grpc.BeagleScreenService
import br.com.zup.screen.SplashScreen
import br.com.zup.screen.HomeScreen
import javax.inject.Singleton

@Singleton
class MyBeagleAppService: BeagleScreenService() {
    override fun screens(): Map<String, (String) -> ScreenBuilder> {
        return mapOf(
            "splash" to { SplashScreen },
            "home" to { params -> HomeScreen(params) }
        )
    }
}
```

{{% /tab %}}
{{< /tabs >}}

### Step 5: Run your BFF API

#### Windows System

- Open a terminal and navigate to your new created project root and run the command:

{{< tabs id="tab-8175" >}}
{{% tab name="Gradle" %}}

```shell
./gradlew.bat run
```

{{% /tab %}}
{{% tab name="Maven" %}}

#### Micronaut

```shell
./mvnw.bat mn:run
```

#### Spring Boot

```shell
./mvnw.bat spring-boot:run
```

{{% /tab %}}
{{< /tabs >}}

Done! Your application will already be available in localhost:

- Micronaut: `http://localhost:50051/`
- Spring Boot: `http://localhost:9090/`

### Step 6: Access your screen service

- Finally, you can access the Beagle screen payload using the getScreen method from the BeagleScreenService

- For this example, you will need a client in order to get your service response. We recommend the [BloomRPC](https://github.com/uw-labs/bloomrpc) to simulate a local request on your gRPC API:

- You will also need to add the lib proto files in the bloomRPC client. You can access these files [here](https://github.com/ZupIT/beagle-helpers/backend/grpc-lib/src/main/proto)

### **Read more about beagle gRPC**

#### 👉 This tutorial is available on github with more advanced examples, such as headers and interceptors for example. If you are interested, access them here on [backend examples](https://github.com/ZupIT/beagle-helpers/backend/examples)
