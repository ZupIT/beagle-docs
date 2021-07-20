---
title: Primeiros Passos
weight: 4
description: >-
  Nessa seção, você vai encontrar como instalar Beagle na sua aplicação Flutter e o passo a passo inicial para usar a biblioteca Beagle num projeto Flutter.
---

---

# Instalação inicial
Siga os passos para instalar:

1. Abra o arquivo `pubspec.yaml` na raiz do seu projeto;
2. Sob `dependencies`, adicione `beagle: ^0.9.0-alpha`, ou a versão mais recente;
3. Adicione `beagle_components: ^0.9.0-alpha`. Você pode omitir esta dependência se estiver familiar com Beagle e não vai usar nenhum componente padrão;
4. Na sua IDE (Android Studio ou Visual Studio Code), clique em `pub get`. Ou a partir do terminal, escreva `flutter pub get`.

{{% alert color="success" %}}
Muito bem! A biblioteca está istalada. Continue a configuração na seção [**como usar Beagle no Flutter.**]({{< ref path="/get-started/using-beagle/flutter" lang="pt" >}})
{{% /alert %}}

# **Configurações iniciais**
## Passo 1. Configurar o Beagle
Toda a configuração necessária para o Beagle funcionar está centrada nos parâmetros do método de inicialização `BeagleSdk.init`. Esses parâmetros informam ao Beagle tudo que ele precisa conhecer para renderizar seus widgets. Aqui você vai ver apenas as opções básicas `baseUrl` e `components`. Para uma lista de todos as opções disponíveis, confira a [seção de Inicialização do Beagle]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="pt" >}}).

## Passo 2. Iniciar o Beagle
Você pode inicializar o Beagle em qualquer ponto de sua aplicação. Nesse exemplo, nós vamos inicializar o Beagle assim que o app iniciar. Para isso:
- Abra o arquivo `lib/main.dart`;
- Importe `package:beagle/beagle.dart`;
- Se estiver usando o pacote `beagle_components`, importe `package:beagle_components/beagle_components.dart` também;
- Dentro da função `main`, antes de renderizar qualquer coisa, chame `BeagleSdk.init` passando os parâmetros previamente informados. 
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

## Passo 3. Renderizar um widget remoto
Você precisa usar o componente `BeagleWidget` que é provido pela biblioteca Beagle. Este widget requer um único parâmetro, o `screenRequest`, que especifica a requisição para buscar o primeiro widget do fluxo provido pelo servidor. Veja o exemplo abaixo:

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

O exemplo acima usou um simples Material App para renderizar o widget provido pelo servidor. O componente `BeagleWidget` inclui no layout um widget remoto.

O `BeagleWidget` aceita outros parâmetros opicionais, assim como o `BeagleScreenRequest`. Para vê-los, visite a [seção do BeagleWidget]({{< ref path="/resources/customization/beagle-for-flutter/beagle-widget" lang="pt" >}}).

{{% alert color="success" %}}
Parabéns, você terminou sua primeira tela com Beagle!
{{% /alert %}}

## Continue lendo

Veja mais informações nas próximas seções:

- [Opções de configuração]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="pt" >}}): Aprenda como configurar cada propriedade do Beagle.
- [O BeagleWidget]({{< ref path="/resources/customization/beagle-for-flutter/beagle-widget" lang="pt" >}}): O BeagleWidget permite você customizar vários aspectos da requisição e efeitos visuais para o usuário.
- [Acessando o localhost]({{< ref path="/resources/customization/beagle-for-flutter/localhost" lang="pt" >}}): Aprenda como usar o backend que serve widgets pelo localhost.
- [Serviços do Beagle]({{< ref path="/resources/customization/beagle-for-flutter/services" lang="pt" >}}): Customize serviços como o logger, armazenamento, cliente http e image downloader.
- [Design do sistema]({{< ref path="/resources/customization/beagle-for-flutter/design-system" lang="pt" >}}): Registre imagens locais e estilos para seus componentes.
- [Customização]({{< ref path="/resources/customization/beagle-for-flutter/customization" lang="pt" >}}): Crie seus próprios componentes, ações e operações.
- [Contexto global]({{< ref path="/api/context/global-context" lang="pt" >}}): Aprenda como manipular o contexto global no Beagle Flutter.
- [Analytics]({{< ref path="/resources/analytics" lang="pt" >}}): Dê informação sobre cada ação executada, como dados de navegação.
- [Renderizador]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api" lang="pt" >}}): Pode ser necessário interagir com o Beagle enquanto ele renderiza um componente ou executa uma ação. Este artigo mostra como usar a API de Renderização para alcançar comportamentos complexos.

👉 Se você quiser saber o estado atual de desenvolvimento do Beagle Flutter, confira
[na seção de Recursos]({{< ref path="/resources/customization/beagle-for-flutter/development" lang="pt" >}}).
Contribuições são bem-vindas!
