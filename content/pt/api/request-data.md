---
title: Request Data
weight: 390
description: Descrição da classe Request Data e seus atributos.
---

---

## O que é?

A classe **`Request Data`** é uma classe interna do Beagle utilizada para fazer requests. Esta classe é utilizada quando desejamos chamar uma tela Server-Driven **a partir de uma activity ou fragment nativo no Android**.

A princípio, você listará apenas o atributo URL referente à página que deseja carregar vinda do BFF. 

No entanto, essa classe possui outros atributos, que podem ser utilizados na transição entre telas. 

| Atributo | Tipo | Obrigatório | Descrição |
| :----------| :--- | :----------: | :---------- |
| body       | String |  | Por padrão é iniciado como **`null`** e só precisa ser configurado quando se deseja enviar *mensagens **HTTP*** como **`body data.`** |
| URL        | String | ✓ | Define o endereço relativo ou absoluto que retornará uma tela ou componente do backend que se deseja exibir. Se você definir um endereço *relativo*, como por exemplo: "/login_screen" essa classe vai construir a URL utilizando a Base URL definida em seu frontend. Se um endereço *absoluto* com *http* é listado, a classe o considera como tal e buscará o conteudo nesse endereço|
| httpAdditionalData | HttpAdditionalData  |   | É utilizado quando se deseja enviar *additional data* com a *requisição HTTP*  |

### **HttpAdditionalData**

Como o nome implica é uma classe que contém informações (DATA) que podem ser enviadas via *HTTP request*

| Attributes | Type | **Required** | Description |
| :----------| :--- | :----------: | :---------- |
| method     | ScreenMethod | ✓ |  É uma classe **`ENUM`** que define qual operação HTTP você quer fazer. Ela funciona como um **`HTTP REQUEST METHOD`** e o método *GET* é definido como *default*. |
| headers    | Map&lt;String, String&gt; |  | É utilizado quando você envia informações via *header* em uma requisição *Http*.  |
| body       | String |  | Por padrão é iniciado como **`null`** e só precisa ser configurado quando se deseja enviar *mensagens **HTTP*** como **`body data.`** |

### ScreenMethod

É um `ENUM`, cujo os valores são:

| Valor | Definição |
| :--- | :--- |
| GET | O método `GET` solicita a representação de um recurso específico. Requisições utilizando o método `GET` devem retornar apenas dados. |
| POST | O método `POST` é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor. |
| PUT | O método `PUT` substitui todas as atuais representações do recurso de destino pela carga de dados da requisição. |
| DELETE | O método `DELETE` remove um recurso específico. |
| HEAD | O método `HEAD` solicita uma resposta de forma idêntica ao método `GET`, porém sem conter o corpo da resposta. |
| PATCH | O método `PATCH` é utilizado para aplicar modificações parciais em um recurso. |

## Como usar?

Para iniciar uma nova `Activity` basta usar o método `startActivity()` a partir de uma `Activity` ou um `Fragment` criando um `ServerDrivenIntent` passando o `ScreenRequest` com o endereço do BFF da tela como no exemplo abaixo:

```kotlin
startActivity(
    newServerDrivenIntent<ServerDrivenActivity>(
        ScreenRequest("URL_WITH_SCREEN_ENDPOINT")
    )
)
```
