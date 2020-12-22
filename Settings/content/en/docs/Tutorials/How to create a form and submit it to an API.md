---
title: How to create a form and submit it to an API
weight: 233
description: 'On this section, you will find how to create a form and submit it to an API.'
---

---

## Introduction

To this tutorial, we will use some [**actions**](../../../../../../../api/acoes/) and APIs:

**Actions**

* [**SetContext**](../../../../../../api/acoes/setcontext)
* [**SendRequest**](../../../../../api/acoes/sendrequest)

**APIs**

* [**Context**](../../../../api/contexto/)
* [**Binding**](https://docs.usebeagle.io/v/v1.0-pt/api/contexto#bindings)
* [**Expressões**](https://docs.usebeagle.io/v/v1.0-pt/api/contexto#bindings)

Despite the [**Server-Driven**](../../../principais-conceitos#server-driven-ui) concept of working with separate components, it is possible to make an information streaming to an API and it is what we will show below.

## Use example

On this example, we will use the **TextInput** and **Button** components, to simulate the login screen.

### Step 1: Create a login screen

Here, we will signal to Beagle that it has to render on the screen two TextInputs components and one Button one, to represent the Login screen.


{{< tabs name="T101" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "Username"
    },
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "Password"
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Login"
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
     children = listOf(
                TextInput(placeholder = "Username"),
                TextInput(placeholder = "Password"),
                Button(text = "Login")
            )
        )
```
{{% /tab %}}
{{< /tabs >}}

### Step 2: Configure SetContext

Now use the [**SetContext**](https://docs.usebeagle.io/v/v1.0-pt/api/api-acoes/setcontext) action that alter a **specific** [**context**](https://docs.usebeagle.io/v/v1.0-pt/api/contexto)  on a screen.This is necessary to bring this screen to life and make the typed data on them sent to an API. 

On this scenario, the context is what it will keep the typed data of user name and password so that later this data is fowarded to an API.

Alter this code to add this SetContext logic:
 

{{< tabs name="T102" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:textInput",
      "value": "@{credentials.username}",
      "placeholder": "Username",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "credentials",
          "value": "@{onChange.value}",
          "path": "username"
        }
      ]
    },
    {
      "_beagleComponent_": "beagle:textInput",
      "value": "@{credentials.password}",
      "placeholder": "Password",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "credentials",
          "value": "@{onChange.value}",
          "path": "password"
        }
      ]
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Login"
    }
  ],
  "context": {
    "id": "credentials",
    "value": {
      "username": "",
      "password": ""
    }
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
data class Credentials(
  val username: String,
  val password: String
)

Container(
        context = ContextData(
             id = "credentials",
             value = Credentials(username = "",password = "")
            ),
         children = listOf(
             TextInput(
                  placeholder = "Username",
                  value = "@{credentials.username}",
                  onChange = listOf(
                      SetContext(
                          contextId = "credentials",
                          path = "username",
                          value = "@{onChange.value}"
                      )
                  )
              ),
              TextInput(
                  placeholder = "Password",
                  value = "@{credentials.password}",
                  onChange = listOf(
                      SetContext(
                           contextId = "credentials",
                           path = "password",
                           value = "@{onChange.value}"
                      )
                   )
                ),
               Button(text = "Login")
            )
        )
```
{{% /tab %}}
{{< /tabs >}}

On this example, we use an `onChange` event of the TextInput that it is always called when the user types a new text in the input. Inside the onChange, there is an implicit context [**implicit context**](../../api/contexto/#contextos-implicitos) called `onChange` where the value it is the last typed `value` by the user.


#### OnChange 

In the context, the action SetContext will be performed in each character typed by the user. On the SetContext it is requered the `contextId`, that it will make reference to the context that it will be altered, besides the `value` that represents the new value and the `path` that it is the way inside the context that will be altered.


#### Path

It is the only optional parameter, that means in case it does not pass, the SetContext will alter the root context in order that the `value` is the new value. On the example above, we are making clear that we want alter only the `username` and `password` key in their respective SetContexts.

The context+expressions power is huge, because it is possible inside the Action you refer the implicit context of whom performed. On the example we saw the `onChange` case, but it is possible to make a reference to other contexts inside an implicit context, then use multiple expressions.


{{% alert color="info" %}}
 You can start a screen with predefined context values. For that, it is possible that the screen render in these values using expressions. 

On the example above, we started the `username` and `password` fields with empy values coming from the context.
{{% /alert %}}

### Step 3: Send data to an API

Until this moment, what we have done was "save" these context values so that on this step we can send it to an API through a request.

{{% alert color="warning" %}}
This step does not have any visual difference from the last step.
{{% /alert %}}

To finish the Login flow, we will now add an [Action](https://docs.usebeagle.io/v/v1.0-pt/api/api-acoes) called [SendRequest](https://docs.usebeagle.io/v/v1.0-pt/api/api-acoes/sendrequest), that basically allows you to make a HTTP request and on the `onSuccess` case, show an [Alert](https://docs.usebeagle.io/v/v1.0-pt/api/api-acoes/alert) welcoming the user.


{{< tabs name="T103" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:textInput",
      "value": "@{credentials.username}",
      "placeholder": "Username",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "credentials",
          "value": "@{onChange.value}",
          "path": "username"
        }
      ]
    },
    {
      "_beagleComponent_": "beagle:textInput",
      "value": "@{credentials.password}",
      "placeholder": "Password",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "credentials",
          "value": "@{onChange.value}",
          "path": "password"
        }
      ]
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Login",
      "onPress": [
        {
          "_beagleAction_": "beagle:sendRequest",
          "url": "http://beagle.free.beeceptor.com/login",
          "method": "POST",
          "headers":{
               "Content-Type":"application/json"
          },
          "data": {
            "username": "@{credentials.username}",
            "password": "@{credentials.password}",
            "authType": "login"
          },
          "onSuccess": [
            {
              "_beagleAction_": "beagle:alert",
              "title": "You are logged-in",
              "message": "@{onSuccess.data.message}"
            }
          ]
        }
      ]
    }
  ],
  "context": {
    "id": "credentials",
    "value": {
      "username": "",
      "password": ""
    }
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
data class Credentials(
  val username: String,
  val password: String
)

data class RequestCredentials(
  val username: String,
  val password: String,
  val authType: String
)

Container(
        context = ContextData(
            id = "credentials",
            value = Credentials(username = "", password = "")
        ),
        children = listOf(
            TextInput(
                placeholder = "Username",
                value = "@{credentials.username}",
                onChange = listOf(
                    SetContext(
                        contextId = "credentials",
                        path = "username",
                        value = "@{onChange.value}"
                    )
                )
            ),
            TextInput(
                placeholder = "Password",
                value = "@{credentials.password}",
                onChange = listOf(
                    SetContext(
                        contextId = "credentials",
                        path = "password",
                        value = "@{onChange.value}"
                    )
                )
            ),
            Button(
                text = "Login",
                onPress = listOf(
                    SendRequest(
                        url = "http://beagle.free.beeceptor.com/login",
                        method = RequestActionMethod.POST,
                        headers = mapOf(
                            "Content-Type" to "application/json"
                        ),
                        data = RequestCredentials(
                          username = "@{credentials.username}",
                          password = "@{credentials.password}",
                          authType = "login"
                        ),
                     onSuccess = listOf(
                       Alert(
                         title = "You are logged-in",
                         message = "@{onSuccess.data.message}"
                     )
                 )
             )
           )
         )
      )
    )
```
{{% /tab %}}
{{< /tabs >}}

When running this code, you have to fill in the fields and press the "Login" button.

After that, the `onPress` event will perform  SendRequest sending all the data that are inside the context with the `credentials` ID.

When the  SendRequest it is done, the response is finished, the `onSuccess` event will perform an [**Action Alert**](https://docs.usebeagle.io/v/v1.0-pt/api/api-acoes/alert) that it will show an alert with the returned data from the API.
