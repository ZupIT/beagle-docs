---
title: Criando um projeto do zero
weight: 45
description: >-
  Nesta seção, você encontra informações para iniciar um projeto Backend do zero 
  com Beagle.
---

---

## Iniciando um projeto Backend

Nesse tutorial será implementado o Backend com o Beagle para que ele possa responder a requisições de sua aplicação server-driven, seja ela em Android, iOS ou WEB.

### Pré-requisitos

Para criar um projeto com o Beagle para o backend, é preciso:

- JDK 8+
- Maven / Gradlew
- Um editor de texto ou IDE a sua escolha (recomendamos o IntelliJ IDEA Community Edition)

### Passo 1: Iniciar o projeto usando Spring initializr

Configure o seu backend e acesse o site do [**Spring**](https://start.spring.io/),  ele irá criar o projeto `Maven` que facilitará a configuração do seu projeto.

![](https://lh5.googleusercontent.com/ZshvFubtunY4x0JWWBLgSmFesUx7G2AVlSrCcS96efc2lJtAakhYJ-zxgDx7CkcCMOC6zedwUAS3ThBpVXfS8jyvieNLgL3ZJIxWnHJFLE77IOXZs3UqOR8TQazINC_enzoO4Y4Q)

**Configuração do Spring**
Siga os passos para configurar: 
1. Escolha o `Maven` como o sua opção de projeto;
2. Marque `kotlin` como a linguagem;
3. Marque a versão de inicialização maior que 2.1;
4. **Group** é o nome que será usado como a hierarquia do começo. Para esse exemplo, você pode deixar como **com.example**;
5. **Artifact** é o nome do projeto. Você nomeá-lo como BFF;
6. **Description** contém a simples descrição do projeto;
7. **Packaging** deve ser marcado como JAR;
8. **Java** deve ser marcado como a versão java do seu sistema;
9. Clique em **`generate`** e você irá fazer o download do seu projeto no formato .zip;
10. Extraia o arquivo na pasta de sua preferência.

### Passo 2: Abrir seu projeto gerado

Siga os passos abaixo para importar o projeto que você criou. Primeiro, abra sua IDE e importe o projeto, nesse tutorial será utilizado o **IntelliJ IDEA Community**, com ele é só abrir e clicar em `Import project`.

![](https://lh3.googleusercontent.com/EIBFU3xFKyN_ng7DsAEcdoip3xYH6gIKIbLRWbg6LRbITQMd_6tcwyp5iApKn2KPDSnasioiYyb48fMNfcEW9G3pyRE0lSXGXQHPk_FBvKO21wto8qvYSa7Jwi2eNEp5XVSxQmCQ)

1. Escolha o arquivo onde você colocou o seu`Spring project` e clique em **`ok`**;

2. Clique em **Import projects from external model** e escolha `Maven` e depois, clique em **finish**.

![](https://lh6.googleusercontent.com/6gOx1UCq-ZUK0yckdUAO2-Jb1YWOjw6kNijGu8-LVPyaDJuYAC2J7DcugsKgFDVqSkhF1RN5zKQ0s47l0ZmFgrq9ln7SPL-isTczLb9h5PQnXhUyWl6S7_QaUyUPGN-SyYVK_AZC)

## Configurando o Beagle

### Passo 1: Configurar o projeto

Como ponto de partida, siga o [**passo a passo para instalar o backend**]({{< ref path="/backend/get-started/installing-beagle" lang="pt" >}}).

### Passo 2: Definir a Estrutura

O segundo passo é criar alguns pacotes para organizar melhor o projeto. Eles serão nomeados: **`builder`**, **`service`** e **`controller`**

1. Clique em `src` &gt; `main` &gt; `kotlin` até encontra o nome do seu projeto;
2. Clique com o botão direito do mouse em `new` &gt; `package`;
3. Nomeie `builder` e aperte enter;
4. Repita o processo criando os dois outros pacotes, nomeando-os `service` e `controller`;
5. Após a criação dos pacotes, a sua tela deverá estar assim:

{{% alert color="warning" %}}
É importante reafirmar que as classes `service`, `controller` e `builder` devem estar no mesmo pacote que a `Application file`, como exemplificado abaixo:
{{% /alert %}}

### Passo 3:‌ Criar o serviço da aplicação

A primeira classe que você deve criar é a **`Builder`** . É nesse arquivo que a tela `Server-Driven` deve ser estruturada:

1. Clique no pacote `builder` com o botão direito do mouse e clique em **new &gt; Kotlin File / Class** e coloque o nome como `ScreenBeagleBuilder`;
2. Essa classe deve estender de `ScreenBuilder` \(que é uma classe interna do Beagle\);
3. Observe que ele substituirá o método de `build` e é aqui que será implementado a primeira tela `Server-Driven`;
4. Nesta etapa, você pode copiar e colar o código abaixo em sua classe.

```kotlin
object ScreenBeagleBuilder : ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                Text(
                    text = "Hello Beagle!",
                    styleId = "Title.Text.Orange"
                ).setStyle {
                    margin = EdgeValue.only(top = 16)
                }.setFlex {
                    alignSelf = AlignSelf.CENTER
                },
                Text(
                    text = "Beagle is a cross-platform framework which provides usage of the " +
                        "Server-Driven UI concept, natively in iOS, Android and Web applications. " +
                        "By using Beagle, your team could easily change application's layout and" +
                        " data by just changing backend code.",
                    styleId = "Description.Text.Orange"
                ).setStyle {
                    margin = EdgeValue.only(top = 20, left = 16, right = 16)
                }
            )
        )
    )
}
```

A próxima classe a ser criada é a **`Service`**:

1. Clique com o botão direito do mouse no pacote `service` e clique em **New&gt; Kotlin File / Class.**
2. Nomeie-a como `ScreenBeagleService`. Essa classe deve ser anotada com `@Service` que é uma anotação do `Spring`
3. **Implemente** um método chamado de `createScreenBeagle`que tem como retorno a classe `ScreenBeagleBuilder`:

```kotlin
import com.example.bff.builder.ScreenBeagleBuilder
import org.springframework.stereotype.Service

@Service
class ScreenBeagleService {
  fun createScreenBeagle() = ScreenBeagleBuilder
}
```

E por fim a classe **`Controller`** .

1. No pacote `controller`crie uma classe e nomeia como `ScreenController` . Ela deve ser anotada com `@RestController` para que assim exponha seus componentes por meio da API Rest.
2. Ele receberá um `ScreenBeagleService` por meio de seu construtor principal, para que o `Spring` possa injetá-la para você.
3. Crie sua classe como no exemplo abaixo:

```kotlin
import com.example.bff.service.ScreenBeagleService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ScreenController(
        private val screenBeagleService: ScreenBeagleService
) {
    @GetMapping("/screen")
    fun getFirstScreen() = screenBeagleService.createScreenBeagle()
}
```

- A anotação `@RestController` define esta classe como uma `controller`
- O parâmetro `screenBeagleService` precisa ter seu tipo definido como `:ScreenBeagleService`
- O método `getScreen` precisa anotar`@GetMapping("/screen")` para criar o caminho "/screen" na URL da aplicação e receber o resultado da função `createScreenBeagle`

O backend está pronto para servir como BFF de sua aplicação Server-Driven.

## Inicializando a aplicação

Agora é hora de inicializar a sua aplicação, siga os passos:

### **Passo 1: Rodar o projeto**

Clique no triângulo verde chamado **`run`**, ou aperte e segure SHIFT + F10 para rodar sua aplicação back-end.

A sua tela estará assim:

![](/shared/sem-titulo2.png)

### **Passo 2: Fazer uma requisição**

Abra o seu browser e digite: _localhost:8080/screen_

Uma estrutura JSON tem que aparecer na sua tela similar a estrutura abaixo:

```kotlin
{
   "_beagleComponent_":"beagle:screenComponent",
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"Hello Beagle!",
            "style":{
               "cornerRadius":{},
               "size":{},
               "margin":{
                  "top":{
                     "value":16,
                     "type":"REAL"
                  }
               },
               "flex":{
                  "alignSelf":"CENTER"
               }
            }
         },
         {
            "_beagleComponent_":"beagle:text",
            "text":"Beagle is a cross-platform framework which provides usage of the Server-Driven UI concept, natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code.",
            "style":{
               "cornerRadius":{},
               "size":{},
               "margin":{
                  "left":{
                     "value":16,
                     "type":"REAL"
                  },
                  "top":{
                     "value":20,
                     "type":"REAL"
                  },
                  "right":{
                     "value":16,
                     "type":"REAL"
                  }
               },
               "flex":{

               }
            }
         }
      ]
   }
}
```

### **Passo 3: Checar o processo**

Se essa não for a resposta que você teve é necessário checar o processo de configuração novamente. Volte os passos anteriores e comece pelas classes que são as que apresentam maiores equívocos quando configuradas pela primeira vez.

Ou, se preferir, pegue o projeto pronto no nosso repositório e compare com o seu. Você pode acessar o [**repositório aqui.** ](https://github.com/ZupIT/beagle/tree/master/backend/sample)

{{% alert color="info" %}}
Para que o serviço de backend seja consumido, você deve ter o front-end preparado para o Beagle, seja Android, iOS ou Web. Tudo irá funcionar usando o mesmo JSON do backend.
{{% /alert %}}

Para saber mais sobre como configurar o seu ambiente frontend, veja mais em:

👉 Tutorial do Beagle para [**Android**]({{< ref path="/get-started/creating-a-project-from-scratch/case-android/" lang="pt" >}}).

👉Tutorial do Beagle para [**iOS**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="pt" >}}).

👉Tutorial do Beagle para [**Web**]({{< ref path="/get-started/creating-a-project-from-scratch/case-web" lang="pt" >}}).
