---
title: Screen Request
weight: 364
description: 'In this section, you will find all informations about Screen Request.'
---

---

## What is it?

The **`Screen Request`** is an internal Beagle class used to request which screen you want to display. This class is used when you will need to call a Server-Driven page you want to load from **an activity or a native fragment on Android.**

At first, you will only list the URL attribute that referencing the page you want to load from BFF. 

However, this class has other attributes, which can be used when transitioning between screens.

| Attributes | Type | **Required** | Description |
| :--- | :--- | :--- | :--- |
| URL  | String |     ✓ | Defines the endpoint that returns the screen or component you wish to display. |
| method | ScreenMethod |    ✓ |  It is an **`ENUM`** class that defines which HTTP operation you wish to do. It works as a **`HTTP REQUEST METHOD`** and it is set as GET by default. |
| headers | Map&lt;String, String&gt; |  | It is used when you need to send data via an HTTP header.  |
| body | String |  | It is set default as **`null`** and it just needs to be implemented when you need to send a **HTTP** messages as **`body data.`** |

### ScreenMethod

It is an `ENUM` and the values are:

| Value | Definition |
| :--- | :--- |
| GET | The `GET` method  requests a representation of a specific resource. Requests using the method `GET` must return only data. |
| POST | The `POST` method it is used to submit an entity to a specific resource, frenquetly causing a change in the resource state or colateral effects on the server.  |
| PUT | The  `PUT` method replaces all the current representation of the target resources with the data of the request.  |
| DELETE | The `DELETE` method removes a specific resource.  |
| HEAD | The `HEAD` method  request an answer the same way the `GET` method does, however without a response body.  |
| PATCH | The `PATCH` method is used to apply partial modifications in a resource. |

## How to use it?

To start a new `Activity`, you have to use the `startActivity()` method from an `Activity` or a `Fragment` creating a `ServerDrivenIntent` passing through a `ScreenRequest` with the BFF's address of the screen, like the example below: 

```kotlin
startActivity(
    newServerDrivenIntent<ServerDrivenActivity>(
        ScreenRequest("URL_WITH_SCREEN_ENDPOINT")
    )
)
```
