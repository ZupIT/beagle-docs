---
title: Angular
weight: 23
description: 'Here, you''ll find how to configure Beagle''s library for Angular.'
---

---

## **Usage configurations** 

After you finished the installation, you need to make **Beagle's usage configuration for Angular's framework.** To do so, you just have to follow these steps:

### **Step 1: Configure using an automatic configuration**

Type one of the commands below to generate the files that will be used on Beagle's library. It's possible to execute the command according to your package manager: 

```text
yarn beagle init
```

```text
npx beagle init
```

Once you made it, Beagle will return some questions. To answer them, follow the orientations below: 

**Question 1: Would you like to use yarn or npm?**   
In this case, type the option that will be used as manager. In our example, we will use `yarn`, so type `yarn`and press enter. 

**Question 2: Path to the beagle module \(press enter to use default\)**   
In this case, type the module path that will be used for Beagle. Considering we're creating this project from zero e and there is no module, you just have to press enter without informing anything. 

**Question 3: Path to the module with the components to use with beagle \(press enter to use default\)**  
In this case, type the module path that will be used for Beagle's components. Considering we don't have any module yet, you just have to press enter without informing anything. 

**Question 4:  What's the base url of the backend providing your beagle JSONs? \(press enter to use default\)**  
In this case, type the backend's basis URL that will be used to rescue JSON files. For our example, we'll use a JSON, so just type: http://localhost:4200/assets

At the end of this process, two files will be generate on your project: 

* **beagle-components.module.ts**
* **beagle.module.ts.**

![](/docs-beagle/image%20%2815%29.png)

Open the file `app.module.ts` and, then, import Beagle's module that was just generated:

```text
...
import { Beagle } from './beagle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Beagle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Step 2: Create a JSON to be rendered

Now, you just have to create a JSON to render the components. Usually, this process would be made by an external server that would return de JSON, but for this example you'll create a local file to be accessed for the test.  

On your angular project, navigate to the `src/assets` file and create a new file named `payload.json`. Open this new file you just created and copy the content below:

```text
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
            "_beagleComponent_":"beagle:text",
            "text":"Hello Beagle"
        },
       {
            "_beagleComponent_":"beagle:text",
            "style":{
              "padding":{
                "top":{
                  "value":10,
                  "type": "REAL"
                }
              }
            },
            "text": "Beagle is a cross-platform framework which provides usage of the server Driven UI concept,natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code"
        }
    ]
}
```

{{% alert color="info" %}}
The Beagle's library comes with many pre-defined components ready to be used in their project. 

The code above creates a JSON with two os these components: container e text.
{{% /alert %}}

After you have created your JSON, open the generated file `beagle.module.ts` in the previous step and add as a baseUrl the path: http://localhost:4200/assets

```text
import { BeagleModule } from '@zup-it/beagle-angular'
// import all the components you wish to use with Beagle.

@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    // Associate every beagle component to your angular component.
  },
})
export class Beagle {}
```

Well done, your configuration is ready! Now,  see how to render mapped components on JSON.

### Step 3: Use beagle-remote-view

After creating the JSON, you need to tell Angular where to render the Beagle components. To do this, our lib provides the component `<beagle-remote-view>`.

Open the file `app.component.html` and replace all the content with this code:

```text
<beagle-remote-view route="/payload.json"></beagle-remote-view>
```

`route` in the code above states which route will be loaded. The URL specified here is relative to the `baseUrl` declared in the configuration.

{{% alert color="warning" %}}
The parameter `route` is only valid for versions 1.3 and above. For previous versions, you should use `loadParams` instead. `loadParams` is an object and the equivalent to this configuration would be `{ path: '/payload.json' }.`
{{% /alert %}}

## Example  

### Testing the application

Before we test if our configuration worked, you have to run one of the commands below to initialize the application. 

{{% alert color="danger" %}}
When you run the application, you **can't use** **use the `ng serve`** command because it will initialize the application without Beagle. To make the Beagle's initialization, it's necessary to run one of the commands indicated for those who use npm or yarn. 
{{% /alert %}}

If you use npm:

```text
npm run serve
```

If you use yarn: 

```text
yarn serve
```

{{% alert color="warning" %}}
It's important to clarify here that the command used to restart the application is fundamental make work the changes you intend to make in Beagle's configurations files.

This process also must be done for any change made on `@Input()` proprieties of your mapped components. Beagle's team is constantly developing solutions to improve this.
{{% /alert %}}

After finished this commands, access the local: http://localhost:4200  
You will see this screen:

![](/docs-beagle/image%20%2896%29.png)



{{% alert color="success" %}}
Well done, you created your first screen with Beagle!
{{% /alert %}}
