---
title: Navigation Animation
weight: 132
description: >-
  You will learn in this section about how it is possible to customize Beagle's
  navigation screen
---

---

## Introduction

Beagle has a [**screen navigation**](/home/resources/screen-navigation) tool that allows you to configure actions like navigate to a new screen or close one.

Besides these configuration, you can also customize the navigation of your application.

There are two customization options:

1. According to Android's animation pattern.
2. Fragments transition provided by Beagle, that it can be customized according to your preference and design system. They are:

- [**PushView**](/home/api/actions/navigate/pushview)
- [**PopView**](/home/api/actions/navigate/popview)
- [**PopToView**](/home/api/actions/navigate/poptoview)

## Protocol and customized

**Beagle's pattern protocol** for customization is to use a native Android tool, to make fragment transition to customize your animation.

{{% alert color="info" %}}
For more information on how this process works, [**check out the Android's section** **setCustomAnimations**.](https://developer.android.com/reference/android/app/FragmentTransaction#setCustomAnimations%28int,%20int,%20int,%20int%29)
{{% /alert %}}

The other way to customize an animation it is the transition through the [**BeagleActivity**](/home/get-started/creating-a-project-from-scratch/) class implementation, which Beagle uses the _**getFragmentTransitionAnimation\(\)**_ method.

In case this method it isn't implemented and customized, the transitions will follow the Beagle's animation pattern. The code below shows the [**BeagleActivity**](/home/get-started/creating-a-project-from-scratch/) method, that can be overwritten this way:

```kotlin
open fun getFragmentTransitionAnimation() = FragmentTransitionAnimation(
    enter =  R.anim.slide_from_right,
    exit = R.anim.none_animation,
    popEnter = R.anim.none_animation,
    popExit = R.anim.slide_to_right
)
```
