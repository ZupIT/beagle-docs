+++
title = "PolymorphicJsonAdapterFactory"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.data.serializer]({{< relref "../_index.md" >}}) / [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}}) / 



# PolymorphicJsonAdapterFactory  
  



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



If you want to specify a custom unknown fallback for decoding, you can do so via [withDefaultValue]({{< relref "with-default-value.md" >}}) . This instance should be immutable, as it is shared.



<b>class [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}})<[T]({{< relref "_index.md" >}})> : JsonAdapter.Factory</b>   


## Constructors  
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

[PolymorphicJsonAdapterFactory]({{< relref "-polymorphic-json-adapter-factory.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>open fun [PolymorphicJsonAdapterFactory]({{< relref "-polymorphic-json-adapter-factory.md" >}})(baseType: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[T]({{< relref "of.md" >}})>, baseSubTypes: [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<Out [T]({{< relref "of.md" >}})>>, labelKey: [String](https://developer.android.com/reference/kotlin/java/lang/String.html), labels: [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[String](https://developer.android.com/reference/kotlin/java/lang/String.html)>, subtypes: [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html)>, defaultValue: [T]({{< relref "of.md" >}}), defaultValueSet: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>


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

[PolymorphicJsonAdapter]({{< relref "-polymorphic-json-adapter/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [PolymorphicJsonAdapter]({{< relref "-polymorphic-json-adapter/_index.md" >}}) : JsonAdapter<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)> </b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Functions  
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

[create]({{< relref "create.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open fun [create]({{< relref "create.md" >}})(type: [Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html), annotations: [Set](https://developer.android.com/reference/kotlin/java/util/Set.html)<Out [Annotation](https://developer.android.com/reference/kotlin/java/lang/annotation/Annotation.html)>, moshi: Moshi): JsonAdapter<Out [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)></b>  
<b>abstract fun create(p: [Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html), p1: [Set](https://developer.android.com/reference/kotlin/java/util/Set.html)<Out [Annotation](https://developer.android.com/reference/kotlin/java/lang/annotation/Annotation.html)>, p2: Moshi): JsonAdapter<Out [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[of]({{< relref "of.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The base type for which this factory will create adapters. Cannot be Object.

  
  
<b>open fun <[T]({{< relref "of.md" >}})> [of]({{< relref "of.md" >}})(baseType: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[T]({{< relref "of.md" >}})>, labelKey: [String](https://developer.android.com/reference/kotlin/java/lang/String.html)): [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}})<[T]({{< relref "of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[withBaseSubType]({{< relref "with-base-sub-type.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Returns a new factory that decodes sub types of {@code baseSubType} . Use this method to decode sub types of {@code baseType} and your {@code subtype} . inherits from {@code baseSubType} .

  
  
<b>open fun [withBaseSubType]({{< relref "with-base-sub-type.md" >}})(baseSubType: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<Out [T]({{< relref "of.md" >}})>): [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}})<[T]({{< relref "of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[withDefaultValue]({{< relref "with-default-value.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Returns a new factory that with default to {@code defaultValue} upon decoding of unrecognized labels. The default value should be immutable.

  
  
<b>open fun [withDefaultValue]({{< relref "with-default-value.md" >}})(defaultValue: [T]({{< relref "of.md" >}})): [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}})<[T]({{< relref "of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[withSubtype]({{< relref "with-subtype.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Returns a new factory that decodes instances of {@code subtype} . When an unknown type is found during encoding an [IllegalArgumentException](https://developer.android.com/reference/kotlin/java/lang/IllegalArgumentException.html) will be thrown. When an unknown label is found during decoding a JsonDataException will be thrown.

  
  
<b>open fun [withSubtype]({{< relref "with-subtype.md" >}})(subtype: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<Out [T]({{< relref "of.md" >}})>, label: [String](https://developer.android.com/reference/kotlin/java/lang/String.html)): [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}})<[T]({{< relref "of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Properties  
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

[baseSubTypes]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/baseSubTypes/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [baseSubTypes]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/baseSubTypes/#/PointingToDeclaration/" >}}): [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<Out [T]({{< relref "of.md" >}})>></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[baseType]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/baseType/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [baseType]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/baseType/#/PointingToDeclaration/" >}}): [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[T]({{< relref "of.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[defaultValue]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/defaultValue/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>@[Nullable](https://developer.android.com/reference/kotlin/androidx/annotation/Nullable.html)()  
  
val [defaultValue]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/defaultValue/#/PointingToDeclaration/" >}}): [T]({{< relref "of.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[defaultValueSet]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/defaultValueSet/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [defaultValueSet]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/defaultValueSet/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[labelKey]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/labelKey/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [labelKey]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/labelKey/#/PointingToDeclaration/" >}}): [String](https://developer.android.com/reference/kotlin/java/lang/String.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[labels]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/labels/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [labels]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/labels/#/PointingToDeclaration/" >}}): [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[String](https://developer.android.com/reference/kotlin/java/lang/String.html)></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[subtypes]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/subtypes/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [subtypes]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory/subtypes/#/PointingToDeclaration/" >}}): [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html)></b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

