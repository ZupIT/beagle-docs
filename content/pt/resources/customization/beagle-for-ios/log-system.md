---
title: Sistema de Log
weight: 157
description: >-
  Nesta seção, você encontra a descrição da classe BeagleLogger e detalhes de
  configuração e customização
---

---

## Introdução

O Beagle usa o sistema de log unificado recomendado pela Apple para fornecer mensagens de logs diferentes em estágios críticos de um fluxo Server Driven.

As mensagens de **log** fornecidas pelo Beagle iOS podem ser acessadas pelo: 

* Console do Xcode
* Console da Aplicação

Elas são divididas em 4 categorias: 

1. **Network:** relacionada à camada Rede, informações e mensagens de erro para cada solicitação, resposta e construção de URL da rede. 
2. **Decoding:** exibe mensagens toda vez que ocorre um erro de `parse`. 
3. **Navigation:** mensagens informativas que descrevem todas as navegações dentro de um fluxo Server Driven e possíveis erros que podem ocorrer. 
4. **Form:** relacionado a formulários. 

É possível **desabilitar** **as mensagens** de log disparadas, dessa forma o Beagle não irá mais chamar a API de Log, seja ela a padrão ou customizada. Você precisa passar o atributo `isLoggingEnabled` do `BeagleDependencies` para `false`.

As mensagens de **log** podem ser filtradas usando esses nomes como categorias e o identificador do pacote principal do aplicativo como subsistema.

### Filtrando mensagens de log:

Siga os passos abaixo para filtrar mensagens de **log**:

**Passo 1:** abra o `Console App`;

**Passo 2:** selecione o `device` no menu **Devices;**

**Passo 3:** insira os filtros na barra de busca, procure somente as mensagens de `log` com a categoria `Network`no subsistema ~~`br.com.zup.BeagleDemoApp`~~ 

![](/1.png)

**Passo 4:** ao abrir a aplicação `BeagleDemo` vemos duas mensagens de **log** com a categoria `network`, uma mostrando que o Beagle fez uma `requisição` e outra indicando a `resposta` dessa requisição:

![](/2.png)

**Passo 5:** mensagens de `erro` serão exibidas com um ponto amarelo no campo `Type,` como mostrado abaixo:

![](/3.png)

**Passo 6:** ao selecionar a segunda mensagem de `log` recebida com filtro `Network`você verá a versão `verbosa` dessa resposta:

![](/4.png)

**Passo 7:** o corpo da resposta contém a tela `Server Driven` e todos os seus atributos e especificações podem ser acessados.

## Customização

Para deixar o ambiente do Beagle aberto a modificações, a API de Logs padrão pode ser substituída por qualquer outra. Siga os passos abaixo fazer a substituição a API de logs:

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
Beagle.dependencies = dependencies
```

## BeagleLoggerProxy

Esta classe, na grande maioria dos casos, não deve ser utilizada pelo usuário. Esse é o objeto que internamente será armazenado no `Beagle.dependencies.logger` ao invés do `BeagleLogger` customizado pelo usuário. 

A sua responsabilidade é de apenas repassar as chamadas pra classe do usuário caso o `Beagle.dependencies.isLogginEnabled` for `true`, caso contrário ela nem repassa a mensagem. Hoje ela está como pública somente para possibilitar o acesso à classe customizada do usuário via:

```swift
(Beagle.dependencies.logger as? BeagleLoggerProxy)?.logger
```
