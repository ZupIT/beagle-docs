---
title: Cache
weight: 182
description: Here you'll find more informations about cache.
---

---

{{% alert color="danger" %}}
This functionality only supports for users that use [**starter**](../../../get-started/installing-beagle/beagle-backend.md#passo-3-incluindo-requerimentos-adicionais) library.
{{% /alert %}}

### Definition

The cache was created to optimize the answer - in terms of time and size - of BFF when the return is equal to the previous one. The entries of this cache lasts until the server redeploys or the client is reinstalled.

###   Customization

Inside the folder `src/main/resources`, look for a file called `application.properties.` If you don't have it, you can easily create. In case the key isn't listed on this file, it means that the standard configuration will be automatically applied. 


```text
beagle.cache.endpoint.exclude=/image
beagle.cache.enabled=false

```


On the list below, you can see all available proprieties and which configurations can be changed. 

| Key | Description  | Default |
| :--- | :--- | :---: |
| `beagle.cache.enabled` | Flag indicating if the cache mechanism is enabled \(or not\).  | `true` |
| `beagle.cache.endpoint.include` | List of endpoints to be cached. It accepts regular expressions supported by your framework.  | All |
| `beagle.cache.endpoint.exclude` | Lista of endpoints to not be cached. It accepts regular expressions according to `java.util.regex.Pattern`. The exclusion is priority above inclusion. | Nen |
