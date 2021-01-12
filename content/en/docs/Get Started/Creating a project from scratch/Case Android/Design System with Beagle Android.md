---
title: Design System with Beagle Android
weight: 35
description: >-
  Here, you'll find a tutorial to configure a Design System with Beagle for
  Android.
---

---

## **Creating a Design System**

On the use example of the page creating an Android project with Beagle , you saw how to [**implement Beagle**](/docs/get-started/creating-a-project-from-scratch/case-android) to create a simple server-driven screen with only 2 texts: 1 title and 1 paragraph.

In this tutorial, the idea is to get deeper from the [**previous project**](#step-7-display-your-server-driven-screen) to **create a Design System** **on Beagle's library**. To better illustrate the explanation, we'll use these [**sample codes**](https://github.com/ZupIT/beagle-examples) that you can find out in our repository. 

The Design System we will configure, it will allow you to customize some Beagle's components, such as:

* Text
* Button
* Toolbar
* TabBar

Besides, it will be possible to customize the other 2 text components we created on the screen from the previous tutorial. 

## Context

With this Design System, you'll be able to register `styles`as fonts, colors, font size and customized components. 

Generally, we define as an application's design system a class that implements your interface. From her, we can implement all the methods that overwrite the responsible functions to apply "styles" on the components. Inside a function, it's possible to state N styles or even none \(except in some cases\). 

On Beagle, each style must be referenced in a way that each one has a name to be easily identified.

### Example

On the example below, check the image method that's registering many images used to build a page from backend. 

You can use `when` operator to design styles, the first value is listed as a `string` that identifies Beagle's component style _\(similar to key/value\)_ and with an`Arrow Function ->` where you list the component's style _\(id style on Android\)_. 

With the function already established, the _**else**_ operator will contain a “default” style, check the example below:

![](https://lh5.googleusercontent.com/sRycVP6U1ThpjYfz4KJHH1Dp6jCZxONg7u1KC-_CDCiROkOFwhOvF5kGOxuTpOexLUZ8R-J97UCMNKqV16uUz4MBGIO279Dn4vS6LZiqIFn_kOtxtX5wLMo57wKS3_5nKdDoc3gM)

The yellow highlight shows the "style name" stated on backend and rescued on frontend \(Android\) while the orange highlight shows the style created on Android and that will be executed when the JSON from backend reads the "Style name".

## **Getting started** 

Let's go to practice! First, you have to look for a style folder named "Style" on your IDE Android. To do so on Android Studio, just click on **res &gt; values &gt; styles**. 

Once you made this part, open the style's file \(styles\) and you'll see a screen similar to the example below. This is the file where we'll list all the styles we're intending to apply on Android's components.

We suggest you to keep this file open, because we'll use it some steps ahead. 

![](https://lh4.googleusercontent.com/1ykMjqUpXX3xTPLxPl3H3nNRWkB5nK7shGIaFvx3oRATEJ4eK4yhPG1fpUECPjOnKEdRMhSzaXT5byE5PUFhxZIo1SCqC6j345H4qrjTEv4ShWK1PZsHrUB7GmmEjeW6Mo1-jjvd)

We divided the design system creation in 4 steps, as we'll see now.

### **Step 1: Configure the Design System for Android**

The first step on design system creation is to create a class to represent it.

{{% alert color="info" %}}
Just remember that the design system we're about to create is part of the project we mentioned in the beginning. 
{{% /alert %}}

With the project opened, click on beagle's folder and, with the right button, click on _**new &gt; kotlin file/clas**_**s.** Once you made it, follow these instructions: 

* Name your file as `AppDesignSystem`  \(or another name of your preference\).  
* Indicate that this class should extends a Beagle's interface called `DesignSystem`.
* Use the `@BeagleComponent` note above the `AppDesignSystem`class name.

When you follow these steps, Android will request that some functions must be implemented to be responsible to apply "styles" to the components. 

On this example, you will se the **`textStyle.`** method: 


```kotlin
@BeagleComponent
class AppDesignSystem: DesignSystem()  {

    override fun textStyle(id: String): Int? {
        return super.textStyle(id)
    }
    
}
```

With this way, the `AppDesignSystem` will overwrite, at least, six methods in which each one represents one component's type. Each method will apply styles to visual components that will be registered. 

We'll demonstrate later how these components and their styles are listed and organized inside these methods. For now, let's understand what each method does: 

1. The **`theme`** method applies a theme that can be similar to the native platform. It's the **only mandatory method** when we create a design system class. 
2. The **`buttonStyle`** method is responsible to apply style to Button components. 
3. The **`image`** method is responsible to register a image so that can be referenced on a server-driven screen. 
4. The **`tabBarStyle`** method is responsible to apply styles to TabBar components. 
5. The **`textAppearance`** method applies to Text components. 
6. And the **`toolbarStyle`** method responsible to apply style to Toolbar components.

  
When you create a Design System class, it's necessary to have, at least, one theme method stated. The other methods can be left without implementation, as you can see in the image above.

### **Step 2: Customize a component**

This moment is where the [**BFF**](/docs/key-concepts#backend-for-frontend) happens, it is when frontend connects to the backend.  
  
For that, **you will have to configure Android's frontend and Intellij backend.**
In case you don't have it ready, it just download [**the backend configuration example**](https://github.com/ZupIT/beagle-examples) and run it.   
  
For this backend here it was created a server-driven page with 2 texts, one is the title and the other is paragraph. It must be like this when rendered by the frontend:

![](https://lh4.googleusercontent.com/Rms7sJWr8_BXtHuaxpxtJwQly1O7qBX79AqhSlrj9TSjTqD_7eqFyavstkbgwQO3BVjoGeVV7W53KTVxUkonTD7R6wYBVhWWqa_tfwDaFBw8AVPu-KLQLcZ0H3A8UDK-X_9JMKyr)

See this screen is only structure and content. The size of text is standard and the form needs a style. 

To attribute a style to these texts, let's use the configured screen on the BFF: 

1.  Open the BFF project and find the `FirstScreenBeagleBuilder` file.

This file contains the code of your first server-driven screen that must be configured like the image below. 

You will see that a components hierarchy was built with a SCREEN and two TEXT components.

{{% alert color="info" %}}
Right now, you can apply a style to the components.
{{% /alert %}}

![](https://lh3.googleusercontent.com/b3DvRw3pXFnrhgZtHF2kNMzZCY7vno0oqjs7VsxT2l9aukfyBI2KHfSg-5bcb-hgV_RgXqm0HxlVJBeimQ09bFiXc9R-ZFDrKPcV-PTQf7pbs8P1eZApkyldGdmmKJ3kQMgrUfYR)

To add a style and an element to the text, you have to list all the style name in the text component, as you can see below. Don't forget to separate the components with comma. 

Hold the crtl button and put the mouse over the `Text` component and you will see the attributes list that this component can receive on the backend. We will use the 
`Style`

     2. Put a comma after the text = "Hello Beagle" attribute, and write the other one you want to define, which is `StyleId`

    3. Type the string `“Title.Text.Orange”` and done! The style will be defined for this text component. 

```kotlin
Text(
       text = "Hello Beagle",
       styleId = "Title.Text.Orange"
     ).applyStyle(
         Style(
                 margin = EdgeValue(
                   top = 16.unitReal()
                  ),
                   flex = Flex(alignSelf = AlignSelf.CENTER)
               )
      ),
```
Don't worry about other configurations and elements like `.applyStyle`. Just make sure that nothing else is modify on the example and keep it as showed here. 

{{% alert color="info" %}}
Repeat this process to another `Text` component that is a paragraph, the difference here is you have to rename it to `“Description.Text.Orange”`
{{% /alert %}}

This is all you have to do on backend at this moment. You can run your backend application in order your service is available and you will see your screen with Android's style.

{{% alert color="info" %}}
In case there is some problem, we recommend that you follow the tutorial to [**implement the backend installation.**](/docs/get-started/installing-beagle/backend)
{{% /alert %}}

     4. First, register three file colors on the android file. 

* Access the package _res &gt; values &gt; colors_
* Add the 3 colors inside the tag &lt;resources&gt;&lt;/resources&gt; like the following. 
* Type the code below and it will create the colors white, black and orange in your color palette.


```markup
<color name="colorWhite">#FFFFFF</color>
<color name="colorBlack">#000000</color>
<color name="colorOrange">#FFA500</color>

```
To finish this stage, create on Android the styles with the names attributed to the text on the server-driven screen. Access the style files on the package  **res &gt; values &gt; styles**

You can do this adding a style configuration inside the tag &lt;resources&gt;&lt;/resources&gt; as listed below. See you already have some style elements defined and you should add this one. Copy and paste the code below to the text you want to be `Title`.


```markup
<style name="Title.Text.Orange" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorOrange</item>
        <item name="android:textSize">20sp</item>
        <item name="textAllCaps">true</item>
        <item name="android:textStyle">bold</item>
    </style>
```

Notice that you can define more aspects inside the style. This is possible because all of the options Android allows can be configured in it. 

* **The first line** defines the style name like "Title.Text.Orange"
* **The second** defines the orange color for the text, like listed above 
* **The third** defines the size of the text like: 20 sp
* **The fourth** defines that text must be all capital letters
* **The fifth** line that defines the text will be in bold

You should do the same process with paragraph text. For it, you have to create the following style: `Description.Text.Orange`


```markup
 <style name="Description.Text.Orange" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorOrange</item>
        <item name="android:textSize">16sp</item>
        <item name="textAllCaps">true</item>
    </style>
```


{{% alert color="info" %}}
It is a good practice define a default style. /In this tutorial, let's define one to be applied on normal texts.

The main goal is, this value must be applied on the text that will get to the backend text that doesn't have a predefined style.
{{% /alert %}}

```markup
<style name="Design.System.Text.Default" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorBlack</item>
        <item name="android:textSize">12sp</item>
    </style>
```

Done! The components are customized. Now, let's go to the final stage.


### **Step 3: Register a component on Design System**

Once you have already all the styles created, it's the moment to register them in our `AppDesignSystem` class because it's there where Beagle applies all the defined styles on Android Studio on server-driven screens that came from backend.

To do so, follow these steps: 

1. Open the `AppDesignSystem` class and go to the `textAppearance` method.
2. Inside this method, create a when operator. Inside it, we'll list all the text styles that we want to use now and later. 

{{% alert color="info" %}}
If you have any trouble on making this configuration, check out [**how to use When.**](https://kotlinlang.org/docs/reference/control-flow.html#when-expression)
{{% /alert %}}

   3. Inform the `"styles"` names we referenced on backend \(BFF\) and the style created on Android, programmatically connecting them. 

  4. On _**else**_ , we should list the `default` style we created. Follow the example on the image below:

![](https://lh6.googleusercontent.com/sSGv-3xd1n83s2XYJnekTnP1tVENTXCV-j4W-KcQdaRgjEs-lPe6V1-2DI86IasCOgPvO2fQbLd8CRtrVXbW60ejX60vl9IYGu9r6-V3WnV68jtpUSEzTtomWQRZZYrrHwPucgtn)

Notice that the textAppearance method receives a string as a `name`parameter, that comes from our server-driven screen. 

On the first register, we list the name created for the title style:

* “HelloBeagle.Text.Title” 
* With a `arrow function` `->` we listed the address of the Android's style, that is the style ID  created in the same way we do on  Android Studio: _R.style.Design\_System\_Text\_Title._ 

Repeat the same process for the second register because now we're registering the style we want to use for the paragraphs with a description we created on our server-driven page. The second register must be: 

* _“Beagle.Text.Description” -&gt;  R.style.Design\_System\_Text\_Description._ 

And, finally, the _**else**_ parameter of our `when` operator, we should inform the default we created for the text. That means that any style request for a server-driven page that doesn't come with a predefined style, the default style will be automatically applied. 

* In these cases, the _**else**_ parameter must return  _-&gt;  R.style.Design\_System\_Text\_Default._ 

With the elements listed on this way, you can prepare a Design System with many options of text sizes, colors and margins. Just remember that these styles can be created to use now or in another moment.

{{% alert color="success" %}}
Well done, your Design System is ready! 

Now, you just have to execute your Android application and your screen will show the customized styles we just defined. 
{{% /alert %}}

## What's  next?

Now that you already created your Design System, it's possible to change the size, color or even test the styles as you wish. 

One of the biggest advantages on using a server-driven page is that you can work on a mature design system. That means if you can change the way components are positioned on the backend, it's possible to "change your screen" in the way you want to, all through backend.

On this example, we used simple elements to explain design system, but as you could see on the number of functions on this class, the design system can be very broad.
