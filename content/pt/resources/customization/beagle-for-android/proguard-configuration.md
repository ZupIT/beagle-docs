---
title: Configuração do Proguard
weight: 117
description: >-
  Nesta seção, você encontra a descrição da configuração do ProGuard para o
  Beagle.
---

---

## Introdução

O Beagle contém regras mínimas necessárias para que seus próprios componentes internos funcionem sem a necessidade de os consumidores incorporarem os seus próprios. No entanto, se você estiver usando serialização reflexiva e R8 ou ProGuard, você deve adicionar regras de manutenção em seu arquivo de configuração Proguard para suas classes serializadas reflexivamente

## Exemplo

Para garantir isso, você deve anotar as classes que você utiliza dentro do seu componente com a anotação @BeagleJson:

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
    override fun buildView(rootView: RootView): TextView = TextView(rootView.getContext())
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
