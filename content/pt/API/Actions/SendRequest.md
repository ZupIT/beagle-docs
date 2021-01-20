---
title: SendRequest
weight: 299
description: >-
  Nesta seção, você encontra a definição do Send Request e detalhes de seus
  atributos
---

---

## O que é?

A classe `sendRequest` é responsável por tratar requisições HTTP 

A estrutura do Send Request é:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| url | String ou [**Binding**](/pt/api/context#binding) | ✓ | URL do servidor. |
| method | RequestActionMethod ou [**Binding**](/pt/api/context#binding) | ✓ | Método HTTP. |
| headers | Map &lt;String, String&gt; ou [**Binding**](/pt/api/context#binding) |   | Itens do header para a requisição. |
| data | Any |   | Conteúdo a ser enviado junto a requisição. |
| onSuccess | List&lt;[**Action**](/pt/api/actions)&gt; |   | Ação tratativa de sucesso. |
| onError | List&lt;[**Action**](/pt/api/actions)&gt; |   | Ação tratativa de erro. |
| onFinish | List&lt;[**Action**](/pt/api/actions)&gt; |   | Ação tratativa de finalização. |

## Como usar?

Segue abaixo um exemplo de botão que faz uma requisição do tipo `POST` enviando dados de um usuário:

{{< tabs id="T127" >}}
{{% tab name="JSON" %}}
<!-- json-playground:send.json
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:button",
      "text": "Send Request Example",
      "onPress": [
        {
            "beagleAction":"beagle:sendRequest",
            "url":"https://myUrl.com/endpoint",
            "method":"POST",
            "headers":{
               "Content-Type":"application/json"
            },
            "data":{
               "email":"john@email.com",
               "password":"password",
               "confirmPassword":"password",
               "name":"John"
            },
            "onSuccess":[
              {
                 "beagleAction":"beagle:alert",
                 "title":"SUCCESS",
                 "message":"Success"
              }
            ],
            "onError":[
               {
                  "beagleAction":"beagle:alert",
                  "title":"ERROR",
                  "message":"Error"
               }
            ],
            "onFinish":[
               {
                  "beagleAction":"beagle:alert",
                  "title": "FINISH",
                  "message":"Finish"
               }
            ]
         }
      ]
    }
  ]
}
-->
{{% playground file="send.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Button(
    text = "Send a request",
        styleId = "DesignSystem.MyNativeButtonStyle",
        onPress = listOf(
            SendRequest(
                url = https://myUrl.com/endpoint",
                method = RequestActionMethod.POST,
                data = User(
                    name = "John",
                    email = "jonh@email.com",
                    password = "password",
                    confirmPassword = "password"
                ),
                headers = mapOf(
                    "Content-Type" to "application/json"
                ),
                onSuccess = listOf(
                    Alert(
                        title = "SUCCESS",
                        message = "Success"
                    )
                ),
                onError = listOf(
                    Alert(
                        title = "ERROR",
                        message = "Error"
                    )
                ),
                onFinish = listOf(
                    Alert(
                        title = "FINISH",
                        message = "Finish"
                    )
                )
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}
