---
title: Custom Component
weight: 177
description: >-
  You will find the description on how to create a customized component for
  Angular and React
---

---

## Creating a customized component 

To create a customized component, follow the next steps: 

1. You need an ordinary component, after that you have to create a new one in your project:

{{< tabs id="T73" >}}
{{% tab name="Angular" %}}
The component will be created with  `customText` name, in this example. In your terminal, use the following command: 

```text
ng generate component components/customText --skip-import
```
{{% /tab %}}

{{% tab name="React" %}}
Here, a component will be created to render a  `CustomTextComponent` text. 

```jsx
import React from 'react'

function CustomTextComponent(){
    return (
        <p>Beagle Web React</p>
    )
}

export default CustomTextComponent;
```
{{% /tab %}}
{{< /tabs >}}

2. Now, add Beagle's library association in your project 

{{< tabs id="T74" >}}
{{% tab name="Angular" %}}
Open `beagle-components.module.ts` file and add the new `CustomTextComponent` generated in the list, see the example below:

```typescript
...
import { CustomTextComponent } from './components/custom-text/custom-text.component'
// import all the components you're going to use with beagle

const components = [
  CustomTextComponent
]

@NgModule({
  declarations: components,
  entryComponents: components,
  exports: components,
  imports: [
    // everything your components depend on
  ],
})
export class BeagleComponentsModule {}
```

On  `beagle.module.ts` file, add your new component in the association's list:

```typescript
import { BeagleModule } from '@zup-it/beagle-angular'
import { CustomTextComponent } from './components/custom-text/custom-text.component'
// import all the components you wish to use with Beagle.

@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    // Associate every beagle component to your angular component.
    "custom:text": CustomTextComponent
  },
})
export class Beagle {}
```

{{% alert color="warning" %}}
If you didn't find the `beagle-components.module.ts` files or `beagle.module.ts`, [**see how to configure Beagle's library in your project.** ](/docs/get-started/installing-beagle/)
{{% /alert %}}
{{% /tab %}}

{{% tab name="React" %}}
Now, access Beagle's library configuration file in your project and add your component to the association list. If you don't have this file in your project,[ **learn here how to configure Beagle Web React library.** ](/docs/get-started/using-beagle/web/react)

```jsx
import { createBeagleUIService } from '@zup-it/beagle-react'
import CustomTextComponent from '../components/CustomTextComponent'

export default createBeagleUIService<any>({
  baseUrl: '',
  components: {
    'custom:text': CustomTextComponent
  }
})
```
{{% /tab %}}
{{< /tabs >}}

On the step below, the word custom was added to identify the components, this will make Beagle's library understand that this component does not belong to the predefined component's list. 

### Adding properties to the component 

To add properties to the created component, follow the next steps: 

{{< tabs id="T75" >}}
{{% tab name="Angular" %}}
1. Open the `custom-text.component.ts` file and add an  `@Input` like the code below: 

```typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.less']
})
export class CustomTextComponent implements OnInit {
  @Input() myCustomText: string

  constructor() { }

  ngOnInit(): void {
  }

}

```

2. Add the reference to the file `custom-text.component.html`

```markup
<div>
    <h1>{{myCustomText}}</h1>
</div>
```

{{% alert color="danger" %}}
If  you have a project that is currently running, it is necessary to restart with the commands: `yarn serve` or `npm run serve`
{{% /alert %}}
{{% /tab %}}

{{% tab name="React" %}}
On React, all the attributes defined in the JSON can be accessed through props, see the example: 

```jsx
import React from 'react'


function CustomTextComponent(props){
    return (
        <p>{props.myCustomText}</p>
    )
}

export default CustomTextComponent;
```
{{% /tab %}}
{{< /tabs >}}

### Creating a JSON

Now you can add your component to a JSON file:

```text
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
            "_beagleComponent_": "custom:text",
            "myCustomText":"Beagle Web is Awesome"
        }
    ]
}
```

{{% alert color="success" %}}
Done! You have created a customized component that receives properties and it is rendered by Beagle's library. 
{{% /alert %}}
