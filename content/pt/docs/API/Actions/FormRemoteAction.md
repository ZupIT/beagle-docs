---
title: FormRemoteAction
weight: 267
description: >-
  Nesta seção, você encontra a definição do FormRemoteAction e detalhes de seus
  atributos
---

---

{{% alert color="warning" %}}
Essa ação foi **depreciada** junto com o Form.
{{% /alert %}}

## O que é?

É a ação para fazer uma requisição para submeter o formulário.

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
        <p></p>
        <p>path</p>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define o caminho URL do servi&#xE7;o que ir&#xE1; receber os dados do
        formul&#xE1;rio.</td>
    </tr>
    <tr>
      <td style="text-align:left">method</td>
      <td style="text-align:left">FormMethodType</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define o tipo de opera&#xE7;&#xE3;o para submeter o formul&#xE1;rio.</td>
    </tr>
  </tbody>
</table>

### FormMethodType

É um `ENUM` para definir o método `HTTP` que usará para submeter o formulário.

Segue abaixo os valores:

| Tipo | Definição |
| :--- | :--- |
| GET | É usado para métodos que só recebem dados. |
| POST | É usado para métodos que submetem dados. |
| PUT | É usado para métodos que substituem os dados . |
| DELETE | É usado para métodos de remoção de dados. |




