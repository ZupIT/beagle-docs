---
title: Case Web
weight: 43
description: 'Here, you''ll find a tutorial to start a web project with Beagle.'
---

---

## Starting a Web project

### Requirements

To create a Beagle's project for, check out if have installed the following programs:

* [**Angular CLI**](https://cli.angular.io/)
* Node 10.16 +
* Yarn or npm

You must have **Visual Studio Code** to start your project. In case you don't have installed it yet, [**you can find more information about it**](https://code.visualstudio.com/).

After the installation, follow the steps according to framework you chose: 

{{< tabs id="T8" >}}
{{% tab name="Angular" %}}
**Step 1:** Open the terminal and use the command below:

```text
ng new caseAngular
```

Wait until the CLI finishes to create the project.

![](/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-M9PRY_vOWaeZoXKLq2p%2F-M9PUdUA5t1QcYXL3XJ7%2Fimage.png?alt=media&token=a3869009-df72-4a8c-940a-e040aa47a77a)

**Step 2:** Go to the `cd caseAngular`generated project's folder, add **Beagle Angular** to your repository with one of the commands below, according to your package manager:

```text
npm install --save @zup-it/beagle-angular
```

```text
yarn add @zup-it/beagle-angular
```

 Now, wait for the installation.

![](/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-M9PRY_vOWaeZoXKLq2p%2F-M9PYjULyS3UHn633rQT%2Fimage.png?alt=media&token=bec6af4b-c54e-47ae-b72e-bacd0132ba81)

**Step 3:** Type one of these commands and press enter:

```text
yarn beagle init
```

```text
npx beagle init
```

* On the question '**Would you like to use yarn or npm?',** type the option you chose to use as a manager. For example, if you chose `yarn`, then type `yarn`and press enter. 
* On the question '**Path to the beagle module \(press enter to use default\)'**, type which module path you're using for Beagle. Considering the project was just created, and there aren't any modules, press enter without informing anything. 
* On the question '**Path to the module with the components to use with beagle \(press enter to use default\)'**, type which module path will be used for Beagle. Considering the project was just created, and there aren't any modules, press enter without informing anything.

* On the question '**What's the base url of the backend providing your beagle JSONs? \(press enter to use default\)'**,  type which will be the backend's basis URL that will be used to rescue the JSONs. Here, we'll use mockyio, so type `https://www.mocky.io/v2/`and press enter. Then wait until the configuration finishes: 

![](/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-M9PRY_vOWaeZoXKLq2p%2F-M9Par3gM73EiZtMPE5T%2Fimage.png?alt=media&token=fa081171-d619-4de9-b0f6-8b8173e7dffb)

* At the end, two files were created on your project:`beagle-components.module.ts` and`beagle.module.ts`.
{{% /tab %}}

{{% tab name="React" %}}
**Step 1:** Open the terminal and use the command below:

```text
npx create-react-app case-react --template typescript
```

```text
yarn create react-app case-react --template typescript
```

![](/image%20%2811%29.png)

**Step 2:** Acess the `cd case-react` project's file and add **Beagle React** to your repository. On your terminal, type:

```text
npm install --save @zup-it/beagle-react
```

or

```text
yarn add @zup-it/beagle-react
```

And wait until the installation finishes.
{{% /tab %}}
{{< /tabs >}}

## Configuration

Now it's time to configure Beagle's files inside your application, following these instructions:

{{< tabs id="T9" >}}
{{% tab name="Angular" %}}
Open the `app.module.ts` file and import Beagle's module that was just generated:

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

Open the beagle.module.ts file and put the  `baseUrl` path

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
{{% /tab %}}

{{% tab name="React" %}}
On the `/src` path, create another folder named **beagle** and, inside it,  create a new file called`beagle-service.ts`. Its structure should be similar to the image below:

![](/image%20%2863%29.png)

Now, open the  `beagle-service.ts` created file and copy this code:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'

export default createBeagleUIService({
  baseUrl: "",
  components: {}
})
```
{{% /tab %}}
{{< /tabs >}}

### Creating a JSON to be rendered

Now you need a JSON to render the components. Usually, this call is made by an external server that would return the JSON, but for this example we'll use a local file that will be created for this test:

{{< tabs id="T10" >}}
{{% tab name="Angular" %}}
On your angular project, navigate to the `src/assets` folder and create a new file named `payload.json`. Insert this new file on the `JSON` content below.
{{% /tab %}}

{{% tab name="React" %}}
On your react project, navigate to the `/public` folder and create a new file named `payload.json`. Insert on the new file the `JSON` content below:
{{% /tab %}}
{{< /tabs >}}

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
            "text":"Beagle ís a cross-platform framework which provices usage of the server Driven UI concept,natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code"
        }
    ]
}
```

### Rendering components

Now it's necessary to add on your application the local where the components will be rendered through JSON. The Beagle's library provides a component with this functionality:  `beagle remote view`. To configure this component, follow these steps: 

{{< tabs id="T11" >}}
{{% tab name="Angular" %}}
Open the `app.component.html` file and replace all the content with this code:

```text
<beagle-remote-view route="/payload.json"></beagle-remote-view>
```

`route` in the code above states which route will be loaded. The URL specified here is relative to the `baseUrl` declared in the configuration.

{{% alert color="warning" %}}
The parameter `route` is only valid for versions 1.3 and above. For previous versions, you should use `loadParams` instead. `loadParams` is an object and the equivalent to this configuration would be `{ path: '/payload.json' }.`
{{% /alert %}}
{{% /tab %}}

{{% tab name="React" %}}
Open the `App.tsx` file where the `JSON` will be rendered and change it until it looks like the example below:

```text
import React from 'react';
import './App.css';
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView route={'/payload.json'} />
    </BeagleProvider>
  );
}

export default App;
```

On this step, we point where our layout defined with `payload.json` file should be rendered. Here, we have two componentes provided by Beagle: 

`<BeagleProvider>`: Receives the `value` propriety as the `beagle-service` created on the previous step and that contains the initials configurations.

`<BeagleRemoteView>`: Receives the`route` propriety that's the path for our JSON file. Notice here that we add  **' / '**  because this value will be associated to a defined`baseUrl` on`beagle-service.ts` file.

{{% alert color="warning" %}}
`route` in the `BeagleRemoteView` is only valid for versions 1.3.0 and above. For earlier versions, please, use `path` instead.
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

## Testing your application

Once you have finished the project's basic configuration, now you have to run one of the commands below to initialize your application:

{{< tabs id="T12" >}}
{{% tab name="Angular" %}}
If you use **npm**:

```text
npm run serve
```

If you use **yarn:**

```text
yarn serve
```
{{% /tab %}}

{{% tab name="React" %}}
If you use **npm**:

```text
npm run start
```

If you use **yarn:**

```text
yarn start
```
{{% /tab %}}
{{< /tabs >}}

After you finish these commands, access your application's address on your navigator. If a screen with components would be rendered, that means that's correctly working.
