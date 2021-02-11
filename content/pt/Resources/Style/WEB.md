---
title: WEB
weight: 208
description: >-
  Nesta seção, você encontra tudo sobre como usar a estilização de componentes
  para projetos Web.
---

---

## Introdução

É possível realizar duas principais maneiras de estilização com Beagle para Web. São elas:

1. [**Adição de classes de estilo** ](#adicionando-classes-de-estilo)
2. [**Estilização de componentes via JSON**](#estilizando-componentes-via-json)

Abaixo, você encontra a explicação detalhada para cada uma delas.

## Adicionando classes de estilo

### Adicionar propriedade de estilo ao JSON

Para fazer essa mudança, você deve adicionar, em seu arquivo JSON, a propriedade `styleId` com o nome da classe de estilo que você criou em seu componente angular.

No exemplo abaixo, você vê como foi feita a adição para uma classe hipotética com nome 'card'.

```text
{
   "_beagleComponent_": "custom:card",
   "myCustomTitle": "Beagle Web",
   "myCustomDescription": "Lorem ipsum dolor ..."
   "styleId": "card"
}
```

### Inserir a classe ao componente

O processo de inserir uma classe ao componente varia de acordo com o framework que estiver utilizando. Confira o processo para cada um deles nas abas a seguir:

{{< tabs id="T87" >}}
{{% tab name="Angular" %}}
No Angular, há duas formas de adicionar a classe que recebemos da propriedade `styleId`:

#### 1. Pelo ViewEncapsulation

Abra o arquivo do seu componente angular e, logo abaixo da propriedade `styleUrls` do decorator @Component, adicione o enum ViewEncapsulation.none.

Veja como funciona no exemplo abaixo:

```javascript
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  encapsulation: ViewEncapsulation.None,
})
```

Feito isso, basta rodar o projeto com um dos comandos:

```text
npm run serve
```

```text
yarn serve
```

Depois que você adicionar o enum None à propriedade encapsulation do @Component\(\), é necessário fazer com que ela seja utilizada. Veja como na imagem abaixo:

![](/image%20%2812%29.png)

{{% alert color="info" %}}
Para entender mais sobre o **ViewEncapsulation**, acesse a [**documentação do Angular.**](https://angular.io/api/core/ViewEncapsulation#viewencapsulation)
{{% /alert %}}

#### 2. Pela propriedade StyleId

Outra maneira de você adicionar a classe é mantendo a propriedade encapsulation como nativo. Para isso, é só abrir o arquivo do seu componente Angular e adicionar um novo @Input, no caso, o styleId.

Veja no exemplo a seguir:

```javascript
export class CardComponent implements OnInit {
  @Input() myCustomTitle: string
  @Input() myCustomDescription: string
  @Input() styleId: string

  constructor() { }
  ...
}
```

Uma vez feito isso, este Input está com a referência do nome da classe que você adicionou ao JSON no passo anterior. Na sequência, você precisa mudar o HTML como no modelo abaixo:

```javascript
<div class="{{styleId}}">
  <div>
    <h1>{{ myCustomTitle }}</h1>
    <h3>{{ myCustomDescription }}</h3>
  </div>
</div>
```

Por fim, basta rodar o projeto com um dos comandos:

```text
npm run serve
```

```text
yarn serve
```

Qualquer uma das formas que você usou para conectar sua classe de estilo ao componente deve gerar o mesmo resultado e seu componente deve ser alterado de acordo com o estilo definido em sua classe.
{{% /tab %}}

{{% tab name="React" %}}
Para projetos React, você acessa a sua classe por meio da propriedade `styleId.`

Importe seu arquivo de estilos no componente e você precisa atribuir o valor de `styleId` ao `className` por meio das props.

```javascript
import React from "react";
import "./custom-text.style.css";

function CustomTextComponent(props) {
  return <p className={props.styleId}>{props.customText}</p>;
}

export default CustomTextComponent;
```

Pronto, os elementos do seu componente já devem receber a classe definida no JSON
{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Vale reforçar que para definir a classe adicionada com valor de `styleId`, é fundamental que você tenha um **arquivo de estilo** dentro do seu projeto \(Ex: CSS, SASS, LESS\).
{{% /alert %}}

## Estilizando componentes via JSON

Mais uma possibilidade do Beagle Web é o de estilizar os seus componentes. Abaixo, você confere o que pode ser feito diretamente pelo JSON:

### Position

Você pode modificar a posição de elementos na tela usando a propriedade position, como no exemplo:

```text
{
  ...
    {
      "_beagleComponent_": "beagle:text",
      "text": "Welcome to the Beagle playground!",
      "style": {
        "positionType":"relative",
        "position": {
          "top": {
            "value": 10,
            "type": "REAL"
          },
          "left": {
            "value": 10,
            "type": "REAL"
          }
        }
      }
    }
  ]
}
```

### Margin e Padding

Você pode também mudar a margem e o espaçamento dos elementos na tela usando as propriedades `margin` e `padding`, como no modelo abaixo:

```text
{
  ...
    {
      "_beagleComponent_": "beagle:text",
      "text": "Welcome to the Beagle playground!",
      "style": {
        "margin": {
          "top": {
            "value": 10,
            "type": "REAL"
          },
          "left": {
            "value": 10,
            "type": "REAL"
          }
        }
      }
    }
  ]
}
```

### Size

É possível ainda alterar as dimensões dos elementos na tela usando a propriedade `Size`**,** que recebe os valores de `Height` ou `Width`. Veja como no exemplo:

```text
{
  "_beagleComponent_": "beagle:container",
    "size": {
      "height": {
        "value": 100,
        "type": "REAL"
      },
      "width": {
        "value": 100,
        "type": "REAL"
      }
    }
  }
  ...
}
```

{{% alert color="info" %}}
Repare que, em todos os exemplos acima, as propriedades recebem os mapas de valores no formato &lt;value, type&gt;.

No caso do Beagle, os valores disponíveis para type são:

- REAL - Valor em pixel \('px'\)
- PERCENT - Valor em porcentagem \(%\)
  {{% /alert %}}

### Flex

Por fim, você tem a possibilidade de adicionar propriedades no modelo de layout flexbox com a biblioteca do Beagle.

```text
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "backgroundColor":"red",
    "flex": {
      "flexDirection": "COLUMN",
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    }
  }
}
 ...
```

{{% alert color="info" %}}
Além dessas funcionalidades, alguns componentes possuem propriedades específicas como mudança na cor do texto ou alinhamento. Conheça mais sobre os [**componentes do Beagle**]({{< ref path="/api/components/" lang="pt" >}})
{{% /alert %}}
