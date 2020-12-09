---
title: Deep Link Handler
weight: 119
description: >-
  Nesta seção, você encontra a descrição da classe DeepLinkHandler e detalhes
  dos métodos que ele implementa.
---

---

## Introdução

O **`DeepLinkHandler`** é uma **interface** que define como configurar a navegação entre uma **Server-Driven activity** e uma **activity nativa.** 

## Exemplo

### Criando um DeepLinkHandler

Para realizar essa configuração, você deve criar uma classe que implemente a interface `DeepLinkHandler` e que faça a anotação com **`@BeagleComponent`**, conforme listado abaixo:

```kotlin
@BeagleComponent
class AppDeepLinkHandler : DeepLinkHandler {
    override fun getDeepLinkIntent(
        rootView: RootView,
        path: String,
        data: Map<String, String>?,
        shouldResetApplication: Boolean
    ) = Intent("openThisActivity")
}
```

Feito isso, é necessário modificar o arquivo de manifesto do Android: 

1. **Passo 1:** Você deve adicionar um `intent-filter` na `Activity` para a qual deseja navegar.
2. **Passo 2:** Você deve adicionar uma `Action` que identificará essa `Activity`. O nome que usamos aqui foi "openThisActivity". 
3. **Passo 3:** Adicione uma tag `category` e a nomeie como `"android.intent.category.DEFAULT"`, assim como no exemplo abaixo. 

```markup
//AndroidManifest
<activity android:name=".activities.DeepLinkActivity">
    <intent-filter>
        <action android:name="navigate.myview"/>
        <category android:name="android.intent.category.DEFAULT"/>

    </intent-filter>
</activity>
```

Agora você só precisa chamar a [**Action Navigate**](../../../../api/acoes/navigate/) com o **método** [**OpenNativeRoute**](../../../../api/acoes/navigate/opennativeroute) como o exemplo abaixo:

```kotlin
//Widget used to navigate to a native activity
Button(
    text = "Click to navigate!",
    onPress = listOf(
        Navigate.OpenNativeRoute("openThisActivity")
    )
)
```
