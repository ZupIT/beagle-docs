---
title: Gerenciar Cache
weight: 148
description: >-
  Nesta seção, você encontra informações sobre como gerenciar cache do beagle e comomodificá-la. 
  modificá-la.
---

---

## Introdução

O `Beagle` hoje não fornece uma camada de cache padrão, logo você tem que configurar a sua propria camada, o beagle fornece um protocolo onde voce consegue configurar e passar sua propria camada.

```swift
public protocol CacheManagerProtocol {
    func addToCache(_ reference: CacheReference)
    func getReference(identifiedBy id: String->CacheReference?
    func isValid(reference: CacheReference) -> Bool
}
```

O método **addToCache** é responsavel por pegar referência do cache que é passada por parâmetro.

O método **getReference** é responsavel por pegar o valor de uma referencia de um cache através de um ID. Logo o método renorna a referncia desejada.

O método **isValid** é responsavel por validar se o cache já expirou de acordo com seu tempo de criação. Logo o método retorna um boleano se é o cache já expirou.

Utilizamos a struct CacheReference para configurar o cache.

```swift
public struct CacheReference {
    public let identifier: String
    public let data: Data
    public let hash: String
    public let maxAge: Int?
    public let timeOfCreation: Date
}
```

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :---: |
| identifier | String  | ✓ | `identifier` é o parâmetro para receber o identificador da referencia do cache. |
| data | Data| ✓ | `data` é o parâmetro para setar do data.  |
| hash | String | ✓ | `hash` é o parâmetro para  |
| maxAge | Int |  | `maxAge`é o parâmetro para configurar quanto tempo vai durar o cache. |
| timeOfCreation | Date | ✓ | `timeOfCreation` é o parâmetro para passar o tempo de criação. |
