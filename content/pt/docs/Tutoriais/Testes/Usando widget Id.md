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

O método Set Id é usado quando você precisa setar um Id no [**widget**](/pt/docs/api/widget) fornecido para o [**BFF**](/pt/docs/key-concepts#backend-for-frontend). Para fazer isso, você precisa chamar esse método no widget que você quer o Id setado durante o momento que você está criando o seu widget. 

Veja como funciona abaixo: 

```kotlin
Text(text = "Text with id").setId("myTextId")
```

## Get Id

No Get Id, você tem diferentes maneiras de setar de acordo com a sua plataforma frontend. 

Veja abaixo: 

{{< tabs id="T104" >}}
{{% tab name="Android" %}}
No Android para obter um Widget Id você precisa chamar a `String.toAndroidId()` e esse método retornará um Id para você usar onde precisar. 

Veja como funciona, abaixo: 

```kotlin
"myTextId".toAndroidId()
```
{{% /tab %}}

{{% tab name="iOS" %}}
No iOS, o Id é registrado no `accessibilityIdentifier`. Com isso, para usá-lo, você precisa usar o mesmo valor que está no `setId()`.

Veja como funciona, abaixo: 

```swift
"myTextId"
```
{{% /tab %}}

{{% tab name="Web" %}}
Na Web, existe uma configuração default que cada componente renderizado pelo Beagle recebe o 'data-beagle-id' que está em html, se o backend não setar o Id. 

Se você quiser recuperar, use o javascript e html rodando o comando abaixo: 

```javascript
element.getAttribute(widgetId)
```

O valor do Widget Id será personalizado, se o backend setar o Id \(como no exemplo, "myTextId"\) ou ele será um valor default  \('data-beagle-id'\).
{{% /tab %}}
{{< /tabs >}}
