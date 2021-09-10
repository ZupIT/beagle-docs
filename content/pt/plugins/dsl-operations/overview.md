---
title: Visão Geral
weight: 1
type: overview
description: 'Nesta seção, você encontra a descrição completa das Operações com a utilização da nova DSL do Beagle.'
---

---

## O que é? 

As operações permitem que você crie aplicações com telas mais complexas por meio do seu backend com operações básicas como condicionais, soma, igualdade, etc. Dessa forma, os  componentes não necessitam de ter esse tipo de lógica dentro deles. 

## Como usar?

De modo geral, as operações podem ser usadas quando você quer modificar os valores de um componente por meio de lógicas e operações em um momento diferente daquele em que recebeu os componentes com o JSON.

No Beagle é disponibilizado alguns operadores padrões e você pode criar suas próprias operações. 

##### **OBS:** 

- A nova DSL não implica na mudança do JSON ao renderizar os componentes;

- Ao utilizar os operadores com a nova DSL é necessário compreender o uso dos métodos a seguir:

**constant -** Este método é utilizado quando as operações são do tipo [Bind.Value](https://docs.usebeagle.io/v1.10/pt/api/context/overview/).


**expressionOf -** Este método é utilizado quando as operações são do tipo [Bind.Expression](https://docs.usebeagle.io/v1.10/pt/api/context/overview/).

**toBindString -** Em um componente Beagle, é necessário adicionar este método após o componente para fazer a conversão da operação para o tipo Bind de String.

*Exemplo:* ```Text(sum(constant(1), constant(2)).toBindString())```

**plus -** Este método é utilizado para escrever um texto seguido de uma operação. 

**createOperation -** Por meio deste método é possível criar [operações customizadas](https://docs.usebeagle.io/v1.10/pt/api/plugins/dsl-operations/how-to-register-a-new-operation/).

*Exemplo:* ```Text(constant("Sum of 2 + 1 = ").plus(sum(constant(2), constant(1)).toBindString()))``` *ou* ```Text(constant("Sum of 2 + 1 = ") + (sum(constant(2), constant(1)).toBindString()))```

Veja abaixo todos os operadores padrões oferecidos pelo Beagle:
