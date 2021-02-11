---
title: Standard headers
weight: 181
description: "Here you will find the default headers' description and how to disable them"
---

---

Beagle Web sends **two types of headers** that are a standart for Beagle:

1. **beagle-platform:** header used to indicate to the backend that this request came from the Web. This way, the value is sent is always **WEB**.
2. **beagle-hash**: header used to make [**Beagle's cache protocol** ]({{< ref path="/resource/cache/" lang="en" >}})work properly.

By default, these headers are always sent, however they can be disabled by the `useBeagleHeaders` parameter in the config.

See below the examples on how to disable the headers request on Angular and React's configuration.

{{< tabs id="T77" >}}
{{% tab name="Angular" %}}
```text
@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {},
  useBeagleHeaders: false
})
export class Beagle { }
```
{{% /tab %}}

{{% tab name="React" %}}
```text
export default createBeagleUIService({
  baseUrl: "",
  components: {},
  useBeagleHeaders: false
})
```
{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
You must keep the headers enabled to make Beagle's cache protocol working properly. 
{{% /alert %}}
