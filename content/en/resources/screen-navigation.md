---
title: Screen navigation
weight: 211
description: "Here, you'll find how Beagle deals with screen navigation."
---

---

On Beagle, navigation works as a type of [**Action**]({{< ref path="/api/actions/" lang="en" >}}), which can be used by all components that receives an action.

{{% alert color="info" %}}
Before configuring the navigation between screens of your application, it is required you have [**installed Beagle**]({{< ref path="/get-started/installing-beagle/" lang="en" >}}), checked the [**use configuration**]({{< ref path="/get-started/using-beagle/" lang="en" >}}) and tested Beagle's framework on the [**displaying a server-driven screen tutorial**](#no-such-page)
{{% /alert %}}

After these configurations, just add the example code as a return of your service and call the endpoint, defined in your controller, in your frontend.

## Navigation's routes

Some navigation actions needs a parameter. It is possible to receive two route type:

1. **Local:** intern navigation that expects a new [**screen**]({{< ref path="/api/screen/" lang="en" >}}).
2. **Remote:** expects that the `url` points into an API that will return one of more Beagle's components.

On the example below, see a case where the `route` is `remote`:

{{< tabs id="T86" >}}
{{% tab name="JSON" %}}

```javascript
{
    "_beagleComponent_": "beagle:button",
    "text": "Click me!",
    "onPress": [
        {
            "_beagleAction_": "beagle:pushStack",
            "route": {
                "url": "/my-next-screen",
                "shouldPrefetch": false
            }
        }
    ]
}
```

{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Button(
   text = "Click me!",
   onPress = listOf(
       Navigate.PushStack(
           route = Route.Remote("/my-next-screen")
       )
   )
)
```

{{% /tab %}}
{{< /tabs >}}

![](/shared/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-MB0DuGx28NQeWEgD746%2F-MB0r5wLqOLNjqhX_8g_%2Fnavigate-remote.gif?alt=media&token=0b93b43c-8a51-40e8-b96d-76482546e719)

## Types of navigation

Next you will see more details about Beagle's navigation types:

[**OpenNativeRoute**]({{< ref path="/api/actions/navigate/openexternalurl" lang="en" >}})

[**OpenExternalURL**]({{< ref path="/api/actions/navigate/openexternalurl" lang="en" >}})

[**PushStack**]({{< ref path="/api/actions/navigate/pushstack" lang="en" >}})

[**PushView**]({{< ref path="/api/actions/navigate/pushview" lang="en" >}})

[**PopStack**]({{< ref path="/api/actions/navigate/popstack" lang="en" >}})

[**PopView**]({{< ref path="/api/actions/navigate/popview" lang="en" >}})

[**PopToView**]({{< ref path="/api/actions/navigate/poptoview" lang="en" >}})

[**ResetApplication**]({{< ref path="/api/actions/navigate/resetapplication" lang="en" >}})

[**ResetStack**]({{< ref path="/api/actions/navigate/resetstack" lang="en" >}})
