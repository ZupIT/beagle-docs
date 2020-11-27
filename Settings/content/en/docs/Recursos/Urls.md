---
title: Urls
weight: 215
description: >-
  Nesta seção, você entende como o Beagle lida com URLs entre backend e frontend
  (BFF).
---

---

## Introdução

A maior parte dos elementos disponibilizados pelo Beagle usa um campo para indicar o caminho para definir as URLs. 

Este campo, em específico, é enviado pelo backend para indicar as chamadas HTTP que o aplicativo precisa fazer e que são gerenciadas pelo cliente do Beagle. 

## Tipos de caminhos 

Você tem **duas maneiras de utilizar estes caminhos** no Beagle: 

* Forma Absoluta 
* Forma Relativa 

### Caminho Absoluto 

É o tipo de caminho usado quando você deseja ignorar a URL base configurada no aplicativo frontend. Se você faz esta indicação, o Beagle entenderá que essa URL já está completa e irá usá-la dessa forma. 

Um exemplo de caminho absoluto:**`https://api.zup.com.br/my-bff/home`** 

### Caminho Relativo 

É o tipo de caminho usado quando você decide respeitar a URL base configurada no seu aplicativo frontend. 

Por exemplo, se você definir uma URL base como **`https://api.zup.com.br/my-bff`** e receber um caminho relativo em algum lugar como `/ home`, o Beagle irá criar a URL completa como **`https://api.zup.com. br /my-bff/home`**.

{% hint style="info" %}
Sugerimos que você sempre comece um caminho relativo com uma barra invertida \(/\), pois esta é a marca usada no Beagle para indicar que é uma a URL relativa.
{% endhint %}

## Encode type

O Beagle utiliza o padrão Encoding type RFC 3986 ao tratar URLs.
