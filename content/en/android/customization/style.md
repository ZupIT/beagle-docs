---
title: Style
weight: 202
description: 'Here, you''ll find how to make components'' stylization on Android''s projects.'
---

---

## Introduction 

Inside Beagle's library, there is a `DesignSystem` class that can be used to personalize the components used on your application.

This class also can map application's local resources so we can refer to [**BFF** ]({{< ref path="/key-concepts#backend-for-frontend" lang="en" >}})when you build a [**Server-Driven**]({{< ref path="/key-concepts#server-driven-ui" lang="en" >}}) screen. 

Beside the images, Beagle's [**Design System**]({{< ref path="/key-concepts#design-system" lang="en" >}}) can customize: 

* the appearance of the texts;
* the style of the input components;
* the style of the buttons;
* the style of the toolbars and
* tabViews.

## Customized attributes

{{% alert color="info" %}}
For Beagle to be able to apply customized styles to components, when they are declared in the application, their **parents must refer to each corresponding family**. So, to customize the components:

* `Text`, your style should extend from **`Widget.AppCompat.TextView`**
* `TextInput`, your style should extend from **`Widget.AppCompat.EditText`**
* `Button`, your style should extend from **`Widget.AppCompat.Button`**
* `Toolbar`, your style should extend from **`Widget.AppCompat.Toolbar`**
* `TabView`, your style should extend from **`Widget.Design.TabLayout`**
{{% /alert %}}

### Text

The text components for Beagle Android are **totally customizable**. To make this change, follow the example below:  


```markup
<!-- Custom style for textual components. -->
    <style name="CustomText" parent="Widget.AppCompat.TextView">
        <item name="android:textColor">#000000</item>
        <item name="android:textSize">20sp</item>
        <item name="android:textStyle">bold</item>
    </style>
```


### TextInput

The input components in Beagle Android are also **fully customizable**. To make any changes, follow the example below:


```markup
<!-- Custom style for textual components. -->
    <style name="CustomInput" parent="Widget.AppCompat.EditText">
        <item name="android:textColor">@color/colorBlack</item>
        <item name="android:background">@drawable/text_input_background</item>
    </style>
```


### Button

Like the texts and inputs, the buttons on Beagle Android are **fully customizable**. To make any changes, follow the example below:


```markup
<!-- Custom style for Button components. -->
    <style name="CustomButton" parent="Widget.AppCompat.Button">
        <item name="android:textColor">#000000</item>
        <item name="android:textSize">18sp</item>
        <item name="android:textAllCaps">false</item>
        <item name="android:background">?attr/selectableItemBackground</item>
    </style>
```


### Toolbar

Inside Beagle's library for Android, the tool bar is part of[ **NavigationBar's class**.]({{< ref path="/api/components/layout/screen/navigation-bar#what-is-a-navigationbaritem" lang="en" >}}) To make it properly work on [**BeagleActivity**]({{< ref path="/android/getting-started#step-4-create-appbeagleactivity" lang="en" >}}), you need to inform Beagle which bar will be used on your application.

The bar customization can be done in the moment that it passes through Beagle. Besides these attributes, Toolbar has other four  exclusive ones: 

1. **backgroundColor:** defines the Tool Bar's background color.
2. **navigationIcon**: receives a `drawable` and attributes it to a navigation bar icon on the tool bar. 
3. **titleTextAppearance**: receives a text style to personalize a tool bar's title.
4. **centerTitle**: when activated, centralize the tool bar's title.


```markup
<!-- Custom style for Toolbar components. -->
    <style name="CustomToolbar" parent="Widget.AppCompat.Toolbar">
        <item name="backgroundColor">@color/colorPrimaryDark</item>
        <item name="navigationIcon">?attr/homeAsUpIndicator</item>
        <item name="titleTextAppearance">@style/CustomTitleToolbar</item>
        <item name="centerTitle">true</item>
    </style>
    
    <style name="CustomTitleToolbar" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorPrimary</item>
        <item name="android:textSize">20sp</item>
        <item name="android:textStyle">bold</item>
    </style>
```


### TabView

Beagle's TabView component represents the Android's `TabLayout` and all its visual structure tha can be stylized with the following attributes:

1. **tabSelectedTextColor**: attributes a different color to a selected tab's text.
2. **tabTextColor**: attributes a text color to all tabs, which means not selected tabs.
3. **tabBackground**: receives a `drawable` and attributes it to TabView's background.
4. **tabIndicatorColor**: attributes a color to a selection's indicator of one tab.
5. **tabIconTint**: receives a `drawable` to define icons' colors, being selected or not.


```markup
<!-- Custom style for TabLayout components. -->
    <style name="CustomTab" parent="Widget.Design.TabLayout">
        <item name="tabSelectedTextColor">@color/colorWhite</item>
        <item name="tabTextColor">@color/colorBlack</item>
        <item name="tabBackground">@color/colorPrimaryDark</item>
        <item name="tabIndicatorColor">@color/colorWhite</item>
        <item name="tabIconTint">@color/selector_icon_color</item>
    </style>
```


To manage all the selected tabs, we recommend you to use a selector for the `tabIconTint` attribute, as in the example below: 


```markup
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:color="@android:color/white" android:state_selected="true" />
    <item android:color="@android:color/black" />
</selector>
```
