---
title: Usando widget Id
weight: 241
description: Como set e obter um id em um widget
---

---

Para testar sua aplicação, você precisa de um Widget ID. Para fazer isso, Beagle oferece alguns métodos **set** e **get.**

Nessa seção, você verá dois específicos:

1. **Set Id**
2. **Get Id**

## Set Id

O método Set Id é usado quando você precisa setar um Id no [**widget**]({{< ref path="/api/components/widget" lang="pt" >}}) fornecido para o [**BFF**]({{< ref path="/key-concepts#backend-for-frontend" lang="pt" >}}). Para fazer isso, você precisa chamar esse método no widget que você quer o Id setado durante o momento que você está criando o seu widget.

Veja como funciona abaixo:

```kotlin
Text(text = "Text with id").setId("myTextId")
```

## Get Id

No Get Id, você tem diferentes maneiras de setar de acordo com a sua plataforma frontend. Veja abaixo:

No iOS, o Id é registrado no `accessibilityIdentifier`. Com isso, para usá-lo, você precisa usar o mesmo valor que está no `setId()`.

Veja como funciona, abaixo:

```swift
"myTextId"
```