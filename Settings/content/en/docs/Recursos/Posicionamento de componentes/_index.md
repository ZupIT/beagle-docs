---
title: Posicionamento de componentes
weight: 54
description: >-
  Nesta seção, você encontra mais informações sobre o posicionamento dos
  componentes na tela de um dispositivo usando Beagle.
---

---

{% hint style="warning" %}
#### Disponibilidade: Beagle 1.0+
{% endhint %}

## **Introdução** 

No Beagle, você terá de usar uma dependência chamada[ **Yoga Layout**](https://yogalayout.com/docs/) ****para posicionar os componentes na tela da sua aplicação.

Para fazer isso, o Yoga faz os cálculos necessários para posicionar os elementos e, depois disso, faz a sua renderização.  


## **Sobre o Yoga Layout**

O Yoga é um framework Android e iOS desenvolvido pelo Facebook para posicionar views usando o conceito do Flexbox.

O Flexbox organiza os elementos dentro de containers de forma dinâmica para que, independente das dimensões da sua aplicação, você possa manter um layout flexível.

Alguns conceitos chave para entender o Flexbox são:

* **Main Axis:** eixo horizontal
* **Cross Axis:** eixo vertical
* **Main Size:** tamanho da dimensão dos eixos.

No caso do Main Size, é possível ter **3 tipos diferentes de dimensões:** 

1. **Cross Size:** Tamanho da dimensão cross axis.
2. **Main Start and Main End:** Começo e o fim do main axis.
3. **Cross Start and Cross End:** Começo e o fim do cross axis.

**‌**Estes eixos dependem do valor atribuído à propriedade flex-direction para definir a orientação dos elementos em tela.

Se esta propriedade receber o valor:

* **row ou row-reverse:** o main axis do container será o horizontal e o cross axis será vertical.

![Exemplo de yoga layout com row ou row-reverse](https://lh3.googleusercontent.com/YwCLX11cEtBYnUcVYIDy63Z_aoEA5rfErFyOKSOgxZA092HmcFO7ZwDKgKJ6Tmjr-J3m7aQgSYCn2p0QzSLO_NsibCWc7LCg9Y2xDjVXQ6BWyhIjYpB3tCdbKx-4CnrKG7tSzaqp)

\*\*\*\*

* **column ou column-reverse:** o main axis do container será vertical e o cross axis será horizontal.

![Exemplo de yoga layout com column ou column-reverse](https://lh3.googleusercontent.com/AM1cTOExo5ux4V_2-HE6WItbPdTWHj-6CBwDXxo8mV0vZfw6WoxtWWOUtosLU_UTTAArH_pMm35geJE1HBfYjqT-DBshvLsUcjvCmVoQVdPSGTW8QCx8YJltIgC4Ad9cDKFu1dQ4)

{% hint style="info" %}
Importante ressaltar que o default do Beagle é o valor `column`ou seja, os elementos serão dispostos em colunas por padrão.
{% endhint %}

## Propriedades disponíveis 

A partir do Yoga Layout, você pode utilizar as seguintes propriedades para inserir, alterar ou eliminar componentes em tela: 

{% page-ref page="flex-direction.md" %}

{% page-ref page="grow.md" %}

{% page-ref page="justify-content.md" %}

{% page-ref page="align-content.md" %}

{% page-ref page="align-items.md" %}

{% page-ref page="align-self.md" %}

{% page-ref page="flex-wrap.md" %}

{% page-ref page="margin.md" %}

{% page-ref page="padding.md" %}

{% page-ref page="position.md" %}

{% page-ref page="positiontype.md" %}

{% page-ref page="basis.md" %}

{% page-ref page="shrink.md" %}

{% page-ref page="size.md" %}

{% page-ref page="display.md" %}

{% page-ref page="flex.md" %}

### **UnitValue**

As propriedades **Basis, Size, Margin, Padding e Position** descritas acima recebem  um `UnitValue` que espera um valor`Double`e um `UnitType`, que é um `enum`com as seguintes opções: 

| **UnitType** | Definição |
| :--- | :--- |
| **REAL** | Aplica o valor `Double` |
| **PERCENT** | Aplica o valor `Double`  em forma de percentual do tamanho do pai |
| **AUTO** | Segue o valor do pai. Exceto quando possui tamanho próprio |

Para as propriedades listadas abaixo, na Web, o `default`  é  `UnitType.AUTO`.  

O `UnitType.AUTO` pode ser usado nas frentes iOS, Android e Web de acordo com a tabela abaixo:

<table>
  <thead>
    <tr>
      <th style="text-align:center">Propriedade</th>
      <th style="text-align:center">
        <p>
          <img src="../../.gitbook/assets/image (125).png" alt/>
        </p>
        <p>iOS</p>
      </th>
      <th style="text-align:center">
        <p>
          <img src="../../.gitbook/assets/image (126).png" alt/>
        </p>
        <p>Android</p>
      </th>
      <th style="text-align:center">
        <p>
          <img src="../../.gitbook/assets/image (122).png" alt/>
        </p>
        <p>Web</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><b>Basis</b>
      </td>
      <td style="text-align:center">&#x2714;</td>
      <td style="text-align:center">&#x2714;</td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Size</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Margin</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Padding</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Position</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
  </tbody>
</table>
