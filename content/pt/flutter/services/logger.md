---
title: Logger
weight: 3
description: >-
  Nesta seção, você encontra informações sobre como usar o Logger no Beagle Flutter.
---

---

## Introdução
Logger é uma API que envia saída de log. O Beagle Flutter fornece uma implementação padrão chamada `DefaultEmptyLogger` que não registra nenhuma informação. Confira o contrato:


```dart
abstract class BeagleLogger {
  /// Função para passar mensagens de aviso.
  void warning(String message);

  /// Função para passar mensagens de erro.
  void error(String message);

  /// Função para passar mensagens de erro com exceção.
  void errorWithException(String message, Exception exception);

  /// Função para passar mensagens informativas.
  void info(String message);
}
```

O Logger printa todas as mensagens enviadas pelo `JavascriptRuntimeWrapper` para o Beagle Flutter, divididas pelos tipos `warning`, `info` e `error`. Existe o outro tipo `errorWithException` logado pelo widget `BeagleImage` quando dispara uam exceção ao baixar uma imagem. 

## Crie um logger customizado
Para criar seu próprio logger, você só precisa criar uma classe que estenda a classe abstrata `BeagleLogger`, aqui está um exemplo de implementação:

```dart
class DefaultEmptyLogger extends BeagleLogger {
  @override
  void error(String message) {
    debugPrint('Erro: $message');
  }

  @override
  void errorWithException(String message, Exception exception) {
    debugPrint('Erro: $message, com exceção: $exception');
  }

  @override
  void info(String message) {
    debugPrint('Info: $message');
  }

  @override
  void warning(String message) {
    debugPrint('Aviso: $message');
  }
}
```

## Use um logger customizado
Para usar seu logger, passe-o no método de inicialização do Beagle `BeagleSdk.init` assim como no exemplo abaixo:
```dart
BeagleSdk.init(
  logger: SeuLogger(),
);
```
