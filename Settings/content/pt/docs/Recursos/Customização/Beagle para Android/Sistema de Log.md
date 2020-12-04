---
title: Sistema de Log
weight: 125
description: >-
  Nesta seção, você encontra a descrição da classe BeagleLogger e detalhes de
  configuração e customização.
---

---

## Introdução

O sistema de logs do Beagle permite que você investigue erros durante o desenvolvimento e problemas com o aplicativo em produção.

As mensagens de **log** fornecidas pelo Beagle Android podem ser acessadas pelo: 

* Console do Android Studio
* Console da Aplicação

Elas são divididas em 3 categorias: 

1. **Info:** relacionada à camada Rede, informações e respostas da comunicação com o servidor. 
2. **Warning:** mensagens informativas de erros relacionados a componentes do Beagle.
3. **Error**: exibe mensagens de erros relacionadas a `parse`, `http` e outras exceções. 

É possível **desabilitar** **as mensagens** de logs disparadas. Dessa forma, o Beagle não irá mais chamar a API de Log, seja ela a padrão ou customizada. Você precisa passar o atributo `isLoggingEnabled` do `AppBeagleConfig` para `false:`


```kotlin
@BeagleComponent
class AppBeagleConfig : BeagleConfig {

    override val isLoggingEnabled: Boolean = false

}
```


## Customização

Para deixar o ambiente do Beagle aberto a modificações, a API de Logs padrão pode ser substituída por qualquer outra.

A configuração dessa customização é feita com a criação de uma classe anotada com `@BeagleComponent` e que implemente a **Interface** `BeagleLogger`. Essa interface precisa da implementação dos métodos de logs, você pode seguir o exemplo abaixo:

```kotlin
@BeagleComponent
class CustomBeagleLog : BeagleLogger {
    
    override fun warning(message: String) {
        TODO("Not yet implemented")
    }

    override fun error(message: String) {
        TODO("Not yet implemented")
    }

    override fun error(message: String, throwable: Throwable) {
        TODO("Not yet implemented")
    }

    override fun info(message: String) {
        TODO("Not yet implemented")
    }

}
```
