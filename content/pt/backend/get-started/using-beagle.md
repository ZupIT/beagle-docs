---
title: Usando o Beagle
weight: 29
description: >-
  Nesta seção, você encontra o passo a passo para fazer as configurações para o
  uso do Beagle em seu projeto Backend.
---

---

## Configurações de uso

Quando você finalizar a [**instalação do Beagle**]({{< ref path="/backend/get-started/installing-beagle" lang="pt" >}}), seu BFF estará com a configuração padrão de uso.

### CORS (Cross-Origin Resource Sharing)

{{% alert color="warning" %}}
**Configuração obrigatória apenas para usar seu BFF com front-end web.**
{{% /alert %}}

Este processo é feito de acordo com sua tecnologia de backend e, por isso, recomendamos que você cheque a documentação da ferramenta escolhida para ver que diz a respeito disso.

Se você estiver usando um de nossos starters, segue os links das documentações dos frameworks sobre o CORS:

- [**Micronaut**](https://docs.micronaut.io/1.3.3/guide/index.html#cors)
- [**Spring**](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-cors)

Disponibilizamos uma constante, `BEAGLE_EXPOSED_HEADERS`, contendo uma lista dos nomes das headers que o próprio Beagle precisa para poder expor na sua **configuração de CORS.**

## Um exemplo prático de BFF

### Passo 1: Criar um serviço

{{% alert color="warning" %}}
É importante reafirmar que as classes `service`, `controller` ou `builder` devem estar no mesmo pacote que a `Application file`, como exemplificado abaixo:
{{% /alert %}}

![](/shared/image%20%2829%29.png)

{{< tabs id="T2" >}}
{{% tab name="Micronaut" %}}
Para começar, você deve criar uma classe para configurar um serviço. O processo é bem simples basta:

1. Criar uma classe e nomeá-la como `MyService`
2. Anotá-la com o `@Singleton`

No exemplo abaixo, você confere o resultado que deve aparecer na sua tela:

```kotlin
import br.com.zup.beagle.widget.core.TextAlignment
import br.com.zup.beagle.widget.layout.Screen
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.beagle.widget.ui.Text
import javax.inject.Singleton

@Singleton
class MyService {

    fun getMyScreen() : ScreenBuilder = MyScreen()

}

class MyScreen : ScreenBuilder {
    override fun build() = Screen(
        child = Text(
            text = "Hello World!",
            alignment = TextAlignment.CENTER,
            textColor = "#505050"
        )
    )
}
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}
Para começar, você deve criar uma classe para configurar um serviço. O processo é bem simples basta:

1. Criar uma classe e nomeá-la como `MyService`
2. Anotá-la com o `@Service`

No exemplo abaixo, você confere o resultado que deve aparecer na sua tela:

```kotlin
import br.com.zup.beagle.widget.core.TextAlignment
import br.com.zup.beagle.widget.layout.Screen
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.beagle.widget.ui.Text
import javax.inject.Singleton

@Service
class MyService {

    fun getMyScreen() : ScreenBuilder = MyScreen()

}

class MyScreen : ScreenBuilder {
    override fun build() = Screen(
        child = Text(
            text = "Hello World!",
            alignment = TextAlignment.CENTER,
            textColor = "#505050"
        )
    )
}
```

{{% /tab %}}
{{< /tabs >}}

### **Passo 2: Criar um Controller**

{{< tabs id="T3" >}}
{{% tab name="Micronaut" %}}
O próximo passo é criar uma classe Controller para expor nossos componentes via REST API. Esta classe ser anotada com `@Controller`.

Além disso, a classe também deve receber um MyService via construtor primário para que o Micronaut faça automaticamente a injeção da dependência para você.

Os endpoints são configurados com anotações seguindo o método HTTP \(por exemplo, `@Get` para `HTTP` `GET`\). Eles recebem ainda uma string que define o seu path.

Para configurar sua classe, siga o exemplo abaixo. Lembre de nomear o arquivo como `MyController` para que você possa simplesmente copiar e colar este exemplo.

{% code title="" %}}

```kotlin
import br.com.zup.beagle.widget.layout.ScreenBuilde
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get

@Controller
class MyController(private val myService: MyService) {

    @Get("/screen")
    fun getScreen() : ScreenBuilder = myService.getMyScreen()

}
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}
Feito isso, o próximo passo é criar uma classe Controller para expor nossos componentes via REST API. Esta classe ser anotada com `@RestController`.

Além disso, ela também deve receber `MyService` via um construtor primário para que o Spring automaticamente faça a injeção de dependência para você.

Os endpoints são configurados com anotações seguindo o método HTTP \(por exemplo `@GetMapping` para HTTP `GET`\). Eles recebem uma string que define o seu path.

Para configurar sua classe, siga o exemplo abaixo. Lembre de nomear o arquivo como `MyController` para que você possa simplesmente copiar e colar este exemplo:

```kotlin
import br.com.zup.beagle.widget.layout.ScreenBuilder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MyController(private val myService: MyService) {

    @GetMapping("/screen")
    fun getScreen() : ScreenBuilder = myService.getMyScreen()
}
```

{{% /tab %}}
{{< /tabs >}}

### **Passo 3: Configurar o BFF**

Você pode configurar cache e serialização com as linhas abaixo, adicionando elas no seu `application.properties`.

{{< tabs id="T4" >}}
{{% tab name="Micronaut" %}}

```kotlin
jackson.serializationInclusion=NON_NULL
jackson.serialization.indentOutput=true
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}

```kotlin
spring.jackson.default-property-inclusion=NON_NULL
spring.jackson.serialization.indent-output=true
```

{{% /tab %}}
{{< /tabs >}}

A serialização é configurada para ignorar valores que são null e formatar o JSON para facilitar leitura.

### Passo 4: Configurar o CORS

{{% alert color="warning" %}}
**Configuração obrigatória apenas para usar o BFF com frontend web**
{{% /alert %}}

{{< tabs id="T5" >}}
{{% tab name="Micronaut" %}}
Você pode configurar CORS com as linhas abaixo, adicionando elas no seu **`application.properties`**.

Aqui CORS é habilitado com valores padrões para vários detalhes, deixando-os muito permissivos. Nossa header de cache é exposta.

```kotlin
micronaut.server.cors.enabled=true
micronaut.server.cors.configurations.beagle.exposedHeaders=beagle-hash
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}

Você pode configurar CORS com as classes abaixo, que precisam implementar a interface `WebMvcConfigurer` do Spring, sobrepondo o método `addCorsMappings`.

Aqui CORS é configurado para todos os endpoints com valores padrões para vários detalhes, deixando-os muito permissivos. Nossa header de cache é exposta usando a constante.

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
Use uma configuração permissiva como essa apenas em ambiente local de desenvolvimento. Ela elimina todos os benefícios de segurança do CORS.
{{% /alert %}}

Configurando mais granularmente, temos aqui CORS habilitado com meusite.com.br como origem permitida; `GET`, `PUT`, `POST` como métodos permitidos; `Cache-control` como header permitida; e `beagle-hash`, `x-meu1` como header expostas.

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
            .allowedOrigins("mywebsite.com")
            .allowedMethods("GET,PUT,POST")
            .allowedHeaders("Cache-Control")
            .exposedHeaders(*(BEAGLE_EXPOSED_HEADERS + "x-meu1"))
    }
}
```

{{% /tab %}}
{{< /tabs >}}

### Passo 5: Iniciar o BFF

Depois de realizar as configurações acima, você já pode iniciar seu BFF. Para isso, basta usar o comando abaixo em seu projeto, lembrando que ele deve começar o servidor na porta 8080 em seu localhost.

{{< tabs id="T7" >}}
{{% tab name="Micronaut" %}}

```bash
$ mvn compile exec:exec
```

{{% /tab %}}

{{% tab name="SpringBoot" %}}

```bash
$ mvn spring-boot:run
```

{{% /tab %}}
{{< /tabs >}}

Agora que seu BFF está executando, para ver o JSON resultante, insira a URL http://localhost:8080/screen direto no seu navegador e deve obter o resultado abaixo.

```json
{
  "_beagleComponent_": "beagle:screenComponent",
  "child": {
    "_beagleComponent_": "beagle:text",
    "text": "Hello, world!",
    "textColor": "#505050",
    "alignment": "CENTER"
  }
}
```
