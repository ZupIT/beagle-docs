---
title: Openexternalurl
weight: 275
description: Descrição da ação OpenExternalURL e seus atributos
---

---

## O que é?

Abre o navegador selecionado pelo usuário com a url informada.

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| url | String | ✓ | URL enviada para o navegador. |

## Como usar?

No exemplo abaixo, você pode ver um botão que, ao ser clicado, abre o navegador com a URL especificada. Para testar, basta que um endpoint do seu BFF retorne a tela do código abaixo e chame esse endpoint no frontend.

{{< tabs id="T111" >}}
{{% tab name="JSON" %}}
<!-- json-playground:openExternalURL.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:openExternalURL",
      "url" : "http://docs-beta.usebeagle.io/docs/api/actions/navigate/openexternalurl/"
    } ]
  }
}
-->
{{% playground file="openExternalURL.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.OpenExternalURL(
                url = "http://docs-beta.usebeagle.io/docs/api/actions/navigate/openexternalurl/"
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
