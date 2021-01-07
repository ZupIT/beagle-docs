+++
title = "br.com.zup.beagle.android.data.serializer"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.data.serializer"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.data.serializer]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.data.serializer  


## Types  
<table>
  
<thead>
<tr>
<th>
Name  
</th>
<th>
Summary  
</th>
  
</tr>
</thead>
<tbody>
<tr>
<td>
{{% md %}}

[PolymorphicJsonAdapterFactory]({{< relref "-polymorphic-json-adapter-factory/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}





A JsonAdapter factory for objects that include type information in the JSON. When decoding JSON Moshi uses this type information to determine which class to decode to. When encoding Moshi uses the object’s class to determine what type information to include. 



Suppose we have an interface, its implementations, and a class that uses them: 

```java
{@code * * interface HandOfCards { * } * * class BlackjackHand extends HandOfCards { * Card hidden_card; * Listvisible_cards;
 *   }
 *
 *   class HoldemHand extends HandOfCards {
 *     Set
```


We want to decode the following JSON into the player model above: 

```java
{@code * * { * "name": "Jesse", * "hand": { * "hand_type": "blackjack", * "hidden_card": "9D", * "visible_cards": ["8H", "4C"] * } * } * }
```


Left unconfigured, Moshi would incorrectly attempt to decode the hand object to the abstract {@code HandOfCards} interface. We configure it to use the appropriate subtype instead: 

```java
{@code * * Moshi moshi = new Moshi.Builder() * .add(PolymorphicJsonAdapterFactory.of(HandOfCards.class, "hand_type") * .withSubtype(BlackjackHand.class, "blackjack") * .withSubtype(HoldemHand.class, "holdem")) * .build(); * }
```


This class imposes strict requirements on its use: 

<ul><li>Base types may be classes or interfaces.</li><li>Subtypes must cryptography as JSON objects.</li><li>Type information must be in the cryptography object. Each message must have a type label like {@code hand_type} whose value is a string like {@code blackjack} that identifies which type to use.</li><li>Each type identifier must be unique.</li></ul>

For best performance type information should be the first field in the object. Otherwise Moshi must reprocess the JSON stream once it knows the object's type. 



If an unknown subtype is encountered when decoding, this will throw a . If an unknown type is encountered when encoding, this will throw an . If the same subtype has multiple labels the first one is used when encoding. 



If you want to specify a custom unknown fallback for decoding, you can do so via [withDefaultValue]({{< relref "-polymorphic-json-adapter-factory/with-default-value.md" >}}) . This instance should be immutable, as it is shared.



  
  
<b>class [PolymorphicJsonAdapterFactory]({{< relref "-polymorphic-json-adapter-factory/_index.md" >}})<[T]({{< relref "-polymorphic-json-adapter-factory/_index.md" >}})> : JsonAdapter.Factory</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

