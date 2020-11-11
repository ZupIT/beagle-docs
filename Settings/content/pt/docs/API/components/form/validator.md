---
title: "Validator"
description: >
    Nesta seção, você encontra a descrição do Validator e seus atributos.
---

O componente `validator` é uma interface que informa ao formulário quando habilitar o botão de `FormSubmit`. Ele tem como base o conceito de `observability`, no qual o **FormInput**  irá validar as informações submetidas e, então, enviá-las ao validator.  ****

Existem duas maneiras de usar o **Form Validator**:

1. Clicando no `FormSubmit`
2. Chamando pelo método `notifyObservers` dentro do `FormInput`.

{% hint style="warning" %}
**Atenção:** ``**Validator** ≠ [**FormValidation**](https://docs.usebeagle.io/v/v0.3/elements/action/formvalidation). 

Apesar dos nomes parecidos, é importante deixar claro que o Validator é **diferente** do FormValidation. Isso porque o primeiro autentica o formulário preenchido, enquanto que o segundo retorna mensagens de erro em caso de falha nas informações do form. 
{% endhint %}

