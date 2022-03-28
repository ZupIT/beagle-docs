---
title: Beagle Framework
weight: 195
description: Nesta seção, você encontra informações para entender com o framework do Beagle funciona.
---

---

Esta seção explica como criar um backend sem fazer uso das configurações prontas para os frameworks **`Spring`** ou **`Micronaut`**. Você encontrará as ferramentas necessárias para criar um Backend\(BFF\) para o seu projeto. 

É importante reforçar que: 

* Beagle foi projetado para ser **independente** de qualquer estrutura de backend específica, como Micronaut ou Spring. 
* Os `Starters` da configuração inicial já fazem todo o processo descrito nesta página e adicionam automaticamente as configurações abaixo.

{{% alert color="danger" %}}
As customizações da configuração inicial não se aplicam a esse módulo.
{{% /alert %}}

Para configurar seu BFF manualmente, siga os seguintes passos: 

### Passo 1: Adicionar as dependências


```markup
<dependency>
	<groupId>br.com.zup.beagle</groupId>
	<artifactId>framework</artifactId>
	<version>${beagle_version}</version>
</dependency>
```


### Passo 2: Configurar o `ObjectMapper` do Jackson

Na configuração do projeto no backend é necessário realizar o setup do`ObjectMapper` do Jackson para o Beagle:

* Você deve registrar o `BeagleModule` no seu`ObjectMapper`:

```kotlin
val mapper = // Adicione aqui o inicializador do seu `ObjectMapper`
mapper.registerModule(BeagleModule)
```

### Passo 3: Configurar o mecanismo de especificação de plataforma

Para que o Beagle tenha o funcionamento esperado na filtragem de elementos por plataforma, é necessário realizar algumas configurações. 

Registre um filtro ou um interceptor que verifique a resposta de seu BFF e filtre os elementos enviados de acordo com a plataforma especificada no header customizado `beagle-platform`. 

A classe `BeaglePlatformUtil` foi criada disponibilizando algumas ferramentas para facilitar essa configuração e ser usada em seu filtro/interceptor. Elas são especificadas abaixo:

| Constante | Descrição |
| :--- | :--- |
| `BEAGLE_PLATFORM_HEADER` | Nome do campo header utilizado pelo Beagle para verificar com qual plataforma o BFF está interagindo |

| Método | Descrição |
| :--- | :--- |
| `treatBeaglePlatform(currentPlatform, jsonNode)` | Retorna o JsonNode passado como parâmetro jsonNode com os elementos cuja plataforma não correspondem ao parâmetro currentPlatform removidos |

Um exemplo de interceptor para Spring:

```kotlin
class BeaglePlatformInterceptor(private val objectMapper: ObjectMapper) : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        request.setAttribute(
            BeaglePlatformUtil.BEAGLE_PLATFORM_HEADER,
            request.getHeader(BeaglePlatformUtil.BEAGLE_PLATFORM_HEADER)
        )
        return true
    }

    override fun postHandle(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any,
        modelAndView: ModelAndView?
    ) {
        val responseWrapper = (response as ContentCachingResponseWrapper)
        val jsonTree = this.objectMapper.readTree(responseWrapper.contentAsByteArray)
        BeaglePlatformUtil.treatBeaglePlatform(
            request.getHeader(BeaglePlatformUtil.BEAGLE_PLATFORM_HEADER),
            jsonTree
        )
        val jsonData = jsonTree.toPrettyString()
        responseWrapper.resetBuffer()
        responseWrapper.outputStream.write(jsonData.toByteArray())
        responseWrapper.setContentLength(jsonData.length)
    }
}
```

No exemplo acima,  o `preHandle` passa a informação da plataforma pela qual a requisição foi feita como um atributo da request para que ele possa ser acessado posteriormente pelo BFF e facilite a identificação da plataforma. Já o `postHandle` realiza o trabalho de filtrar os elementos de acordo com a plataforma na resposta de seu BFF.
