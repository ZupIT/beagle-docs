---
title: Sendrequest
weight: 274
description: You will find here SendRequest definition and its attributes details
---

---

## **What is it?**

`SendRequest` is used to make HTTP requests.  


The Send Request structure is: 

| Attribute | Type | Required | Definition |
| :--- | :--- | :---: | :--- |
| url | String or [**Binding**](../../../../context/#bindings) | ✓ | Server URL. |
| method | RequestActionMethod or [**Binding**](https://docs.usebeagle.io/v/v1.0-en/api/context#bindings) | ✓ | HTTP method. |
| headers | Map &lt;String, String&gt; or [**Binding**](../context/#bindings) |   | Header items for the request. |
| data | Any |   | Content that will be deliver with the request. |
| onSuccess | List&lt;[**Action**](https://docs.usebeagle.io/v/v1.0-en/api/actions)&gt; |   | Success action. |
| onError | List&lt;[**Action**](https://docs.usebeagle.io/v/v1.0-en/api/actions)&gt; |   | Error action. |
| onFinish | List&lt;[**Action**](https://docs.usebeagle.io/v/v1.0-en/api/actions)&gt; |   | Finish action. |

## How to use it?

See below an example of a button that send a `POST` request with data user:

{{< tabs id="T109" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:button",
      "text": "Send Request Example",
      "onPress": [
        {
            "beagleAction":"beagle:sendRequest",
            "url":"https://myUrl.com/endpoint"",
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
```
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

### 👉 [Test this action in the Web Playground](https://beagle-playground.netlify.app/#/cloud/835cfa6d6811402cb338c9afeb1507cf/sendRequest.json)
