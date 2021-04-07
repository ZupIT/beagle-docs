---
title: Beagle Activity customizada
weight: 111
description: >-
  Nesta seção, você encontra de como usar o BeagleActivity para customizar sua
  server-driven activity.
---

---

## Introdução

O Beagle fornece uma `Activity` default para gerenciar as `Activities` geradas via server-driven. Porém você pode criar uma ou mais `Activities` que herdem de `BeagleActivity` com `@BeagleComponent` personalizadas de acordo com os fluxos server-driven da sua aplicação. Sua estrutura funciona parecida com o Android Activity.

Para que o Beagle interprete essa classe como uma `BeagleActivity`, é necessário usar a anotação **`@BeagleComponent`** e implementar seus respectivos métodos.

## O que é customizável?

Quando se trata do Beagle Activity, é possível customizar alguns componentes:

1. Layout xml
2. Toolbar
3. Tratamento de erros
4. ProgressBar

Confira abaixo um exemplo de código para uma Custom Beagle Activity:

```kotlin
@RegisterController
class SampleServerDrivenActivity : BeagleActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_server_driven)
    }

    override fun getToolbar(): Toolbar {
        TODO("Not yet implemented")
    }

    override fun getServerDrivenContainerId(): Int {
        TODO("Not yet implemented")
    }

    override fun onServerDrivenContainerStateChanged(state: ServerDrivenState) {
        TODO("Not yet implemented")
    }

}
```

### 1. Layout xml

O arquivo xml é o local onde você armazena o pacote de componentes da tela, de forma semelhante ao que você faz com o Android Activity.

Mesmo usando o Beagle para enviar a estrutura da tela pelo server-driven, é importante criar este arquivo xml para receber o conteúdo.

Segue abaixo um exemplo de um layout xml:

```kotlin
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/root_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <FrameLayout
            android:id="@+id/server_driven_container"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

        <ProgressBar
            android:id="@+id/progress_bar"
            android:layout_width="42dp"
            android:layout_height="42dp"
            android:layout_gravity="center"
            android:visibility="gone"/>

    </FrameLayout>

</LinearLayout>
```

Para o conteúdo server-driven ser exibido é necessário um frame layout. Sendo assim, o método `getServerDrivenContainerId()` precisa retornar o id do frame layout.

### 2. Toolbar

Você pode criar uma Toolbar e usá-la em sua activity através do método `getToolbar()` . Isso permite retornar a Toolbar desejada.

```kotlin
override fun getToolbar(): Toolbar = findViewById<Toolbar>(R.id.toolbar)
```

### 3. Tratamento de erros

Você pode observar os estados de uma server-driven activity e tratar os erros a partir da função [`onServerDrivenContainerStateChanged()`]({{< ref path="/resources/customization/beagle-for-android/loading-and-errors-treatment" lang="pt" >}}). Esssa função tem como parametro o estado da server-driven activity, e quando ocorre algum erro no carregamento da activity, o estado `ServerDrivenState.Error` é recebido por essa função.

```kotlin
override fun onServerDrivenContainerStateChanged(state: ServerDrivenState) {
     if (state is ServerDrivenState.Error) {
          //Your error's treatment
     }
}
```

### 4. ProgressBar

Like  you handled errors, you can check if the server-driven container status is `Started` or` Finished` and thus define the visibility of a *ProgressBar*. When the activity loading starts, the `onServerDrivenContainerStateChanged` function receives the` ServerDrivenState.Started` parameter (which represents the activity status). Likewise, when the loading ends without errors, the `ServerDrivenState.Finished` parameter is received. You can check below how we can use these two states to change the progress bar visibility.

```kotlin
override fun onServerDrivenContainerStateChanged(state: ServerDrivenState) {
    when (state) {
        is ServerDrivenState.Started -> {
            progressBar.visibility = View.VISIBLE
        }

        is ServerDrivenState.Finished -> {
            progressBar.visibility = View.GONE
        }
}
```

{{% alert color="info" %}}
É possível registrar quantas activities você precisar, porém você deve defini-las usando a anotação `@RegisterController(id = "ACTIVITY_IDENTIFIER")`.  
Esse id é o que o BFF irá usar pra identificar qual activity usar.
{{% /alert %}}
