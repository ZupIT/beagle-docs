+++
title = "withSubtype"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.data.serializer]({{< relref "../_index.md" >}}) / [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}}) / [withSubtype]({{< relref "with-subtype.md" >}}) / 



# withSubtype  


Returns a new factory that decodes instances of {@code subtype} . When an unknown type is found during encoding an [IllegalArgumentException](https://developer.android.com/reference/kotlin/java/lang/IllegalArgumentException.html) will be thrown. When an unknown label is found during decoding a JsonDataException will be thrown.

  
  
<b><b>open fun [withSubtype]({{< relref "with-subtype.md" >}})(subtype: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<Out [T]({{< relref "of.md" >}})>, label: [String](https://developer.android.com/reference/kotlin/java/lang/String.html)): [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}})<[T]({{< relref "of.md" >}})></b></b>  



