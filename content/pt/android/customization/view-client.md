---
title: View client
wight: 109
description: >-
  Nesta seção, você encontrará informações sobre como configurar um ViewClient customizado no Beagle Android.
---

---

## O que é isso?

O `View Client` é muito semelhante ao HttpClient. Enquanto o HttpClient é responsável por lidar com requisições (views, json data, imagens, etc), o ``ViewClient`` é responsável apenas por buscar views (Server Driven Views).

A interface ViewClient tem as funções **`fetch`** e **`prefetch`**.

A implementação padrão de **`fetch`** tem 2 funcionalidades:

1. Ela procura um **`response data`** em um cache local, e caso exista, esta função o remove do cache e retorna seu conteúdo;
2. Se não houver dados de resposta no cache, esta função chama o `HttpClient` e faz uma solicitação para um ResponseData.

A implementação padrão do **`prefech`** tem 2 funcionalidades:

1. Ele procura dados de resposta em um cache local e retorna esse cache se existir;
2. Se não houver dados de resposta em cache, esta função chama o `HttpClient` e faz a solicitação de um ResponseData e armazena em cache (memória).

{{% alert color="success" %}}
Observe que `fetch` apenas procura por respostas que possam ter sido *requisitadas* anteriormente, e `prefetch` apenas armazena respostas. Ele faz isso apenas, geralmente é o bastante para muitas aplicações. Mas pode haver alguma outra situação em que uma aplicação precise de um comportamento extra ao buscar `views`, e é nesse momento que um `ViewClient` customizado deve ser feito.
{{% /alert %}}

## Criando um novo ViewClient

Um bom exemplo é o cache. Digamos que queremos armazenar uma `view` localmente de forma que quando o Beagle chamar `viewClient.fetch` novamente, ele retorne o resultado em cache, ao invéz de chamar o HttpClient.

Para fazer isso, criamos uma classe ``**MyViewClient**`` que implementa ``ViewClient``, que tem uma forma de armazenamento e é anotado com `@BeagleComponent` da seguinte forma:

```kotlin
@BeagleComponent
class MyViewClient(
    private val httpClient: HttpClient? = BeagleEnvironment.beagleSdk.httpClientFactory?.create(),
    private val cachedResponses: MutableMap<String, ResponseData> = mutableMapOf()
) : ViewClient {

    override fun fetch(requestData: RequestData, onSuccess: OnSuccess, onError: OnError): RequestCall? {
        val cachedResponse = cachedResponses[requestData.url]
        return if (cachedResponse != null) {
            onSuccess(cachedResponse)
            null
        } else {
            requestData.doRequest(httpClient, onSuccess = { response ->
                onSuccess(response)
                cachedResponses[requestData.url] = response
            }, onError)
        }
    }

    override fun prefetch(requestData: RequestData, onSuccess: OnSuccess, onError: OnError): RequestCall? {
        val cachedResponse = cachedResponses[requestData.url]
        return if (cachedResponse != null) {
            onSuccess(cachedResponse)
            null
        } else {
            requestData.doRequest(httpClient, onSuccess = { response ->
                onSuccess(response)
                cachedResponses[requestData.url] = response
            }, onError)
        }
    }

    companion object {
        internal val instance = MyViewClient()
    }
}

```

Neste exemplo implementamos uma lógica para `fetch` e `prefetch` que irá armazenar cada resultado de busca na memória usando um `MutableMap` chamado `cachedResponses`. Ele usa a *request url* como chave, e procura por um ``ResponseData`` toda vez que `fetch` ou `prefetch` é chamado. Esta é uma implementação simples, pois esse cache nunca expiraria, pois o objetivo aqui é mostrar como esse recurso pode ser implementado usando o ViewClient.
