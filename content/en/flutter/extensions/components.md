---
title: Custom Components
weight: 3
description: >-
  In this section, you will find information on how to create and use your own components in Beagle Flutter.
---

---

## How to create custom components?
1. Declare a map of type `Map<String, ComponentBuilder Function()>`;
2. Pass this map to your BeagleService instance.

This map tells Beagle which component to render when a given identifier comes from a JSON.

### The keys on a map of components
The key in a map of components is a string and it must be equivalent to the `_beagleComponent_` property of the JSON. These keys have a single restriction: they must have the prefix "custom:".

### The values on a map of components (factories of component builders)
The `ComponentBuilder` is an abstract class that must be implemented. The subclass must implement the method `buildForBeagle` that returns a Widget and receive the following positional parameters:
1. `BeagleUIElement element`: the Beagle element to render. Contains all properties that came from the JSON.
2. `List<Widget> children`: the children for this component. If this component must be a leaf, ignore it. If this component will always have a single child, use `children[0]`.
3. `BeagleView view`: the BeagleView that spawned this component. Useful for changing the Beagle UI tree from inside the component. This is rarely used.

See an example below of a component builder that exposes the original ElevatedButton widget from Flutter:

```dart
class _ElevatedButtonBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => ElevatedButton(
    child: children[0],
    onPressed: element.getAttributeValue('onPressed'),
    clipBehavior: EnumUtils.fromString(Clip.values, element.getAttributeValue('clipBehavior')) ?? Clip.none,
    autofocus: element.getAttributeValue('autofocus'),
    onLongPress: element.getAttributeValue('onLongPress'),
  );
}

final myComponents = {
  'custom:elevatedButton': () => _FlexBuilder()
}

final beagleService = BeagleService(
  baseUrl: 'http://myBFF.com',
  components: {...myComponents, ...defaultComponents},
  actions: {...myActions, ...defaultActions},
);
```

In the example above, I purposefully omitted the properties `style` and `focusNode` from the `ElevatedButton`. I did this because these objects have too many properties and the other properties are enough to exemplify the use of custom components.

Notice that `onPressed` is a function and we just call `element.getAttributeValue('onPressed')`. This is fine! Beagle will transform anything declared as an action in the JSON to a function.

This is the most boring and mechanical part of Beagle Flutter. One could say this is a monkey job and we agree with it. It is among our next steps to think of a better, more automatic, way of declaring custom components. We'd welcome any suggestions in [our Github Page](https://github.com/ZupIT/beagle)!

That's it! You can use this same strategy to expose any of your components.
