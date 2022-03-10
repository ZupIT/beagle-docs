---
title: Image Downloader
weight: 3
description: >-
  Nesta seção, você encontra informações de como configurar e usar o Image Downloader no Beagle Flutter.
---

---

# Introdução
O "ImageDownloader" lida com como as imagens remotas são baixadas. Ele deve ser usado por qualquer componente de Imagem e nossa intenção ao deixar este ser um serviço configurável é que qualquer lógica adicional para download de imagens possa ser facilmente implementada sem a necessidade de substituir o componente de imagem da biblioteca de componentes que está sendo usada.

Semelhante ao "ViewClient", o "ImageDownloader" também é responsável por criar solicitações para o "HttpClient" e processar suas respostas, a única diferença é que o "ViewClient" faz isso para visualizações orientadas a servidor (JSONs) e o "ImageDownloader" faz isso para imagens.

O "ImageDownloader" padrão é muito simples, apenas cria a requisição, passa para o HttpClient e transforma a resposta em um `Uint8List`. Uma aplicação interessante de um "ImageDownloader" personalizado seria o cache. O "ImageDownloader" personalizado salvaria as imagens em disco e usaria o valor armazenado em vez de fazer a solicitação ao "HttpClient" sempre que possível.

Aqui está a interface do `ImageDownloader`:

```dart
abstract class BeagleImageDownloader {
  Future<Uint8List> downloadImage(String url);
}
```

O método `downloadImage` recebe como parâmetro a url da imagem e retorna um `Future<Uint8List>` como representação da imagem baixada.

# Criando um ImageDownloader customizado
Para criar seu próprio image downloades, você precisa implementar o método `downloadImage`, veja uma versão simplificada da versão padrão:

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
      throw Exception('HTTP request failed, statusCode: $response.status, $url');
    }

    final bytes = response.bodyBytes;
    if (bytes.lengthInBytes == 0) {
      throw Exception('Image is an empty file: $url');
    }

    return bytes;
  }
}
```

# Usando o ImageDownloader customizado
Para usaro o ImageDownloader, apenas passe para a propriedade equivalente no BeagleService. Veja:

```dart
final beagleService = BeagleService(
  imageDownloader: MyImageDownloader(),
  // ...
);
```
