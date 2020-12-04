---
title: React
weight: 25
description: 'Here, you''ll find how to configure Beagle''s library for React.'
---

---

## **Usage configurations**  

After you finished the installation,  you need to make **Beagle's usage configuration for React's framework.** To do so, you just have to follow these steps:

### Step 1: Create a JSON to be rendered

On your React project, on the `public` folder, create a file named `payload.json` and copy the code below. This file will map the components that will be rendered by Beagle. Generally, it would be returned by a external server, but on this example, we'll make a local JSON file to be rendered with Beagle's library. . 

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
            "text":"Beagle is a cross-platform framework which provides usage of the server Driven UI concept,natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code"
        }
    ]
}
```

{{% alert color="info" %}}
Beagle's library comes with many pre-defined components ready to be used in their project. 

The code above creates a JSON with two os these components: container e text.
{{% /alert %}}

### Step 2: Create a configuration file

After you add the JSON on your project, create another file in the path `/src`, but this time with the name **Beagle**. Inside it, name a new file as `beagle-service.ts`. 

Once you made it, your structure must be similar to the image below:

![](/docs-beagle/image%20%2863%29.png)

Now open the  `beagle-service.ts` file and copy this code:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'

export default createBeagleUIService({
  baseUrl: "",
  components: {}
})
```

At this point of the configuration, you can add, for example, a path to Beagle's external server. The most indicated is to let the baseUrl propriety without value because we'll use a local file \(`payload.json`\) for this example. 

{{% alert color="warning" %}}
It's important to reinforce that, for this example, we're using [**typescript**](https://www.typescriptlang.org/) with the project. In case you don't have this tool, we highly recommend you to install it, otherwise, please, ignore all the typing information.
{{% /alert %}}

### Step 3: Using BeagleRemoteView

Now you need to specify inside the application, the place where the components will be rendered. For that, open Beagle's library that provides **BeagleRemoteView** and **BeagleProvider.** Open the component file where you want the JSON to be rendered and change it as in the example below:

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

When we make this note, we indicate to Beagle that our defined layout will be rendered on `payload.json` file. In this case, two components are provided on the library:

1. `<BeagleProvider>`: Responsible to provide a `value`propriety  as `beagle-service` created on the previous step and contains the initial configurations;  
2. `<BeagleRemoteView>`: Responsible to receive a `path` propriety, which is the path to our JSON file.

{{% alert color="info" %}}
See that here we added  **' / '** because this value will be associated to the defined`baseUrl` on the file `beagle-service.ts`
{{% /alert %}}

{{% alert color="warning" %}}
`route` in the `BeagleRemoteView` is only valid for versions 1.3.0 and above. For earlier versions, please, use `path` instead.
{{% /alert %}}

## Use Example 

### Testing the project

Before we test if our configuration worked, you have to run one of the commands below to initialize the application:

```text
yarn start
```

```text
npm run start
```

After finished this commands, access the local: localhost:3000   
You will see this screen:

![](/docs-beagle/image%20%2895%29.png)

{{% alert color="success" %}}
Well done, you created your first screen with Beagle!
{{% /alert %}}
