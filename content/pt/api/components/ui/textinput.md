---
title: Textinput
weight: 327
description: Descrição do componente InputText e seus atributos
---

---

## O que é?

O Text Input é um componente responsável por exibir uma área de texto editável para o usuário. Esses `campos de textos` são usados para coletar dados que um usuário insere utilizando um teclado. 

A sua estrutura é representada como mostrado abaixo: 

|Atributos|Tipo|Obrigatório|Descrição|
|:-----|:-----|:-----:|:-----|
|value|String ou [Binding]({{< ref path="/api/context#bindings" lang="pt" >}})|&#x2713;|Atributo que guarda o valor inserido em um campo de texto|
|placeholder|String ou [Binding]({{< ref path="/api/context#bindings" lang="pt" >}})||Atributo que define um texto que é mostrado quando não existe informação adicionada ao campo de texto.|
|enabled|Boolean||Habilita ou desabilita um campo de texto|
|readOnly|Boolean||Define um campo de texto como `readOnly` quando definido como `true`.|
|type|TextInputType ou [Binding]({{< ref path="/api/context#bindings" lang="pt" >}})||Este atributo define qual tipo de texto será inserido no campo de texto. Em dispositivos moveis, ele também define qual tipo de teclado aparece quando o campo ganha focus.|
|styleId|String||Define uma chave do tipo String para mapear esse componente em um Design System no front end da aplicação. Essa chave identifica qual estilo será aplicado a esse componente.|
|error|String ou [Binding]({{< ref path="/api/context#bindings" lang="pt" >}})||Define uma mensagem de erro para esse campo de texto.|
|showError|Boolean or [Binding]({{< ref path="/api/context#bindings" lang="en" >}})||Define se a mensagem de erro ficará visível quando definido como `true`|
|onFocus|List&lt;Action&gt;||Define uma lista de [Ações]({{< ref path="/api/actions" lang="pt" >}}) que é executada quando o campo de texto **ganha foco**|
|onChange|List&lt;Action&gt;||Define uma lista de [Ações]({{< ref path="/api/actions" lang="pt" >}}) que é executada quando o campo de texto tem o **valor (value) modificado**|
|onBlur|List&lt;Action&gt;||Define uma lista de [Ações]({{< ref path="/api/actions" lang="pt" >}}) que é executada quando o campo de texto **perde o foco**| 
>>>>>>> a1e8cf44... updates the text input info, attribute details and table structure

{{% alert color="warning" %}}
Importante! O Beagle também oferece suporte para ações customizadas ou seja, se você listar alguma delas nos atributos acima, também precisará mapeá-las em seu front end. Você não precisa fazer isso para as ações padrão do Beagle. Verifique nossa seção de [Customizações]({{<ref path ="/resources/customization" lang = "en">}}) para saber como mapear `Ações Customizadas` no front end. Selecione o front que você deseja (Android, iOS ou WEB) a partir do link acima e verifique a seção Ações customizadas de acordo com cada segmento.{{% /alert %}}
### TextInputType

É um `ENUM` responsável por definir qual o tipo de entrada de texto.

| Tipo | Definição |
| :--- | :--- |
| DATE | Entrada de dados é uma data. |
| EMAIL | Entrada de dados é um email. |
| PASSWORD | Entrada de dados é uma senha. |
| NUMBER | Entrada de dados somente com números. |
| TEXT | Entrada de dados é um texto. |

## Como usar?

Segue abaixo um exemplo de entrada de texto do tipo senha:

{{< tabs id="T141" >}}
{{% tab name="JSON" %}}
<!-- json-playground:textInput.json
{
 "_beagleComponent_": "beagle:textInput",
 "value": "my value",
 "placeholder": "user@test.com.br",
 "type": "email",
 "onChange": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "Changing input"
      }
  ]
}
-->
{{% playground file="textInput.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
TextInput(
    value = "my value", 
    placeholder = "password", 
    type = TextInputType.PASSWORD, 
    styleId = "test.input.style",
    onChange = listOf(
        Alert(
            message = "Text value changed."
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
