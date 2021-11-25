---
title: View Client
weight: 151
description: >-
  Nesta seção, você encontra informações sobre o View Client e como modifica-lo.
---

---

## **Introdução**

O View Client é uma dependencia que é chamada pelas classes internas do Beagle para fazer a busca de componentes no backend, ou seja ele é um middleware entre a camada de rede `networkClient` e o Beagle. Dessa forma, o protocolo expõe os métodos: `fetch` e `prefetch` para fazerem essas buscas:

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

A implementação padrão `fetch` segue os seguintes passos:

**Passo 1:** Verifica se não existe um componente em cache para a url dada

**Passo 2:** Se existir o retorna no bloco de completion.

**Passo 3:** monta a URL a partir do `urlBuilder`

**Passo 4:** faz a requisição a partir do `networkClient`

**Passo 5:** decodifica os dados da resposta a partir do `coder`

**Passo 6:** retorna o ServerDrivenComponent no bloco de completion.

A implementação padrão do `prefetch` segue os seguintes passos:

**Passo 1:** Segue a mesma logica dos passos 3,4 e 5 do `fetch`

**Passo 2:** Armazena em cache (NSCache) o componente e atribui a url como chave de busca

{{% alert color="warning" %}}
Essa lógica de cache é ultilizada apenas para implementar a funcionalidade de prefetch, ou seja, telas não são cacheadas por padrão. 
{{% /alert %}}

## **Criando um ViewClient Customizado**

Dessa forma, é possivel a implementação customizada de uma lógica de **cache** a partir dessa dependencia `ViewClientProtocol`

