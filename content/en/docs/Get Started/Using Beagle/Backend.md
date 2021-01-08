---
title: Backend
weight: 28
description: >-
  Here, you'll find how to make Beagle's usage configuration for backend's
  projects.
---

---

## Use configuration 

Once you have finished[ **Beagle's installation**, ](/docs/get-started/installing-beagle/backend)your BFF is fully configured for usage, with default settings.

### CORS (Cross-Origin Resource Sharing)

{{% alert color="warning" %}}
**Required configuration only to use your BFF with front-end web.**
{{% /alert %}}

This process it is done according to your backend technology and, for that, we recommend you to check the tool's documentation you have chosen. 

If you are using one of our starters, check out the following links with both framework's documentations about CORS:

* [**Micronaut**](https://docs.micronaut.io/1.3.3/guide/index.html#cors)
* [**Spring**](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc-cors)

We provided a constant `BEAGLE_EXPOSED_HEADERS`, that contains a list of headers names that Beagle needs to expose in your **CORS configuration.**

## A practical BFF example

### Step 1: Create a service

{{< tabs id="T2" >}}
{{% tab name="Micronaut" %}}
First, you should create a class to configure a `Service` . The process is pretty simple, you just have to: 

1. Create a class and name it as `MyService`;
2. Note it with `@Singleton`, because this will be responsible to create your objects.

The example below, you can see the result that must appear on your screen: 


```kotlin
import javax.inject.Singleton

@Service
class MyService {
    fun createAction(): Action = Alert(
        title = "My Dialog",
        message = "This is a native popup!",
        labelOk= "Close"
    )    

    fun createScreen(): Screen = 
        Screen(child = this.createWidget())

    fun createScreenBuilder(): ScreenBuilder = 
        MyScreenBuilder(this.createWidget())

    fun createWidget(): Widget = Text(
        text = "Hello, world!",
        alignment = TextAlignment.CENTER,
        textColor = "#505050"
    )
}

private class MyScreenBuilder(
    private val component: ServerDrivenComponent
) : ScreenBuilder {
    override fun build() = Screen(child = this.component)
}
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}
To start, you should create a class to configure a `Service` . The process is pretty simple, you just have to: 

1. Create a class and name it as `MyService`; 
2. Note it with `@Service` , because this will be responsible to create your objects.


```kotlin
import javax.inject.Singleton

@Service
class MyService {
    fun createAction(): Action = Alert(
        title = "My Dialog",
        message = "This is a native popup!",
        labelOk= "Close"
    )    

    fun createScreen(): Screen = 
        Screen(child = this.createWidget())

    fun createScreenBuilder(): ScreenBuilder = 
        MyScreenBuilder(this.createWidget())

    fun createWidget(): Widget = Text(
        text = "Hello, world!",
        alignment = TextAlignment.CENTER,
        textColor = "#505050"
    )
}

private class MyScreenBuilder(
    private val component: ServerDrivenComponent
) : ScreenBuilder {
    override fun build() = Screen(child = this.component)
}
```

{{% /tab %}}
{{< /tabs >}}

### Step 2: Create a controller

{{< tabs id="T3" >}}
{{% tab name="Micronaut" %}}
The next step is to create a `Controller`class to expose our components through REST API. This class will be noted as `@Controller`.

This class receives a `MyService` through a primary constructor, so Micronaut can automatically make a dependency injection for you.

The endpoints are configured as notes according to HTTP method \(for example, `@Get` to HTTP GET\). They still receive a string that defines your `path`.

To configure your class, follow the example below. Remember to name the file as`MyController` so you can simply copy and paste this example. 


```kotlin
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get

@Controller
class MyController(private val myService: MyService) {
    @Get("/action")
    fun getAction() = myService.createAction()

    @Get("/screen")
    fun getScreen() = myService.createScreen()

    @Get("/builder")
    fun getScreenBuilder() = myService.createScreenBuilder()

    @Get("/widget")
    fun getWidget() = myService.createWidget()
}
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}
Once you made it, the next step is create a `Controller` class to expose our components through REST API. This class must be noted as`@RestController`

This class also must receive `MyService` through a primary constructor so Spring can automatically makes a dependency injection for you.

The endpoints are configured with notes according to HTTP method \(for example `@Get` to HTTP GET\). They receive a string that defines your `path`.

To configure this class, follow the example below. Remember to name the file as`MyController` so you can simply copy and paste this example. 




```kotlin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MyController(private val myService: MyService) {

    @GetMapping("/action")
    fun getAction() = myService.createAction()

    @GetMapping("/screen")
    fun getScreen() = myService.createScreen()

    @GetMapping("/builder")
    fun getScreenBuilder() = myService.createScreenBuilder()

    @GetMapping("/widget")
    fun getWidget() = myService.createWidget()
}
```

{{% /tab %}}
{{< /tabs >}}

### Step 3: Configure your BFF

You can configure cache and serialization using the lines below, by adding them to your `application.properties`. 

{{< tabs id="T4" >}}
{{% tab name="Micronaut" %}}
The cache is configured to include `/screen` and `/widget` endpoints. The TTL for the `/screen` endpoint is configured to 50 seconds.


```text
beagle.cache.endpoint.include=/screen,/widget
beagle.cache.endpoint.ttl./screen=50s
jackson.serializationInclusion=NON_NULL
jackson.serialization.indentOutput=true
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}
Cache is configured to exclude the `/action` endpoint


```text
beagle.cache.endpoint.exclude=/action
spring.jackson.default-property-inclusion=NON_NULL
spring.jackson.serialization.indent-output=true

```

{{% /tab %}}
{{< /tabs >}}

Serialization is configured to skip values that are not null and format the JSONs to make them easier to read.

### Step 4: Configure CORS

{{% alert color="warning" %}}
**Required configuration only to use your BFF with web front-end.**
{{% /alert %}}

{{< tabs id="T5" >}}
{{% tab name="Micronaut" %}}
You can configure CORS with the lines below, adding them in your `application.properties`.

CORS is enabled here with default values to several details, and it will make them permissive. The cache header is exposed.


```text
micronaut.server.cors.enabled=true
micronaut.server.cors.configurations.beagle.exposedHeaders=beagle-hash
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}
You can configure CORS with the classes below, that needs to implement Spring's  `WebMvcConfigurer`interface, overlapping the `addCorsMappings` method.

CORS is configured here to all endpoints with default values to several details, letting them very permissive. Our cache header is exposed using the constant.


```kotlin
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
open class CorsConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**").exposedHeaders(*BEAGLE_EXPOSED_HEADERS)
    }
}
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="danger" %}}
Use a permissive configuration like this one, only in local development environment. It eliminates CORS's security benefits
{{% /alert %}}

We have an enabled CORS withmeusite.com.br like the permitted origin: `GET`, `PUT`, `POST` like the allowed methods `Cache-control` like an allowed header; and `beagle-hash`, `x-meu1` like exposed header. 

{{< tabs id="T6" >}}
{{% tab name="Micronaut" %}}

```kotlin
micronaut.server.cors.enabled=true
micronaut.server.cors.configurations.meu.allowedOrigins=meusite.com.br
micronaut.server.cors.configurations.meu.allowedMethods=GET,PUT,POST
micronaut.server.cors.configurations.meu.allowedHeaders=Cache-Control
micronaut.server.cors.configurations.meu.exposedHeaders=beagle-hash,x-meu1
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}

```kotlin
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
open class CorsConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
                    .allowedOrigins("meusite.com.br")
                    .allowedMethods("GET,PUT,POST")
                    .allowedHeaders("Cache-Control")
                    .exposedHeaders(*(BEAGLE_EXPOSED_HEADERS + "x-meu1"))
    }
}
```

{{% /tab %}}
{{< /tabs >}}

### Step 5: Start your BFF

After you have done the configuration above, you can start your BFF. Just run the command below in your project, a reminder, it needs to starts the server on port 8080 in your localhost. 

{{< tabs id="T7" >}}
{{% tab name="Micronaut" %}}
```bash
$ mvn compile exec:exec
```
{{% /tab %}}

{{% tab name="SpringBoot" %}}
```
$ mvn spring-boot:run
```
{{% /tab %}}
{{< /tabs >}}

Now that the BFF is running, to see the resulting JSON, insert the URL http://localhost:8080/action directly on your navigator. You should get the result below.

```text
{
  "_beagleAction_" : "beagle:alert",
  "title" : "My Dialog",
  "message" : "This is a native popup!",
  "labelOk" : "Close"
}
```
