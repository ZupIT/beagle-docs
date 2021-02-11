---
title: SendRequest
weight: 274
description: You will find here SendRequest definition and its attributes details
---

---

## **What is it?**

`SendRequest` is used to make HTTP requests.  


The Send Request structure is: 

| Attribute | Type | Required | Definition |
| :--- | :--- | :---: | :--- |
| url | String or [**Binding**]({{< ref path="/api/context#bindings" lang="en" >}}) | ✓ | Server URL. |
| method | RequestActionMethod or [**Binding**]({{< ref path="/api/context#bindings" lang="en" >}}) | ✓ | HTTP method. |
| headers | Map &lt;String, String&gt; or [**Binding**]({{< ref path="/api/context#bindings" lang="en" >}}) |   | Header items for the request. |
| data | Any |   | Content that will be deliver with the request. |
| onSuccess | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |   | Success action. |
| onError | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |   | Error action. |
| onFinish | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |   | Finish action. |

## How to use it?

See below an example of a button that send a `POST` request with data user:

{{< tabs id="T109" >}}
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
{{% playground file="send.json" language="en" %}}
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
