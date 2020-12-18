---
title: "Hugo Shortcodes"
weight: 2
description: >-
     Entenda como funciona os atalhos do hugo para criar componentes html 
     customizados sem perder a experiência de edição com markdown.
---

---

## O que é shortcode

Muitas vezes o markdown não é suficiente para expressar um bom conteúdo, como por exemplo, adicionar um video para exemplificar um assunto ou posicionar uma imagem centralizada, sendo necessário adicionar código html para isso. Dada tal limitação, o framework "Hugo" nos oferece uma solução para não perdermos a experiência única usando markdown, abstraindo a necessidade de usar html e css. Essa solução se chama shortcode.

## Shortcodes disponíveis

### **Alertas**

Os alertas são usados para destacar alguma informação importante ao seguir alguma etapa de configuração, tutorial, ou destacar requisitos necessários para alguma funcionalidade.

- Exemplo de sintaxe

```go-text-template
{{%/* alert color="info" %}}
  ## Alert example
  - info - color - dark-blue
{{% /alert */%}}

{{%/* alert color="success" %}}
  ## Alert example (2)
  - sucess - color - green
{{% /alert */%}}

{{%/* alert color="warning" %}}
  ## Alert example (2)
  - warning - color - orange
{{% /alert */%}}

{{%/* alert color="danger" %}}
  ## Alert example (2)
  - danger - color - red
{{% /alert */%}}
```

- Será renderizado como:

{{% alert color="info" %}}

## Alert example

- info - color - dark-blue
{{% /alert %}}

{{% alert color="success" %}}

## Alert example (2)

- sucess - color - green

{{% /alert %}}

{{% alert color="warning" %}}

## Alert example (3)

- warning - color - orange
{{% /alert %}}

{{% alert color="danger" %}}

## Alert example (4)

- danger - color - red
{{% /alert %}}

### **Videos**

Você pode embutir videos do youtube diretamente na documentação. Ideal para complementar aquele conteúdo de tutorial, ou divulgação. Para isso, use o ID do video localizado em sua url, ex:  

nesse link: ```https://www.youtube.com/watch?v=ECNnZ6rP9qk``` o ID encontra-se depois de ```v=```, ou seja, ECNnZ6rP9qk

- Exemplo de sintaxe:

```go-text-template
{{</* youtube ECNnZ6rP9qk */>}}
```

- Será renderizado como:

{{< youtube ECNnZ6rP9qk >}}

### **Tabs**

As tabs são úteis para exemplificar códigos fonte que podem ser feitos em diferentes linguagens de programação, ou alguma etapa de configuração obrigatória em diferentes plataformas, como por exemplo, android, ios, backend ou web.

- Exemplo de sintaxe:

```go-text-template
{{</* tabs id="MyUniqueTabID" >}}

{{% tab name="Tab1" %}}
{{% /tab %}}

{{% tab name="Tab2" %}}
{{% /tab %}}

{{% tab name="Tab3" %}}
{{% /tab %}}
{{< /tabs */>}}
```

- Será renderizado como:

{{< tabs id="MyTabID" >}}

{{% tab name="Tab1" %}}

## This is the first example of TAB

{{% /tab %}}

{{% tab name="Tab2" %}}

## The second example is here

{{% /tab %}}

{{% tab name="Tab3" %}}

## Yeah, this is the TAB 3

{{% /tab %}}

{{< /tabs >}}

---

Se você quer se aprofundar mais sobre as shortcodes, recomendamos que acesse a [documentação oficial](https://gohugo.io/content-management/shortcodes/) do hugo e saiba mais sobre como criar shortcodes customizadas.
