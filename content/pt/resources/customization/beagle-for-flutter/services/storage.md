---
title: Storage
weight: 189
description: >-
  Aqui você encontra informações sobre armazenamento no Beagle Flutter.
---

---

## Introdução
Cuida do armazenamento de cache das requisições feitas pelo Beagle. O Beagle Flutter provê uma implementação padrão chamada `DefaultStorage`. Aqui está o contrato:

```dart
abstract class Storage {
  /// Adiciona uma tupla ([key], [value]) para persistir no armazenamento. O Future (promessa) retornado se resolve
  /// assim que a operação completa.
  Future<void> setItem(String key, String value);

  /// Retorna o valor identificado pela [key] passada como parâmetro. Se a chave não existir,
  /// null é retornado. O valor retornado é envolvido num Future (promessa).
  Future<String> getItem(String key);

  /// Remove uma [key] do armazenamento. O Future (promessa) retornado se resolve assim que a operação completa.
  Future<void> removeItem(String key);

  /// Remove tudo do armazenamento. O Future (promessa) returnado se resolve assim que a operação completa.
  Future<void> clear();
}
```

Para evitar problemas de vulnerabilidade, a implementação padrão armazena informações somente em memória.

## Crie um armazenamento customizado
Para criar seu próprio armazenamento, você precisa criar uma classe que implemente a classe abstrata `Storage`, aqui está a implementação padrão:

```dart
class DefaultStorage implements Storage {
  Map<String, String> storage = {};

  @override
  Future<void> clear() async {
    storage.clear();
  }

  @override
  Future<String> getItem(String key) async {
    return storage[key];
  }

  @override
  Future<void> removeItem(String key) async {
    storage.remove(key);
  }

  @override
  Future<void> setItem(String key, String value) async {
    storage[key] = value;
  }
}
```

## Use um armazenamento customizado
Para usar seu armazenamento, passe-o no método de inicialização do Beagle `BeagleSdk.init` assim como no exemplo abaixo:
```dart
BeagleSdk.init(
  storage: SeuStorage(),
);
```
