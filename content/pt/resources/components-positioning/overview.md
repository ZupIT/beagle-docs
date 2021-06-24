---
title: Visão Geral
weight: 1
type: overview
description: >-
  Nesta seção, você encontra mais informações sobre o posicionamento dos
  componentes na tela de um dispositivo usando Beagle.
---

---

{{% alert color="warning" %}}

#### Disponibilidade: Beagle 1.0+

{{% /alert %}}

## **Introdução**

O Beagle usa uma dependência chamada **Yoga layout** para posicionar seus componentes na tela de uma aplicação. Para isso, o Yoga calcula a posição dos elementos e, em seguida, faz sua renderização.
![](/shared/flex/image125.png)

## Sobre Yoga

O [**Yoga**](https://yogalayout.com/) é um framework desenvolvido pelo Facebook que posiciona os elementos em uma tela usando o conceito Flexbox aplicados ao Android e iOS.

Flexbox é um conceito do CSS que é utilizado para posicionar elementos em contêineres dinamicamente para que, independentemente das dimensões de seu aplicativo, você possa manter um layout flexível.

Veja abaixo alguns conceitos-chave sobre o Flexbox:

- **Main Axis:** 
- **Cross Axis:** 
- **Main Size:**

No caso do Main Size, é possível ter **3 tipos diferentes de dimensões:**

1. **Cross Size:** Tamanho da dimensão cross axis.
2. **Main Start and Main End:** Começo e o fim do main axis.
3. **Cross Start and Cross End:** Começo e o fim do cross axis.

**‌**Esses valores para os eixos(axis) dependem de como é definida a propriedade flex-direction.

Se esta propriedade for definida como:

| **row ou row-reverse:** | **column ou column-reverse:** |
| :-----------: | :----------------------------------------------------------: |
| O eixo principal (main axis) será horizontal e o eixo transversal (cross axis) será vertical. | O eixo principal (main axis) será vertical e o eixo transversal (cross axis) será horizontal. |
| {{< figure src="/shared/flex/row.png" width="150">}} | {{< figure src="/shared/flex/column.png" width="150">}} |

{{% alert color="info" %}}
Important: O valor default do Beagle é `column`, ou seja, os elementos serão dispostos em colunas por padrão.
{{% /alert %}}

## Propriedades

O Yoga Layout pode usar alguams propriedades para inserir, mover ou excluir componentes. Veja a seguir algumas delas:

### **UnitValue**

Os atributos **Base, Size, Margin, Padding e Position** recebem um valor (`UnitValue`) do tipo `Double` e um `UnitType` do tipo `enum`, ambos com as opções:

| **UnitType** | Definição                                                        |
| :----------- | :--------------------------------------------------------------- |
| **REAL**     | Aplica o valor `Double`                                          |
| **PERCENT**  | Aplica o valor `Double` em forma de percentual do tamanho do pai |
| **AUTO**     | Segue o valor do pai. Exceto quando possui tamanho próprio       |

{{% alert color="warning" %}}
 Quando os atributos acima são referenciados em um projeto WEB, a opção `default is` é o `UnitType.AUTO`.
{{% /alert %}}

O `UnitType.AUTO` pode ser usado no iOS, Android e Web de acordo com a tabela abaixo:

| **Attributes** | Android | iOS | WEB|
| :----------- | :-----: | :------: | :------: |
| **Basis**   | &#x2714; | &#x2714; | &#x2714; |
| **Size**    |          |          | &#x2714; |
| **Margin**  |          |          | &#x2714; |
| **Padding**  |         |          | &#x2714; |
| **Position**  |        |          | &#x2714; |
