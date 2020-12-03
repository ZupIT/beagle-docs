---
title: Safe Area
<<<<<<< HEAD
weight: 355
description: Descrição da Safe Area e seus componentes
=======
weight: 372
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
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
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
