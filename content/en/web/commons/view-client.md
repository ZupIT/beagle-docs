---
title: View client
weight: 3
description: >-
  In this section, you will find information on how to setup a ViewClient in Beagle Web.
---

---

## What is it?

The `View Client` is very similar to the HttpClient. While the HttpClient is responsible for managing every request (views, json data, images, etc), the ``ViewClient`` is only responsible for fetching views, i.e. Server Driven Pages.

The ``ViewClient`` creates a ``BeagleRequest`` that is sent to the HttpClient. The default implementation handles 2 things:

1. It creates a ``BeagleRequest`` according to what has been requested by its caller (generally the navigator);
2. When the response arrives from the HttpClient, it checks for navigation actions where `preFetch` is `true` and, *asynchronously*, pre-fetches their results.

It does nothing more than this, and this might be enough for most applications. But, some applications may need extra behavior when fetching views, and this is the place where it should be implemented.

## How to use it?

### Creating a new ViewClient

A good example is caching. Let's say we want to locally store a view so when Beagle calls `viewClient.fetch` again, it returns the cached result instead of calling the HttpClient. To do this, we can implement a new ``ViewClient`` that has a storage and implements `fetch` as follows:

```typescript
import { ViewClient } from '@zup-it/beagle-web'

const key = 'view_client_cache'

function createMyViewClient(): ViewClient {
  async function fetchView(): Promise<BeagleUIElement> {
    // ...
  }
  
  return {
    fetch: async (route) => {
      const routeKey = `$key:${route.url}`
      const stored = localStorage.getItem(key)
      if (stored) return JSON.parse(stored);
      const view = await fetchView(route);
      localStorage.setItem(routeKey, JSON.stringify(view));
      return view;
    }
  }
}
```

We have implemented a very simple logic above that will store every fetch result into the disk using the *localStorage*. This is a simple and only *for test* implementation, since this cache would never expire.

### Registering the new ViewClient

After creating your custom ``ViewClient`` above, you need to pass it to your ``BeagleService`` instance:

{{< tabs >}}
{{% tab name="Angular" %}}

```typescript
@BeagleModule({
  viewClient: createMyViewClient(),
  // ...
})
export class Beagle {}

createBeagleUIService({
  defaultNavigationController: inYourFace,
  navigationControllers: { secured, public },
  // ...
})
```

{{% /tab %}}

{{% tab name="React" %}}

```typescript
createBeagleUIService({
  viewClient: createMyViewClient(),
  // ...
})
```

{{% /tab %}}
{{< /tabs >}}
