---
title: "Beagle gRPC para backend"
weight: 1
description: >-
  Nesta sessão, você encontra todas as informações relacionadas a biblioteca de gRPC para backend oferecendo um serviço que permite sua aplicação gRPC suportar as telas do Beagle.
---

## O que é gRPC?

gRPC é uma tecnologia nova e de rápido crescimento que permite que diferentes sistemas se comuniquem por meio de uma conexão de rede. É baseado em ** HTTP 2 ** e é uma alternativa ao padrão **REST**. A proposta do gRPC é que o cliente interaja com o servidor através de chamadas de função simples. Essas funções são códigos gerados automaticamente por meio da ferramenta gRPC.

[Learn more...](https://grpc.io/)

## Como o Beagle gRPC funciona?

Essa biblioteca permite que você crie BFFs do Beagle e exiba suas screens com gRPC. Ele atua como um tradutor, convertendo JSONs do Beagle em protocol buffers. A lib fornece uma abstração que implementa um serviço gRPC que possibilita o registro de suas screens e um método que as retorna para um cliente gRPC.

## Como usar o Beagle gRPC no seu BFF?

{{% alert color="warning" %}}

- Requisitos:
  - JDK 8+
- É recomendado que utilize os frameworks do Spring boot e Micronaut para facilitar a usabilidade da biblioteca.

{{% /alert %}}

### Passo 1: Crie um projeto gRPC

{{< tabs id="n7139528701" >}}
{{% tab name="Spring Boot" %}}

#### Gerando um projeto Spring Boot

- Você pode acessar o [website do Spring Boot](https://start.spring.io) e gerar um arquivo zip do projeto com as configurações básicas definidas por padrão.

![](/shared/Screenshot-spring-initializer-grpc-example.png)

{{% /tab %}}

#### Gerando um projeto com Micronaut

- Voce pode acessar o [website do Micronaut](https://micronaut.io/launch/) e gerar um arquivo zip do projeto com as configurações básicas definidas por padrão

{{% tab name="Micronaut" %}}
![](/shared/Screenshot-micronaut-grpc-example.png)
{{% /tab %}}
{{< /tabs >}}

- Agora, voce pode extrair o arquivo zip gerado, e abrir com sua IDE favorita. Nós recomendamos o Intellij Community.

### Passo 2: Instale o Beagle gRPC

- Abre o arquivo gradle.build, (ou pom.xml se voce optou pelo Maven) localizado na raiz do seu projeto, e adicione a biblioteca do Beagle gRPC:

{{< tabs id="n01023810872619" >}}
{{% tab name="Spring Boot" %}}

#### Projeto Gradle

```groovy
dependencies {
  ...
  implementation("br.com.zup:beagle-grpc-backend:${beagleGrpcVersion}")
  implementation("net.devh:grpc-server-spring-boot-starter:${springGrpcVersion}")
}
```

#### Projeto Maven

```xml
<dependencies>
    ...
    <dependency>
        <groupId>net.devh</groupId>
        <artifactId>grpc-server-spring-boot-starter</artifactId>
        <version>${spring.grpc.version}</verion>
    </dependency>
    <dependency>
        <groupId>br.com.zup</groupId>
        <artifactId>beagle-grpc-backend</artifactId>
        <version>${beagle.grpc.version}</verion>
    </dependency>
</dependencies>
```

{{% /tab %}}

{{% tab name="Micronaut" %}}

#### Projeto Gradle

```groovy
dependencies {
  ...
  implementation("br.com.zup:beagle-grpc-backend:${beagleGrpcVersion}")
}
```

#### Projeto Maven

```xml
<dependencies>
    <dependency>
        <groupId>br.com.zup</groupId>
        <artifactId>beagle-grpc-backend</artifactId>
        <version>${beagle.grpc.version}</verion>
    </dependency>
</dependencies>
```

{{% /tab %}}
{{< /tabs >}}

### Passo 3: Crie uma Beagle Screen

#### Usando os screen builders do Beagle

- Crie uma classe chamada HomeScreen, estendendo de ScreenBuilder, que é uma das abstrações para a construção de telas fornecidas pelo Beagle framework

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

- Crie outra classe chamada SplashScreen que também estende de ScreenBuilder.

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

### Passo 4: Crie um serviço gRPC

#### Usando a biblioteca do Beagle gRPC

- Crie uma classe chamada MyBeagleAppService e extenda-a de BeagleScreenService

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

### Passo 5: Execute seu BFF

#### Sistemas Windows

- Abre um terminal, navegue até a raiz do projeto criado e execute o comando:

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

#### Sistemas Linux ou Mac

- Abra um terminal, navegue até a raiz do projeto criado e execute o comando:

{{< tabs id="tab-8175621" >}}
{{% tab name="Gradle" %}}

```shell
./gradlew run
```

{{% /tab %}}
{{% tab name="Maven" %}}

#### Micronaut

```shell
./mvnw mn:run
```

#### Spring Boot

```shell
./mvnw spring-boot:run
```

{{% /tab %}}
{{< /tabs >}}

Pronto! Sua aplicação estará disponível localmente no endereço:

- Micronaut: `http://localhost:50051/`
- Spring Boot: `http://localhost:9090/`

### Passo 6: Acesse seu screen service

- Finalmente, voce pode acessar os retornos do seu seu serviço gRPC usando o método getScreen do BeagleScreenService que foi implementado.

- Para este exemplo, você precisará de um cliente para obter a resposta do serviço. Recomendamos o [BloomRPC](https://github.com/uw-labs/bloomrpc) para simular uma solicitação local em sua API gRPC

- Você também precisará adicionar os arquivos proto da lib do Beagle gRPC no cliente bloomRPC. Você pode acessar esses arquivos [aqui](https://github.com/ZupIT/beagle-helpers/backend/grpc-lib/src/main/proto)

### **Leia mais sobre o beagle com gRPC**

#### 👉 Este tutorial está disponível no GitHub com exemplos mais avançados, como headers e interceptors por exemplo. Se você estiver interessado, [acesse-os aqui](https://github.com/ZupIT/beagle-helpers/backend/examples)
