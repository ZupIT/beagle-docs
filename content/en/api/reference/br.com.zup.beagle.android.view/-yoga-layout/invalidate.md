+++
title = "invalidate"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.view]({{< relref "../_index.md" >}}) / [YogaLayout]({{< relref "_index.md" >}}) / [invalidate]({{< relref "invalidate.md" >}}) / 



# invalidate  


Marks a particular view as "dirty" and to be relaid out. If the view is not a child of this [YogaLayout]({{< relref "_index.md" >}}) , the entire tree is traversed to find it.



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

view
{{% /md %}}
</td>
<td>
{{% md %}}



the view to mark as dirty


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>open fun [invalidate]({{< relref "invalidate.md" >}})(view: [View](https://developer.android.com/reference/kotlin/android/view/View.html))</b></b>  



