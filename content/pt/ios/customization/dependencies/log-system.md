---
title: Sistema de Log
weight: 157
description: >-
  Esta seção descreve a classe BeagleLogger e detalha como configurá-la e customizá-la
---

---

## O que é isso?

O Beagle usa o sistema de log unificado recomendado pela Apple para fornecer diferentes mensagens de log em estágios de um fluxo Server Driven.

As mensagens de log fornecidas para o Beagle iOS podem ser acessadas através do:

* **Consola Xcode** e do
* **Console de aplicativos**

Eles são divididos em 4 categorias:

1. **Rede:** relacionado à camada de rede, informações e mensagens de erro para cada solicitação, resposta e construção de URL de rede.
2. **Decodificação:** exibe mensagens sempre que ocorre um erro `parse`.
3. **Navegação:** mensagens informativas que descrevem as navegações dentro do fluxo acionado pelo servidor e possíveis erros podem ocorrer.
4. **Formulário:** relacionado a formulários.

É possível desabilitar as mensagens de log acionadas. O Beagle não chamará a API do Log, mesmo que seja padrão ou personalizada. Você precisará alterar o atributo `isLoggingEnabled` de `BeagleDependencies` para `false`.

As mensagens de log podem ser filtradas usando esses nomes de categorias e o identificador do pacote principal do aplicativo como um subsistema.

## Instruções para filtrar mensagens de log

Siga os passos abaixo para filtrar as mensagens de log:

**Paso 1:** abra o `Console App`;

**Passo 2:** selecione `device` no menu `Devices`;

**Passo 3:** insira os filtros na barra de pesquisa, pesquise apenas mensagens de log com a categoria Rede no subsistema ~~`br.com.zup.BeagleDemoApp`~~
{{< figure src="/shared/1.png">}}

**Passo 4:** ao abrir o aplicativo `BeagleDemo`, você verá duas mensagens de log com a `network category`, uma mostra que o Beagle fez uma solicitação e a outra indica a resposta.
{{< figure src="/shared/2.png">}}

**Etapa 5:** as mensagens de erro serão exibidas com um ponto amarelo no campo `Type`, conforme mostrado abaixo:
{{< figure src="/shared/3.png">}}

**Etapa 6:** para selecionar a segunda mensagem de log recebida com um filtro de rede, você verá uma versão `verbosa` desta resposta.
{{< figure src="/shared/4.png">}}

**Etapa 7:** o corpo da resposta contém a tela (Server Driven) e todos os seus atributos e especificações.

## Costumização

Para deixar o ambiente do Beagle aberto a modificações, os logs padrão da API podem ser substituídos por quaisquer outros. Os próximos passos explicam como substituir os logs da API:

**Passo 1:** implemente o protocolo BeagleLoggerType na classe que você deseja usar como API de log. Você verá que é necessário implementar os métodos:

* **`log(_ log: LogType)`** e
* **`logDecodingError(type: String)`**

Eles são chamados internamente pelo Beagle quando uma mensagem precisa ser acionada.
Listamos um exemplo abaixo:

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

**Passo 2:** Vá para a configuração do seu projeto Beagle e atribua uma instância de classe para a dependência do `logger` no `BeagleDependencies`:

```swift
let dependencies = BeagleDependencies()
dependencies.logger = CustomLogger()
Beagle.dependencies = dependencies
```

## BeagleLoggerProxy

{{% alert color="warning" %}}
Esta classe não deve ser alterada na maioria dos casos, pois este é o objeto que será armazenado internamente no `Beagle.dependencies.logger` ao invés do `BeagleLogger` customizado.
{{% /alert %}}

Sua responsabilidade é apenas encaminhar chamadas para a classe do usuário se `Beagle.dependencies.isLogginEnabled` for `true`, caso contrário não passará a mensagem. Esta propriedade é pública para permitir o acesso à classe customizada do usuário através do código abaixo:

```swift
(Beagle.dependencies.logger as? BeagleLoggerProxy)?.logger
```
