---
title: Serialization
weight: 196
description: Here you'll find more informations about serialization.
---

---

### Definition <a id="definicao"></a>

A lot of frameworks integrate with Jackson and offer proprieties to customize serialization. However, Beagle's team decided to not add its own proprieties but to offer compatibility with the framework you choose.

### Customization <a id="customizacao"></a>

Inside the folder `src/main/resources`, look for a file called `application.properties.` If you don't have it, you can easily create. In case the key isn't listed on this file, it means that the standard configuration will be automatically applied.

On the links below you can see the available configurations to make the serialization according to the framework:

- **​[**Micronaut**](https://docs.micronaut.io/latest/guide/index.html#_jackson_configuration)**​
- ​**[**Spring**](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties.json)**​

{{% alert color="info" %}}
In the case of Spring, you must use only keys `spring.jackson`
{{% /alert %}}
