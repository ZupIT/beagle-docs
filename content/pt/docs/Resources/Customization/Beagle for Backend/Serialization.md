---
title: Serialização
weight: 194
description: Entenda como funciona a serialização
---

---

Como a maioria dos frameworks integram com Jackson e oferecem propriedades para customizar serialização, optamos por não adicionar propriedades nossas. Em vez disso, mantivemos a compatibilidade com seu framework escolhido.

### Customização

Dentro da pasta `src/main/resources` procure por um arquivo chamado\(se não existir pode criar\) `application.properties`. Caso a chave não esteja listada no seu arquivo, significa que a configuração padrão será automaticamente aplicada.

Nos links abaixo você confere as propriedades disponíveis para serialização de acordo com framework:

- [**Micronaut**](https://docs.micronaut.io/latest/guide/index.html#_jackson_configuration)
- [**Spring**](https://docs.spring.io/spring-boot/pt/home/current/reference/html/appendix-application-properties.html#json-properties)**​**

{{% alert color="info" %}}
No caso do Spring, deve-se utilizar apenas as chaves `spring.jackson`
{{% /alert %}}
