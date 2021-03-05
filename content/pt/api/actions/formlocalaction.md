---
title: FormLocalAction
weight: 265
description: Descrição do componente FormLocalAction
---

---

{{% alert color="warning" %}}
Essa ação foi **depreciada** junto com o Form.
{{% /alert %}}

## O que é? 

Define as ações locais do formulário, ou seja, não fazem solicitações de HTTP, como por exemplo, uma ação que cria uma caixa de diálogo personalizada.

A sua estrutura é representada como mostrado abaixo: 

<table>
  <thead>
    <tr>
      <th style="text-align:left">Atributo</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:center">Obrigat&#xF3;rio</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        name
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define o nome da a&#xE7;&#xE3;o.</td>
    </tr>
    <tr>
      <td style="text-align:left">data</td>
      <td style="text-align:left">Map&lt;String, String&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Dado que pode ser enviado como par&#xE2;metro da a&#xE7;&#xE3;o.</td>
    </tr>
  </tbody>
</table>
