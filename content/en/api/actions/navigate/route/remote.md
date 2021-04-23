---
title: Remote
weight: 268
---

---

## What is it?

Navigation for remote content.

The structure is represented by the attributes below:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Attribute</strong>
      </th>
      <th style="text-align:left"><strong>Type</strong>
      </th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left"><strong>Definition</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">url</td>
      <td style="text-align:left">
        String or
        <a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">Navigation address.</td>
    </tr>
    <tr>
      <td style="text-align:left">shouldPrefetch</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Load the address previously.</td>
    </tr>
    <tr>
      <td style="text-align:left">fallback</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/v/v1.0-en/api/screen"><strong>Screen</strong></a></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Screen to be returned in case the loading fails.</td>
    </tr>
    <tr>
      <td style="text-align:left">httpAdditionalData</td>
      <td style="text-align:left">HttpAdditionalData</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Can be used on navigation actions to pass additional http data for the requests made to the backend.</td>
    </tr>
  </tbody>
</table>

The **HttpAdditionalData** object has the method, headers and body attributes.

| **Attribute**| **Type** | **Required** | **Definition** |
| :---------| :-----| :---: | :--------|
| method | HTTPMethod |   | The http method to perform the request: get, put, post, delete, etc |
| headers | Map<String, String> |  | Header items for the request. |
| body | Any  |   | Content to be sent in the body of the request. Can be either a string or an object that can be serialized to a JSON string |

## How to use it?

{{< tabs id="T107" >}}
{{% tab name="JSON" %}}
<!-- json-playground:remote.json
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "url": "/present/view",
        "shouldPrefetch": false,
        "httpAdditionalData": {
            "method" : "POST",
            "headers" : { "test" : "test" },
            "body" : {
            "framework":"Beagle"
          }
        }
      }
    }
  ]
}
-->
{{% playground file="remote.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Button(
    onPress = listOf(
      Navigate.PushView(
        route = Route.Remote(
          url = "/present/view",
          httpAdditionalData = HttpAdditionalData(
            method = HttpMethod.POST,
            headers = mapOf("test" to "test"),
            body = mapOf("framework" to "Beagle")
          )
        )
      )
    ),
    text = "Click me!"
)
```
{{% /tab %}}
{{< /tabs >}}