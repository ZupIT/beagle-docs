---
title: Simple Form
weight: 355
description: Descrição do componente Simple Form
---

---

## O que é?

O`simpleForm` é responsável por renderizar um formulário em tela.

A sua estrutura é representada como mostrado abaixo: 

| Atributo | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| onSubmit | List &lt;[**Action**](../../acoes/)&gt; | ✓ | Array de ações que esse botão pode disparar quando um formulário é enviado |
| children | List&lt;[**ServerDrivenComponent**](../)&gt; | ✓ | Define a lista de componentes visuais que compoe o formulário \(server-driven\)  |
| context | [**ContextData**](https://docs.usebeagle.io/api/contexto) |   | Adiciona um contexto para o simple form |

## Como usar?

Ao criar um formulário é importante entender dois passos respectivamente

* A relação e atualização entre os campos
* E o que acontece quando o butão Submit é presionado. 

### Atualizando os campos

O componente TextInput é o campo em que o usuario ou o sistema preencherá com alguma informação, e é importante conhecer seus atributos para melhor utiliza-lo. Aqui utilizaremos um de seus elementos , que é a função **`onChange`**. 

{{% alert color="info" %}}
Para mais informações sobre esse componente vá até os detalhes do [TextInput](../../../../../ui/input).
{{% /alert %}}

#### OnChange

Essa função é parte do componente Text Input e observa as modificações feitas dentro do seu campo, ou seja, sempre que o valor for modificado, algo for digitado, apagado, etc, essa função é chamada e ativa uma **lista** de outras [**ações**](../../../../../acoes/) para acontecer sempre que o valor mudar. É nessa lista que adicionamos uma ação [SetContext](../../../../../acoes/setcontext) para definir o valor do [Contexto](../../../../../contexto/) do formulário e atualizar os valores que são mostrados no campo.

Veja abaixo como implementamos o nosso `SimpleForm`

{{< tabs id="T150" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_":"beagle:simpleForm",
  "context":{
    "id":"myContext",
    "value":""
  },
  "onSubmit":[
    {
      "_beagleAction_":"beagle:alert",
      "title":"Data submited",
      "message":"The password is @{myContext}"
    }
  ],
  "children":[
    {
      "_beagleComponent_":"beagle:textInput",
      "value":"@{myContext}",
      "placeholder":"Type in your password",
      "onChange":[
        {
          "_beagleAction_":"beagle:setContext",
          "contextId":"myContext",
          "value":"@{onChange.value}"
        }
      ]
    },
    {
      "_beagleComponent_":"beagle:button",
      "text":"Click to Submit",
      "onPress":[
        {
          "_beagleAction_":"beagle:submitForm"
        }
      ]
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```javascript
SimpleForm(
    context = ContextData(id = "myContext", value = ""),
    children = listOf(
        TextInput(
            value = "@{myContext}",
            placeholder = "Type in your password",
            onChange = listOf(
                SetContext(
                    contextId = "myContext",
                    value = "@{onChange.value}"
                )
            )
        ),
        Button(text = "Click to Submit", onPress = listOf(SubmitForm()))
    ),
    onSubmit = listOf(
        Alert(
            title = "Data submited", 
            message = "The password is " + "@{myContext}" 
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### onSubmit

É uma função do SimpleForm que executa uma lista de ações. Ele é cho quando o formuário for submetido

Para submeter um formulário é preciso utilizar a ação SubmitForm e para chama-la basta somente implementa-la em um [Botão](../../../ui/button) que seja parte do SimpleForm, ou seja, que esteja em sua lista de filhos.

Ao clicar nesse botão, o onSubmit é ativados e a lista de ações será executada. É essa lista de ações que definirá o que deve acontecer com as informações so formulario, se serão enviadas para um backend \(através da ação [sendRequest](../../../acoes/sendrequest)\), etc

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/simpleform.json)
