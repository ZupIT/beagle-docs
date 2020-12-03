---
title: Touchable
<<<<<<< HEAD
weight: 318
description: Descrição do componente que habilita ação em outros componentes.
=======
weight: 335
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## O que é?

O Touchable é responsável por definir as áreas clicáveis dentro da aplicação em componentes que não são clicáveis nativamente.

A sua estrutura é representada como mostrado abaixo: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Atributo</b>
      </th>
      <th style="text-align:left"><b>Tipo</b>
      </th>
      <th style="text-align:center">Obrigat&#xF3;rio</th>
      <th style="text-align:left"><b>Defini&#xE7;&#xE3;o</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">onPress</td>
      <td style="text-align:left"><a href="../api-acoes/">Action</a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define uma ou mais <a href="https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MAl4cryxfmV2ZeK3BVb/api/api-acoes">a&#xE7;&#xF5;es</a> a
        serem executadas quando um componente <code>child</code> &#xE9; clicado.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>click</p>
        <p>Analytics</p>
        <p>Event</p>
      </td>
      <td style="text-align:left">
        <p><a href="../analytics.md#opcao-click">Analytics</a>
        </p>
        <p><a href="../analytics.md#opcao-click">Click</a>
        </p>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">
        <p></p>
        <p>Evento do clique que ser&#xE1; disparado caso tenha sido implementado
          um servi&#xE7;o de analytics.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">child</td>
      <td style="text-align:left">
        <p><a href="../widget.md">Server</a>
        </p>
        <p><a href="../widget.md">DrivenComponent</a>
        </p>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define o widget que ser&#xE1; o gatilho do atributo onPress. <b> </b>
      </td>
    </tr>
  </tbody>
</table>

## Como usar?



```kotlin
{
  "_beagleComponent_": "beagle:touchable",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "This is a touchable!"
    }
  ],
  "child":
  {
      "_beagleComponent_": "beagle:image",
      "path": {
        "_beagleImagePath_": "remote",
        "url": "https://i.ibb.co/KWwTSWB/1029209-200.png"
      },
      "accessibility": {
            "accessibilityLabel": "Touchable image",
            "accessible": true
      }
  }
}

```



```kotlin
Touchable(onPress = listOf(
			         Alert(title = "Image", 
                     message = "Clicked on Message")),
          child = Image(path = ImagePath.Local.justMobile("name"))
)
```



###  👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/touchable.json?platform=react-web)
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
