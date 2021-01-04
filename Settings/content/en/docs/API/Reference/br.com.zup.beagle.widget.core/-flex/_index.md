+++
title = "Flex"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "../_index.md" >}}) / [Flex]({{< relref "_index.md" >}}) / 



# Flex  
  

The flex is a Layout component that will handle your visual component positioning at the screen. Internally Beagle uses a Layout engine called Yoga Layout to position elements on screen. In fact it will use the HTML Flexbox properties applied on the visual components and its children.

<b>data class [Flex]({{< relref "_index.md" >}})(**flexDirection**: [FlexDirection]({{< relref "../-flex-direction/_index.md" >}})?, **flexWrap**: [FlexWrap]({{< relref "../-flex-wrap/_index.md" >}})?, **justifyContent**: [JustifyContent]({{< relref "../-justify-content/_index.md" >}})?, **alignItems**: [AlignItems]({{< relref "../-align-items/_index.md" >}})?, **alignSelf**: [AlignSelf]({{< relref "../-align-self/_index.md" >}})?, **alignContent**: [AlignContent]({{< relref "../-align-content/_index.md" >}})?, **basis**: [UnitValue]({{< relref "../-unit-value/_index.md" >}})?, **flex**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, **grow**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, **shrink**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?)</b>   


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

[Flex]({{< relref "-flex.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    controls the direction in which the children of a node are laid out.
    This is also referred to as the main axis
```
<b>fun [Flex]({{< relref "-flex.md" >}})(flexDirection: [FlexDirection]({{< relref "../-flex-direction/_index.md" >}})?, flexWrap: [FlexWrap]({{< relref "../-flex-wrap/_index.md" >}})?, justifyContent: [JustifyContent]({{< relref "../-justify-content/_index.md" >}})?, alignItems: [AlignItems]({{< relref "../-align-items/_index.md" >}})?, alignSelf: [AlignSelf]({{< relref "../-align-self/_index.md" >}})?, alignContent: [AlignContent]({{< relref "../-align-content/_index.md" >}})?, basis: [UnitValue]({{< relref "../-unit-value/_index.md" >}})?, flex: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, grow: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, shrink: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?)</b>   

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

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [FlexDirection]({{< relref "../-flex-direction/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component10]({{< relref "component10.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component10]({{< relref "component10.md" >}})(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component2]({{< relref "component2.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [FlexWrap]({{< relref "../-flex-wrap/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component3]({{< relref "component3.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [JustifyContent]({{< relref "../-justify-content/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component4]({{< relref "component4.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [AlignItems]({{< relref "../-align-items/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component5]({{< relref "component5.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [AlignSelf]({{< relref "../-align-self/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component6]({{< relref "component6.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component6]({{< relref "component6.md" >}})(): [AlignContent]({{< relref "../-align-content/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component7]({{< relref "component7.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component7]({{< relref "component7.md" >}})(): [UnitValue]({{< relref "../-unit-value/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component8]({{< relref "component8.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component8]({{< relref "component8.md" >}})(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component9]({{< relref "component9.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component9]({{< relref "component9.md" >}})(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[copy]({{< relref "copy.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [copy]({{< relref "copy.md" >}})(flexDirection: [FlexDirection]({{< relref "../-flex-direction/_index.md" >}})?, flexWrap: [FlexWrap]({{< relref "../-flex-wrap/_index.md" >}})?, justifyContent: [JustifyContent]({{< relref "../-justify-content/_index.md" >}})?, alignItems: [AlignItems]({{< relref "../-align-items/_index.md" >}})?, alignSelf: [AlignSelf]({{< relref "../-align-self/_index.md" >}})?, alignContent: [AlignContent]({{< relref "../-align-content/_index.md" >}})?, basis: [UnitValue]({{< relref "../-unit-value/_index.md" >}})?, flex: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, grow: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, shrink: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?): [Flex]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open operator override fun [equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html)(other: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/hash-code.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/hash-code.html)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

[alignContent]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/alignContent/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align content defines the distribution of lines along the cross-axis..

<b>val [alignContent]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/alignContent/#/PointingToDeclaration/" >}}): [AlignContent]({{< relref "../-align-content/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[alignItems]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/alignItems/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align items describes how to align children along the cross axis of their container.

<b>val [alignItems]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/alignItems/#/PointingToDeclaration/" >}}): [AlignItems]({{< relref "../-align-items/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[alignSelf]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/alignSelf/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    Align self has the same options and effect as align items
    but instead of affecting the children within a container.
```
<b>val [alignSelf]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/alignSelf/#/PointingToDeclaration/" >}}): [AlignSelf]({{< relref "../-align-self/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[basis]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/basis/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

is an axis-independent way of providing the default size of an item along the main axis.

<b>val [basis]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/basis/#/PointingToDeclaration/" >}}): [UnitValue]({{< relref "../-unit-value/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[flex]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/flex/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

TODO.

<b>val [flex]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/flex/#/PointingToDeclaration/" >}}): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[flexDirection]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/flexDirection/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    controls the direction in which the children of a node are laid out.
    This is also referred to as the main axis
```
<b>val [flexDirection]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/flexDirection/#/PointingToDeclaration/" >}}): [FlexDirection]({{< relref "../-flex-direction/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[flexWrap]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/flexWrap/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    set on containers and controls what happens when children
    overflow the size of the container along the main axis.
```
<b>val [flexWrap]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/flexWrap/#/PointingToDeclaration/" >}}): [FlexWrap]({{< relref "../-flex-wrap/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[grow]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/grow/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

describes how any space within a container should be distributed among its children along the main axis.

<b>val [grow]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/grow/#/PointingToDeclaration/" >}}): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[justifyContent]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/justifyContent/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

align children within the main axis of their container.

<b>val [justifyContent]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/justifyContent/#/PointingToDeclaration/" >}}): [JustifyContent]({{< relref "../-justify-content/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[shrink]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/shrink/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

```java
    describes how to shrink children along the main axis in the case that
    the total size of the children overflow the size of the container on the main axis.
```


<b>val [shrink]({{< relref "_index.md#br.com.zup.beagle.widget.core/Flex/shrink/#/PointingToDeclaration/" >}}): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

