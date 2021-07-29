---
title: Exibindo uma tela
weight: 224
description: >-
  Nesta seção, você encontra um exemplo prático de como exibir uma tela
  Server-Driven
---

---

## Exibindo uma tela a partir de uma URL

Para renderizar uma tela [**server-driven**]({{< ref path="/key-concepts#server-driven-ui" lang="pt" >}}), basta criar uma instância **`BeagleScreenViewController`** do tipo **`remote`** e fazer a inicialização com a URL do seu [**BFF**]({{< ref path="/key-concepts#backend-for-frontend" lang="pt" >}}), como no exemplo abaixo:

```swift
let beagleViewController = Beagle.screen(
    .remote(
        .init(url: "// URL AQUI")
    )
)
```

Feito isso, **basta apresentá-la** onde preferir. Neste caso, você deve seguir como no comando de exemplo.

```swift
present(beagleViewController, animated: true, completion: nil)
```

A **resposta** do seu BFF deve ser um JSON que representa um **componente visual definido localmente** na aplicação.

{{% alert color="info" %}}
Você também pode [**renderizar uma tela de exemplo**](https://run.mocky.io/v3/2ee29265-5edb-4c61-8a30-827760ae66ca). Para isso, basta passar esta mesma URL na inicialização da**`BeagleScreenViewController`**.
{{% /alert %}}

Por fim, **execute a aplicação** e veja uma tela definida em uma URL remota renderizada na sua aplicação local.

{{% alert color="success" %}}
Parabéns, você conseguiu exibir uma tela **full server-driven** 🎉

Desta forma, será possível criar telas com conteúdo dinâmico, e controle no seu backend.
{{% /alert %}}

## Exibindo uma tela a partir de um JSON

Para renderizar uma tela de um JSON, basta criar uma instância **`BeagleScreenViewController`** do tipo **`declarativeText`** e fazer a inicialização com o JSON, como no exemplo abaixo:

```swift
let beagleViewController = Beagle.screen(
    .declarativeText(
        .init(text: "// JSON HERE")
    )
)
```

Feito isso, basta apresentá-la onde preferir. Neste caso, você deve seguir como no comando de exemplo.

```swift
present(beagleViewController, animated: true, completion: nil)
```