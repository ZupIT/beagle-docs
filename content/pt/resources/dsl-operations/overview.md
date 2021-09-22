---
title: Visão Geral
weight: 1
type: overview
description: 'Nesta seção, você encontra a descrição completa das Operações que utilizam a DSL do Beagle.'
---

---

## O que é? 

As operações permitem você criar aplicações com telas mais complexas por meio do seu backend com operações básicas como:
- Condicionais
- Soma
- Igualdade
- E outras.
A vantagem é que os componentes não precisam ter esse tipo de lógica dentro deles. 

## Como usar?

As operações são usadas quando você quiser modificar os valores de um componente por meio de lógicas e operações e em um momento diferente daquele que você recebeu os componentes com o JSON.

O Beagle disponibiliza alguns operadores padrões, mas você também pode criar suas próprias operações. 

##### *Uso dos métodos** 

{{% alert color="warning" %}}
  A nova DSL não implica na mudança do JSON ao renderizar os componentes.
{{% /alert %}}


Quando você utilizar os operadores com a nova DSL, é necessário entender o uso dos métodos a seguir:

**1.** **constant -** Este método é utilizado quando as operações são do tipo [Bind.Value](https://docs.usebeagle.io/v1.10/pt/api/context/overview/).


**2.** **expressionOf -** Este método é utilizado quando as operações são do tipo [Bind.Expression](https://docs.usebeagle.io/v1.10/pt/api/context/overview/).

**3.** **toBindString -** Em um componente Beagle, é necessário adicionar este método após o componente para fazer a conversão da operação para o tipo Bind de String.

*Exemplo:* ```Text(sum(constant(1), constant(2)).toBindString())```

**4.** **plus -** Este método é utilizado para escrever um texto seguido de uma operação. 

**5.** **createOperation -** Por meio deste método é possível criar [operações customizadas](https://docs.usebeagle.io/v1.10/pt/api/plugins/dsl-operations/how-to-register-a-new-operation/).

*Exemplo:* ```Text(constant("Sum of 2 + 1 = ").plus(sum(constant(2), constant(1)).toBindString()))``` *ou* ```Text(constant("Sum of 2 + 1 = ") + (sum(constant(2), constant(1)).toBindString()))```

Veja abaixo todos os operadores padrões oferecidos pelo Beagle:
