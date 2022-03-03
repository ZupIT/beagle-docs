---
title: The Beagle View
weight: 170
---

---

## Accessing and controlling the BeagleView

The Beagle View is the entity responsible to manage a server-driven view. It can be created through the Beagle Service via the function `createBeagleView`. The BeagleView can fetch a new view, update its tree, navigate, etc.

## Accessing the Beagle View

A Beagle View is created in Angular or React when the component `BeagleRemoteView` is used. To get access to it, you should use the property `onCreateBeagleView`, in Angular, or `viewRef` in React.

See the examples below:

### **Angular**

```typescript
<beagle-remote-view [route]="/home" (onCreateBeagleView)="onCreateBeagleView($event)">
beagle-remote-view>
```

```typescript
import { Component } from '@angular/core'
import { BeagleView } from '@zup-it/beagle-web'

@Component({
  // ...
})
class MyComponent {
  private beagleView: BeagleView | undefined

  // ...

  logBeagleView() {
    if (!this.beagleView) return
    console.log(this.beagleView))
  }

  onCreateBeagleView(beagleView) {
    this.beagleView = beagleView
    this.logBeagleView()
  }
}
```

### **React**

```typescript
import React, { useRef, MutableRefObject, useEffect } from 'react'
import { BeagleRemoteView } from '@zup-it/beagle-react'
import { BeagleView } from '@zup-it/beagle-web'

const MyComponent: FC = () => {
  const beagleView = useRef() as MutableRefObject<BeagleView | undefined>

  // ...

  logBeagleView() {
    if (!beagleView.current) return
    console.log(beagleView.current)
  }

  useEffect(logBeagleView, [])

  return <BeagleRemoteView route="/my-route" viewRef={beagleView} />
}
```

In the examples above, you accessed the Beagle View and logged it. It is important to notice that you need to check for the Beagle View availability before using it. Since the Beagle View is created by a child component, it won't be available before the children components are created.

## Fetching a view

To fetch a view from the backend you need a reference to `BeagleService` and then call the method `viewClient.fetch(remoteView)`.

A reference to BeagleService can be obtained from its `BeagleView`, through the method `getBeagleService()`.

The method `viewClient.fetch(remoteView)` requires a single parameter, which is the route to be accessed from the backend so the view can be retrieved. The properties of the `RemoteView` can be found at [`beagle-remote-view` article]({{< ref path="/web/commons/beagle-remote-view" lang="en" >}}).

To render a view retrieved by the client, the renderer `BeagleView`: `view.getRenderer()` should be used. The methods od the `Renderer` that render a view are `doFullRender` and `doPartialRender`, to learn more about them, read the [article on rendering]({{< ref path="/web/commons/advanced-topics/rendering" lang="pt" >}}), more specifically the "Using the Renderer" section.

## Listening to changes on the UI tree

Both Beagle Angular and React listen to changes on the UI tree so they can update the screen accordingly. If it is useful for your use case, you can also listen to theses events from the `BeagleView`. To add a listener, just call the method `onChange`from the `BeagleView`

`beagleView.onChange` should be called with a single parameter: the listener function. This function receives the current tree and returns null. See next an example:

```Typescript
const unsubscribeLogger = beagleView.onChange((newTree) => {
  console.log('The tree was updated!')
  console.log(newTree)
})
```

To remove the listener, just call the returned function. In the previous example, `unsubscribeLogger()`


Error listeners are registered in a similar way. The only difference is that they receive a list of errors:

```text
const removeErrorListener = beagleView.addErrorListener((errors) => {
  console.log('Oops! An error just happened!')
  console.log(errors)
})
```

## Destroying the Beagle View

To prevent already destroyed components from being called, the Beagle View needs to be destroyed if it is not going to be used again. If you are using Angular or React there is no need to worry about this because it will be done automatically by the library. If you are using Beagle Web directly, without using beagle-angular or beagle-react, you should call `beagleView.destroy()` when the page is removed from memory.

## API

Below you can find all methods of the Beagle View and their description:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><strong>onChange</strong>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left"><a href="the-beagle-view#fetching-a-view"><strong>Receives the listener and returns a function to cancel the subscription.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getRenderer</strong>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">returns <a href="rendering#the-renderer-api"><strong>the renderer</strong></a> of
        the view. Can be used to update the tree directly.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getTree</strong>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">returns a copy of the currently rendered tree.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getNavigator</strong>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">returns the navigator.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getBeagleService</strong>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">returns the BeagleService that created this view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>destroy</strong>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">destroys this view.</td>
    </tr>
  </tbody>
</table>
