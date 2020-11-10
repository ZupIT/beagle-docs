---
title: "FormValidation"
linkTitle: "FormValidation"
description: >
Nesta seção, você encontra a definição do FormValidation e detalhes de seus
  atributos.
---

{% hint style="warning" %}
Essa ação foi **depreciada** junto com o Form!
{% endhint %}

## O que é?

Essa ação é usada para configurar as mensagens de erro retornadas pelo serviço externo ao submeter um formulário, por exemplo, verificar o status do registro de um CPF ao submetê-lo.

A estrutura do FormValidation é:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| errors | List&lt;FieldError&gt; | ✓ | Lista de erros. |

### FieldError

O `FieldError` é uma classe para definir o erro.

A estrutura do `FieldError` é:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| inputName | String | ✓ | Nome do componente o qual o erro se refere. |
| message | String | ✓ | Mensagem do erro a ser exibido. |

