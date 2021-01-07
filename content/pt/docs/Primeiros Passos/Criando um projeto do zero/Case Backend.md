---
title: Case Backend
weight: 45
description: >-
  Nesta seção, você encontra informações para iniciar um projeto de Backend com
  Beagle.
---

---

## Iniciando um projeto Backend

Nesse tutorial será implementado o Backend com o Beagle para que ele possa responder a requisições de sua aplicação server-driven, seja ela em Android, iOS ou WEB.

### Pré-requisitos

Para criar um projeto com o Beagle para o backend, é preciso:

* IDE Intelij IDE Community

### Passo 1: Iniciar o projeto usando Spring initializr 

O primeiro passo para configurar seu backend é acessar o site do [**Spring**](https://start.spring.io/)  
Ele criará o projeto `Maven` que facilitará a configuração do seu projeto.

![](https://lh5.googleusercontent.com/ZshvFubtunY4x0JWWBLgSmFesUx7G2AVlSrCcS96efc2lJtAakhYJ-zxgDx7CkcCMOC6zedwUAS3ThBpVXfS8jyvieNLgL3ZJIxWnHJFLE77IOXZs3UqOR8TQazINC_enzoO4Y4Q)

**Configuração do Spring** 

* Escolha o `Maven` como o sua opção de projeto;
* Marque `kotlin` como a linguagem;
* Marque a versão de inicialização maior que 2.1. 
* **Group** é o nome que será usado como a hierarquia do começo. Para esse exemplo, você pode deixar como **com.example;**
* **Artifact**  é o nome do projeto. Você nomeá-lo como BFF;
* **Description** contém a simples descrição do projeto;  
* **Packaging**  deve ser marcado como JAR;
* **Java** deve ser marcado como a versão java do seu sistema; 
* Clique em **`generate`** e você irá fazer o download do seu projeto no formato .zip; 
* Extraia o arquivo na pasta de sua preferencia. 

### Passo 2: Importar seu projeto para o Intelij

Siga os passos abaixo para importar o projeto que você criou. Primeiro, abra o **intellij** e clique em`Import project`. 

![](https://lh3.googleusercontent.com/EIBFU3xFKyN_ng7DsAEcdoip3xYH6gIKIbLRWbg6LRbITQMd_6tcwyp5iApKn2KPDSnasioiYyb48fMNfcEW9G3pyRE0lSXGXQHPk_FBvKO21wto8qvYSa7Jwi2eNEp5XVSxQmCQ)

1. Escolha o arquivo onde você colocou o seu`Spring project`

    e clique em **`ok`**. 

2. Clique em **Import projects from external model** e escolha `Maven` e depois, clique em **finish**. 

 

![](https://lh6.googleusercontent.com/6gOx1UCq-ZUK0yckdUAO2-Jb1YWOjw6kNijGu8-LVPyaDJuYAC2J7DcugsKgFDVqSkhF1RN5zKQ0s47l0ZmFgrq9ln7SPL-isTczLb9h5PQnXhUyWl6S7_QaUyUPGN-SyYVK_AZC)

## Configurando o Beagle

### Passo 1: Configurar o projeto

Como ponto de partida, siga nosso [**passo a passo para instalar o backend**](/pt/docs/primeiros-passos/instalando-o-beagle/backend). 

### Passo 2: Definir a Estrutura

O segundo passo é criar alguns pacotes para organizar melhor o projeto. Eles serão nomeados: **`builder`**, **`service`** e **`controller`**

1. Clique em `src` &gt; `main` &gt; `kotlin` até encontra o nome do seu projeto.
2. Clique com o botão direito do mouse em `new` &gt; `package`
3. Nomeie `builder` e aperte enter.
4. Repita o processo criando os dois outros pacotes, nomeando-os `service` e `controller`
5. Após a criação dos pacotes, a sua tela deverá estar assim:

![](/image%20%2829%29.png)

### Passo 3:‌ Criar o serviço da aplicação

A primeira classe que iremos criar é a **`Builder`** . É nesse arquivo que a tela `Server-Driven` deve ser estruturada:

1. Clique no pacote `builder` com o botão direito do mouse e clique em **new &gt; Kotlin File / Class** e coloque o nome como `ScreenBeagleBuilder` 
2. Essa classe deve estender de `ScreenBuilder` \(que é uma classe interna do Beagle\).
3. Observe que ele substituirá o método de `build` e é aqui que será implementado a primeira tela `Server-Driven`. 
4. Nesta etapa, você pode copiar e colar o código abaixo em sua classe.


```kotlin
import br.com.zup.beagle.core.Style
import br.com.zup.beagle.ext.applyStyle
import br.com.zup.beagle.ext.unitReal
import br.com.zup.beagle.widget.Widget
import br.com.zup.beagle.widget.action.Alert
import br.com.zup.beagle.widget.core.AlignSelf
import br.com.zup.beagle.widget.core.EdgeValue
import br.com.zup.beagle.widget.core.Flex
import br.com.zup.beagle.widget.core.TextAlignment
import br.com.zup.beagle.widget.layout.Container
import br.com.zup.beagle.widget.layout.Screen
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.beagle.widget.ui.ImagePath
import br.com.zup.beagle.widget.ui.Text

object ScreenBeagleBuilder : ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                    Text(
                            text = "Hello Beagle!"
                    ).applyStyle(
                            Style(margin = EdgeValue(top = 16.unitReal()),
                                    flex = Flex(alignSelf = AlignSelf.CENTER)
                            )
                    ),
                    Text(
                            text = "Beagle is a cross-platform framework which provides usage of the " +
                                    "Server-Driven UI concept, natively in iOS, Android and Web applications. " +
                                    "By using Beagle, your team could easily change application's layout and" +
                                    " data by just changing backend code."
                    ).applyStyle(
                            Style(margin = EdgeValue(
                                    left = 16.unitReal(),
                                    right = 16.unitReal(),
                                    top = 20.unitReal()
                                    )
                            )
                    )
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


* A anotação `@RestController` define esta classe como uma `controller`
* O parâmetro `screenBeagleService` precisa ter seu tipo definido como `:ScreenBeagleService` 
* O método `getScreen` precisa anotar`@GetMapping("/screen")` para criar o caminho "/screen" na  URL da aplicação e receber o resultado da função `createScreenBeagle`

O backend está pronto para servir como BFF de sua aplicação Server-Driven.

## Inicializando a aplicação

Agora é hora de inicializar a sua aplicação, siga os passos:

### **Passo 1: Rodar o projeto**

Clique no triângulo verde chamado **`run`**, ou aperte e segure SHIFT + F10 para rodar sua aplicação back-end.

A sua tela estará assim:

![](/sem-titulo2.png)

### **Passo 2: Fazer uma requisição**

Abra o seu browser e digite: _localhost:8080/screen_

Uma estrutura JSON tem que aparecer na sua tela similar a estrutura abaixo:

```kotlin
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Hello Beagle!",
      "style" : {
        "margin" : {
          "top" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        },
        "flex" : {
          "alignSelf" : "CENTER"
        }
      }
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "Beagle is a cross-platform framework which provides usage of the Server-Driven UI concept, natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code.",
      "style" : {
        "margin" : {
          "left" : {
            "value" : 16.0,
            "type" : "REAL"
          },
          "top" : {
            "value" : 20.0,
            "type" : "REAL"
          },
          "right" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        }
      }
    } ]
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

👉 Tutorial do Beagle para [**Android**](/pt/docs/primeiros-passos/criando-um-projeto-do-zero/case-android/).

👉Tutorial do Beagle para [**iOS**](/pt/docs/primeiros-passos/criando-um-projeto-do-zero/case-ios).

👉Tutorial do Beagle para  [**Web**](/pt/docs/primeiros-passos/criando-um-projeto-do-zero/case-web).
