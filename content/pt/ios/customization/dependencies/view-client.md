---
title: View Client
weight: 151
description: >-
  Nesta seção, você encontra informações sobre o View Client e como modifica-lo.
---

---

## O que é isso?

O View Client é uma dependencia que é chamada pelas classes internas do Beagle para fazer a busca de componentes no backend, ou seja, ele é um `middleware` entre a camada de rede `networkClient` e o Beagle. Dessa forma, o protocolo expõe os métodos: `fetch` e `prefetch` para fazerem essas buscas:

```swift
public protocol ViewClientProtocol {
    @discardableResult
    func fetch(
        url: String,
        additionalData: HttpAdditionalData?,
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken?
    
    func prefetch(url: String, additionalData: HttpAdditionalData?)
}
```

## Como usar?

### Implementando o `fetch`

A implementação padrão `fetch` segue os seguintes passos:

**Passo 1:** Verifica se não existe um componente em cache para a url dada

**Passo 2:** Se existir, o retorna no bloco de completion.

**Passo 3:** monta a URL a partir do `urlBuilder`

**Passo 4:** faz a requisição a partir do `networkClient`

**Passo 5:** decodifica os dados da resposta a partir do `coder`

**Passo 6:** retorna o ServerDrivenComponent no bloco de completion.

### Implementando o `prefetch`

A implementação padrão do `prefetch` segue os seguintes passos:

**Passo 1:** Segue a mesma logica dos passos 3,4 e 5 do `fetch`

**Passo 2:** Armazena em cache (NSCache) o componente e atribui a url como chave de busca

{{% alert color="warning" %}}
Essa lógica de cache é ultilizada apenas para implementar a funcionalidade de prefetch, ou seja, telas não são cacheadas por padrão. 
{{% /alert %}}

## **Criando um ViewClient Customizado**

Portanto, é possivel implementar o View Client de forma customizada para que possamos adotar uma lógica de **cache**.

### Definição das dependencias

Para implementar um ViewClient customizado, podemos adotar como base o `ViewClient` padrão do Beagle. Dessa forma, definimos 3 dependências base que serão utilizadas por nossa implementação:

1. NetworkClient: Executa as requisições

2. URLBuilder: Monta as urls

3. Coder: Decodifica o resultado das requisições

Além disso podemos definir uma *quarta dependência* que será responsável pelo gerenciamento de cache dos componentes, para esse exemplo a nomearemos de `CacheManager`.

{{% alert color="info" %}}
Não abordaremos a implementação dessa dependencia, já que cada aplicação pode ter sua forma padrão e exclusiva de realizar o cache de dados
{{% /alert %}}

### Implementando ViewClientProtocol

Agora precisamos implementar os métodos `fetch` e `prefetch` do ViewClientProtocol, e a partir disso podemos adotar nossa política customizada de cache de componentes.

Nesse exemplo, iremos buscar em cache o componente toda vez que o método `fetch` for chamado e caso não seja encontrado faremos a requisição normalmente (implementada no método `fetchComponent`) e armazenar em cache o resultado, para isso iremos atribuir a url da requisição como chave de busca:

```swift
func fetch(
        url: String,
        additionalData: HttpAdditionalData?,
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        // Lógica customizada de cache
        if let component = cacheManager.getComponent(for: url) {
            completion(.success(component))
            return nil
        } else {
            return fetchComponent(url: url, additionalData: additionalData, completion: completion)
        }
    }
```

Portanto o método `fetchComponent` terá a seguinte implementação:

```swift
@discardableResult
    private func fetchComponent(
        url: String, 
        additionalData: HttpAdditionalData?, 
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        guard let fullURL = urlBuilder.build(path: url) else {
            completion(.failure(.urlBuilderError))
            return nil
        }
        guard let networkClient = networkClient else {
            completion(.failure(.networkClientWasNotConfigured))
            return nil
        }
        let request = Request(url: fullURL, additionalData: additionalData)
        
        return networkClient.executeRequest(request) { result in
            switch result {
            case .success(let response):
                // Lógica customizada de cache
                let decodeResult = self.decodeComponent(from: response.data)
                if case .success(let component) = decodeResult {
                    self.cacheManager.insert(component: component, url: url)
                }
                completion(self.decodeComponent(from: response.data))
            case .failure(let networkError):
                completion(.failure(.networkError(networkError)))
            }
        }
    }
```

Podemos notar que são executados cinco passos:

**Passo 1:** Monta a url a partir do `urlBuilder`

**Passo 2:** Executa a requisição a partir do `networkClient`

**Passo 3:** Decodifica a resposta em um componente a partir do `coder`

**Passo 4:** Insere o componente em cache a partir do `cacheManager`

**Passo 5:** Retorna o componente a partir do bloco de `completion`

Para o método `prefetch` podemos simplesmente seguir o mesmo comportamento do método `fetchComponent`, logo, basta chama-lo com o bloco de completion sendo uma closure vazia:

```swift
func prefetch(url: String, additionalData: HttpAdditionalData?) {
    fetchComponent(url: url, additionalData: additionalData, completion: { _ in })
}
```

### Resultado Final

Por fim, temos como resultado essa implementação:

```swift
class ViewClientCustom: ViewClientProtocol {

    // MARK: Beagle Dependencies
    
    @OptionalInjected var networkClient: NetworkClientProtocol?
    @Injected var urlBuilder: UrlBuilderProtocol
    @Injected var coder: CoderProtocol

    // MARK: Inner Dependencies
    
    // Gerenciador de cache
    var cacheManager: CacheManagerProtocol!
    
    // MARK: ViewClientProtocol
    
    func fetch(
        url: String,
        additionalData: HttpAdditionalData?,
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        // Lógica customizada de cache
        if let component = cacheManager.getComponent(for: url) {
            completion(.success(component))
            return nil
        } else {
            return fetchComponent(url: url, additionalData: additionalData, completion: completion)
        }
    }
    
    func prefetch(url: String, additionalData: HttpAdditionalData?) {
        fetchComponent(url: url, additionalData: additionalData, completion: { _ in })
    }
    
    // MARK: Private Functions
    
    @discardableResult
    private func fetchComponent(
        url: String, 
        additionalData: HttpAdditionalData?, 
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        guard let fullURL = urlBuilder.build(path: url) else {
            completion(.failure(.urlBuilderError))
            return nil
        }
        guard let networkClient = networkClient else {
            completion(.failure(.networkClientWasNotConfigured))
            return nil
        }
        let request = Request(url: fullURL, additionalData: additionalData)
        
        return networkClient.executeRequest(request) { result in
            switch result {
            case .success(let response):
                // Lógica customizada de cache
                let decodeResult = self.decodeComponent(from: response.data)
                if case .success(let component) = decodeResult {
                    self.cacheManager.insert(component: component, url: url)
                }
                completion(self.decodeComponent(from: response.data))
            case .failure(let networkError):
                completion(.failure(.networkError(networkError)))
            }
        }
    }
    
    private func decodeComponent(from data: Data) -> Swift.Result<ServerDrivenComponent, Request.Error> {
        do {
            return .success(try coder.decode(from: data))
        } catch {
            return .failure(.decoding(error))
        }
    }
}
```
