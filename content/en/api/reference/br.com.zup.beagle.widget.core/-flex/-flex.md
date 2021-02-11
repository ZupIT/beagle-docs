+++
title = "Flex"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "../_index.md" >}}) / [Flex]({{< relref "_index.md" >}}) / [Flex]({{< relref "-flex.md" >}}) / 



# Flex  


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

alignContent
{{% /md %}}
</td>
<td>
{{% md %}}



Align content defines the distribution of lines along the cross-axis..


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

alignItems
{{% /md %}}
</td>
<td>
{{% md %}}



Align items describes how to align children along the cross axis of their container.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

alignSelf
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    Align self has the same options and effect as align items
    but instead of affecting the children within a container.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

basis
{{% /md %}}
</td>
<td>
{{% md %}}



is an axis-independent way of providing the default size of an item along the main axis.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

flex
{{% /md %}}
</td>
<td>
{{% md %}}



TODO.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

flexDirection
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    controls the direction in which the children of a node are laid out.
    This is also referred to as the main axis
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

flexWrap
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    set on containers and controls what happens when children
    overflow the size of the container along the main axis.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

grow
{{% /md %}}
</td>
<td>
{{% md %}}



describes how any space within a container should be distributed among its children along the main axis.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

justifyContent
{{% /md %}}
</td>
<td>
{{% md %}}



align children within the main axis of their container.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

shrink
{{% /md %}}
</td>
<td>
{{% md %}}



```java
    describes how to shrink children along the main axis in the case that
    the total size of the children overflow the size of the container on the main axis.
```



{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [Flex]({{< relref "-flex.md" >}})(flexDirection: [FlexDirection]({{< relref "../-flex-direction/_index.md" >}})?, flexWrap: [FlexWrap]({{< relref "../-flex-wrap/_index.md" >}})?, justifyContent: [JustifyContent]({{< relref "../-justify-content/_index.md" >}})?, alignItems: [AlignItems]({{< relref "../-align-items/_index.md" >}})?, alignSelf: [AlignSelf]({{< relref "../-align-self/_index.md" >}})?, alignContent: [AlignContent]({{< relref "../-align-content/_index.md" >}})?, basis: [UnitValue]({{< relref "../-unit-value/_index.md" >}})?, flex: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, grow: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, shrink: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?)</b></b>  



