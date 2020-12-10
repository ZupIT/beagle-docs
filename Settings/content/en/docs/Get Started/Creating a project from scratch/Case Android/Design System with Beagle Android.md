---
title: Design System with Beagle Android
weight: 35
description: >-
  Here, you'll find a tutorial to configure a Design System with Beagle for
  Android.
---

---

## **Creating a Design System**

On the use example of the page creating an Android project with Beagle , you saw how to [**implement Beagle**](../../.././) to create a simple server-driven screen with only 2 texts: 1 title and 1 paragraph.

In this tutorial, the idea is to get deeper from the [**previous project**](./#passo-7-exibindo-sua-tela-server-driven) to **create a Design System** **on Beagle's library**. To better illustrate the explanation, we'll use these [**sample codes**](https://github.com/ZupIT/beagle-examples) that you can find out in our repository. 

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

On the example below, we have a image method that's registering many images that are been used to build a page from backend. 

Notice that, on her, we can use the `when` operator to design styles, that is the first value is listed as a `string` that identifies Beagle's component syle _\(on a similar relation key/value\)_ and with a`Arrow Function ->` where we list the component's style _\(id style on Android\)_. Again, the logic here is similar to a pair “key/value”. 

With the function already stablished, the _**else**_ operator will contain a “default” style, like we demonstrate on the code below:

![](https://lh5.googleusercontent.com/sRycVP6U1ThpjYfz4KJHH1Dp6jCZxONg7u1KC-_CDCiROkOFwhOvF5kGOxuTpOexLUZ8R-J97UCMNKqV16uUz4MBGIO279Dn4vS6LZiqIFn_kOtxtX5wLMo57wKS3_5nKdDoc3gM)

The yellow highlight shows the "style name" stated on backend and rescued on frontend \(Android\) while the orange highlight shows the style created on Android and that will be executed when the JSON from backend reads the "Style name".

## **Getting start** 

Let's go to practice! First, you have to look for a style folder named "Style" on your IDE Android. To do so on Android Studio, just click on **res &gt; values &gt; styles**. 

Once you made this part, open the style's file \(styles\) and you'll see a screen similar to the example below. This is the file where we'll list all the styles we're intending to apply on Android's components.

We suggest you to keep this file open, because we'll use it some steps ahead. 

![](https://lh4.googleusercontent.com/1ykMjqUpXX3xTPLxPl3H3nNRWkB5nK7shGIaFvx3oRATEJ4eK4yhPG1fpUECPjOnKEdRMhSzaXT5byE5PUFhxZIo1SCqC6j345H4qrjTEv4ShWK1PZsHrUB7GmmEjeW6Mo1-jjvd)

We divided the design system creation in 4 steps, as we'll see now.

### Step 1: Configure the Design System for Android

The first step on design system creation is to create a class to represent it.

{{% alert color="info" %}}
Just remember that the design system we're about to create is part of the project we mentioned in the beginning. 
{{% /alert %}}

With the project opened, click on beagle's folder and, with the right button, click on _**new &gt; kotlin file/clas**_**s.** Once you made it, follow these instructions: 

* Name your file as `AppDesignSystem`  \(or another name of your preference\).  
* Indicate that this class should extends a Beagle's interface called `DesignSystem`.
* Use the `@BeagleComponent` note above the `AppDesignSystem`class name.

When you follow these steps, Android will request that some functions must be implemented to be responsible to apply "styles" to the components. After you agree to implement these methods, your screen must be like the example below:

![](https://lh5.googleusercontent.com/8j48P3-ov2XV1Sz24VzIHEyTLzTVMqDntu7-3iYkFboGpXtDiBF1FY2ddkcT_a0qBfo_LO8l-rbn-mriSreZd33XsGzHqKvyWsPsE4wtaJWeoRxyy5QxMMgWyISuwVSOThs97aTp)

With this way, the `AppDesignSystem` will overwrite, at least, six methods in which each one represents one component's type. Each method will apply styles to visual components that will be registered. 

We'll demonstrate further how these components and their styles are listed and organized inside these methods. For now, let's understand what each method does: 

1. The **`theme`** method applies a theme that can be similar to the native platform. It's the **only mandatory method** when we create a design system class. 
2. The **`buttonStyle`** method is responsible to apply style to Button components. 
3. The **`image`** method is responsible to register a image so that can be referenced on a server-driven screen. 
4. The **`tabBarStyle`** method is responsible to apply styles to TabBar components. 
5. The **`textAppearance`** method applies to Text components. 
6. And the **`toolbarStyle`** method responsible to apply style to Toolbar components.

  
When you create a Design System class, it's necessary to have, at least, one theme method stated. The other methods can be left without implementation, as you can see in the image above.

### Step 2: **Create a theme**

The next step is create a theme component so our Beagle's application can use when renders our [**server-driven screens.**](../../../../../key-concepts#server-driven-ui) 

1. First, let's register three colors on the color file on Android. 

* Access the package _r**es &gt; values &gt; colors**_
* Addd three colors inside the `<resources></resources>` tag. 
* Type the code below so you can create the white, black and orange colors on your color palette.


```text
<color name="colorWhite">#FFFFFF</color>
<color name="colorBlack">#000000</color>
<color name="colorOrange">#FFA500</color>

```


   2. Then, let's access the `style` file,  like we saw before. 

{{% alert color="info" %}}
In case you have closed the file, you can find it inside the values package. You'll have to access the package because we're going to create a style to our server-driven theme. To do so, click on _**res &gt; values &gt; styles**. _
{{% /alert %}}

  
Copy and paste the code below using the &lt;resources&gt;&lt;/resources&gt; tag. 


```text
    <style name="AppThemeServerDriven" parent="Theme.AppCompat.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="colorPrimary">@color/colorPrimary</item>
        <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
        <item name="colorAccent">@color/colorAcent</item>
        <item name="android:windowBackground">@color/colorWhite</item>
    </style>
```


**Two important changes** happen to this file: 

**Change 1:** A new theme style was created with the name `AppThemeServerDriven`. 

Notice that in this style , the `parent` must be `Theme.AppCompat.NoAction bar`. This detail is very important because Beagle particularly treats  an action bar and controls its behavior with other method on the design system called `toolbarStyle`.  
  
__**Change 2:** New colors were listed inside the new esteem. 

Notice how they correspond to the items `colorPrimary`, `colorPrimaryDark` normally referenced in this way on the Android's application pattern theme. We're suggesting here a similar theme, but you can define how you want to. For now, let's just keep this way.

Now, we need to access the `AppDesignSystem` class, that we recently created, to register the Design System style. Considering we only have one theme, you can follow these instructions: 

* Copy and paste the line and replace the theme function on`AppDesignSystem` class and we're done.
* Your theme is configured and registered on Beagle.


```text
override fun theme(): Int = R.style.AppThemeServerDriven
```


### **Step 3: Customize a component**

This is the moment that occurs the [**BFF**](../../../../key-concepts#backend-for-frontend), when frontend connects to backend.   
  
To do so, you'll have to **configure Android's frontend and Intellij's backend**. In case you haven't this configuration done, just follow the [**backend's configuration**](https://github.com/ZupIT/beagle-examples) and run it.   
  
For our backend here, we created a server-driven page with 2 texts: 1 title and 1 paragraph. It should be like this when rendered on frontend:

![](https://lh4.googleusercontent.com/Rms7sJWr8_BXtHuaxpxtJwQly1O7qBX79AqhSlrj9TSjTqD_7eqFyavstkbgwQO3BVjoGeVV7W53KTVxUkonTD7R6wYBVhWWqa_tfwDaFBw8AVPu-KLQLcZ0H3A8UDK-X_9JMKyr)

Notice that our screen is basically structure and content. The text is on standard size and the layout doesn't have a style. 

To attribute a style to these texts, we'll recorrer a nossa tela configurada lá no BFF: 

1.  Open the BFF project and look for the `FirstScreenBeagleBuilder`file. 

This is the file that contains the code of your server-driven screen, that has to be configured as it shows in the image below.  

On that image, you'll see that we built a component's hierarchy with one SCREEN and two types of TEXT component. 

{{% alert color="info" %}}
For this point on the tutorial, just focus on what must be done to apply one style to our components.
{{% /alert %}}

![](https://lh3.googleusercontent.com/b3DvRw3pXFnrhgZtHF2kNMzZCY7vno0oqjs7VsxT2l9aukfyBI2KHfSg-5bcb-hgV_RgXqm0HxlVJBeimQ09bFiXc9R-ZFDrKPcV-PTQf7pbs8P1eZApkyldGdmmKJ3kQMgrUfYR)

To add a style and a text element, you should list the style's name inside the text component, as indicated in the image below. Don't forget to separate the components by one comma. 

Hold the Ctrl button and put your mouse on the `Text` component so you'll see the attribute's list that this component can receive from backend. For now, we'll only use the `Style`

     2. Put a comma after the text attribute = "Hello Beagle", and write the another attribute you want to define, which in this case is the `style`

    3. Type a `“HelloBeagle.Text.Title”` string e we're done! The style was defined to this text component.

```text
Text(
    text = "Hello Beagle",
    style = “HelloBeagle.Text.Title”
).applyFlex(
        Flex(
            margin = EdgeValue(
                top = 16.unitRal(Real)
            ),
            alignSelf = Alignment.CENTER
        )
),
```

For now, don't worry about the other elements, like `.applyFlex`, and other configurations. Just make sure that there's nothing else to be changed on the example, let's keep it this way now.

{{% alert color="info" %}}
Repeat this process to the other `Text` component - the paragraph -, with the difference that, here, you will name it as `“Design.System.Text.Description”`
{{% /alert %}}

This all we're gonna do on the backend for now. You can run your backend's application so the service be available and, soon, you'll see your styled screen on Android. 

{{% alert color="info" %}}
In case you have any problem, we recommend you to [**follow this tutorial to implement the backend.**](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MGhl-E_OjnBR8rfYtgB/get-started/installing-beagle/beagle-backend)
{{% /alert %}}

     2. Return to Android Studio and access again the style's file on the package **res &gt; values &gt; styles**. 

To finish this stage, you have to create on Android the styles and names we just attributed to the texts on the server-driven screen. 

You can do this by adding the style's configuration inside the &lt;resources&gt;&lt;/resources&gt; tag, as its listed below. Notice that you already have some defined styles' elements and must add this one more. Copy and paste the code below with the text that we want to be our `Title`.


```text
<style name="Design.System.Text.Title" parent="TextAppearance.AppCompat">
    <item name="android:textColor">@color/colorOrange</item>
    <item name="android:textSize">20sp</item>
    <item name="textAllCaps">True</item>
    <item name="android:textStyle">bold</item>
</style>
```


Notice that you can define many more aspects inside the style because all the options available on Android can be configured on it. 

* **The first line** defines the style's name like "HelloBealge.Text.Title"
* **The second** defines the text's orange color, as listed above.
* **The third** defines the text's size, like 20 sp. 
* **The fourth** defines that the text must be exhibited on caps lock.
* **The fifth** linha defines that the text will be on bold.

We should make the same process with the paragraph text. In this case, we'll create this style: `Design.System.Text.Description`

![](https://lh5.googleusercontent.com/hbl12RSXzpxXGQnsuyuT7GF1-GOv979QdVamfNC413K-BVY1qRhAsgl1i3vv8Fkc9gvIZxdmzNuXmmkdJuF9-WJco0fycrdVKQkaGCDDm2bYHsaxrfvsK6GafXnOVKtORjfWtIBt)

{{% alert color="info" %}}
It's a good practice to define a default style. For this tutorial, we'll define one to be applied on normal texts. 

The objective is that this value be applied on a text that came from backend without a predefined style.
{{% /alert %}}

![](https://lh5.googleusercontent.com/SHrBdleCbQha4LNeMd2bM_Kfq5R0QaDxO1nc36Kc7iu3Ix7w0kiYBkJ2c9EHYbfnHcorrqBcPRjitQUBUWEN8Zty1J1Y1fFsb4BtLnxjT05s-iWGzdYX6Ev5q0cjwpyRuVhwFc0e)

And done! Our components are customized! Now let's get to the final stage.

### **Step 4: Register a component on Design System**

Once you have already all the styles created, it's the moment to register them in our `AppDesignSystem` class because it's there where Beagle applies all the defined styles on Android Studio on server-driven screens that came from backend.

To do so, follow these steps: 

1. Open the `AppDesignSystem` class and go to the `textAppearance` method.
2. Inside this method, create a when operator. Inside it, we'll list all the text styles that we want to use now and later. 

{{% alert color="info" %}}
If you have any trouble on making this configuration, check out [**how to use When.**](https://kotlinlang.org/docs/reference/control-flow.html#when-expression)
{{% /alert %}}

   3. Infor the `"styles"` names we referenced on backend \(BFF\) and the style created on Android, programmatically connecting them. 

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
