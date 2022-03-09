---
title: Logger
weight: 3
description: >-
  Nesta seção, você encontra informações de como usar o Logger no Beagle Flutter.
---

---

# Introdução
O Beagle produz muitos logs, mas como eles serão exibidos depende de você. O mecanismo de registro padrão (`DefaultLogger`) imprime todas as mensagens no console com o nome "BeagleSDK" usando o método `log` de `dart:developer`.

O comportamento de registro pode ser alterado implementando a interface `BeagleLogger` e passando-a para o `BeagleService`. A interface possui quatro métodos: `warning`, `error`, `errorWithException` e `info`, que representam todos os níveis de logs criados pelo Beagle.

# Criando um logger customizado
Veja o exemplo abaixo:

```dart
class SilentLogger extends BeagleLogger {
  void warning(String message) {}

  void error(String message) {}

  void errorWithException(String message, Exception exception) {}

  void info(String message) {}
}

```

O exemplo acima é muito simples, mas bastante útil. Ele pode ser usado para desabilitar todos os logs. Outro bom exemplo seria um logger que envia cada erro para um backend, onde pode ser analisado pelos desenvolvedores.

# Registrando um novo logger
Para registrar um novo logger apenas adicione na propriedade equivalente do BeagleService:

```dart
final beagleService = BeagleService(
  logger: SilentLogger(),
  // ...
);
```
