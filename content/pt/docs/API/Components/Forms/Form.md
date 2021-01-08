---
title: Form
weight: 351
description: Você encontra aqui a descrição do Form e seus atributos.
---

---

{{% alert color="warning" %}}
Esse componente foi **depreciado**! É recomendado usar o [**Simple Form**](/pt/home/api/components/forms/simple-form).
{{% /alert %}}

O componente representa uma maneira de compor entradas do usuário e enviar esses valores ao seu backend.

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
        <p>onSubmit</p>
      </td>
      <td style="text-align:left">List &lt;<a href="../../acoes/"><b>Action</b></a>&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Array de a&#xE7;&#xF5;es que esse bot&#xE3;o pode disparar quando o formul&#xE1;rio
        &#xE9; enviado.</td>
    </tr>
    <tr>
      <td style="text-align:left">child</td>
      <td style="text-align:left"><a href="../"><b>ServerDrivenComponent</b></a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define a lista de componentes visuais (server-driven).</td>
    </tr>
    <tr>
      <td style="text-align:left">group</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Usado somente para formul&#xE1;rios multi p&#xE1;gina, o qual &#xE9; um
        identificador para manipular os dados.</td>
    </tr>
    <tr>
      <td style="text-align:left">additionalData</td>
      <td style="text-align:left">Map&lt;String, String&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Valores sem valida&#xE7;&#xE3;o que o usu&#xE1;rio n&#xE3;o insere.</td>
    </tr>
    <tr>
      <td style="text-align:left">shouldStoreFields</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Indica se deve salvar o <code>additionalData</code>.</td>
    </tr>
  </tbody>
</table>
