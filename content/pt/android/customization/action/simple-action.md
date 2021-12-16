
---
title: Ação Simples
weight: 104
description: Criando e executando uma ação customizada
---

**Tópicos abordados:**

- O que é uma ação customizada
- Como criar uma ação customizada
- Como Registrar uma ação customizada
- Como usar uma ação customizada

**Requisitos:**

- Ter um projeto com o Beagle Configurado (FRONT e BACKEND)

<<<<<<< HEAD
## O que é uma ação customizada?

Uma ação customizada é uma ação com um comportamento especifico criada pelo desenvolvedor. O Beagle possui uma serie de ações padrão, no entanto, pode haver algum uso que necessite de uma funcionalidade que não é padrão, como por exemplo, abrir uma interface de camera em um celular.

Caso queira saber mais sobre ações padronizadas do Beagle você pode verificar a sessão com os [**tipos de ações.**]({{< ref path="/api/actions/overview#tipos-de-ações" lang="pt">}}).

## Como criar uma ação customizada

Para criar uma ação personalizada é necessario:

Passo 1. Criar uma classe anotada com `@RegisterAction`, e implementar a interface `Action`, no FRONTEND e no BACKEND da sua aplicação;
Passo 2. Colocar o nome da ação por parâmetro da annotation para evitar possíveis problemas com o Proguard e certificar-se de que a ação tem o mesmo nome no BACKEND e no FRONTEND;
Passo 3. Depois disso, a interface solicitará que o método `execute` seja implementado (somente no FRONTEND);

O atributo  `value`  é um exemplo de parâmetro que pode ser declarado no construtor dessa classe, você pode usar quantos precisar. 
O exemplo a seguir mostra uma ação customizada para executar um **Toast** recebendo um texto no parâmetro `value`:

### Classe que representa uma ação no FRONTEND (Android)
=======
## **O que é uma ação customizada?**

Uma ação customizada é uma ação com um comportamento especifico criada para seu caso de uso. O Beagle possui uma série de ações padrão, no entanto, pode haver algum uso que necessite de uma funcionalidade que não é padrão, como por exemplo, abrir uma interface de câmera em um celular.

Para mais informações sobre ações padronizadas do Beagle, veja a seção [**Tipos de Ações.**]({{< ref path="/api/actions/overview#tipos-de-ações" lang="pt">}}).

## **Como criar uma ação customizada?**

Para criar uma ação personalizada é necessário:

**1.** Criar uma classe anotada com **`@RegisterAction`**, e implementar a interface `Action`, no **Frontend** e no **Backend** da sua aplicação;
**2.** Colocar o nome da ação por parâmetro da annotation para evitar possíveis problemas com o Proguard. Certifique que a ação tem o mesmo nome no **Frontend** e no **Backend**;
**3.** Implemente o método **`execute`** (somente no **Frontend**).

O atributo  **`value`**  é um exemplo de parâmetro que pode ser declarado no construtor dessa classe, você pode usar quantos precisar. 
O exemplo a seguir mostra uma ação customizada para executar um **Toast** recebendo um texto no parâmetro **`value`**:

### **Classe que representa uma ação no frontend (Android)**
>>>>>>> 040b5801bd83dce67c29d97d7f1ee8ac172ffcff

```kotlin
@RegisterAction("customActionAndroid")
data class CustomActionAndroid(
    val value: String
) : Action {
    override fun execute(rootView: RootView) {
        Toast.makeText(
            rootView.getContext(), 
            value, 
            Toast.LENGTH_SHORT
        ).show()
    }
}
```

<<<<<<< HEAD
### Classe que representa a ação no BACKEND
=======
### **Classe que representa a ação no Backend** ```
>>>>>>> 040b5801bd83dce67c29d97d7f1ee8ac172ffcff

```kotlin
@RegisterAction("customActionAndroid")
data class CustomActionAndroid(
    val value: String
) : Action
```
<<<<<<< HEAD

{{% alert color="warning" %}}
  Perceba que aqui a classe só precisa registrar o parametro que se deseja declarar no BACKEND e utilizar no FRONTEND. Nessa ação declaramos apenas um `value` que guardará a mensagem a ser utilizada no TOAST.
{{% /alert %}}

Abaixo temos o JSON que representa essa ação sendo chamada a partir do click de um botão:

```json
{
  "_beagleComponent_": "beagle:button",
  "text": "Beagle Button",
  "onPress": [
    {
      "_beagleAction_": "custom:myCustomAction",
      "value": "ParameterForAction."
    }
  ]
}
```

## Como registrar sua ação

- Para isso, anote a classe da sua ação com o `@RegisterAction("className")` onde `className` é o nome da sua classe

## Como usar uma ação customizada
=======

{{% alert color="warning" %}}
   A classe precisa registrar o parâmetro que deseja declarar no **Backend** e utilizar no **Frontend**. Nessa ação declare apenas um **`value`** para guardar a mensagem que o **Toast** irá utilizar.
{{% /alert %}}

Abaixo temos o JSON que representa essa ação sendo chamada a partir do click de um botão:

```json
{
  "_beagleComponent_": "beagle:button",
  "text": "Beagle Button",
  "onPress": [
    {
      "_beagleAction_": "custom:myCustomAction",
      "value": "ParameterForAction."
    }
  ]
}
```

## **Como registrar sua Ação**

- Para isso, anote a classe da sua ação com o `@RegisterAction("className")` onde `className` é o nome da sua classe

## **Como usar uma Ação customizada**
>>>>>>> 040b5801bd83dce67c29d97d7f1ee8ac172ffcff

Para utilizar uma ação customizada, declare-a em um componente que execute ações, como por exemplo, um `Botão`.
No exemplo abaixo, a ação é declarada no atributo **`onPress`** do botão:

```kotlin
Button(
   text = text,
   styleId = styleId,
   onPress = listOf(
      CustomActionAndroid("Sou uma ação customizada")
   )
)
```
