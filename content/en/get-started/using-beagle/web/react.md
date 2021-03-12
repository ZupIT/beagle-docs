---
title: React
weight: 25
description: >-
  This section shows the initial walkthrough to use the Beagle library in React projects.
---

---

## **Configuration**

After you finish the installation, you need to **configure the React project to use Beagle.** To do this, just follow the steps:

### **Passo 1: Automatic configuration**

Run one of the commands below to generate the files that will be used by the Beagle library. You can run the command according to your package manager (yarn or npm):

**yarn
```text
yarn beagle
```

**npm
```text
beagle
```

Then Beagle will return a question.

**Do you want to replace the "app.tsx" content with the Beagle configuration? (y or n)?**

If you type **"y"** the project `app.tsx` will be replaced by one with the Beagle configuration, if you type **"n"** it won't be replaced and a this configuration will have to be done manually.

At the end of this process, a new file called **beagle-service.ts** will be generated in your project:

### Step 2: Creating the layout definition JSON

or a better experience you could create your JSON outputsthrough a BFF. You will find how to configure a BFF [**here**]({{<ref path = "/get-started/installing-beagle/backend" lang = "pt">}}). This example uses a JSON that is available in the URL http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/welcome:

{{% alert color="info" %}}
JSON example .
{{% /alert %}}

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
The Beagle library comes with several components ready to be used in your project
The code above creates a JSON with two for the components `container` and `text`.
{{% /alert %}}

### Passo 3: Configuring a Beagle Service

After creating your JSON, its structure should look like the following image:

![](/shared/image%20%2863%29.png)

Now open the created file `beagle-service.ts` and check if the code is the same as the one below:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'

export default createBeagleUIService({
  baseUrl: "http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/",
  components: {}
})
```

{{% alert color="info" %}}
**baseUrl:** Base URL which provides views via JSON for Beagle.
{{% /alert %}}

{{% alert color="info" %}}
**components:** They are maps used when rendering a view.
{{% /alert %}}

At this point in the configuration we can define the baseUrl of the external Beagle server.
At this point we can define the Beagle server external baseUrl.

{{% alert color="warning" %}}
For this example, we are using [**typescript**](https://www.typescriptlang.org/) in this project. You need to install it to run this example.
{{% /alert %}}

### Step 4: Using the BeagleRemoteView

* Now you need to specify the location where the components will be rendered in your application. For this, the Beagle library provides **BeagleRemoteView** and **BeagleProvider**. 

* Open the file of the component you want to render the layout and change it to look like the following example, in the route add the path relative to the remote JSON: / welcome.

{{% alert color="info" %}}
In this example we have changed the `App.ts`
{{% /alert %}}

```text
import React from 'react';
import './App.css';
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView route={'/welcome'} />
    </BeagleProvider>
  );
}

export default App;
```

1. `<BeagleProvider>`: Provides the `beagle-service` configuration file created in the previous step. This is specified in the `value` property;
2. `<BeagleRemoteView>`: Renders the layout defined by the JSON specified at the `route` property.

{{% alert color="info" %}}
Adds the relative path **' /welcome '** since this will be added at the `baseUrl` set at the `beagle-service.ts` file
{{% /alert %}}

{{% alert color="warning" %}}
A `route` in the `BeagleRemoteView` is only valid for versions 1.3 or higher. For previous versions, please use `path.`
{{% /alert %}}

## Example

### Testing your project

To test your configuration, you need to start your application running one of the commands below :

```text
yarn start
```

```text
npm run start
```

After that, access: localhost:3000. And you will see the following screen:

![](/shared/image%20%2895%29.png)

{{% alert color="success" %}}
Congrats, you have finished your first Beagle Screen!
{{% /alert %}}
