---
title: Safe Area
weight: 387
description: Descrição da Safe Area e seus componentes
---

---

{{% alert color="warning" %}}
Esse atributo é exclusivo da plataforma iOS. 
{{% /alert %}}

## **O que é?**

Classe que auxilia o posicionamento dos componentes na área da tela. `Safe Area` garante que os elementos que compõem sua tela estejam visíveis para o usuário.

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| top | Boolean |   | Habilita a constraint de _`SafeArea`_ apenas no topo da tela. |
| bottom | Boolean |   | Habilita a constraint de_`SafeArea`_ apenas na parte de baixo da tela. |
| leading | Boolean |   | Habilita a constraint de_`SafeArea`_ apenas à esquerda da tela. |
| trailing | Boolean |   | Habilita a constraint_`SafeArea`_ apenas à direita da tela. |

## Como usar?

{{< tabs name="T176" >}}
{{% tab name="JSON" %}}
```kotlin
{
   "_beagleComponent_":"beagle:screenComponent",
   "safeArea":{
      "top":true,
      "leading":true,
      "bottom":true,
      "trailing":true
   },
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"Some Text"
         }
      ]
   }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
        child = Container(
            children = listOf(
                Text("Some Text")
            )
        ),
        safeArea = SafeArea(
            top = true,
            leading = true,
            trailing = true,
            bottom = true
        )
    )
```
{{% /tab %}}
{{< /tabs >}}
