+++
title = "TabItem"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [TabItem]({{< relref "_index.md" >}}) / [TabItem]({{< relref "-tab-item.md" >}}) / 



# TabItem  


## Parameters  
<table>
  
  
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

child
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    inflate a view on the TabView according to the Tab item clicked.
    It could receive any view (Server Driven).
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

icon
{{% /md %}}
</td>
<td>
{{% md %}}



```java
    display an icon image on the TabView component.
    If it is left as null or not declared it won't display any icon.
```



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

title
{{% /md %}}
</td>
<td>
{{% md %}}



displays the text on the TabView component. If it is null or not declared it won't display any text.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [TabItem]({{< relref "-tab-item.md" >}})(title: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, child: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), icon: [ImagePath.Local]({{< relref "../-image-path/-local/_index.md" >}})?)</b></b>  



