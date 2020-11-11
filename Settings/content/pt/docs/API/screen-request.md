---
title: "Screen Request"
linkTitle: "Screen Request"
description: >
    Nesta seção, você encontra a descrição da classe Screen Request e seus atributos.
---

## O que é?

A **`Screen Request`** é uma classe interna do Beagle utilizada para solicitar qual tela você deseja exibir. Esta classe é utilizada quando se deseja chamar uma tela Server-Driven **a partir de uma activity ou fragment nativo no Android**. 

A princípio, você listará apenas o atributo URL referente à página que deseja carregar vinda do BFF. 

No entanto, essa classe possui outros atributos, que podem ser utilizados na transição entre telas. 

| Atributo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| URL  | String | ✓ | Define o endpoint que retorna a página ou componente visual desejado |
| method | ScreenMethod | ✓ |  É um **`ENUM`** que define qual operação você deseja fazer. Ele funciona como um método HTTP request, mas que está configurado como GET, por padrão |
| headers | Map&lt;String, String&gt; |   | É utilizado somente quando você deseja enviar informações nos campos de cabeçalho HTTP |
| body | String |   | É definido por padrão como **`null`** e só precisa ser implementado caso seja necessário enviar uma mensagem **HTTP** como **`body data`**. |

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

