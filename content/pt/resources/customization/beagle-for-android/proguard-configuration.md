---
title: Configuração do Proguard
weight: 117
description: >-
  Nesta seção, você encontra a descrição da configuração do ProGuard para o
  Beagle.
---

---

## Introdução

O Beagle contém regras mínimas necessárias para que seus componentes funcionem sem a necessidade da sua aplicação adicionar alguma regra no ProGuard / R8. No entanto nas anotações `RegisterWidget` e `RegisterAction` você precisa preencher elas com os seus respectivos nomes and caso tenha algum objeto dentro do seu componente você precisa anotar ele com `@BeagleJson`

## Exemplo

Para garantir que seu componente funcione normalmente com o ProGuard / R8 ativo, você deve anotar as classes utilizadas com a anotação `@BeagleJson:`

```kotlin


@BeagleJson
enum class MyType {
    PASSWORD, TEXT;
}

@BeagleJson
data class MyText(val textOne: String, val textTwo: String)

@RegisterWidget("myText")
data class Text(
    val text: Bind<String>,
    val type: MyType,
    val myText: MyText,
) : WidgetView() {

    override fun buildView(rootView: RootView): TextView
      = TextView(rootView.getContext())

}

@RegisterAction("CustomAndroidAction")
data class CustomAndroidAction(
    val value: String,
    val intValue: Int
) : Action {
    override fun execute(rootView: RootView, origin: View) { }
}

```

{{% alert color="info" %}}
Aqui, você também habilita o `minifyEnable` e `shrinkResources` no `buildType` declarando-os como _**true**_ para testar a ofuscação do ProGuard.
{{% /alert %}}

Para testar o ProGuard você deve ativá-lo na sua IDE, você pode usar o Android Studio, adicione a configuração listada abaixo:

```text
buildTypes {
    release {
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile(
            'proguard-android-optimize.txt'),
            'proguard-rules.pro'
    }
}
```
