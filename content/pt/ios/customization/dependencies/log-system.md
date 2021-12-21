---
title: Sistema de Log
weight: 157
description: >-
  Nesta seção, você encontra a descrição da classe BeagleLogger e detalhes de
  configuração e customização
---

---

## Introdução

O Beagle não fornece uma implementação default para a camada de Log, logo, para realizar o log das menssagens produzidas pelo Beagle é preciso criar uma implementação do LoggerProtocol e atribui-la nas dependencias do Beagle.

## Customização

**Passo 1:** implemente o protocolo BeagleLoggerType na classe que deseja utilizar como API de logs, você irá observar que é preciso implementar os métodos `log(_ log: LogType)` e `logDecodingError(type: String)` que são chamados internamente pelo Beagle sempre que uma mensagem precisa ser disparada:

```swift
class CustomLogger: BeagleLoggerType {
    func log(_ log: LogType) {
        print(log.message)
    }
    
    func logDecodingError(type: String) {
        print(type)
    }
}
```

**Passo 2:** nas configurações do Beagle de seu projeto atribua uma instância da classe à dependência `logger` no `BeagleDependencies`:

```swift
let dependencies = BeagleDependencies()
dependencies.logger = CustomLogger()
BeagleConfigurator.setup(dependencies: dependencies)
```