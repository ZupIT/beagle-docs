---
title: Backend
weight: 12
description: >-
  Nesta seção, você encontra o passo a passo da configuração do Beagle no
  backend.
---

---

{{% alert color="danger" %}}
Antes de iniciar a instalação, é importante você saber que as etapas abaixo são para linguagens da JVM. 

Para outras linguagens, seu servidor precisa servir o JSON seguindo nossa API. Dê uma olhada também na nossa implementação de [**cache**](/pt/docs/recursos/cache/) e em [**mecanismos específicos de cada linguagem**](/pt/docs/recursos/componentes/especificação-de-componentes-por-plataforma)
{{% /alert %}}

## Requisitos

Antes de integrar o Beagle à sua aplicação para rodá-lo no backend, é importante validar se sua máquina está com as versões corretas instaladas dos seguintes softwares: 

* **JDK 8+ language \(Kotlin 1.3+ é recomendado\)**
* **Maven 3+**
* **Jackson 2+**

Se você já tiver atualizado todos estes programas, basta seguir as instruções abaixo.

## Instalação

### Passo 1: Criar um microsserviço

No momento de criar o microsserviço, recomendamos que você utilize os mesmos mecanismos estabelecidos. Caso este não seja o seu caso, então basta seguir as configurações abaixo. 

{{% alert color="warning" %}}
Se o seu time trabalha com microsserviços usando outros frameworks, acesse o [**framework do Beagle**](/pt/docs/recursos/customização/beagle-para-backend/beagle-framework).  
{{% /alert %}}

Para uma configuração simples, você pode escolher entre **2 modelos de frameworks** para criar seu BFF:

#### [Micronaut ](https://micronaut.io/)

> É um framework full-stack moderno baseado em JVM para construção modular. Fácil de testar em microsserviços e com aplicações sem servidor \(serverless\).

#### [Spring](https://spring.io/)

> É um framework que permite programação em Java mais rápida, fácil e segura para todos. É focada em velocidade, simplicidade e produtividade, o que o tornou o framework Java mais popular.

Depois de selecionar com qual framework deseja seguir, prossiga com as configurações abaixo: 

{{< tabs id="T0" >}}
{{% tab name="Micronaut" %}}
### Criando um microsserviço

#### Micronaut &lt;= 1.3

Conforme descrito no [**quickstart do Micronaut**](https://docs.micronaut.io/latest/guide/index.html#quickStart), crie seu aplicativo através da ferramenta de CLI com o seguinte comando: 

```kotlin
$ mn create-app bff --build maven --lang kotlin
```

Isso criará um projeto `Micronaut` executável usando `Kotlin` e `Maven`em um diretório chamado `bff`. Abra este projeto na IDE que escolher e siga o passo 2 para configurar as dependências.

#### Micronaut &gt;= 2.0

Caso queira adotar o Micronaut 2.0, pode usar o novo site de construção de projeto, semelhante ao do Spring.

* Clique no link a seguir para baixar um zip do projeto com as opções da imagem abaixo: [**Micronaut Launch para Beagle Micronaut Starter**](https://launch.micronaut.io/create/DEFAULT/com.example.bff?lang=kotlin&build=maven&test=junit&javaVersion=JDK_8).

![Micronaut Launch com as configura&#xE7;&#xF5;es recomendadas para o iniciar o projeto do Beagle com o Micronaut](/image%20%28108%29.png)

* Essa configuração inicial utiliza: 
  * Kotlin com Maven para`Java 8 (compatível com essa versão);`
  * `Junit` como biblioteca de testes unitários.
* Descompacte o arquivo na pasta que escolher para conter seu projeto BFF e abra o seu projeto na IDE de sua preferência.
{{% /tab %}}

{{% tab name="Spring" %}}
### Criando um microsserviço

Neste caso, usaremos o site do Spring para gerar um projeto com o microsserviço já criado:  

* Clique no link a seguir e você verá a página abaixo: [Spring Initializer for Beagle Spring Starter](https://start.spring.io/#!type=maven-project&language=kotlin&packaging=jar&jvmVersion=1.8&groupId=com.example&artifactId=bff&name=bff&description=Demo%20project%20for%20Beagle%20BFF%20using%20Spring%20Boot&packageName=com.example.bff&dependencies=actuator)

![Spring Initializer com as configura&#xE7;&#xF5;es recomendadas para o iniciar o projeto do Beagle com o Spring](/image%20%288%29.png)

* Essa configuração inicial utiliza: 
  * Kotlin com Maven;
  * A ultima versão do `Spring Boot Actuator dependency;`
  * Empacotamento `JAR`  e `Java 8 (compatível com essa versão).`
* Clique em `GENERATE` para fazer o download de um arquivo zip que contém o projeto Spring Boot.
* Descompacte o arquivo na pasta que escolher para conter seu projeto BFF e abra o seu projeto na IDE de sua preferência.
{{% /tab %}}
{{< /tabs >}}

### Passo 2: Configurar as dependências \(&lt; 1.1.0\)

Uma vez criado e configurado os microsserviços, você precisa adicionar o endereço do nosso `nexus`. Para isso, basta adicionar o código abaixo no seu arquivo `pom.xml`: 


```markup
<repositories>
    <repository>
        <id>bintray-zupit-repo</id>
        <url>https://dl.bintray.com/zupit/repo</url>
    </repository>
</repositories>
```


### Passo 3: Incluir requerimentos adicionais

Por último, você precisa complementar algumas configurações em nosso backend. Neste caso, o framework que você tiver escolhido é que irá definir como deve ser feita a implementação. 

Clique na opção de Framework que você escolheu anteriormente e siga os passos para continuar a configuração.

{{< tabs id="T1" >}}
{{% tab name="Micronaut Starter" %}}
### Requerimentos adicionais:

{{% alert color="info" %}}
Este starter configura a versão do **módulo micronaut-runtime** com ele e utiliza a versão **Micronaut 2.0.0.**
{{% /alert %}}

Para seguir com esse requerimento, basta adicionar arquivo pom à sua dependência. 

* Versão atual do Beagle:[![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)


```markup
<dependency>
	<groupId>br.com.zup.beagle</groupId>
	<artifactId>beagle-micronaut-starter</artifactId>
	<version>${beagle.version}</version>
</dependency>
```


Insira a versão de release do Beagle no lugar de `${beagle.version}`. Ou seja, coloque a versão do Beagle destacada em azul da `badge` acima, mas sem o **`caracter v`** que antecede os números de versão.

Por exemplo: undefined-`ext.beagle.version = "0.2.8"`

{{% alert color="warning" %}}
Lembre de sempre verificar se você está usando a versão mais recente do Beagle. Para saber disso, basta passar o mouse por cima do número da versão. Depois disso, sincronize com sua máquina.
{{% /alert %}}
{{% /tab %}}

{{% tab name="Spring Starter" %}}
### Requerimentos adicionais:

{{% alert color="info" %}}
Este starter configura a versão do **módulo spring-boot-starter-web** com ele e utiliza a versão **Spring Boot 2.3.1.**
{{% /alert %}}

Para seguir com esse requerimento, basta adicionar o arquivo pom à sua dependência. 

* Versão atual do Beagle:[![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)


```markup
<dependency>
	<groupId>br.com.zup.beagle</groupId>
	<artifactId>beagle-spring-starter</artifactId>
	<version>${beagle_version}</version>
</dependency>
```


Insira a versão de release do Beagle no lugar de `${beagle.version}`. Ou seja, coloque a versão do Beagle destacada em azul da `badge` acima, mas sem o **`caracter v`** que antecede os números de versão.

Por exemplo:![https://img.shields.io/bintray/v/zupit/repo/beagle](/image%20%28107%29.png)-`ext.beagle.version = "1.0.0"`

{{% alert color="warning" %}}
Lembre de sempre verificar se você está usando a versão mais recente do Beagle. Para saber disso, basta passar o mouse por cima do número da versão. Depois disso, sincronize com sua máquina.
{{% /alert %}}

Parabéns, a configuração inicial está pronta para uso! 

Você pode conferir um **exemplo prático** de tela ou componente Server-Driven [**para testar o BFF**](/pt/docs/get-started/using-beagle/backend)

{{% alert color="danger" %}}
O Spring Boot tem um problema conhecido envolvendo seu `WebMvcConfigurationSupport`. Sua presença substitui outras configurações do Jackson, incluindo a do `Spring Starter`. 

Caso haja algum em seu projeto, sugerimos substituí-lo por`WebMvcConfigurer.`   
  
Para mais detalhes, consulte [**esta issue no Github**](https://github.com/spring-projects/spring-boot/issues/12751)  
  
A anotação `@EnableWebMvc` causa o mesmo problema, o que requer que ela também seja removida.
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

{{% alert color="success" %}}
Pronto, a configuração inicial está pronta para uso! 
{{% /alert %}}

Você pode conferir um **exemplo prático** de [**como testar o Beagle no Backend**](/pt/docs/get-started/using-beagle/backend) ou componente Server-Driven para testar o BFF. 

## Próximos Passos

Nesta seção, você fez a **instalação inicial** do Beagle na sua aplicação!  
Para continuar a configurar o Beagle:

👉Vá para as [**configurações iniciais**](/pt/docs/get-started/using-beagle/backend) para habilitar uso do Beagle no seu projeto Backend

👉 Se quiser ir direto para prática, acesse nosso [**tutorial para criar um projeto do zero**](/pt/docs/get-started/creating-a-project-from-scratch/case-backend)
