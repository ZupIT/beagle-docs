+++
title = "PolymorphicJsonAdapter"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.data.serializer]({{< relref "../../_index.md" >}}) / [PolymorphicJsonAdapterFactory]({{< relref "../_index.md" >}}) / [PolymorphicJsonAdapter]({{< relref "_index.md" >}}) / 



# PolymorphicJsonAdapter  
  <b>class [PolymorphicJsonAdapter]({{< relref "_index.md" >}}) : JsonAdapter<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)> </b>   


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

[PolymorphicJsonAdapter]({{< relref "-polymorphic-json-adapter.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>open fun [PolymorphicJsonAdapter]({{< relref "-polymorphic-json-adapter.md" >}})(labelKey: [String](https://developer.android.com/reference/kotlin/java/lang/String.html), labels: [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[String](https://developer.android.com/reference/kotlin/java/lang/String.html)>, subtypes: [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html)>, jsonAdapters: [List](https://developer.android.com/reference/kotlin/java/util/List.html)<JsonAdapter<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>, defaultValue: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), defaultValueSet: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))</b>   

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

failOnUnknown
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun failOnUnknown(): JsonAdapter<[T]({{< relref "../of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[fromJson]({{< relref "from-json.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open fun [fromJson]({{< relref "from-json.md" >}})(reader: JsonReader): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)</b>  
<b>abstract fun fromJson(p: JsonReader): [T]({{< relref "../of.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

fromJsonValue
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun fromJsonValue(value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [T]({{< relref "../of.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

indent
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open fun indent(indent: [String](https://developer.android.com/reference/kotlin/java/lang/String.html)): JsonAdapter<[T]({{< relref "../of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

isLenient
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open fun isLenient(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

lenient
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun lenient(): JsonAdapter<[T]({{< relref "../of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

nonNull
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun nonNull(): JsonAdapter<[T]({{< relref "../of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

nullSafe
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun nullSafe(): JsonAdapter<[T]({{< relref "../of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

serializeNulls
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun serializeNulls(): JsonAdapter<[T]({{< relref "../of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

toJson
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun toJson(value: [T]({{< relref "../of.md" >}})): [String](https://developer.android.com/reference/kotlin/java/lang/String.html)</b>  
<b>open fun [toJson]({{< relref "to-json.md" >}})(writer: JsonWriter, value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))</b>  
<b>abstract fun toJson(p: JsonWriter, p1: [T]({{< relref "../of.md" >}}))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

toJsonValue
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun toJsonValue(value: [T]({{< relref "../of.md" >}})): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toString]({{< relref "to-string.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open fun [toString]({{< relref "to-string.md" >}})(): [String](https://developer.android.com/reference/kotlin/java/lang/String.html)</b>  



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

[defaultValue]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/defaultValue/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>@[Nullable](https://developer.android.com/reference/kotlin/androidx/annotation/Nullable.html)()  
  
val [defaultValue]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/defaultValue/#/PointingToDeclaration/" >}}): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[defaultValueSet]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/defaultValueSet/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [defaultValueSet]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/defaultValueSet/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[jsonAdapters]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/jsonAdapters/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [jsonAdapters]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/jsonAdapters/#/PointingToDeclaration/" >}}): [List](https://developer.android.com/reference/kotlin/java/util/List.html)<JsonAdapter<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[labelKey]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/labelKey/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [labelKey]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/labelKey/#/PointingToDeclaration/" >}}): [String](https://developer.android.com/reference/kotlin/java/lang/String.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[labelKeyOptions]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/labelKeyOptions/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Single-element options containing the label's key only. 

<b>val [labelKeyOptions]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/labelKeyOptions/#/PointingToDeclaration/" >}}): JsonReader.Options</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[labels]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/labels/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [labels]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/labels/#/PointingToDeclaration/" >}}): [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[String](https://developer.android.com/reference/kotlin/java/lang/String.html)></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[subtypes]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/subtypes/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [subtypes]({{< relref "_index.md#br.com.zup.beagle.android.data.serializer/PolymorphicJsonAdapterFactory.PolymorphicJsonAdapter/subtypes/#/PointingToDeclaration/" >}}): [List](https://developer.android.com/reference/kotlin/java/util/List.html)<[Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html)></b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

