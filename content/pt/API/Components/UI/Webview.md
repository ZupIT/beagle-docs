---
title: Webview
weight: 329
description: Descrição do componente Web View e seus atributos
---

---

## **O que é?**

O componente `Web View` define uma web view nativamente e usa informações server-driven.

A estrutura é representada como mostrado abaixo:

| Atributo | Tipo                                              | Obrigatório | Definição                                                                                                               |
| :------- | :------------------------------------------------ | :---------: | :---------------------------------------------------------------------------------------------------------------------- |
| url      | String ou [Binding](/pt/api/context#binding) |      ✓      | Define a página inicial que o Web View irá carregar. Ele deve ser declarado e não pode ser configurado como valor nulo. |

{{% alert color="warning" %}}
**Ao abrir um link não seguro \(http\):** É importante observar que este componente abrirá **SOMENTE** links seguros do tipo **`https`** e NÃO exibirá nenhum link não seguro do tipo **`http`**.
{{% /alert %}}

## Como usar?

{{< tabs id="T142" >}}
{{% tab name="JSON" %}}

<!-- json-playground:webView.json
{
    "_beagleComponent_": "beagle:webView",
    "url": "https://www.google.com.br/"
}
-->

{{% playground file="webView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
WebView(url: "https://www.google.com.br/")
```

{{% /tab %}}
{{< /tabs >}}
