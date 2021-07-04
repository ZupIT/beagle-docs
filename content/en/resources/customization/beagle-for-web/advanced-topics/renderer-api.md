---
title: Renderer API
weight: 173
description: Learn how to use the Renderer API
---

---

## The Renderer API

For fine control of the rendering process, Beagle also lets you manage when to render a new tree to your Beagle View. You can have a component that, when clicked, changes the current Beagle Tree, so a new component is added or a property is modified.

A common scenario is when you need to create an action that modifies the current tree. Take for example the action `addChildren`, when executed, it must get the current tree and add the given children to the component with the given `id`. To do it, we must have a way to get the current tree, modify it and tell the Beagle View to render it again.

A renderization can be one of two processes: a full renderization or a partial renderization. The first runs all steps of the renderization
\(1 to 8 in [**this list**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/lifecycles#process-to-render-a-view" lang="en" >}})\).
The second executes only the view snapshot and the steps after it
\(9 to 18 in [**this list**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/lifecycles#process-to-render-a-view" lang="en" >}})\).

### Accessing the Renderer

Each Beagle View has its renderer, to get access to it, you must call `beagleView.getRenderer()`.

See examples of how to get the renderer:

- In React: a reference to the `BeagleView` can be obtained through the property `viewRef` of the `BeagleRemoteView:`

```typescript
import React, { FC, useRef, useEffect, MutableRefObject } from 'react'
import { BeagleRemoteView } from '@zup-it/beagle-react'
import { BeagleView } from '@zup-it/beagle-web'

const Home: FC = () => {
  const beagleView = useRef() as MutableRefObject<BeagleView | undefined>

  useEffect(() => {
    if (beagleView.current) {
      const renderer = beagleView.current.getRenderer()
    }
  }, [])

  return (
    <BeagleRemoteView path="/home" viewRef={beagleView} />
  )
}
```

- In Angular: you can use the attribute `onCreateBeagleView` of the `beagle-remote-view` component:

```typescript
import { Component } from '@angular/core'
import { LoadParams, BeagleView } from '@zup-it/beagle-web'

@Component({
  selector: 'home',
  template: '',
})
export class Home {
  loadParams: LoadParams
  private beagleView: BeagleView

  constructor() {
    this.loadParams = { path: '/home' }
  }

  onCreateBeagleView(beagleView: BeagleView) {
    this.beagleView = beagleView
  }

  getRenderer() {
    return this.beagleView && this.beagleView.getRenderer()
  }
}
```

- In Flutter: you can use the attribute `onCreateView` of the `BeagleWidget`:

```dart
class Ref<T> {
  T current;
}

class Home extends StatelessWidget {
  Home({Key key}) : super(key: key);

  // holds a reference to the BeagleView in case you need direct access to it.
  final _beagleViewRef = Ref<BeagleView>();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: BeagleWidget(
        screenRequest: BeagleScreenRequest('/home'),
        onCreateView: (view) {
          _beagleViewRef.current = view;
        }
      ),
    );
  }
),
```

When inside a component rendered by Beagle, you can use the [**ViewContentManager**](#the-viewcontentmanager-api) to get the BeagleView and obtain access to the renderer.

When inside an action handler \(custom actions\), the Beagle View is provided via parameter, which can be used to get the renderer. See the example below:

- React and Angular

```typescript:
const MyCustomActionHandler: ActionHandler<MyCustomAction> = ({ action, beagleView }) => {
  const renderer = beagleView.getRenderer()
  // ...
}
```

- Flutter:
```dart
final ActionHandler myAction = ({action, view, element, context}) {
  final renderer = view.getRenderer();
  // ...
};
```

### Using the Renderer
The renderer API has two main functions: `doFullRender` and `doPartialRender`.

1. `doFullRender`: renders the tree passed as parameter by running all rendering steps over it. Full renders must be done every time new nodes are created.
2. `doPartialRender`: it only runs the view snapshot and the steps after that. Partial renders should be used to modify existent nodes.

The tree received by `doFullRender` is of type `BeagleUIElement`, its nodes might have ids or not. The tree received by `doPartialRender` is of type
`IdentifiableBeagleUIElement`, it must have ids for every node. You can never pass a tree to `doPartialRender` with missing ids.

Besides the type of the tree, there is no difference to the way we call `doFullRender` and `doPartialRender`. They both accept the following parameters:

1. The first parameter is the tree/component to render.
2. The second parameter is the anchor (optional). If the anchor is not specified, it's assumed to be the root node. If the anchor is specified, the tree passed as parameter will be attached to the currently rendered tree at the same position as the node with the id referenced by `anchor`. How the attachment is done is defined by the third parameter.
3. The third parameter is the mode (optional). If the mode is not defined, it is treated as `replaceComponent`. There are four different modes:
   - `replaceComponent`: replaces the node pointed by `anchor`.
   - `replace`: replaces the children of the node pointed by `anchor`.
   - `prepend`: adds to the children of the node pointed by `anchor`. The new nodes are added before the existing nodes.
   - `append`: adds to the children of the node pointed by `anchor`. The new nodes are added after the existing nodes.

There's a third additional method used to efficiently render lists based on a template, it's called `doTemplateRender`.

The `doTemplateRender` renders according to a template manager and a matrix of contexts.

Each line in the matrix of contexts represents an iteration and each column represents the value
of a template variable. For instance, imagine a template with the variables `@{name}`, `@{sex}`
and `@{address}`. Now suppose we want to render three different entries with this template.
Here's a context matrix that could be used for this example:

```
[
  [{ id: 'name', value: 'John' }, { id: 'sex', value: 'M' }, { id: 'address', value: { street: '42 Avenue', number: '256' } }],
  [{ id: 'name', value: 'Sue' }, { id: 'sex', value: 'F' }, { id: 'address', value: { street: 'St Monica St', number: '85' } }],
  [{ id: 'name', value: 'Paul' }, { id: 'sex', value: 'M' }, { id: 'address', value: { street: 'Bv Kennedy', number: '877' } }],
]
```

Note that the parameter `contexts` adds to the context hierarchy that is already present in the
tree, it doesn't replace it, i.e. you can still use the contexts declared in the current tree.

For each line of the context matrix, a template is chosen from the template manager according to
`case`, which is a Beagle expression that resolves to a boolean. `case` is resolved using the entire
context of the current tree plus the contexts passed in the parameter `contexts` corresponding to
the current iteration. If no template meets the condition the default template is used. If there's
no default template, the iteration is skipped.

After processing all items, the resulting tree is attached to the current tree at the node with
id `anchor` (passed as parameter).

The component manager is an optional parameter and is used to modify the resulting component.
This can be very useful for managing ids, for instance. The component manager is a function that
receives the component generated and the index of the current iteration, returning the modified
component.

**Parameters**
1. templateManager: templates used to render each line of the context matrix.
2. anchor: the id of the node in the current tree to attach the new nodes to.
3. contexts: matrix of contexts where each line represents an item to be rendered according to
the templateManager.
4. componentManager: optional. When set, the component goes through this function before being
processed.

### **Examples:**

```text
/* example 1: renders a container with an empty list */
beagleView.getRenderer().doFullRender({
  _beagleComponent_: 'beagle:container',
  children: [
    _beagleComponent_: 'custom:list',
    id: 'list',
  ],
})

/* example 2: adds a property to the root of the currently rendered tree */
const current = beagleView.getTree()
current.newProperty = 'new'
beagleView.getRenderer().doPartialRender(current)

/* example 3: adds an element to the "custom:list" inside the container */
const item = {
  _beagleComponent_: 'beagle:container',
  children: [
    { _beagleComponent_: 'beagle:text', text: 'Client name: Jasnah Kholin' },
    { _beagleComponent_: 'beagle:text', text: 'Client age: 30' }
  ]
}
// You should always do full renders when creating new nodes
beagleView.getRenderer().doFullRender(item, 'list', { mode: 'append' })
```

{{% alert color="info" %}}
With the renderer API you get to alter the view whenever you want. But, _with great powers come great responsibilities_. It is important to know the best time to trigger a new render, e.g. it
might be a bad idea to trigger a new render before the current one has finished. Let's  take Angular, for instance, if `renderer.doFullRender(tree, componentId, 'replaceComponent')` is called
in the `onInit` of a component with id `componentId`, Beagle will remove a component of the tree before it even gets the chance to be fully rendered.
{{% /alert %}}

## The ViewContentManager API
We should only manually call the APIs for rendering when absolutely necessary. This is important because once we call these APIs from within our components, we basically couple them to Beagle,
which is not a good thing, since they now need Beagle to work properly.

Considering the default components provided by Beagle, the ListView and the LazyComponent are good examples of components that need to access these APIs, since they need to control the Beagle
rendering process by themselves. If your component really needs this "super-power", it can be done via the `ViewContentManager`.

The ViewContentManager provides a way to access the Beagle View and the node in the current Beagle tree that gave origin to the rendered component. With this you can access the renderer and call re-renders for this specific component.

### Accessing the ViewContentManager

See below examples of how to access the `ViewContentManager` for a component that lazily load another view and renders it as its children.

#### React

The `ViewContentManager` can be accessed inside a React component if this component implements the BeagleComponent interface.

```typescript
import React, { FC, useEffect } from 'react'
import { BeagleComponent } from '@zup-it/beagle-react'

interface LazyInterface extends BeagleComponent {
  url: string,
}

const LazyComponent: FC<LazyInterface> = ({ url, viewContentManager, children }) => {
  async function loadUrl() {
    /* Once the component implements the BeagleComponent interface, we have access to the
    viewContentManager, but if the component was not instantiated by Beagle, the viewContentManager
    will be undefined. We must verify it before continuing. */
    if (!viewContentManager) {
      return console.error('The LazyComponent cannot be instantiated outside a Beagle context.')
    }
    const response = await fetch(url)
    const jsonView: string = await response.json()
    const elementId = viewContentManager.getElementId()
    viewContentManager.getBeagleView().getRenderer().doFullRenderer(jsonView, elementId, 'replace')
  }

  useEffect(loadUrl, [])

  return children?.length ? children : <p>Loading...</p>
}
```

#### Angular

In Angular, if you need access to the ViewContentManager, the component class must extend `BeagleComponent`, then, you just need to reference `this.viewContentManager`.

```typescript
import { Component, Input, AfterViewInit } from '@angular/core'
import { BeagleComponent } from '@zup-it/beagle-angular'

@Component({
  // ...
  template: '<p *ngIf="isLoading">Loading...</p><ng-content></ng-content>',
})
export class ListView extends BeagleComponent implements AfterViewInit {
  @Input() url: string
  isLoading = true

  private async loadUrl() {
    /* Once the component implements the BeagleComponent interface, we have access to the
    viewContentManager, but if the component was not instantiated by Beagle, the viewContentManager
    will be undefined. We must verify it before continuing. */
    if (!this.viewContentManager) {
      return console.error('The LazyComponent cannot be instantiated outside a Beagle context.')
    }
    const response = await fetch(url)
    const jsonView: string = await response.json()
    const elementId = viewContentManager.getElementId()
    this.viewContentManager.getBeagleView().getRenderer().doFullRenderer(jsonView, elementId, 'replace')
    this.isLoading = false
  }

  ngAfterViewInit() {
    this.loadUrl()
  }
}
```

#### Flutter

In Flutter, at least for now, we don't have access to the view content manager. To achieve the same
behavior, we must use the view that is passed as parameter to every component builder. See the
example below:

```dart
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

import 'package:beagle/beagle.dart';
import 'package:beagle/interface/beagle_view.dart';
import 'package:beagle/model/tree_update_mode.dart';
import 'package:after_layout/after_layout.dart';

class LazyComponent extends StatefulWidget {
  const LazyComponent({
    Key key,
    this.url,
    this.id,
    this.view,
    this.child,
  }) : super(key: key);

  final String url;
  final String id;
  final BeagleView view;
  final Widget child;

  @override
  _LazyComponent createState() => _LazyComponent();
}

class _LazyComponent extends State<LazyComponent> with AfterLayoutMixin<LazyComponent> {
  Future<void> _loadView async () {
    final response = await http.get(Uri.parse(widget.url));
    final jsonMap = jsonDecode(result.body);
    final loadedView = BeagleUIElement(jsonMap);
    widget.view.getRenderer().doFullRender(loadedView, widget.id, TreeUpdateMode.replace);
  }

  @override
  void afterFirstLayout(BuildContext context) {
    _loadView()
  }

  @override
  Widget build(BuildContext context) {
    return widget.child ?? Text('Loading...');
  }
}

ComponentBuilder LazyComponentBuilder() {
  return (element, children, view) {
    return BeagleLazyComponent(
      key: element.getKey(),
      url: element.getAttributeValue('url'),
      id: element.getId(),
      view: view,
      child: children.isEmpty ? null : children[0],
    );
  };
}
```

The AfterLayout mixin can be found [here](https://github.com/fluttercommunity/flutter_after_layout).

### Using the ViewContentManager (React and Angular)

The ViewContentManager have the following properties/functions

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <code>getElement()</code>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">returns the node in the Beagle Tree responsible for the renderization
        of the component.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <code>getElementId()</code>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">shortcut to <code>getElement().id</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>getBeagleView()</code>
      </td>
      <td style="text-align:left">function</td>
      <td style="text-align:left">returns the BeagleView responsible for the view containing the component.</td>
    </tr>
  </tbody>
</table>

## Updating the view with the result of a request (React and Angular)

In case you need to update the current view with a tree that comes from the backend, you should use [**the method `fetch` of the `BeagleView`**](https://github.com/ZupIT/beagle-web-core/blob/master/beagle-view#Fetching-a-view). It will internally use all the cache mechanisms of Beagle and also do the rendering part.
