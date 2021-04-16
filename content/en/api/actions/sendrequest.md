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
| onSuccess | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |   | Triggers a Success action or list of actions. |
| onError | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |   | Triggers an Error action or list of actions. |
| onFinish | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |   | Triggers a Finish action or list of actions. |

## How to use it?

{{% alert color="warning" %}}
**Getting the response data:** This component triggers onSuccess or onError actions on a response. You can access the response package information by using the [implicit context](/api/context/overview/#2-implicit-context) "@{onSuccess.data}" on a success and the "@{onError.data}" on an error response.
{{% /alert %}}

The example below shows a button that triggers a `POST` request with some user data:

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
                 "message":"@{onSuccess.data}"
              }
            ],
            "onError":[
               {
                  "beagleAction":"beagle:alert",
                  "title":"ERROR",
                  "message":"@{onError.data}"
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
                        message = "@{onSuccess.data}"
                    )
                ),
                onError = listOf(
                    Alert(
                        title = "ERROR",
                        message = "@{onError.data}"
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
