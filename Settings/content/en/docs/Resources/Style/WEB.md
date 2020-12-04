---
title: WEB
weight: 194
description: 'Here, you''ll find how to make components'' stylization on web''s projects.'
---

---

## Introduction 

It's possible to make two main kinds of stylization with Beagle for Web: 

1.  **Adding style classes**
2. **JSON components style**

Here, you will see a detailed explanation for each of these stylizations.

## Adding style classes 

### Adding style's propriety on JSON

To make this change, you must add on your JSON file a `styleId` propriety with the name of the style's class that you created on your angular component. 

On the example below, you see how this addition was done to a "card" hypothetical class. 

```text
{
   "_beagleComponent_": "custom:card",
   "myCustomTitle": "Beagle Web",
   "myCustomDescription": "Lorem ipsum dolor ..."
   "styleId": "card"
}
```

### Inserting a class on components

The process to insert a class to a component varies according to the framework you're using. Check out the step by step of each case in the following tabs:

{{< tabs name="T89" >}}
{{% tab name="Angular" %}}
On Angular, there are two ways to add a class we receive through `styleId` propriety:

#### 1. Through ViewEncapsulation

Open the file on your angular component and right down the `styleUrls` propriety on @Component decorator, add the `ViewEncapsulation.none.` enum. 

See how it works on the example below: 

```javascript
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  encapsulation: ViewEncapsulation.None,
})
```

Once you made it, you just have to run the project with one of these commands:

```text
npm run serve
```

```text
yarn serve
```

After you add the None enum to a @Component\(\) encapsulation propriety, it's necessary to make it useful. See how to make it on the image below: 

![](/docs-beagle/image%20%2812%29.png)

{{% alert color="info" %}}
If you want to see more about **ViewEncapsulation**, check out [**Angular's documentation.**](https://angular.io/api/core/ViewEncapsulation#viewencapsulation)
{{% /alert %}}

#### 2. Through StyleId propriety

Another way to add a class is by maintaining a native encapsulation propriety. To do so, you have to open your Angular's component file and add a new @Input, that in this case is StyleId. 

See how it works on the example below: 

```javascript
export class CardComponent implements OnInit {
  @Input() myCustomTitle: string
  @Input() myCustomDescription: string
  @Input() styleId: string

  constructor() { }
  ...
}
```

Once you made it, this Input has the reference of the class' name you added on JSON in the previous step. In the sequence, you need to change the HTML as in the model below:

```javascript
<div class="{{styleId}}">
    <div>
        <h1>{{myCustomTitle}}</h1>
        <h3>{{myCustomDescription}}</h3>
    </div>
</div>
```

Finally, you just have to run the project with one of the these commands:

```text
npm run serve
```

```text
yarn serve
```

Anyway you used to connect your style class to a component may brings the same result and your component can be changed according to the defined style in your class.
{{% /tab %}}

{{% tab name="React" %}}
On React's projects, you have to access your class through `styleId` propriety.

Import your style's file on the component and then you need to attribute a value to  `styleId`  on `className` through the props.

```javascript
import React from 'react'
import './custom-text.style.css'

function CustomTextComponent(props){
    return (
        <p className={props.styleId}>{props.customText}</p>
    )
}

export default CustomTextComponent;
```

The elements' components can now receive the class defined on JSON. 
{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
It's worth reinforcing that to define a class with`styleId` class added, it's fundamental that you have a **style file** inside your project \(Ex: CSS, SASS, LESS\). 
{{% /alert %}}

## Stylizing components through JSON

Another Beagle Web's possibility is to stylize its components. You see on the following topics what can be done directly through JSON: 

### Position

You can change the element's position on the screen by using the `position` propriety, like in the example:

```text
{
  ...
    {
      "_beagleComponent_": "beagle:text",
      "text": "Welcome to the Beagle playground!",
      "style": {
        "positionType":"relative",
        "position": {
          "top": {
            "value": 10,
            "type": "REAL"
          },
          "left": {
            "value": 10,
            "type": "REAL"
          }
        }
      }
    }
  ]
}
```

### Margin e Padding

You can change the element's margin or spacing on the screen by using `margin` e `padding` proprieties, like in the example below:

```text
{
  ...
    {
      "_beagleComponent_": "beagle:text",
      "text": "Welcome to the Beagle playground!",
      "style": {
        "margin": {
          "top": {
            "value": 10,
            "type": "REAL"
          },
          "left": {
            "value": 10,
            "type": "REAL"
          }
        }
      }
    }
  ]
}
```

### Size

It's also possible to change elements' dimension by using `Size` propriety, which receives the values on `Height` or `Width`. See on the example below:

```text
{
  "_beagleComponent_": "beagle:container",
    "size": {
      "height": {
        "value": 100,
        "type": "REAL"
      },
      "width": {
        "value": 100,
        "type": "REAL"
      }
    }
  }
  ...
}
```

{{% alert color="info" %}}
Notice that, in all the examples above, the proprieties receive the values' maps in a  &lt;value, type&gt; format. 

In Beagle's case, the available values are:  

* REAL - Value on pixel \('px'\)
* PERCENT - Value on percentage \(%\)
{{% /alert %}}

### Flex

Finally, you have the possibility to add proprieties in a flexbox layout model with Beagle's library. 

```text
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "backgroundColor":"red",
    "flex": {
      "flexDirection": "COLUMN",
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    }
  }
}
 ...
```

{{% alert color="info" %}}
Besides these functionalities, there are some components that have specific proprieties like text change color or alignement. Check out more about [**Beagle's components.**](../../api/components/)
{{% /alert %}}
