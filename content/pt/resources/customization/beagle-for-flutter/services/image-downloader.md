---
title: Image Downloader
weight: 189
description: >-
  Aqui você encontra informações sobre como configurar e usar o Image Downloader no Beagle Flutter.
---

---

## Introdução
Cuida de como imagens remotas vão ser baixadas e populadas no widget `BeagleImage` provendo uma classe que implemente essa lógica. O Beagle Flutter provê uma implementação padrão chamada `DefaultBeagleImageDownloader`. Aqui está o contrato:

```dart
abstract class BeagleImageDownloader {
  Future<Uint8List> downloadImage(String url);
}
```

O método `downloadImage` recebe como parâmetro a url da imagem e retorna um `Future<Uint8List>` como representação da imagem baixada.

## Criar um image downloader customizado
Para criar seu próprio image downloader, você só precisa implementar o método `downloadImage`, aqui está uma versão simplificada da implementação padrão:

```dart
class DefaultBeagleImageDownloader implements BeagleImageDownloader {
  DefaultBeagleImageDownloader({
    @required this.httpClient,
  }) : assert(httpClient != null);

  final HttpClient httpClient;

  @override
  Future<Uint8List> downloadImage(String url) async {
    final request = BeagleRequest(url);
    final response = await httpClient.sendRequest(request);

    if (response.status != HttpStatus.ok) {
      throw Exception('Requisição HTTP falhou, statusCode: $response.status, $url');
    }

    final bytes = response.bodyBytes;
    if (bytes.lengthInBytes == 0) {
      throw Exception('A imagem é um arquivo vazio: $url');
    }

    return bytes;
  }
}
```

Vale ressaltar que a implementação padrão do Image Downloader usa a implementação padrão do HTTP Client.

## Use um image downloader customizado
Para usar seu image downloader, passe-o no método de inicialização do Beagle `BeagleSdk.init` assim como no exemplo abaixo:
```dart
BeagleSdk.init(
  imageDownloader: SeuImageDownloader(),
);
```
