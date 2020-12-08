---
title: Data structure
weight: 168
---

---

## How does Beagle represent a view?

{{% alert color="warning" %}}
The features described here are only available in versions 1.2.0 and above.
{{% /alert %}}

Beagle works over a tree of components and in order to work, it must follow some rules. In Typescript terms, Beagle Tree can be defined as follows:

```text
export interface BeagleUIElement {
  _beagleComponent_: string,
  id: string,
  context?: DataContext,
  children?: BeagleUIElement[],
  style?: Style,
  [key: string]: any,
}
```

See below every tree's componenent: 

* `_beagleComponent_` is the name of the UI component to render.
* `id` is a unique identifier for the node. Observation: although the `id` is required by the internal tree structure, before processing the tree, Beagle assigns random unique ids for each node without an id, making it optional in the json provided by the backend.
* `context` is a [**context**](../../../../comunication-between-components-and-context.md) defined for the component and its children.
* `children` is an array of nodes representing the children of the current node.
* `style` is the stylization rules for the component. These rules are not CSS, instead it's a [**structure defined by Beagle**](https://docs.usebeagle.io/resources/estilizacao/web#stylizing-components-through-json);
* Additionally, a node has every property expected by the component itself, a text component could have `text` and `justify`, while a button could have `onPress`, `text` and `disabled`.

Below, we show an example of a tree of components ready to be processed by Beagle:

```text
{
  "_beagleComponent_": "container",
  "id": "container",
  "children": [
    {
      "_beagleComponent_": "image",
      "id": "logo",
      "url": "https://i.ibb.co/rvRN9kv/logo.png"
    },
    {
      "_beagleComponent_": "text",
      "id": "welcome",
      "text": "Welcome to the Beagle playground!"
    },
    {
      "_beagleComponent_": "text",
      "id": "instructions",
      "text": "Use the panel on the left to start coding!"
    },
    {
      "_beagleComponent_": "button",
      "id": "fast-guide",
      "text": "Access the fast guide"
    }
  ]
}
```

The json above is a simpler version of the welcome page of the Beagle Playground website. It renders a container to hold the rest of the elements: an image, two texts and a button. To see the full example and the UI rendered by it, access the [**Beagle Playground**](https://beagle-playground.netlify.app/).

## The Beagle Payload

The type defined in the last section \(`BeagleUIElement`\), you can see the `id` is a required property and that the children of a node must always be named `children`. The backend, however, may not guarantee any of that. For this reason, Beagle internally generates unique ids for every node without one and translates the children property. A table component, for instance, might have its children in the property `rows`. Before starting to process, Beagle converts `rows` to the expected name `children` \(see section [**The `children` property**](data-structure.md#the-children-property)\).

In fact, the payload returned by the backend can be anything, but internally Beagle must work with a tree of components \(`BeagleUIElement`\). You must be able to traverse the tree and detect every component and its children. The payload can be anything, because it gives the developer a chance to change it before it gets processed by Beagle.

We recommend that the backend always return a JSON representing a tree of components, as it is expected by Beagle, but if, for some reason, it is not possible, Beagle Web makes it possible to pre-process the response and build the tree in the front-end before Beagle actually works upon it, like in [**lifecycles**](rendering.md#lifecycles).

### The children property

You should always use an array named `children` to specify the child nodes of a component. But, Beagle will work out of the box, if instead of an array of components, a single node is passed, and will also work if the name `child` is used. 

If a component that represents a table, the children might be named `rows` instead of `children`, in this case, you can inform Beagle that, for this specific component, the name of the property `children` is different. See the example below:

```text
@BeagleChildren({ property: 'rows' })
@Component({
  // ...
})
class Table {
  // ...
}
```

The example above is for Angular, but it would work the same way in other platforms. If your component is functional or if you don't want to use decorators \(annotations\), you can use it as a function, see the example below:

```text
const Table = (props) => {
  // ...
}

BeagleChildren({ property: 'rows' })(Table)
```
