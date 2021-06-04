---
title: Beagle Class Creator
weight: 2
description: >-
  In this section you will find how to implement the Plugin Beagle Class Creator
---

---

## What this Plugin does?
![JetBrains Plugins](https://img.shields.io/jetbrains/plugin/v/br.com.zup.beagle-template-intellij-plugin?color=green&label=Beagle%20Class%20Creator&style=plastic)

When using this plugin the developer will be able to create custom Beagle components automatically with just two clicks.

In addition, it also provides a series of *live templates* with default Beagle components that can be used when creating a screen, such as Containers components, ScrollViews, etc ...

## How to install?

To install it, open Intellij or Android Studio and click:
* *File > Settings*

![](/shared/plugin/settings.png)

* *Search* on marketplace for 'Beagle Class Creator' like the example below

![](/shared/plugin/search.png)
* *Install* and enjoy.

## How to use the Class Creator?

After installing it:

* Right-click on the package where you want to create a custom component.
* Clique on NEW, and you will see the option **Beagle**, which contains a group of options for ANDROID or BACKEND.
* Select the option according to your environment (Backend or Android).
* A screen with several options for Beagle components, that can be customized, will appear.
* Select a component, choose it's name and press ENTER.
* The new custom component will be created in this package, as well as in the example below.

![](/shared/plugin/plugin.gif)

## How to use the Live Templates?

To view/or use the templates, press the keys:

* *CTRL + ALT + J* to open the painer with Live Template (WINDOWS) or
* *⌘ + ⌥ + J* (command + option + J for iOS).

* A panel with the available live templates will open. When you click on a template it will be added to your code. For example, clicking *`Surround with CONTAINER`* will add a Beagle `Container` to the screen.
* If you have selected any other element on the screen, such as ** TEXT ** in the example below, the Container will encapsulate the component.
* It is important to remember that some components, such as `CENTER`, or` TOUCHABLE`, accept only one CHILD element, that is, if you select two elements (like in the example below) and click on the `apply-CENTER-style`, the IDE will show some type of error because this component accepts only one child.

![](/shared/plugin/plugin-live-template.gif)

## How to use the auto complete?

The autocomplete option is very easy to use on this plugin. 
All you need to do is start writing the component you wish to call, for example, `cont` for Container, a list will show, and you can just hit `TAB` to create a Container where you cursor is focused.

All Beagle components and actions are set for autocomplete. The general rule to call them is:
* Start writing the component/action name
* Most abreviations are around 4 to 5 letters. 
* If you wait a second before hiting `TAB` a list will show telling about the option to create a Beagle Component or a Beagle Action.

![](/shared/plugin/autocomplete.gif)

<!-- # Want to know moew about our plugin? 
👉 Access our GitHub repo on [Beagle Class Creator Plugin](https://github.com/ZupIT/beagle-template-intellij-plugin) and explore it freely! Please feel free to sugest any improvements! -->
