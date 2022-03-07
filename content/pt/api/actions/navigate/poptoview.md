---
title: PopToView
weight: 70
description: Descrição da ação PopToView e seus atributos
---

---

## O que é? <a id="definicao"></a>

A ação ``PopToView`` faz a navegação para uma tela anterior a tela atual, que esteja na mesma pilha de telas. Ao realizar a ação, qualquer tela posterior a tela para a qual se navegou será destruída. Por exemplo, se a aplicação exibe uma tela que é a ``terceira`` tela em uma pilha, ao navegar para a primeira, a segunda e terceira telas serão destruídas.

A estrutura da ``PopToView`` é:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| route | ​String | ✓ | Rota de alguma tela que está na pilha. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Contexto salvo na tela destino. |

## Como usar?

Para testar, iremos utilizar três telas:

1. A primeira tela será a tela inicial e a primeira da pilha. O endpoint dessa tela deverá ser **"/firstscreen"**.  
2. A segunda deverá ter como endpoint **"/secondscreen"** pois essa será URL escolhida para a navegação do botão da tela inicial e, por isso, esse endpoint deverá retornar a tela 2, segunda tela na pilha.  
3. A terceira tem como endpoint **"/thirdscreen"**, pois essa será a URL escolhida para a navegação do botão da tela 2 e, por isso, esse endpoint deverá retornar a tela 3. É na tela 3 que a ação ``PopToView`` será executa com o clique de um botão. A url listada na ação PopToView deverá ser **"/firstscreen"**

A seguir listamos os códigos das telas de teste:
{{% alert color="success" %}}
  Os exemplos abaixo requerem que você crie essas telas em um Backend local. No entanto, é possível testa-las sem um Backend. Para isso basta que você pegue os JSONS das telas listadas e utilize alguma ferramente de MOCK RESPONSE online. Se fizer isso, basta mudar os endereços das URLs na ações de navegação para os endereços "mockados"
{{% /alert %}}

### Tela inicial

{{< tabs id="T116" >}}
{{% tab name="JSON" %}}
<!-- json-playground:firstScreenNavigate.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "First Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me!",
      "onPress" : [ {
        "_beagleAction_" : "beagle:pushView",
        "route" : {
          "url" : "secondScreenNavigate.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->
{{% playground file="firstScreenNavigate.json" language="pt" %}}
{{% /tab %}}

{{% tab name="KotlinDSL" %}}

```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "First Screen on Stack"
            ),
            Button(
                text = "Click me!",
                onPress = listOf(
                    Navigate.PushView(
                        Route.Remote(
                            url = "/secondscreen"
                        )
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

#### Tela 2

{{< tabs id="T117" >}}
{{% tab name="JSON" %}}
<!-- json-playground:secondScreenNavigate.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Second Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me!",
      "onPress" : [ {
        "_beagleAction_" : "beagle:pushView",
        "route" : {
          "url" : "popToView.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->
{{% playground file="secondScreenNavigate.json" language="pt" %}}
{{% /tab %}}

{{% tab name="KotlinDSL" %}}

```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "Second Screen on Stack"
            ),
            Button(
                text = "Click me!",
                onPress = listOf(
                    Navigate.PushView(
                        Route.Remote(
                            url = "/thirdscreen"
                        )
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

#### Tela 3

{{< tabs id="T118" >}}
{{% tab name="JSON" %}}
<!-- json-playground:popToView.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Third Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me to go to first screen",
      "onPress" : [ {
        "_beagleAction_" : "beagle:popToView",
        "route" : "firstScreenNavigate.json"
      } ]
    } ]
  }
}
-->
{{% playground file="popToView.json" language="pt" %}}
{{% /tab %}}
{{% tab name="KotlinDSL" %}}

```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "Third Screen on Stack"
            ),
            Button(
                text = "Click me to go to first screen",
                onPress = listOf(
                    Navigate.PopToView(
                      route = "/firstscreen"
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
