---
title: Rendering lifecycles
weight: 172
description: Understanding the rendering process and lifecycles
---

---

Read about [**Beagle tree data structure**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/data-structure" lang="en" >}}) in order to help you understand rendering.

Every Beagle Web library has a very well defined process of how it fetches, process and renders a view. There's an order that must always be respected and hook points where the developer can execute some code of his own \(lifecycles\).

See the full rendering process of Beagle Web:

![](/shared/beagle-view.png)

The Beagle lifecycles are:

- BeforeStart
- BeforeViewSnapshot
- AfterViewSnapshot
- BeforeRender

They can be used as global hooks to the lifecycle:

```text
const config = {
  // ...
  lifecycles: {
    beforeStart: (payload) => {
      // ...
    },
    beforeViewSnapshot: (payload) => {
      // ...
    },
    afterViewSnapshot: (payload) => {
      // ...
    },
    beforeRender: (payload) => {
      // ...
    },
  }
}
```

Or local hooks to the lifecycles in a per-component basis \(annotations/decorators\):

```text
// Attention: these won't work with production builds in Angular. Keep reading for more details.

@BeforeStart((textComponentPayload) => {
  // ...
})
@BeforeViewSnapshot((textComponentPayload) => {
  // ...
})
@AfterViewSnapshot((textComponentPayload) => {
  // ...
})
@BeforeRender((textComponentPayload) => {
  // ...
})
@Component({
  // ...
})
class Text {
  // ...
}
```

The example above won't work with Angular when building for production, because of the Angular compiler. To write a readable code you must choose one of two options:

1. Place the comment `// @dynamic` before calling the decorator:

```text
// @dynamic
@BeforeRender((textComponentPayload) => {
  // ...
})
@Component({
  // ...
})
class Text {
  // ...
}
```

2. Replace the arrow function for a common function and export it:

```text
export function beforeRender(textComponentPayload) {
  // ...
}

@BeforeRender(beforeRender)
@Component({
  // ...
})
class Text {
  // ...
}
```

Since annotations/decorators cannot be used for functions, if you have a functional component or if you simply don't want to use decorators, you can use them as normal function calls:

```text
const Table = (props) => {
  // ...
}

BeforeStart((textComponentPayload) => {
  // ...
})(Table)
```

It is important to notice, mainly for React, where Higher Order Components \(HOCs\) are common, that the component to receive the decorator must be the final component. For instance, if you want to apply a hoc named `withTheme` to your component:

```text
const MyComponent: FC = () => {
  // ...
}

// This is wrong, it has no effect!
// BeforeRender(myLifecycleFunction)(MyComponent)
// export default withTheme(MyComponent)

// You need to apply the decorator to the final component instead:
const MyComponentWithTheme = withTheme(MyComponent)
BeforeRender(myLifecycleFunction)(MyComponentWithTheme)
export default MyComponentWithTheme
```

The return value of a lifecycle hook can be either nothing \(undefined\) or a tree. If it is a tree, the rendering process will discard the previous tree and start working on the tree returned by the hook.

To take control over the rendering process, besides the lifecycles, Beagle also offers the [**Renderer API**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api" lang="en" >}})**,** which can be accessed through `BeagleView.getRenderer()`. The BeagleView can be accessed via the `BeagleRemoteView` component through the attributes `onCreateBeagleView`, in Angular and `viewRef`in React.

Another way to get access to the `BeagleView` is through the [**ViewContentManager API**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api#the-viewcontentmanager-api" lang="en" >}}), which can be found under `this.viewContentManager` in an Angular component that extends `BeagleComponent`; or under `props.viewContentManager` in a React component that implements the `BeagleComponent` interface.

## Process and lifecycles

{{% alert color="info" %}}
Lifecycles deprecates the feature middlewares. Middlewares will still be supported at least until the next major version \(2.0.0\) and they will be interpreted as they were part of the global lifecycle `beforeViewSnapshot`.
{{% /alert %}}

Beagle Web has a very well defined process from when a new payload is received to the moment it gets rendered in the browser screen. We also have some "breakpoints" in this process where you do your own stuff, this is called breakpoints "lifecycles".

### Process to render a view

See below the steps to render a view:

1. Run the global **beforeStart** hook;
2. Run the **beforeStart** hook of each component;
3. Identify the children of each component considering the decorator "BeagleChildren";
4. Assign an id to every node that doesn't have one yet;
5. Remove any properties of the object that has a null value \(nulls are interpreted as inexistent in Beagle\);
6. If needed, pre-fetch views that could be accessed next;
7. Run the global **beforeViewSnapshot** hook;
8. Run the **beforeViewSnapshot** hook of each component;
9. Takes a snapshot of the current tree and stores it. From now on, any reference to the current rendered tree will be referencing the copy.
10. Starts processing a copy of the snapshotted view, the next lifecycles will run over this copy.
11. Run the global **afterViewSnapshot** hook;
12. Run the **afterViewSnapshot** hook of each component;
13. Deserialize beagle actions into javascript functions;
14. Evaluate contexts and expressions;
15. Interpret styles, converting the Beagle styling syntax to css;
16. Run the global **beforeRender** hook;
17. Run the **beforeRender** hook of each component;
18. Hand the component tree to the render function. This function is different in Angular and React.

### Lifecycles

There are four lifecycle hooks, but you probably want to use just two of them: `beforeViewSnapshot` and `beforeRender`. The main difference between them is that the first runs before any expression or action has been evaluated and the second runs after. Also important to notice is that, when using the [**Renderer API**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api" lang="en" >}}), `doFullRender` will run both lifecycles, but `doPartialRender` will run only the `beforeRender` lifecycle.

A simple rule to decide if you want to alter the tree via `beforeViewSnapshot` or `beforeRender` is: if your modification doesn't depend on the result of an expression, use `beforeViewSnapshot` otherwise use`beforeRender`.

A lifecycle hook receives the Beagle Tree and returns either nothing \(undefined\) or a tree. If it is a tree, the rendering process will discard the previous tree and start working on the tree returned by the hook. If it's a global lifecycle, by "tree" it means the entire Beagle Tree, if it's a component lifecycle, by "tree", it means the branch corresponding to the component.

Below, see detailed explanations and examples of each lifecycle:

### BeforeStart

This lifecycle runs before anything else. Here it should be done modifications that must happen before any id is assigned or any children property is computed. Since it runs so early, if the payload is not at all what Beagle expects, here is the place to completely change it.

Since the children translation has not run yet, components decorated with `@BeforeStart` might not run at all, since they might not be considered part of the tree. Take, for instance, a text inside a component `table` that has its children defined by the property `rows`. In this lifecycle, Beagle has no idea that `rows` actually represents the children of `table` and when traversing the tree, it would ignore everything inside `rows`, including the text we mentioned.

This is the only lifecycle where new nodes can be added to the tree and not have ids. Every lifecycle after this is run after the ids are assigned, i.e. if they add a new node, they must also provide its id.

#### Examples of usage

#### **Custom ID generator**

This lifecycle can be used to ignore Beagle's default id generation and use one of your own. Since Beagle only computes random ids for nodes without id's, you can use this lifecycle to assign your own unique ids to every node.

```text
const config = {
  // ...
  lifecycles: {
    beforeStart: (tree) => {
      let next = 1

      function assignIds(data: any) {
        // if it's not a component or not a structure that can have a component inside, return
        if (!data || typeof data !== 'object') return
        // if it's an array, assign ids to the components inside
        if (Array.isArray(data)) return data.forEach(assignIds)
        // if it is a component node, assign an ID
        if (data._beagleComponent_) data.id = `myAppID-${next++}`
        // if it's an object, assign ids to the components inside
        const keys = Object.keys(data)
        keys.forEach(key => assignIds(data[key]))
      }

      assignIds(tree)
    }
  }
}
```

**Complex children calculation**

Another use case would be complex `children` calculations. Let's say the children of a table component is actually the union of three properties: `header`, `rows` and `footer`. This cannot be expressed via the decorator `@BeagleChildren` and is not at all what Beagle expects. This lifecycle could be used to remove these properties from the original JSON and create the property children, which would be the union of the three.

```text
import { BeforeStart } from '@zup-it/beagle-web'

@BeforeStart((table) => {
  table.children = [header, ...rows, footer]
  delete table.header
  delete table.rows
  delete table.footer
})
class Table {
  // ...
}
```

The code above works only if every other component has `children` as the name of the property that represents its children. If this is not the case, a global lifecycle should be used instead.

This feature could also be implemented using `BeforeViewSnapshot`, but, in this case, you'd have to assign id's to every node inside the new property `children`, since in `BeforeViewSnapshot` the ids have already been assigned. See the example [here](#example-of-usage).

### BeforeViewSnapshot

Runs just before the view snapshot, useful to alter the payload, but after the ids were already assigned. This is where you should do most of your modifications to the tree, since id's have already been assigned and the tree structure is ready to be traversed.

The only thing we must be aware of is: if we create any new node, we must assign an id to it.

#### Example of usage

### **Writing a shortcut to control text-inputs**

The component `beagle:textInput` can be controlled through a context. Let's see an example where the value of the input "email" is controlled by the context property `email.address` and the input "message" is controlled by the context property `email.message`.

```text
{
  "_beagleComponent_": "beagle:container",
  "context": {
    "id": "email",
    "value": {
      "address": "",
      "message": ""
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "E-mail",
      "value": "@{email.address}",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "email",
          "path": "address",
          "value": "@{onChange.value}"
        }
      ]
    },
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "Message",
      "value": "@{email.message}",
      "onChange": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "email",
          "path": "message",
          "value": "@{onChange.value}"
        }
      ]
    },
  ]
}
```

It is possible to add a shortcut. Let's say whenever the JSON brings the property `model` you create the entire structure automatically? In `model`, it must be typed which value in the context will control the input. Let's see the same example, but now using this new property `model`.

```text
{
  "_beagleComponent_": "beagle:container",
  "context": {
    "id": "email",
    "value": {
      "address": "",
      "message": ""
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "E-mail",
      "model": "email.address"
    },
    {
      "_beagleComponent_": "beagle:textInput",
      "placeholder": "Message",
      "model": "email.message"
    }
  ]
}
```

Much simpler, right? But for this to work, you still need to write the lifecycle that will transform `model` to the expected structure.

```text
import { BeforeViewSnapshot } from '@zup-it/beagle-web'

@BeforeViewSnapshot((component) => {
  component.value = `@{${component.model}}`
  component.onChange = component.onChange || []
  const [contextId, ...path] = component.model.split('.')
  component.onChange.push({
    _beagleAction_: 'beagle:setContext',
    contextId,
    path: path ? path.join('.') : undefined,
    value: "@{onChange.value}"
  })
})
@Component({
  // ...
})
class TextInput {
  // ...
}
```

With this code, despite receiving `model` from the backend, the payload processed by Beagle will have the expected values.

This example might not have worked if it was placed under the lifecycle `BeforeStart`. This is because, at this time, the children wouldn't have been interpreted yet. Let's say we had a component `custom:table` where the children is placed under the property `rows` and inside one of the rows there was a `beagle:textInput`. The property `model` wouldn't be transformed for this particular text input, because, by this time \(`BeforeStart`\), Beagle still has no idea that `rows` are the `children` of a `custom:table` and the `beagle:textInput` would've been inaccessible.

### **Complex children calculation with BeforeViewSnapshot**

The example from the previous lifecycle \(BeforeStart\) could also have been done here without the danger of skipping the component's lifecycle due to a children property named incorrectly. The only difference is that we'd must assign the ids ourselves:

```text
import { BeforeViewSnapshot, Tree, Component } from '@zup-it/beagle-web'

@BeforeStart((table) => {
  table.children = [header, ...rows, footer]
  delete table.header
  delete table.rows
  delete table.footer
  // assigns a random id for each component in the tree table.children
  Tree.forEach(table.children, Component.assignId)
})
class Table {
  // ...
}
```

### AfterViewSnapshot

When using the [**Renderer API**]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api" lang="en" >}}) you have two different types of render: full renders and partial renders. The two previous lifecycles will run only in full renders, while this lifecycle and the next runs on both full and partial renders.

Differently from the two previous lifecycles, the changes done here are valid for the current render only. Since any update to the view is done over a tree based on the snapshotted view, the modifications done in this lifecycle are not permanent and will be executed in every render. For instance, if we have a property `counter` with the value `0` in the tree and in our lifecycle we increment `counter` by `1`. In the 5th full render these would be the values for `counter` depending on which lifecycle was used:

- BeforeStart: 5
- BeforeViewSnapshot: 5
- AfterViewSnapshot: 1
- BeforeRender: 1

This lifecycle can be used to run code that needs to run every time the view is rendered but doesn't require actions, context, expressions and styles to have already been processed.

#### Example of usage

Contexts are defined, referenced and manipulated in the JSON of the view. But what if you want to access data of the application and not the view itself? Beagle offers a feature called "[**Global context**]({{< ref path="/api/context/global-context" lang="en" >}})" that is able to deal with this scenario, but suppose there is no Global context, you can still implement this behavior by using the AfterViewSnapshot lifecycle.

Let's say you have a financial application and you want to show the user's balance. You need to guarantee that, in every re-render, the most recent value for the balance will be used.

```text
{
  "_beagleComponent_": "container",
  "context": {
    "id": "user",
    "value": {
      "name": "",
      "balance": 0
    }
  },
  "children": [
    {
      "_beagleComponent_": "text",
      "text": "@{user.name}, your balance is $@{user.balance}"
    }
  ]
}
```

In the JSON above, use the context `user`, where it starts with empty values and the view has no way of knowing the correct values. Now, replace the values of the context in the JSON by the values you have in your application. See the example below:

```text
import Tree from '@zup-it/beagle-web'

function findContextById(tree, id) {
  const it = Tree.iterator(tree)
  let next = it.next()
  while (!next.done) {
    const component = next.value
    if (component.context && component.context.id === id) return component.context
    next = it.next()
  }
}

const config = {
  // ...
  lifecycles: {
    afterViewSnapshot: (payload) => {
      const userContext = findContextById(payload, 'user')
      const userData = getUserData() // this method gets the user data from the application
      userContext.name = userData.name
      userContext.balance = userData.balance
    }
  }
}
```

The code above tells Beagle to replace the values in the context "user" by the values in the application. This piece of code cannot be placed before the view is snapshotted because we have the requirement to update the balance value in every render. It also can't be placed in the next lifecycle \(BeforeRender\), because the context would then be already evaluated and our values wouldn't be processed.

It is important to notice that the action `setContext` would not work over the context `user`, since you are always replacing the values for this context before processing any expression. This is just an example to show how this lifecycle could be used. To use application values in your Beagle view, it is always preferred to use the [**global context**]({{< ref path="/api/context/global-context" lang="en" >}}).

### BeforeRender

The changes here are valid for the current render only and is executed in every render. The difference from BeforeRender to AfterViewSnapshot, is that it is guaranteed that all actions, expressions and styles have already been processed.

#### Example of usage

When the backend decided to express colors in the following format: `{ red: number, green: number, blue: number }`. For example, black would be `{ red: 0, green: 0, blue: 0 }`. This is not a valid color for browsers, so we decide to convert the value of every color property to a valid RGB format. Basically, the function that could do this work is the following:

```text
const colorProperties: ['color', 'backgroundColor', 'borderColor']

function fixColorCodes(componentPayload) {
  const style = componentPayload.style
  if (!style) return
  colorProperties.forEach((property) => {
    if (!style[property]) return
    style[property] = `rgb(${style[property].red}, ${style[property].green}, ${style[property].blue})`
  })
}
```

Now, just need to run the function above for every component in the tree. If you want to have a dynamic behavior for the color by changing it via the context feature, check the JSON below:

```text
{
  "_beagleComponent_": "beagle:container",
  "context": {
    "id": "bgColor",
    "value": {
      "red": 255,
      "green": 255,
      "blue": 255
    },
  },
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "text": "My dynamically colored text",
      "style": {
        "backgroundColor": "@{bgColor}"
      }
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "red",
      "onPress": [
        {
          "_beagleAction_": "setContext",
          "contextId": "bgColor",
          "value": {
            "red": 255,
            "green": 0,
            "blue": 0
          }
        }
      ],
      "_beagleComponent_": "beagle:button",
      "text": "green",
      "onPress": [
        {
          "_beagleAction_": "setContext",
          "contextId": "bgColor",
          "value": {
            "red": 0,
            "green": 255,
            "blue": 0
          }
        }
      ],
      "_beagleComponent_": "beagle:button",
      "text": "blue",
      "onPress": [
        {
          "_beagleAction_": "setContext",
          "contextId": "bgColor",
          "value": {
            "red": 0,
            "green": 0,
            "blue": 255
          }
        }
      ]
    }
  ]
}
```

The text starts with a white background and as soon as the user presses a button, the background color changes.

If you call `fixColorCodes` before the context is evaluated, it will be trying to run with the string `@{bgColor}` instead of the object `{ red: 255, green: 255, blue: 255 }` which will get you a massive runtime error, since `red`, `green` or `blue` are not properties of a string.

`BeforeStart`, `BeforeViewSnapshot` and `AfterViewSnapshot` run before the context gets evaluated, so everything that might be affected by the context, must be executed in the last lifecycle: `BeforeRender`.

```text
import { Tree } from '@zup-it/beagle-web'

const config = {
  // ...
  lifecycles: {
    // ...
    beforeRender: tree => Tree.forEach(tree, fixColorCodes),
  }
}
```
