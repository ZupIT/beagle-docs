---
title: Cache strategy
weight: 179
description: You will find here the cache strategies types description on the Web
---

---

Beagle Web offers some cache strategies, one of them is the [**Beagle's pattern cache protocol guided by the backed**](https://docs.usebeagle.io/v/v1.0-en/resources/cache#how-does-the-cache-protocol-works). 

Other strategies you are able to use: 

1.  `beagle-with-fallback-to-cache`
2.  `beagle-cache-only`
3.  `network-with-fallback-to-cache`
4. `cache-with-fallback-to-network`
5. `network-only`
6. `cache-first`

{{% alert color="info" %}}
The two first implements Beagle's cache protocol, the others are independent from it.
{{% /alert %}}

## Where is the cache stored?

On the web, the cache data are stored in the browser. 

## Types of strategies 

You have **two strategy** possibilities on Beagle: the ones that are compatible with the cache protocol and the others that are independent. You will see next how each works: 

## Compatible strategies

### **1. beagle-with-fallback-to-cache**

Standard strategy that implements:

* Beagle's cache protocol. 
* Adding to a fallback.

Here, it is locally  saved on the storage the tree and the related cache protocol metadata \(`beagle-hash`, `max-age` and a time identifier that  shows the time the request has been sent\). 

This strategy allows you to use a fallback to return a tree, even in some error cases. When this happens, the fallback returns a tree that has already been locally saved before \(if it exists\), even if it is not updated. 

{{% alert color="warning" %}}
It is important to make it clear, this configuration will only work if the backend has the cache enabled. 

Beagle Web only extracts the header information from the requests. If they are not available, the request will always be sent and even with the stored cache, it won't be used, the exception is the for a fallback. 

If you backend is with disabled cache, the payload from the tree will be saved on the storage and it will not be used. 
{{% /alert %}}

### **2. beagle-cache-only**

This strategy only implements [**Beagle's cache protocol**](../../../cache/). This means that, it works the same way the standard one, but without the fallback. 

When you enable this strategy, the tree that is on cache it is only used if there is a valid max-age or if it receives a 304 status from the backend. 

In case the request fails, the view will not be displayed and it can not exhibit the error component, according to the config definition. 

## Independents strategies

### **1. network-with-fallback-to-cache**

This strategy starts the request on backend to bring as a result what it is saved on cache. This cache will only be used in case the request fails, working as fallback. 

If the request fails and the data is on cache, you will be able to make the return correctly. In case this does not happens, the error component is \(or not\) displayed according the to the config definition. 

### **2. cache-with-fallback-to-network:** 

This one starts the request on cache to return the tree that it is rendered in this cache. If nothing is found, the fallback will make a request to search the tree. 

This way, the request is only triggered if the data is not found on cache.  

{{% alert color="info" %}}
On this kind of strategy, there isn't an invalid one or a cache revalidation. While the data is on cache, it is considered valid. 
{{% /alert %}}

### **3. network-only**

This strategy makes exclusive backend requests. On this case, you will always send a request to search the trees to be rendered. 

If the request fails, there isn't a fallback to display \(or not\)  the error component. 

{{% alert color="info" %}}
This is the only strategy that does not save data on local storage. For that, this one is recommended  for cases you want Beagle Web to not save any information on the storage. 
{{% /alert %}}

### **4. cache-first:** 

This one sends the view after searching on cache, even if it doesn't find the request that it is looking for. 

If the tree is found on cache, it is used to render the view. When the request returns, the view is updated with the request result. In case it returns an error, the displayed view is kept with the cache information. 

## How do I alter the cache strategy used? 

To change the cache strategy, you have to use the `strategy` parameter with the strategy name chosen inside Beagle's config. 

On the configs below, you will find an example on how to alter the strategy to `network-only`:

{{< tabs id="T79" >}}
{{% tab name="Angular" %}}
```text
@BeagleModule({
  baseUrl: 'yourBackendUrlGoesHere',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    // Associate every beagle component to your angular component. 
  },
  strategy: 'network-only'
})
export class Beagle { }
```
{{% /tab %}}

{{% tab name="React" %}}
```text
export default createBeagleUIService({
  baseUrl: "",
  components: {},
  strategy: 'network-only'
})
```
{{% /tab %}}
{{< /tabs >}}
