---
title: UnitValue
weight: 332
description: Descrição do UnitValue.
---

---

## O que é?

O UnitValue é um objeto que define o valor em porcentagem ou valor absoluto de um campo. É utilizado nas estruturas: [Size]({{< ref path="/api/style/size.md" >}}), [EdgeValue]({{< ref path="/api/style/edge-value.md" >}}) e no campo basis do Flex.

A sua estrutura é representada como mostrado abaixo: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Atributo</strong>
      </th>
      <th style="text-align:left"><strong>Tipo</strong>
      </th>
      <th style="text-align:center">Obrigatório</th>
      <th style="text-align:left"><strong>Definição</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">value</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Valor do atributo.</td>
    </tr>
    <tr>
      <td style="text-align:left">type</td>
      <td style="text-align:left">UnitType
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Tipo do valor definido. Pode ser REAL, PERCENT ou AUTO.</td>
    </tr>
  </tbody>
</table>
