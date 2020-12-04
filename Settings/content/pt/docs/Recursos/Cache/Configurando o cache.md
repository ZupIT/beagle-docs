---
title: Configurando o cache
weight: 51
description: >-
  Detalhes do funcionamento do cache e configuração para cada plataforma
  (Android, iOS, Backend, WEB)
---

---

## Como funciona o cache?

O cache padrão é controlado pelo backend com a tag `cache-control` e `beagle-hash` que são informações que devem ser fornecidas através do _header_ das requisições, onde o `beagle-hash` é responsável por fornecer o hash referente a tela que está sendo baixada e o `cache-control`o tempo de vida deste cache como sendo **confiável.**

### Cache confiável

Um cache é dito confiável quando o seu tempo de vida ainda não expirou.

Neste caso ao verificar que existe um cache no _front_ e ele é confiável, a tela é renderizada sem sequer confirmar com o servidor. Isso poupa tempo, banda e provê uma experiência fluida para o usuário.

O cache confiável fica salvo em memória.

### Cache não confiável

Já que temos o cache confiável, também temos o não confiável, isso quer dizer que o tempo de vida dele já expirou.

Um cache ser não confiável significa que ao ser identificado ele precisa ser revalidado com o backend para aquela rota pelo seu hash.

Neste momento ele deixa de estar salvo na memória e fica salvo de maneira persistente no disco.

### Tempo de vida

O tempo de vida do cache pode ser parametrizado através de configuração pela aplicação. Na implementação padrão do cache o tempo de vida é de 300 segundos. Este tempo também pode ser alterado caso o _backend_ envie um tempo diferente através do _header_ `cache-control`, pois ele tem prioridade nesta configuração.

### Revalidação de cache

Quando um cache não confiável é encontrado ele precisa ser revalidado com o backend. Isso quer dizer que ao buscar uma tela ele envia no header da requisição o _hash_ que possui.

Ao receber essa requisição o servidor entende que já existe uma versão desta tela salva na aplicação e compara o valor _hash_ enviado com o valor atual salvo por ele \(_backend_\). Caso sejam iguais é enviada uma resposta com status 304 e sem corpo algum, indicando que a tela permanece a mesma e que aquele cache é confiável novamente.

Caso o _hash_ enviado pelo front seja diferente daquele salvo no backend, será enviada uma resposta normalmente com o novo valor do _hash_ que deverá ser atualizado na aplicação.

### Ocupação de memória e disco

Para evitar sobrecarga de memória e disco ambos os caches aplicam uma política de substituição[ __**Least Recently Used \(LRU\)** ](https://pt.wikipedia.org/wiki/Algoritmo_de_troca_de_página)onde a quantidade máxima de registros também pode ser configurada através da classe base de cache pela aplicação. Os valores padrões para memória e disco são 15 e 150 respectivamente.

## Configurando e customizando o cache

Existem customizações permitidas pela classe padrão existente no cache como tempo de vida e quantidade máxima de registros em memória e disco.

Caso a abordagem padrão não resolva o problema, a aplicação tem total liberdade de substituir completamente a implementação padrão pela que melhor atender. Para isso, basta que a classe responsável pelo gerenciamento do cache esteja em conformidade com o protocolo `CacheManagerProtocol`.

Cada plataforma tem especificidades para configurar o cache. 

Abaixo listamos a configuração por plataforma:

{{< tabs name="T22" >}}
{{% tab name="Android" %}}
No Android, o cache é configurado quando implementamos as configurações iniciais do Beagle.

Esta implementação acontece dentro da classe que nomeamos [**AppBeagleConfig**](../../get-started/using-beagle/android.md#passo-2-criar-uma-classe-beagleconfig), ou seja, dentro da classe de configuração do Beagle. 

O cache, em si, é uma class interna do Beagle na qual podemos definir 3 propriedades representadas pelos atributos:

1. `enable`
2. `maxAge`
3. `memoryMaximumCapacity`


```kotlin
@BeagleComponent
class AppBeagleConfig : BeagleConfig {
    override val isLoggingEnabled: Boolean = true
    override val baseUrl: String get() = "https://myapp.server.com/"
    override val environment: Environment get() = Environment.DEBUG
    override val cache: Cache = Cache(
        enabled = true,
        maxAge = 300,
        memoryMaximumCapacity = 15 
    )
}
```


### Atributos do cache

| Atributo | Definição |
| :--- | :--- |
| **enable** | Valor `booleano`que habilita ou desabilita o cache em memória e disco |
| **maxAge** | Valor `inteiro`de tempo em segundos que o cache em memória estará ativo |
| **memoryMaximumCapacity** | Valor `inteiro` que representa o tamanho do cache de memória LRU. Representa o número de telas que vão estar na memória. Por exemplo, se você definir o número 15, significa que 15 páginas ficarão em cache. |
{{% /tab %}}

{{% tab name="iOS" %}}
No iOS, o cache é configurado quando implementamos as configurações das dependências do  Beagle.

 É possível mudar a configuração default do cache criando uma instância da classe `CacheManagerDefault`. Nessa classe permitimos que você altere os valores de 3 propriedades:

1. `memoryMaximumCapacity`
2. `diskMaximumCapacity`
3. `cacheMaxAge`

```swift
let dependencies = BeagleDependencies()
let cacheManager = CacheManagerDefault(
                            dependencies: dependencies,
                            config: .init(memoryMaximumCapacity: 15,
                                          diskMaximumCapacity: 300,
                                          cacheMaxAge: 300))
dependencies.cacheManager = cacheManager
Beagle.dependencies = dependencies
```

Também é possível criar a sua própria classe de gerenciamento de cache e configurá-la dentro da sua instância do `BeagleDependencies` se você conformar essa classe com o protocolo `CacheManagerProtocol`. 

```swift
public protocol CacheManagerProtocol {
    func addToCache(_ reference: CacheReference)
    func getReference(identifiedBy id: String) -> CacheReference?
    func isValid(reference: CacheReference) -> Bool
}
```

## **Atributos do cache**

| Atributo | Definição |
| :--- | :--- |
| **memoryMaximumCapacity** | Valor `inteiro` que representa o tamanho do cache de memória LRU. Representa o número de telas que vão estar na memória. Por exemplo. Se definirmos o número 15 quer dizer que 15 páginas ficarão em cache. |
| **diskMaximumCapacity** | Valor `inteiro` que representa o tamanho do cache de disco LRU. Representa o número de telas que vão estar no disco. Por exemplo. Se definirmos o número 150 quer dizer que 150 páginas ficarão em cache. |
| **cacheMaxAge** | Valor `inteiro`de tempo em segundos que o cache em memória estará ativo |
{{% /tab %}}

{{% tab name="Backend" %}}
No backend, as configurações desta funcionalidade são suportadas apenas para quem utiliza a [**biblioteca starter**](../../get-started/installing-beagle/beagle-backend.md#passo-3-incluindo-requerimentos-adicionais).

O cache é criado para otimizar a resposta de uma requisição tanto em tamanho quanto em tempo do BFF quando o retorno é igual ao anterior a ela. As entradas nesse cache duram até o servidor ser "redeployado" ou o cliente ser reinstalado.‌

Para realizar a configuração de cache: 

1. Dentro da pasta `src/main/resources`, procure pelo arquivo `application.properties`
2. Caso não tenha o arquivo, você pode criá-lo agora. 

Se a chave não estiver listada no seu arquivo, significa que a configuração padrão será aplicada automaticamente. 


```text
beagle.cache.endpoint.include=/image,/context/.*
beagle.cache.enabled=false​

#Micronuat
beagle.cache.endpoint.ttl./endpoint1=10s
beagle.cache.endpoint.ttl./endpoint2=1m

#Spring (precisa de [] para escapar os /)
beagle.cache.endpoint.ttl.[/endpoint1]=10s
beagle.cache.endpoint.ttl.[/endpoint2]=1m
```


Na lista abaixo, você confere quais são as propriedades disponíveis e as configurações que podem ser alteradas.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Chave</th>
      <th style="text-align:left">Descri&#xE7;&#xE3;o</th>
      <th style="text-align:center">Valor Padr&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>beagle.cache.enabled</code>
      </td>
      <td style="text-align:left">Flag indicando se o mecanismo de cache est&#xE1; habilitado (ou n&#xE3;o).</td>
      <td
      style="text-align:center"><code>true</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>beagle.cache.endpoint.include</code>
      </td>
      <td style="text-align:left">Lista de endpoints a serem cacheados. Aceita express&#xF5;es regulares
        conforme <code>java.util.regex.Pattern</code> por meio do <code>kotlin.text.Regex</code>.</td>
      <td
      style="text-align:center">
        <p>Todos (&lt;=1.0.2)</p>
        <p>Nenhum (&gt;=1.1.0)</p>
        </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>beagle.cache.endpoint.exclude</code>
      </td>
      <td style="text-align:left">Lista de endpoints a n&#xE3;o serem cacheados. Aceita express&#xF5;es
        regulares conforme <code>java.util.regex.Pattern</code> por meio do <code>kotlin.text.Regex</code>.
        A exclus&#xE3;o &#xE9; prioridade em cima da inclus&#xE3;o.</td>
      <td style="text-align:center">Nenhum</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><code>beagle.cache.endpoint.ttl</code>
        </p>
        <p>(&gt;=1.1.0)</p>
      </td>
      <td style="text-align:left">
        <p>Pares de chave valor, onde a chave &#xE9; um endpoint como <code>String</code> e
          o valor &#xE9; uma dura&#xE7;&#xE3;o.</p>
        <p></p>
        <p>A dura&#xE7;&#xE3;o &#xE9; um n&#xFA;mero seguido da unidade abreviada
          (s, m, h, etc.) para popular o valor da header<code>Cache-control: max-age</code> para
          esse endpoint.</p>
        <p></p>
        <p>O endpoint precisa estar inclu&#xED;do. Endpoints inclusos t&#xEA;m dura&#xE7;&#xE3;o
          de 30s por padr&#xE3;o. Dura&#xE7;&#xF5;es menores que um segundo viram
          zero, pela defini&#xE7;&#xE3;o do <code>Cache-control: max-age</code>.</p>
      </td>
      <td style="text-align:center">Nenhum</td>
    </tr>
  </tbody>
</table>
{{% /tab %}}

{{% tab name="Web" %}}
Na web, o cache é configurado quando definimos as configurações iniciais do Beagle Web no parâmetro `strategy`, que é um dos parâmetros do `BeagleModule` \(se você estiver usando Angular\) ou `createBeagleUIService`\(se você estiver usando React\). 

Por padrão, o cache vem habilitado com a estratégia**`beagle-with-fallback-to-cache`**, porém a estratégia`beagle-cache-only` também pode ser utilizada para implementar o[ **protocolo de cache do Beagle**](../customizacao/beagle-para-web/).

{{% alert color="warning" %}}
Lembre de deixar o CORS habilitado no backend sempre que for utilizar a estratégia de cache do Beagle para Web. 
{{% /alert %}}

Abaixo, exemplos de como foi alterado do `beagle-with-fallback-to-cache`, que é o padrão, para o `beagle-cache-only.`

Exemplo de configuração para o **Angula**r:

```text
@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    // Associate every beagle component to your angular component. 
  },
  strategy: 'beagle-cache-only'
})
export class Beagle { }
```

Exemplo de configuração para o **React**:

```text
export default createBeagleUIService({
  baseUrl: "",
  components: {},
  strategy: 'beagle-cache-only'
})
```
{{% /tab %}}
{{< /tabs >}}
