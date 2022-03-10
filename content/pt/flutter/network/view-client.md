---
title: View client
weight: 3
description: >-
  Nesta seção, você encontra informações de como configurar uma ViewClient no BeagleFlutter.
---

---

# Introdução

Semelhante ao HttpClient, mas mais específico. Enquanto o hHttpClient é responsável por gerenciar todas as solicitações ("views", dados json, imagens, etc), o ViewClient é responsável apenas por buscar "views", ou seja, páginas "server-driven".

O ViewClient cria o BeagleRequest que é enviado ao HttpClient. A implementação padrão faz duas coisas:
1. cria o BeagleRequest de acordo com o que foi solicitado pelo cliente (normalmente, o navegador);
2. quando a resposta chega do httpClient, ele verifica as ações de navegação onde `preFetch` é `true` e, de forma assíncrona, pré-busca seus resultados.

Ele não faz nada além disso, e isso pode ser suficiente para a maioria dos aplicativos. Mas alguns aplicativos podem precisar de comportamento extra ao buscar "views", e este é o lugar onde isso deve ser implementado.

# Criando uma nova ViewClient

Um bom exemplo é o "caching". Digamos que precisamos guardar uma view localmente, assim quando o Beagle chamar `viewClient.fetch` novamente, o resultado do cache será retornado ao invés de chamar o HttpClient novamente. O exemplo a seguir mostra como fazer isso ao criar uma nova `ViewClient` que tem um "storage" e implementa o `fetch`:

```dart
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

class MyViewClient extends DefaultViewClient {
  MyViewClient({required HttpClient httpClient, required BeagleLogger logger, required UrlBuilder urlBuilder})
    : super(httpClient: httpClient, logger: logger, urlBuilder: urlBuilder);

  static final key = 'view_client_cache';
  SharedPreferences? prefs;

  @override
  Future<BeagleUIElement> fetch(RemoteView route) async {
    prefs ??= await SharedPreferences.getInstance();
    final routeKey = '$key:${route.url}';
    if (prefs.containsKey(routeKey)) {
      final jsonString = prefs.getString(routeKey);
      final map = json.decode(jsonString);
      return BeagleUIElement(map);
    }
    final result = await super.fetch(route);
    prefs.setString(routeKey, result.toString());
    return result;
  }
}
```
A implementação acima mosta uma lógica bem simples usando a biblioteca `sharedPreferences`, em um cenário real ela nem seria necessária, mas é um ótimo exemplo para mostrar de forma direta e rápida como o ViewClient customizado pode ser feito.

Nós extendemos o `DefaultViewClient` para tirar vantagem de tudo que já está implementado. como por exemplo, o pre-fetch. Você pode também se preferir ou se precisar extender diretamento a `ViewClient` e implementar toda a interface do zero.

# Registrando o novo ViewClient
Após criar o seu ViewClient customizado, basta apenas passá-la para a instância do BeagleService:

```dart
final baseUrl = 'https://my-bff.com';
final httpClient = const DefaultHttpClient();
final logger = const DefaultLogger();
final urlBuilder = UrlBuilder(baseUrl);
final viewClient = MyViewClient(httpClient, logger, urlBuilder);

final beagleService = BeagleService(
  baseUrl: baseUrl,
  httpClient: httpClient,
  logger: logger,
  urlBuilder: urlBuilder,
  viewClient: viewClient,
  // ...
);
```
