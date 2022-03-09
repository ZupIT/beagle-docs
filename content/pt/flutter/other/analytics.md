---
title: Analytics
weight: 3
description: >-
  Nesta seção, você aprende o que é e como configurar o analytics no Beagle Flutter.
---

---

# Introdução
O `analyticsProvider` deve ser configurado sempre que se quiser adicionar a capacidade de acompanhar interações com a UI do Beagle.

Existem dois tipos de registros de analytics gerados pelo Beagle:


## Registros de navegação
Estes registros são gerados sempre que uma página é carregada pelo Beagle e ele contém as seguintes informações:

- type: sempre será `screen`;
- platform: sempre será `flutter` no caso do Beagle Flutter;
- screen: url da tela (no caso de uma RemoteView) ou o id do componente (no caso de uma LocalView);
- timestamp: a representação unix do momento em que o registro foi feito.

## Registros de ação
Estes registros são gerados sempre que uma ação do Beagle é feita. Além de toda informação presente no registro de navegação, os registros de ação também possuem:

- type: sempre será `action`;
- beagleAction: o nome da ação;
- component: o componente que contém a ação (json map);
- event: o nome do evento associado a ação. exemplo: onPress;
- attributes: um mapa com todos os atributos da BeagleAction;
- additionalEntries: qualquer dado adicional vindo do backend e que foi previamente adicionado.

# Configuração

Observe que quando criamos um registro de ação, expomos todos os atributos da ação. Isso pode ser perigoso (informações confidenciais) ou até mesmo ter baixo desempenho. O AnalyticsProvider deve fornecer uma configuração que informe quais ações devem gerar registros e quais atributos devem ser expostos.

A configuração também informa se devemos ou não gerar registros de navegação.

A configuração é criada ao implementar a interface `AnalyticsProvider` na função `getConfig`. Uma configuração é uma instância da classe `AnalyticsConfig`. Para saber mais sobre a configuração do Analytics, leia o [artigo sobre esse recurso]({{< ref path="/api/analytics" lang="pt" >}}).

# Gerenciando os registros
Toda vez que um registro é criado pelo Beagle, ele chama o método `createRecord` do `AnalyticsProvider`. Se você deseja enviar este registro para um serviço de analytics, dentro deste método, você deve formatá-lo no formato esperado pelo serviço usado, criar a requisição HTTP e enviá-la.

Para obter mais exemplos, consulte a [página do Analytics]({{< ref path="/api/analytics" lang="pt" >}}).

# Criando um Analytics Provider

```dart
class LoggerAnalyticsProvider implements AnalyticsProvider {
  @override
  void createRecord(AnalyticsRecord record) {
    debugPrint("Analytics Record emitted");
    debugPrint("type: ${record.type}");
    debugPrint("platform: ${record.platform}");
    debugPrint("beagleAction: ${record.beagleAction}");
    debugPrint("event: ${record.event}");
    debugPrint("screen: ${record.screen}");
    debugPrint("timestamp: ${record.timestamp}");

    if (record.component != null) {
      debugPrint("component: ${record.component?.values.join(", ")}");
    }

    if (record.attributes != null) {
      debugPrint("attributes: ${record.attributes?.values.join(", ")}");
    }

    if (record.additionalEntries != null) {
      debugPrint(
          "additionalEntries: ${record.additionalEntries?.values.join(", ")}");
    }
  }

  @override
  AnalyticsConfig getConfig() {
    return AnalyticsConfig(enableScreenAnalytics: true, actions: {
      "beagle:setContext": ["contextId", "path", "value"]
    });
  }
}
```

No exemplo acima, criamos um `AnalyticsProvider` que apenas cria um log para cada registro. Para ações, será mostrado apenas ações do tipo "beagle:setContext" e expoe apenas os atributos "contextId", "path" e "value" da ação.

# Registrando o AnalyticsProvider
Para registrar o analytics provider, você precisa adicioná-lo ao BeagleService:

```dart
final beagleService = BeagleService(
  analyticsProvider: LoggerAnalyticsProvider(),
  // ...
);
```
