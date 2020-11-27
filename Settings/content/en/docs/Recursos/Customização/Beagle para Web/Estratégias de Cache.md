---
title: Estratégias de Cache
weight: 172
description: >-
  Nesta seção, você encontra a descrição dos tipos de estratégias de cache
  disponíveis na Web
---

---

O Beagle Web oferece algumas estratégias de cache, entre elas o ****[**protocolo de cache padrão do Beagle guiado pelo backend**](https://docs.usebeagle.io/features/cache#como-o-protocolo-de-cache-funciona). ****

Outras estratégias que você pode usar são:

1.  `beagle-with-fallback-to-cache`
2.  `beagle-cache-only`
3.  `network-with-fallback-to-cache`
4. `cache-with-fallback-to-network`
5. `network-only`
6. `cache-first`

{% hint style="info" %}
As duas primeiras implementam o protocolo de cache do Beagle, já as demais são independentes deste protocolo. 
{% endhint %}

## Onde o cache é armazenado?

No framework para Web, os dados de cache são armazenados no local storage do navegador. 

## Tipos de estratégias 

No Beagle, você tem **duas possibilidades de estratégia**: as que são compatíveis com o protocolo de cache e as que são independentes. A seguir, você verá como funciona cada uma delas:

## Estratégias compatíveis ****

### **1. beagle-with-fallback-to-cache**

Estratégia padrão que implementa:

* Protocolo de cache do Beagle.
* A adição de um fallback. 

Nela, é salvo de forma local no storage tanto a **árvore** quanto os **metadados relacionados** ao protocolo de cache \(`beagle-hash`, `max-age` e um identificador da hora em que a chamada foi enviada\).

Essa estratégia permite que você use o fallback para retornar uma árvore, mesmo em casos de erro. Quando isso acontece, o fallback retorna a árvore que já tenha sido salva localmente antes \(se existir\), mesmo que ela esteja desatualizada.

{% hint style="warning" %}
Importante deixar claro que essa configuração só funcionará se o backend estiver com cache habilitado. 

Isso porque o Beagle Web só extrai as informações do header das requisições. Se elas não estiverem disponíveis, as requisições serão sempre enviadas e, mesmo com o cache armazenado, ele não será utilizado, a não ser para o fallback.  

Se o seu backend estiver com cache desabilitado, os payloads da árvore serão salvos no storage e não serão utilizados.
{% endhint %}

### **2. beagle-cache-only**

Estratégia que implementa apenas no caso do [**protocolo de cache do Beagle**](../../cache/#como-o-protocolo-de-cache-funciona). Isso significa que ela funciona igual à estratégia padrão, mas sem o fallback. 

Quando você habilita essa estratégia, a árvore que está no cache só é utilizada se tiver um max-age válido ou se receber o status de 304 do backend. 

Caso a requisição falhe, a view não vai ser exibida e pode não exibir o componente de erro, de acordo com a definição da config. 

## Estratégias independentes

### **1. network-with-fallback-to-cache**

Estratégia que inicia a chamada no backend para trazer como resultado o que estiver salvo no cache. Esse cache só será usado em casos de falha na requisição, funcionando como fallback. 

Se a requisição falhar e o dado estiver no cache, você conseguirá fazer o retorno corretamente. Caso isso não aconteça, o componente de erro é \(ou não\) exibido de acordo com a definição da config.

### **2. cache-with-fallback-to-network:** 

Estratégia que inicia a chamada no cache para retornar a árvore que estiver renderizada nesse cache.  Se não for encontrado nada, o fallback é realizar a chamada para buscar a árvore. 

Desta forma, a chamada só é disparada se o dado não for encontrado no cache.

{% hint style="info" %}
No caso desse tipo de estratégia, não há uma estratégia de invalidação ou revalidação do cache. Enquanto o dado estiver no cache, ele é considerado válido.
{% endhint %}

### **3. network-only**

Estratégia que busca fazer chamadas exclusivamente do backend. Nesse caso, você sempre enviará a requisição para buscar as árvores a serem renderizadas. 

Se a requisição falhar, não existe fallback para exibir \(ou não\) o componente de erro.

{% hint style="info" %}
Esta é a única estratégia que não salva dados no local storage. Por isso, ela é recomendada nos casos em que você quer que o Beagle Web não salve nenhuma informação no storage.
{% endhint %}

### **4. cache-first:** 

Estratégia que envia a view depois de fazer a busca no cache, mesmo que não encontre a requisição que estiver procurando. 

Se a árvore é encontrada no cache, ela é utilizada para renderizar a view. Quando a requisição retorna, a view é atualizada com o resultado da requisição. No caso de retornar algum erro, é mantida a view exibida com a informação do cache.

## Como alterar a estratégia de cache utilizada?

Para mudar a estratégia de cache, você deve utilizar o parâmetro `strategy` com o nome da estratégia escolhida dentro no config do Beagle.

Nas configs abaixo, você encontra um exemplo de como alterar a estratégia para`network-only`:

{% tabs %}
{% tab title="Angular" %}
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
{% endtab %}

{% tab title="React" %}
```text
export default createBeagleUIService({
  baseUrl: "",
  components: {},
  strategy: 'network-only'
})
```
{% endtab %}
{% endtabs %}
