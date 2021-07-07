---
title: Flutter
weight: 29
description: >-
  Esta seção mostra o passo a passo inicial para usar a biblioteca Beagle num projeto Flutter.
---

---

## **Uso**
É bem simples configurar e usar a biblioteca Beagle Flutter. Siga os passos abaixo para usá-la.

### 1. Configuração
Toda a configuração necessária para o Beagle funcionar está centrada nos parâmetros do método de inicialização `BeagleSdk.init`. Esses parâmetros informam ao Beagle tudo que ele precisa conhecer para renderizar seus widgets. Aqui mostramos apenas as opções básicas `baseUrl` e `components`. Para uma lista de todos as opções disponíveis, confira a [documentação para a inicialização do Beagle]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="pt" >}}).

### 2. Iniciando Beagle
Você pode inicializar o Beagle em qualquer ponto de sua aplicação. Para esse guia, nós vamos inicializar Beagle assim que o app iniciar. Para isso, abra o arquivo `lib/main.dart`, importe `package:beagle/beagle.dart` e, se estiver usando o pacote `beagle_components`, importe `package:beagle_components/beagle_components.dart` também. Depois disso, 
dentro da função `main`, antes de renderizar qualquer coisa, chame `BeagleSdk.init` passando os parâmetros previamente informados. 
Veja o exemplo abaixo:

```dart
import 'package:beagle/beagle.dart';
import 'package:beagle_components/beagle_components.dart';

void main() {
  BeagleSdk.init(
    baseUrl: 'http://suaBffUrlBase.io',
    components: defaultComponents,
  );
  // runApp();
}
```

### 3. Renderizando um widget remoto
Para renderizar um widget Beagle, você precisa usar o componente `BeagleWidget` que é provido pela biblioteca Beagle. Este widget requer um único parâmetro, o `screenRequest`, que especifica a requisição para buscar o primeiro widget do fluxo provido pelo servidor. Veja o exemplo abaixo:

```dart
import 'package:beagle/beagle.dart';
import 'package:beagle_components/beagle_components.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() {
  BeagleSdk.init(
    baseUrl: 'http://suaBffUrlBase.io',
    components: defaultComponents,
  );
  runApp(const BeagleSampleApp());
}

class BeagleSampleApp extends StatelessWidget {
  const BeagleSampleApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Beagle Sample',
      home: Scaffold(
        body: BeagleWidget(
          screenRequest: BeagleScreenRequest('welcome'),
        ),
      ),
    );
  }
}
```

Acima, nós usamos um simples Material App para renderizar nosso primeiro widget provido pelo servidor! A parte importante aqui é o componente `BeagleWidget`, porque ele inclui no layout um widget remoto.

O `BeagleWidget` aceita outros parâmetros opicionais, assim como o `BeagleScreenRequest`. Para vê-los, visite a [página de documentação do BeagleWidget]({{< ref path="/resources/customization/beagle-for-flutter/beagle-widget" lang="pt" >}}).

{{% alert color="success" %}}
Parabéns, você terminou sua primeira Tela com Beagle!
{{% /alert %}}

## Continue lendo

- [Opções de configuração]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="pt" >}}): aprenda como configurar cada propriedade do Beagle.
- [O BeagleWidget]({{< ref path="/resources/customization/beagle-for-flutter/beagle-widget" lang="pt" >}}): o BeagleWidget permite você customizar vários aspectos da requisição e efeitos visuais para o usuário.
- [Acessando o localhost]({{< ref path="/resources/customization/beagle-for-flutter/localhost" lang="pt" >}}): aprenda como usar o backend que serve widgets pelo localhost.
- [Serviços do Beagle]({{< ref path="/resources/customization/beagle-for-flutter/services" lang="pt" >}}): customize serviços como o logger, armazenamento, cliente http e image downloader.
- [Design do sistema]({{< ref path="/resources/customization/beagle-for-flutter/design-system" lang="pt" >}}): registre imagens locais (mobileId) e estilos para seus componentes.
- [Customização]({{< ref path="/resources/customization/beagle-for-flutter/customization" lang="pt" >}}): crie seus próprios componentes, ações e operações.
- [Contexto global]({{< ref path="/api/context/global-context" lang="pt" >}}): aprenda como manipular o contexto global no Beagle Flutter.
- [Analytics]({{< ref path="/resources/analytics" lang="pt" >}}): dê informação sobre cada ação executada, como dados de navegação.
- [Renderizador]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api" lang="pt" >}}): às vezes é necessário interagir com o Beagle enquanto ele renderiza um componente ou executa uma ação. Este artigo mostra como usar a API de Renderização para alcançar comportamentos complexos.

👉 Se você quiser saber o estado atual de desenvolvimento do Beagle Flutter, confira
[aqui]({{< ref path="/resources/customization/beagle-for-flutter/development" lang="pt" >}}).
Contribuições são bem-vindas!
