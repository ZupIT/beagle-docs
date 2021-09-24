---
title: Overview
weight: 1
type: overview
description: >-
  Here you'll find how Beagle stores the elements in cache between the backend
  and frontend
---

---

Currently, there are **two cache labels** on Beagle:

- A volatile layer.
- A persistent layer.

The volatile layer today depends on the persistent layer, meaning that only curly items on the persistent layer are candidates to the volatile cache.

## Cache's layers

### Volatile cache

It's the cache that lays on the frontend application's memory and it's used to reduce the number of backend's calls.

The entries on this cache layer has time duration defined by cache general configurations of each client's platform.

You can check out how to **configure the cache** according to your frontend's platform on the following links:

- [**Configuring Cache**]({{< ref path="/resources/cache/how-to-configure-cache" lang="en" >}})

### Persistent cache

On this cache layer, there are two types of localization:

- On backend's memory;
- On frontend's storage.

This cache is used to optimize BFF's response - in terms of time and size -, in cases where there is no changes. The entries of this cache lasts until the server redeploy or the client is reinstalled.

The premisse to this cache works is that it has to always return the same JSON to the same request. To guarantee that, it's necessary that this cache is the same according to its endpoint and specific platform as we can see in [**component's platform specification.**]({{< ref path="/resources/platform-sorting" lang="en" >}})

In other words, an endpoint can return a static element because it can only work if it returns the same JSON, independently of any other specific platform.

{{% alert color="danger" %}}
It's important to remember that cache's mechanism **must not** be used with **endpoints** that does not meet this **premisse**.
The cache can be activated or disabled on BFF by endpoint or for an entire BFF. You can **check out** [**how to configure a cache.** ]({{< ref path="/resources/cache/how-to-configure-cache" lang="en" >}})
{{% /alert %}}

## How does the cache protocol works?

The protocol acts in the `beagle-hash` header. BFF validates the received hashes and send a complete response or just the `status HTTP 304 Not Modified` \(without the body\).

When BFF responds with the `status 304`, the application loads the element in cache. If this does not happen, it stores the hash and render the received elements.

![](/shared/beaglesave.png)

## Next Steps

👉 See how to [**configure cache**]({{< ref path="/resources/cache/how-to-configure-cache#configuring-and-customizing-the-cache" lang="en" >}}) according to each platform \(Android, iOS, Web e Backend\).

👉Check out [**how cache works** ]({{< ref path="/resources/cache/how-to-configure-cache#how-does-cache-work" lang="en" >}})according to its types \(reliable and unreliable\).
