---
title: Textinput
weight: 327
description: Descrição do componente InputText e seus atributos
---

---

## O que é?

O Input é um componente responsável por exibir uma área de texto editável para o usuário. Esses campos de textos são usados para coletar entradas que um usuário insere utilizando o teclado. 

{{% alert color="danger" %}}
O atributo `hidden` foi depreciado na versão 1.6.0 do Beagle e será removido em uma versão futura. Utilize o atributo `display` da propriedade `style` em seu lugar.
{{% /alert %}}

A sua estrutura é representada como mostrado abaixo: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Atributo</strong>
      </th>
      <th style="text-align:left"><strong>Tipo</strong>
      </th>
      <th style="text-align:center"><strong>Obrigatório</strong></th>
      <th style="text-align:left"><strong>Defini&#xE7;&#xE3;o</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">value</td>
      <td style="text-align:left">
        String ou
        <a href="../../contexto/#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Item referente ao valor de entrada que ser&#xE1; digitado na &#xE1;rea
        de texto edit&#xE1;vel do componente Text Input.</td>
    </tr>
    <tr>
      <td style="text-align:left">placeholder</td>
      <td style="text-align:left">
        String ou
        <a href="../../contexto/#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Texto que &#xE9; exibido quando nada foi inserido no campo de texto edit&#xE1;vel.</td>
    </tr>
    <tr>
      <td style="text-align:left">disabled</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Propriedade para habilitar ou desabilitar o campo.</td>
    </tr>
    <tr>
      <td style="text-align:left">readOnly</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Propriedade para determinar se o campo ser&#xE1; edit&#xE1;vel ou somente
        leitura.</td>
    </tr>
    <tr>
      <td style="text-align:left">hidden</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Propriedade que determina se o campo ser&#xE1; escondido. O atributo `hidden` foi depreciado na versão 1.6.0 do Beagle e será removido em uma versão futura. Utilize o atributo `display` da propriedade `style` em seu lugar.</td>
    </tr>
    <tr>
      <td style="text-align:left">type</td>
      <td style="text-align:left">TextInputType ou <a href="../../contexto/#bindings"><strong>Binding</strong></a></td>
      <td
      style="text-align:center"></td>
        <td style="text-align:left">Esse atributo identifica o tipo de texto que iremos receber na &#xE1;rea
          de texto edit&#xE1;vel. No Android e no iOS, esse campo tamb&#xE9;m atribui
          o tipo de teclado que ser&#xE1; exibido pro usu&#xE1;rio.</td>
    </tr>
    <tr>
      <td style="text-align:left">styleId</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Recebe uma chave que &#xE9; registrada no Design System de cada plataforma
        para fazer customiza&#xE7;&#xE3;o no componente.</td>
    </tr>
    <tr>
      <td style="text-align:left">error</td>
      <td style="text-align:left">
      <p>String ou</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="../../contexto/#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Esse atributo mostra se o TextInput possui um erro de acordo com uma entrada.</td>
    </tr>
    <tr>
      <td style="text-align:left">showError</td>
      <td style="text-align:left">
      <p>Boolean ou</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="../../contexto/#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Propriedade que identifica se o a String de erro deve ser escondida ou não.</td>
    </tr>
    <tr>
      <td style="text-align:left">onChange</td>
      <td style="text-align:left">List &lt;<a href="../../acoes/"><strong>Action</strong></a>&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">
        Array de a&#xE7;&#xF5;es que esse campo <strong>pode disparar quando seu valor for alterado</strong>.
          &#xC9; poss&#xED;vel definir uma <a href="../../../features/criacao-de-novas-acoes"><strong>a&#xE7;&#xE3;o customizada</strong></a><strong> </strong>ou
          qualquer a&#xE7;&#xE3;o j&#xE1; dispon&#xED;vel na interface, como por
          exemplo uma a&#xE7;&#xE3;o que mostra uma mensagem de alerta(<a href="../../acoes/alert"><strong>Alert</strong></a>).
        Este atributo &#xE9; opcional, mas se uma a&#xE7;&#xE3;o for definida
          aqui ela precisa estar configurada no frontend.
      </td>
    </tr>
    <tr>
      <td style="text-align:left">onBlur</td>
      <td style="text-align:left">List &lt;<a href="../../acoes/"><strong>Action</strong></a>&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">
        Array de a&#xE7;&#xF5;es que esse campo <strong>pode disparar quando seu foco &#xE9; retirado</strong>.
          &#xC9; poss&#xED;vel definir uma <a href="../../../features/criacao-de-novas-acoes"><strong>a&#xE7;&#xE3;o customizada</strong></a><strong> </strong>ou
          qualquer a&#xE7;&#xE3;o j&#xE1; dispon&#xED;vel na interface como, por
          exemplo, uma a&#xE7;&#xE3;o que mostra uma mensagem de alerta(<a href="../../acoes/alert"><strong>Alert</strong></a>).
        Este atributo &#xE9; opcional, mas se uma a&#xE7;&#xE3;o for definida
          aqui ela precisa estar configurada no frontend.
      </td>
    </tr>
    <tr>
      <td style="text-align:left">onFocus</td>
      <td style="text-align:left">List &lt;<a href="../../acoes/"><strong>Action</strong></a>&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">
        Array de a&#xE7;&#xF5;es que esse campo pode disparar quando &#xE9; colocado
          em foco. &#xC9; poss&#xED;vel definir uma <a href="../../../features/criacao-de-novas-acoes"><strong>a&#xE7;&#xE3;o customizada</strong></a><strong> </strong>ou
          qualquer a&#xE7;&#xE3;o j&#xE1; dispon&#xED;vel na interface como, por exemplo, uma a&#xE7;&#xE3;o que mostra uma mensagem de alerta(<a href="../../acoes/alert"><strong>Alert</strong></a>).
        Este atributo &#xE9; opcional, mas se uma a&#xE7;&#xE3;o for definida
          aqui ela precisa estar configurada no frontend.
      </td>
    </tr>
  </tbody>
</table>

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
