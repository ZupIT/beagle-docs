---
title: How to display a screen
weight: 224
description: >-
  In this section, you will find how to display a server-driven screen.
---

---

## Display a screen through a URL

#### **For Angular projects**

To define where you should display a server-driven screen on Angular, you should use a component provided by the `<beagle-remote-view>` library.

{{% alert color="info" %}}
This component has other attributes that can be configured. However, in this implementation you will only use the **`path attribute`**, described in the example below.

For more details on this component, check the following link [Remote View]({{< ref path="/web/commons/remote-view-parameters" lang="en" >}}).
{{% /alert %}}

On the html file of your component, add the `remote view`.

```markup
<beagle-remote-view [loadParams]="loadParams"></beagle-remote-view>
```

Once you made it, access the controller component and create the `loadParams`, which is expected by the `remote view`.

```text
loadParams: LoadParams;

  constructor() {
    this.loadParams = {
      path: '/pathToScreen'
    };
  }
```

{{% alert color="info" %}}
The value for `path` should be the JSON's path that will be concatenated with the `baseUrl` defined in `beagle.module.ts`.
{{% /alert %}}

#### **For React projects**

To define a server-driven screen on React, you need to create a service with a minimum configuration, see the example below:

```javascript
import { createBeagleUIService } from "@zup-it/beagle-react";

export default createBeagleUIService({
  baseUrl: "",
  components: {},
});
```

Once you made it, use two components provided by Beagle's library to define where the server-driven screen will be rendered:

1. The `BeagleProvider`
2. The `BeagleRemoteView`

```javascript
...
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView path={'/pathToScreen'} />
    </BeagleProvider>
  );
}

export default App;
```

{{% alert color="info" %}}
The value for `path` should be the JSON's path that will be concatenated with the `baseUrl` defined in the service.
{{% /alert %}}
