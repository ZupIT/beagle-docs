---
title: Confirm
<<<<<<< HEAD
weight: 249
description: >-
  Nesta seção, você encontra a definição do Confirm e os detalhes de seus
  atributos
=======
weight: 266
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## O que é?

A ação `confirm` é responsável por criar um elemento modal de confirmação.

A estrutura do Confirm é:

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
      <td style="text-align:left">title</td>
      <td style="text-align:left">
        <p>String ou</p>
        <p><a href="../contexto.md#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">T&#xED;tulo da caixa de confirma&#xE7;&#xE3;o</td>
    </tr>
    <tr>
      <td style="text-align:left">message</td>
      <td style="text-align:left">
        <p>String ou</p>
        <p><a href="../contexto.md#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Mensagem da caixa de confirma&#xE7;&#xE3;o</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressOk</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="./"><b>Action</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:center"></td>
        <td style="text-align:left">A&#xE7;&#xE3;o do bot&#xE3;o de confirma&#xE7;&#xE3;o</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressCancel</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="./"><b>Action</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:center"></td>
        <td style="text-align:left">A&#xE7;&#xE3;o do bot&#xE3;o de cancelamento</td>
    </tr>
    <tr>
      <td style="text-align:left">labelOk</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Mensagem do bot&#xE3;o de confirma&#xE7;&#xE3;o</td>
    </tr>
    <tr>
      <td style="text-align:left">labelCancel</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Mensagem do bot&#xE3;o de cancelamento</td>
    </tr>
  </tbody>
</table>

## Como usar?

Segue abaixo um exemplo com um botão que ao clicado exibe um modal de confirmação:



```javascript
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:button",
      "text": "Confirm Example",
      "onPress": [
        {
          "_beagleAction_": "beagle:confirm",
          "title": "Confirm Title",
          "message": "Confirm Message",
          "onPressOk": {
            "_beagleAction_":"beagle:alert",
            "message": "Confirmed"
          }
        }
      ]
    }
  ]
}
```



```kotlin
Button(text = "Confirm Example",
       onPress = listOf(
            Confirm(title = "Confirm Title",
                    message = "Confirm Message",
                    onPressOk = Alert(
                                    title = "Ok", 
                                    message = "Confirmed"),
                    onPressCancel = Alert(
                                    title = "Cancel", 
                                    message = "Cancelled"),
                    labelOk = "Accept",
                    labelCancel = "Deny"
                )
            )
        )
```



### 👉 [Teste essa ação no Web Playground](https://beagle-playground.netlify.app/#/cloud/fb8268dcdbf24f89a8367cc76dea9d99/confirm.json)
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
