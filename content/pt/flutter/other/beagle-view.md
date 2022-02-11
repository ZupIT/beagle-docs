---
title: Beagle View
weight: 3
description: >-
  In this section, you will find how to manipulate the BeagleView and trigger new renders
---

---

# Introduction
The BeagleView is the most important structure of Beagle Flutter. This is the object responsible for holding the representation of the view, processing the JSON and notifying every listener when anything changes. Every BeagleView has an object called "renderer", which is used to make changes to the current UI tree.

The Beagle Navigator is responsible for creating BeagleViews. Each page of the navigator is associated with a BeagleWidget and each BeagleWidget is instantiated by the StackNavigator with a BeagleView.

# The BeagleView interface
The BeagleView is composed of the following methods:

- **onChange**: listen to changes on the BeagleView. Used internally by the BeagleWidget to update itself with the newest UI tree.
- **getRenderer**: returns the Renderer, which is responsible for altering the UI tree.
- **getTree**: returns a copy of the current UI tree.
- **getNavigator**: returns the navigator that created this BeagleView.
- **onAction**: listen to Beagle actions triggered within the BeagleView. Used internally by the action sub-system.
- **destroy**: destroys the BeagleView, removing every active listener. Used internally by the BeagleWidget to prevent calls to unmounted widgets.

From all the methods above, three are interesting for the developer using the Beagle Library: `getRenderer`, `getNavigator` and `getTree`. They can be used to alter the UI tree from within a component or make a navigation to another Beagle page.

Examples of default components (package beagle_components) that use the BeagleView are:

- **ListView**: from a template and a data set, alters the Beagle UI tree to create the final interface by looping the entire data set and repeating the template while it replaces the values related to the current iteration.
- **LazyComponent**: loads the JSON from the provided URL and alters the UI tree with the new content.

# Accessing the BeagleView from a widget
To gain access of the BeagleView responsible for the current UI tree, you can make use of the 3rd parameter of the method `buildForBeagle` of the ComponentBuilder.

See below the ComponentBuilder of the default component "LazyComponent":

```dart
class _LazyBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, view) {
    final initialState = element.getAttributeValue('initialState');
    return BeagleLazyComponent(
      path: element.getAttributeValue('path'),
      initialState: initialState == null ? null : BeagleUIElement(initialState),
      beagleId: element.getId(),
      view: view,
      child: children.isEmpty ? Container() : children[0],
    );
  }
}
```

If you can't receive the BeagleView from the ComponentBuilder, you can also access it using the BuildContext, as long as the context descends from a BeagleWidget. To do this, you can call the utility method `findAncestorBeagleView(context)`.

# Accessing the BeagleView from an action handler
Every action handler receives the BeagleView that triggered it via the named parameter `view`. See below an example of an action that adds a text (parameter "text") to a given component node (parameter "target", id of the node).

```dart
import 'package:beagle/beagle.dart';

final Map<String, ActionHandler> actions = {
  'custom:addText': ({required action, required element, required view, required context}) {
    final textNode = {'_beagleComponent_': 'beagle:text', text: action.getAttributeValue('text')};
    view.getRenderer().doFullRenderer(textNode, TreeUpdateMode.append, action.getAttributeValue('target'))
  },
  // ...
}
```

# Accessing the BeagleView from a BuildContext
The BeagleView can be accessed from the BuildContext as long as the context descends from a BeagleWidget. The function that finds the BeagleView given a BuildContext is `findAncestorBeagleView(context)`.

# The renderer
The most useful part of a BeagleView is its renderer. A renderer is an object containing the following functions:

## doFullRender
Alters the UI tree by adding or replacing a branch of the current tree. It accepts the following positional parameters:

1. The node (branch) to add or replace (`BeagleUIElement`). This is required.
2. The anchor, i.e., the id (`String`) of the node where the new branch should be placed. If not informed, the root node is used.
3. The mode for inserting the new branch (`TreeUpdateMode`). The available modes are:
- `replaceComponent`: this is the default value, used in case no mode is provided. The `replaceComponent` mode replaces the node identified by the anchor (2nd parameter) with the tree provided in the 1st parameter.
- `replace`: replaces the entire set of children of the node identified by the anchor (2nd parameter).
- `append`: adds the new node at the end of the list of children of the node identified by the anchor (2nd parameter).
- `prepend`: adds the new node at the start of the list of children of the node identified by the anchor (2nd parameter).

i.e. if only the first parameter is provided, it renders an entire new tree.

Check below how the `LazyComponent` uses this method:

```dart
Future<void> _fetchLazyView() async {
  try {
    final component = await beagle.viewClient.fetch(RemoteView(widget.path));
    widget.view.getRenderer().doFullRender(component, widget.beagleId, TreeUpdateMode.replace);
  } catch (err) {
    beagle.logger.error('BeagleLazyComponent: error: $err');
  }
}
```

In the code above, `beagle` is the current BeagleService. To see how to obtain a reference to the current BeagleService, check [this article]({{< ref path="/flutter/other/beagle-service" lang="en" >}}). `widget.view` is the BeagleView passed by the ComponentBuilder of the LazyComponent. `widget.beagleId` has also been provided by the ComponentBuilder and is the id of the node in Beagle UI tree.

To check the full implementation, visit our github repository and look for the widget `BeagleLazyComponent`.

## doPartialRender
Does the same as `doFullRender`, but in less steps. It is a faster method that assumes the node already exists in the tree and only some properties have been modified. This is useful for actions like `setContext`, where it just needs to update some values, without altering the structure of the tree.

If you don't know which method to call, prefer using `doFullRender`. The parameters of the two methods are exactly the same.

## doTemplateRender
This is the most complex rendering method and it's rarely needed. It's used for creating components like the ListView and GridView. Imagine you need to render multiple nodes at once using a template, and this template uses expressions that must be evaluated with the value of the current iteration. Doing this with the other two methods would be very inefficient, so this method receives a template, a set of values and creates the nodes accordingly, with a single render event.

The `doTemplateRender` accepts the following named parameters:

- `TemplateManager templateManager`: set of templates to use. It's more than one because different types of elements in the data set can have different templates. Required.
- `String anchor`: the id of the node where the new branch should be placed. Required.
- `List<List<BeagleDataContext>> contexts`: matrix of contexts where each line represents an item to be rendered according to the templateManager. Required.
- `BeagleUIElement Function(BeagleUIElement, int)? componentManager`: optional. When set, the resulting template goes through this function before being finally rendered. It's a chance for altering properties like the ids.
- `TreeUpdateMode? mode`: optional. The mode for inserting the new nodes. The default value is `replace`. Check all available options in the previous section.

To see an example of how this method can be used, please, check the implementation of the widget `DynamicList` in the package `beagle_components`.
