---
title: Remote view parameters
weight: 185
---

---

## Beagle Remote View

Beagle's library offers a component to help render the server-driven screens, remote view:

{{< tabs name="T80" >}}
{{% tab name="Angular" %}}
```text
<beagle-remote-view [loadParams]="loadParams"></beagle-remote-view>
```
{{% /tab %}}

{{% tab name="React" %}}
```text
<BeagleRemoteView {...loadParams} />
```
{{% /tab %}}
{{< /tabs >}}

Angular and React accept remote view's properties that are called Load Params. It is through it, that some options are configured to influence the way the screens are rendered. 

See below that properties accepted by it: 

```text
import { LoadParams } from '@zup-it/beagle-web';

const params: LoadParams = {
  path: '/payload.json',
  fallback: {_beagleComponent_: 'beagle:text', text:'Fallback Error'},
  method: 'get',
  headers: {'header': 'value'},
  shouldShowLoading: true,
  shouldShowError: true,
  strategy: "network-only",
  loadingComponent: 'myComponentLoading',
  errorComponent: 'myComponentError'
}
```

| Property | Type | Description |
| :--- | :--- | :--- |
| path | string | **Required.**  Server path to load the JSON with the server-drive screen.  |
| fallback | BeagleComponent | Component to be rendered in case the request fails.  |
| method |  Http method | Http method to make a request.  |
| headers | Map&lt;key, value&gt; | Header list to attach when you make a request.  |
| shouldShowLoading | boolean | Show or not the loading component. |
| shouldShowError | boolean | Show or not the error component. |
| strategy | string&lt;[**Cache strategy**](cache-strategy.md)&gt; | Cache strategy used in the request. |
| loadingComponent | string | Customized component for loading.  |
| errorComponent | string | Customized component for error. |
