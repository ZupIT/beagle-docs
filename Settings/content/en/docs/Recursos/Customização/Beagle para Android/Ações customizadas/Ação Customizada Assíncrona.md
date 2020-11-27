---
title: Ação Customizada Assíncrona
weight: 106
description: Criando uma ação customizada assíncrona
---

---

Para criar uma ação customizada no Beagle cuja execução seja assíncrona como o consumo de uma API ou acesso a um banco de dados, basta criar uma `action` normalmente como o exemplo anterior detalhou e implementar a interface `AsyncAction`.

Com a action criada, basta vincular a interface `AsyncAction` e delegar sua implementação para a classe `AsyncActionImpl` que o Beagle já fornece. 

{% hint style="info" %}
Recomendamos o uso dessa classe, pois ela implementa os `onActionStarted` e `onActionFinished` expondo seu estado de forma reativa e padronizado no framework.
{% endhint %}

{% code title="CustomAndroidAction.kt" %}
```kotlin
@RegisterAction
data class CustomActionAndroid(
    val value: String
) : Action, AsyncAction by AsyncActionImpl() {
    override fun execute(rootView: RootView) {
        // Do asynchronous work
    }
}
```
{% endcode %}

Agora, com a action pronta para executar de forma assincrona, temos que **OBRIGATORIAMENTE** notificar quando sua execução está concluída através do método `onActionFinished`.

{% code title="CustomAndroidAction.kt" %}
```kotlin
@RegisterAction
data class CustomActionAndroid(
    val value: String
) : Action, AsyncAction by AsyncActionImpl() {
    override fun execute(rootView: RootView) {
        // Do asynchronous work
        onActionFinished()
    }
}
```
{% endcode %}

Pronto! Sua action agora está configurada para executar qualquer trabalho de forma assíncrona!

{% hint style="danger" %}
É obrigatória a implementação da interface AsyncAction para toda ação customizada que for inserida dentro do componente [ListView](https://docs.usebeagle.io/v/v1.0-pt/api/componentes/layout/listview).
{% endhint %}
