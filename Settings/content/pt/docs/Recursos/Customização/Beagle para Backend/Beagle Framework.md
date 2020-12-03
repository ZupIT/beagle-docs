---
title: Beagle Framework
weight: 180
description: Entenda como funciona o framework
---

---

Esta seção explica como criar um backend sem fazer uso das configurações prontas para os frameworks **`Spring`** ou **`Micronaut`**. Você encontrará as ferramentas necessárias para criar um Backend\(BFF\) para o seu projeto. 

É importante reforçar que: 

* Beagle foi projetado para ser **independente** de qualquer estrutura de backend específica, como Micronaut ou Spring. 
* Os `Starters` da configuração inicial já fazem todo o processo descrito nesta página e adicionam automaticamente as configurações abaixo.

{{% alert color="danger" %}}
Vale reforçar que as customizações da configuração inicial não se aplicam a esse módulo.
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

Na configuração do projeto no backend é necessário realizar o setup do`ObjectMapper` do Jackson para o Beagle. Existem duas maneiras de fazer isso: 

Primeiro, você pode registrar o `BeagleModule` no seu`ObjectMapper`. 

```kotlin
val mapper = // however your ObjectMapper is initialized
mapper.registerModule(BeagleModule)
```

Ou você pode utilizar a função utilitária`beagleObjectMapper`. Essa função retorna um `ObjectMapper` usando o `jacksonObjectMapper()` com um `BeagleModule` registrado.

```kotlin
val mapper = BeagleSerializationUtil.beagleObjectMapper()
```

### Passo 3: Configurar o `BeagleCacheHandler`

Para fazer uso do mecanismo de cache, o Beagle oferece uma classe chamada `BeagleCacheHandler` e uma interface chamada `RestCacheHandler`. É recomendado usá-las como um filtro de resposta em seu projeto. 

A classe `BeagleCacheHandler` contém um template de implementação do protocolo. Este template é independente da estrutura HTTP e REST e utiliza o método de instância `handleCache.` 

No entanto, ele precisa interagir com os detalhes da resposta HTTP, e é aqui que o `RestCacheHandler` é acionado.

#### Usando o `javax.servlet`

Para demonstrar o funcionamento dessas classes, o exemplo abaixo foi implementado utilizando uma classe do `javax.servlet`. 

* Como recomendado, foi criado um filtro `javax.servlet.Filter` que aplica o protocolo de cache para toda resposta dada pelo backend do qual ele faz parte.
* Com o objetivo de focar no uso dos gerenciadores de cache, a parte do código que o`javax.servlet.HttpServletResponse`requer, foi omitida. Essa omissão é apontada nos códigos com comentários.

### Passo 4: Implementar o `RestCacheHandler`

Você precisa implementar a interface `RestCacheHandler`, composta por quatro transformações que o manipulador precisa executar no seu objeto de resposta. É genérico e deve ser especializado para o tipo de resposta disponibilizada em sua estrutura HTTP. Seus métodos devem se comportar conforme descrito abaixo:

| Método | Comportamento |
| :--- | :--- |
| `addHashHeader(response, header)` | Retorna a resposta com `header` adicionado aos `headers` dela na chave `BeagleCacheHandler.CACHE_HEADER` |
| `addStatus(response, status)` | Retorna uma resposta com `status` ao invés de uma resposta com o `status do HTTP` atual  |
| `callController(response)` | Retorna a `resposta` resultante da chamada do controlador atual _\(geralmente prosseguindo na cadeia de filtros\)_. |
| `getBody(response)` | Retorna o `corpo` da `resposta` como uma `String` |


```kotlin
class MyCacheHandler(
    private val request: HttpServletRequest,
    private val chain: FilterChain
) : RestCacheHandler<HttpServletResponse> {
    override fun addHashHeader(
        response: HttpServletResponse,
        header: String
    ): HttpServletResponse {
        response.setHeader(BeagleCacheHandler.CACHE_HEADER, header)
        return response
    }

    override fun addStatus(
        response: HttpServletResponse,
        status: Int
    ): HttpServletResponse {
        response.status = status
        return response
    }

    override fun callController(response: HttpServletResponse): HttpServletResponse {
        this.chain.doFilter(this.request, response)
        return response
    }

    // There is no direct way to access an HttpServletResponse's content,
    // this is only to demonstrate the idea
    override fun getBody(response: HttpServletResponse) = response.content
}
```


### Passo 5: Criar um `Filter` que utilize o`BeagleCacheHandler`

Logo depois, você precisa criar uma instância do `BeagleCacheHandler` e chamar o método `handleCache` nele. O construtor do `BeagleCacheHandler` pode aceitar uma lista de strings que representam a regex do endpoint para não ser armazenada em cache. 

Eles devem ser um `java.util.regex.Pattern` válido. Os parâmetros para o método `handleCache`estão descritos abaixo.   
  
Esse filtro retorna uma resposta totalmente transformada:

| Parâmetro | Descrição |
| :--- | :--- |
| `endpoint` | O endpoint requisitado. |
| `receivedHash` | O valor do`BeagleCacheHandler.CACHE_HEADER` que veio com a requisição. |
| `initialResponse` | Uma instância do tipo de `resposta` a ser transformada. |
| `restCacheHandler` | Instância da sua implementação do `RestCacheHandler`. |


```kotlin
class MyFilter : Filter {
    private val beagleCacheHandler = BeagleCacheHandler()

    override fun doFilter(
        request: ServletRequest?,
        response: ServletResponse?,
        chain: FilterChain?
    ) {
        if (request is HttpServletRequest
        && response is HttpServletResponse
        && chain != null) {
            this.beagleCacheHandler.handleCache(
                request.requestURI,
                request.getHeader(BeagleCacheHandler.CACHE_HEADER),
                response,
                MyCacheHandler(request, chain)
            )
        }
    }
}
```


### Passo 6: Configurar o mecanismo de especificação de plataforma

Para que o Beagle tenha o funcionamento esperado na filtragem de elementos por plataforma, é necessário realizar algumas configurações. 

É recomendado registrar um filtro ou um interceptor que verifique a resposta de seu BFF e filtre os elementos enviados de acordo com a plataforma especificada no header customizado `beagle-platform`. 

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

No exemplo acima, `preHandle` passa a informação da plataforma pela qual a requisição foi feita como um atributo da request, para que ele possa ser acessado posteriormente pelo BFF e facilite a identificação da plataforma. Já o `postHandle` realiza o trabalho de filtrar os elementos devidos de acordo com a plataforma alvo na resposta de seu BFF.
