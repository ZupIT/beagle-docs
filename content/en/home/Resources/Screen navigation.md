---
title: Screen navigation
weight: 211
description: 'Here, you''ll find how Beagle deals with screen navigation.'
---

---

On Beagle, navigation works as a type of [**Action**](/docs/api/actions/), which can be used by all components that receives an action.

{{% alert color="info" %}}
Before configuring the navigation between screens of your application, it is required you have [**installed Beagle**](/docs/get-started/installing-beagle/), checked the [**use configuration**](/docs/get-started/using-beagle/) and tested Beagle's framework on the [**displaying a server-driven screen tutorial**](#no-such-page)
{{% /alert %}}

After these configuration, just add the example code as a return of you service and call the endpoint, defining in your controller,  in your frontend. 

## Navigation's routes

Some navigation actions needs a parameter. It is possible to receive two route type: 

1. **Local:** intern navigation that expects a new [**screen**](/docs/api/screen/).
2. **Remote:** expects that the `url` points into an API that will return one of more Beagle's components.

On the example below, we case a case where the `route` is `remote`:

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

![](/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-MB0DuGx28NQeWEgD746%2F-MB0r5wLqOLNjqhX_8g_%2Fnavigate-remote.gif?alt=media&token=0b93b43c-8a51-40e8-b96d-76482546e719)

## Types of navigation

The following pages, you will see more details about Beagle's navigation types:

[**OpenNativeRoute**](/docs/api/actions/navigate/openexternalurl)

[**OpenExternalURL**](/docs/api/actions/navigate/openexternalurl)

[**PushStack**](/docs/api/actions/navigate/pushstack)

[**PushView**](/docs/api/actions/navigate/pushview)

[**PopStack**](/docs/api/actions/navigate/popstack)

[**PopView**](/docs/api/actions/navigate/popview)

[**PopToView**](/docs/api/actions/navigate/poptoview)

[**ResetApplication**](/docs/api/actions/navigate/resetapplication)

[**ResetStack**](/docs/api/actions/navigate/resetstack)
