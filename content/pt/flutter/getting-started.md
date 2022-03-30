---
title: Primeiros passos
weight: -1
description: >-
  Nesta seção você aprende como instalar o Beagle Flutter em sua aplicação e o passo a passo inicial para começar a usar.
---

---

# Instalação

1. Abra o arquivo `pubsec.yaml` na raiz do projeto;
2. Em `dependencies`, adicione `beagle: ^{{<param flutter_current_version>}}`, ou a versão desejada;
3. Adicione `beagle_components ^{{<param flutter_current_version>}}`. Você pode omitir esta dependência se não for usar nenhum componente padrão.
4. Na sua IDE (Android Studio ou VS Code), clique em  `pub get`. Ou, pela linha de comando, digite: `flutter pub get`.

# Configuração e Inicialização

## Passo 1. Criando o BeagleService
Para funcionar, o Beagle precisa de uma instância da classe BeagleService, veja a seguir:

```dart
import 'package:beagle/beagle.dart';
import 'package:beagle_components/beagle_components.dart';

final beagleService = BeagleService(
  baseUrl: 'https://usebeagle.io/start',
  components: defaultComponents,
  actions: defaultActions,
);
```

O `baseUrl` é o endpoint que receberá os JSONs que representam a UI, ou seja, do "Backend For the Frontend" (BFF). 

O parâmetro `components` é um mapa dos componentes (widgets) a serem disponibilizados para o Beagle. Se o Beagle usa um "custom:button", por exemplo, este mapa deve ter uma chave "custom:button" vinculada ao widget correspondente. 

O parâmetro `actions` é um mapa de ações adicionais a serem adicionadas ao Beagle, neste exemplo adicionamos todas as ações que vêm com o pacote de componentes padrão. Deve haver uma chave neste mapa para cada ação usada pelo Beagle.

`baseUrl` e `components` são as duas únicas propriedades necessárias ao instanciar o Serviço Beagle, mas muitos aspectos do comportamento da IU orientada a servidor podem ser personalizados por meio dessa configuração. Para obter uma lista de todas as opções disponíveis, [veja mais aqui]({{< ref path="/flutter/other/beagle-service" lang="en" >}}).

## Passo 2. Usando o BeagleService

Depois de criar o BeagleSevice, precisamos adicioná-lo para ser acessível aos demais componentes e a porta de entrada para isso é o `BeagleProvider`. Esse elemento aceita uma instância do BeagleService e os componentes filhos que compoem a aplicação.

```dart
import 'package:beagle/beagle.dart';

void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: MaterialApp(
      title: 'Beagle Sample',
      theme: ThemeData(
        visualDensity: VisualDensity.adaptivePlatformDensity,
        indicatorColor: Colors.white,
        appBarTheme: AppBarTheme(
          elevation: 0,
        ),
      ),
      home: BeagleSampleApp()
    )
  ));
}
```

Note que é usual declarar o BeagleProvider o quanto antes na hierarquia da aplicação. Tenha cuidado para não colocá-lo dentro de um navegador, pois isso pode torná-lo indisponível quando houver mudanças de tela.

## Passo 3. Iniciando a fluxo Beagle

Para iniciar o carregamento das telas Beagle vinda do backend, é preciso usar a funcção `openBeagleScreen`, que é importada do core da biblioteca. Veja no exemplo:

```dart
class BeagleSampleApp extends StatelessWidget {
  const BeagleSampleApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () => openBeagleScreen(route: RemoteView('/components'), context: context),
          child: Text('Start beagle flow'),
        ),
      ),
    );
  }
}
```

A função `openBeagleScreen` pode ser customizada. Você pode dar uma olhada nas propriedades adicionais em: [openBeagleScreen]({{< ref path="/flutter/navigation/open-beagle-screen" lang="en" >}}).

{{% alert color="success" %}}
Parabéns, você criou sua primeira tela Beagle Flutter!
{{% /alert %}}

## Continue lendo
Se você quer conhecer mais funcionalidades disponíveis para o Beagle Flutter, você pode dar uma olhada na página ["BeagleService"]({{< ref path="/flutter/other/beagle-service" lang="en" >}})] onde você encontra descrições de tudo que está disponível e também links para mais documentações.

Algumas outras funcionalidades não disponíveis pelo `BeagleService` são:

- [**openBeagleScreen**]({{< ref path="/flutter/navigation/open-beagle-screen" lang="en" >}}): Aprenda mais sobre esse método que inicia o fluxo de telas.
- [**styles**]({{< ref path="/flutter/layout/styles" lang="en" >}}): Veja como funciona a estilização no Beagle Flutter, como customizá-la ou até desabilitá-la
- [**localhost**]({{< ref path="/flutter/network/localhost" lang="en" >}}): Aprenda como executar uma aplicação Beagle Flutter com servidor local
- [**BeagleView**]({{< ref path="/flutter/other/beagle-view" lang="en" >}}): Aprenda como usar a BeagleView e iniciar renderizações.