---
title: Serialization
weight: 194
description: Here you'll find more informations about serialization.
---

---

### Definition <a id="definicao"></a>

Since mostly of the frameworks integrate to Jackson and offer proprieties to customize serialization, we decided to not add our proprieties. Instead of that, we kept the compatibility with your chosen framework.

### Customization <a id="customizacao"></a>

Inside the folder `src/main/resources`, look for a file called `application.properties.` If you don't have it, you can easily create. In case the key isn't listed on this file, it means that the standard configuration will be automatically applied.

On the links below you can see the available configurations to make the serialization according to the framework:

- ​[**Micronaut**](https://docs.micronaut.io/latest/guide/index.html#_jackson_configuration)**​**
- **​**[**Spring**](https://docs.spring.io/spring-boot/current/reference/html/appendix-application-properties.html#json-properties)**​**

{{% alert color="info" %}}
In the case of Spring, you must use only keys `spring.jackson`
{{% /alert %}}
