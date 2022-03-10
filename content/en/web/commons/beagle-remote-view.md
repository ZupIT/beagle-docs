---
title: BeagleRemoteView
weight: 176
description: BeagleRemoteView description and its parameters
---

---

## What is it?

The `BeagleRemoteView` is the input component for a server driven workflow in Beagle Web.

## How to use it?

We have listed an exemple below on how to use this component.

{{< tabs id="T81" >}}
{{% tab name="Angular" %}}

```text
<beagle-remote-view route="/my-server-driven-page"></beagle-remote-view>
```

{{% /tab %}}

{{% tab name="React" %}}

```text
<BeagleRemoteView route="/my-server-driven-page" />
```

{{% /tab %}}
{{< /tabs >}}

## Parameters

### route

`BeagleRemoteView` has a single mandatory parameter: the route. The route can be a string with the URL or a complex object of type `RemoteView`. When it's a string, we assume the route is a simple GET to the given URL, with no additional headers. If you need to make a request with another HTTP method, response body or specific headers, you must create an object from `RemoteView` type, that has the following properties:

- **url:** the only required property. Indicates the request URL.
- **fallback:** UI tree to render if the request fails.
- **shouldPrefetch:** is not useful when used with the `BeagleRemoteView` component. In other situations, they preload the page as soon as possible rather than waiting for specific events.
- **httpAdditionalData:** used to configure the request. An HttpAdditionalData contains:
  - **method:** the HTTP method, the default is GET.
  - **headers:** a map with the request headers.
  - **body:** the body of the request. This is not valid for GET requests.

### controllerId

The second parameter accepted by `BeagleRemoteView` is optional and defines which navigation controller will be used. The ``navigation controllers`` are responsible for deciding what to do in the loading, what error and success events should be called for a screen. If it is not informed, the default controller from beagle will be used. To learn more about ``navigation controllers``, read [this article]({{< ref path="/web/commons/navigation/navigation-controllers" lang="en" >}}).
