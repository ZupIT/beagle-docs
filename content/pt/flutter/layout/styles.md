---
title: Styles
weight: 3
description: >-
  In this section, you will find out how to manage styles in Beagle Flutter.
---

---

{{% alert color="warning" %}}
Attention: this article talks about the property `style`. despite the similar name, `styleId` and `style` are very different properties. While the latest uses a well defined set of styling properties set by the backend and applies to every component, the first is only a string and works for specific components of the package beagle_components. If you want to learn how to set up the style ids instead, go to [this page]({{< ref path="/flutter/layout/theme" lang="en" >}}).
{{% /alert %}}

# Introduction
Styles are every property declared in the key `style` in the JSON representation of a component. Examples of style properties are:

- backgroundColor
- borderColor
- borderWidth
- padding
- margin
- flex

Any component can receive a style. In Beagle WEB this is implemented via CSS and in both Android and iOS we used the Facebook library: [Yoga](https://yogalayout.com/). For Flutter we interpreted each styling property as its Flutter equivalent widget. To read more details of this implementation, check our [deep dive article](https://gist.github.com/Tiagoperes/12f786e06ad80752afacaf80bc49bcf9).

To check the full list of style properties, click [here]({{< ref path="/api/style" lang="en" >}}).

# Missing Style properties
Although we have support for most of the Beagle style properties, we couldn't implement them all yet. Check below a list with all the properties that still need to be worked into Beagle Flutter:

- flex.basis;
- flex.grow;
- flex.selfAlign;
- flex.alignContent;
- flex.flexWrap;
- flex.shrink;
- The flex directions COLUMN_REVERSE and ROW_REVERSE;
- The values of start and end for margin and padding;
- positions can only have `REAL` values, not `PERCENT`.

It is important to notice that although `flex.alignItems` is fully implemented, the default value for it in Flutter is `start` instead of `stretch`. For more more information on decisions like this, we refer to the [deep dive article](https://gist.github.com/Tiagoperes/12f786e06ad80752afacaf80bc49bcf9).

# Disabling style for specific components
Beagle adds styles to components by wrapping it in widgets like Flex, Flexible, Stack, Positioned and Container. Some widgets shouldn't receive a style and wrapping them under these components might not be desirable. To disable styling for a component, in the ComponentBuilder, you must overwrite the method `getStyleConfig` and return a config where `enabled` is false.

```dart
class MyComponentBuilder extends ComponentBuilder {
  @override
  StyleConfig getStyleConfig() => StyleConfig.disabled();

  // ...
}
```

By default, unstyled components expand to fill all the available space. To disable this behavior, you can also set `shouldExpand` to false. But be careful, by disabling this you can end up with layout errors in Flutter.

```dart
class MyComponentBuilder extends ComponentBuilder {
  @override
  StyleConfig getStyleConfig() => StyleConfig.disabled(shouldExpand: false);

  // ...
}
```

# Taking control of padding and decoration
Some widgets need to deal with the styles themselves, i.e., adding wrappers won't help. Take the button for instance, since we use an ElevatedButton, adding background color, borders and padding to the wrapper won't render the desired button. Instead of creating these wrappers, a ButtonStyle object must be created based on the style and passed to the ElevatedButton. At the same time, we must disable the default behavior for padding and decorations (background color and border).

To disable the automatic addition of padding and decorations, but keep all other styling properties, you can implement the method `getStyleConfig` of the ComponentBuilder and return a configuration where `enabled` is true but `shouldDecorate` is false.

To treat the style from within the widget, you can pass it to the widget from the ComponentBuilder. See the example below:

```dart
class _ButtonBuilder extends ComponentBuilder {
  @override
  StyleConfig? getStyleConfig() => StyleConfig.enabled(shouldDecorate: false);

  @override
  Widget buildForBeagle(element, _, __) {
    return BeagleButton(
    onPress: element.getAttributeValue('onPress'),
    text: element.getAttributeValue('text'),
    enabled: element.getAttributeValue('enabled'),
    styleId: element.getAttributeValue('styleId'),
    style: element.getStyle(),
  );
}}
```

`style` is of type `BeagleStyle`.

# Creating your own containers
Through the package beagle_components, Beagle ships with a very important component called `Container`. The container is responsible for holding multiple components and organizing them according to the provided flex properties (`style.flex`).

If you need to create a new container that respects all the properties from `style.flex`, you need to extend the class `Styled`. This can be useful for creating a Card component, for example.

```dart
class Card extends Styled {
  Card({
    Key? key,
    BeagleStyle? style,
    List<Widget> children = const []
  }) : super(key: key, children: children, style: style);

  @override
  Widget build(BuildContext context) => Container(
    padding: EdgeInsets.all(15),
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.all(Radius.circular(10)),
      boxShadow: [BoxShadow(color: Color(0x0A000000), blurRadius: 1, spreadRadius: 2, offset: Offset(1, 1))],
    ),
    child: super.build(context),
  );
}
```

`Styled` is a `StatelessWidget`. You can use the classes `StatefulStyled` and `StyledState` for creating Stateful components that act like layout containers.

When extending classes and also using mixins, you can end up overshadowing some methods of the super-class. If this happens and you need to make a call to `StyledState`, instead of using `super.build`, `super.initState` and `super.didUpdateWidget`, you can use `buildStyled`, `initStyled` and `updateStyled`.

# A different approach to styles in Beagle Flutter
Beagle defines a set of properties to manipulate the style and layout of a component. These properties are the same across all platforms (iOS, Android, Web and Flutter), i.e. the json generated by the backend is compatible with any of these platforms.

One style language that works for all platforms was very important for iOS, Android and Web. So, using Yoga, we implemented a set of layout features based on the Flex layout of the CSS specification. Now, if we're using Flutter, do we still need to use the same style language? Nobody is going to develop an app for iOS and Flutter, for instance, it would be crazy. Since all platforms of the application can use Flutter, the style language could be defined by Flutter itself and not Beagle, which would be simpler for developers already Familiar with the Flutter widgets.

Beagle Flutter ships with the layout engine that is used by every Beagle UI Library, so, when using our default components, the "style" property can be used and it works. This way, it is easier to reproduce the examples, because they're not platform specific.

Although the Beagle styles work for the most part, unfortunately [they do have some issues](https://gist.github.com/Tiagoperes/12f786e06ad80752afacaf80bc49bcf9). Moreover, if you're only gonna use Flutter to develop the application and the platform is not really a problem, it might be easier to adapt to a layout engine in the backend that works more like Flutter itself.

Instead of using "style", we can expose the Flutter layout widgets as Server Driven Components. See the examples below:

```dart
final Map<String, ComponentBuilder Function()> defaultComponents = {
  'custom:flex': () => _FlexBuilder(),
  'custom:flexible': () => _FlexibleBuilder(),
  'custom:stack': () => _StackBuilder(),
  'custom:positioned': () => _PositionedBuilder(),
  'custom:container': () => _ContainerBuilder(),
};

class _FlexBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Flex(
    direction: EnumUtils.fromString(Axis.values, element.getAttributeValue('direction')) ?? Axis.vertical,
    mainAxisAlignment: EnumUtils.fromString(MainAxisAlignment.values, element.getAttributeValue('mainAxisAlignment')) ?? MainAxisAlignment.start,
    crossAxisAlignment: EnumUtils.fromString(CrossAxisAlignment.values, element.getAttributeValue('crossAxisAlignment')) ?? CrossAxisAlignment.start,
    clipBehavior: EnumUtils.fromString(Clip.values, element.getAttributeValue('clipBehavior')) ?? Clip.none,
    mainAxisSize: EnumUtils.fromString(MainAxisSize.values, element.getAttributeValue('mainAxisSize')) ?? MainAxisSize.max,
    verticalDirection: EnumUtils.fromString(VerticalDirection.values, element.getAttributeValue('verticalDirection')) ?? VerticalDirection.down,
    textBaseline: EnumUtils.fromString(TextBaseline.values, element.getAttributeValue('textBaseline')) ?? TextBaseline.alphabetic,
    textDirection: EnumUtils.fromString(TextDirection.values, element.getAttributeValue('textDirection')) ?? TextDirection.ltr,
    children: children,
  );
}

class _FlexibleBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Flexible(
    fit: EnumUtils.fromString(FlexFit.values, element.getAttributeValue('fit')) ?? FlexFit.loose,
    flex: element.getAttributeValue('flex'),
    child: children[0],
  );
}

class _StackBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) {
    final alignment = element.getAttributeValue('alignment');
    final alignmentX = alignment?['x'];
    final alignmentY = alignment?['y'];
    return Stack(
      fit: EnumUtils.fromString(StackFit.values, element.getAttributeValue('fit')) ?? StackFit.loose,
      textDirection: EnumUtils.fromString(TextDirection.values, element.getAttributeValue('textDirection')) ?? TextDirection.ltr,
      clipBehavior: EnumUtils.fromString(Clip.values, element.getAttributeValue('clipBehavior')) ?? Clip.none,
      alignment: AlignmentDirectional(alignmentX ?? 0, alignmentY ?? 0),
      children: children,
    );
  }
}

class _PositionedBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Positioned(
    width: element.getAttributeValue('width'),
    height: element.getAttributeValue('height'),
    top: element.getAttributeValue('top'),
    left: element.getAttributeValue('left'),
    bottom: element.getAttributeValue('bottom'),
    right: element.getAttributeValue('right'),
    child: children[0],
  );
}

class _PaddingBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Padding(
    padding: element.getAttributeValue('padding'),
    child: children[0],
  );
}

class _ContainerBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Container(
    // ...
  );
}
```

Above is an example of how we could ignore the Beagle default layout engine and use our own. In this case, just exposing some layout components from Flutter.

For using a different layout engine, the first thing we must do is disable the default layout engine of Beagle Flutter. To do this, it's very simple, just set `enableStyles` to false in the configuration. But be aware that most of the default components will stop working.

```dart
final beagleService = BeagleService(
  baseUrl: 'http://$localhost:8080',
  components: myCustomComponents,
  enableStyles: false,
  // ...
);
```