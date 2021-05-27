---
title: Defining styles on Beagle ios
weight: 40
description: >-
  Here, you'll find a tutorial of how to configure a Design System for Beagle on
  iOS.
---

---

## Creating styles for Beagle iOS

On the first use example, you saw how to [**implement Beagle**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="en" >}}) and create your first server-driven screen.

In this tutorial, the idea is to get deeper from the [**previous project**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="en" >}}) to create a Design System on Beagle's library. To better illustrate  the explanation, we'll use these [**sample codes**](https://github.com/ZupIT/beagle-examples) that you can find out in our repository.

The idea is to configure some styles on iOS to allow you to customize some components, such as:

* Text.
* Button.
* Navigation Bar
* Tab View
* Entre outros.

Besides, we'll apply text styles to 2 texts' components. 

To do so, we'll create a kind of Design System, which is a file with a set of styles in where we'll keep the styles' components registers created on frontend. 

This way, your iOS application “will know” which style component must be rendered in a server-driven screen. Just remember that the server-driven screen case, the visual components \(views\) will be related and it will be used to build the screen.

### **Step 1: Create a Swift file** 

![](https://lh3.googleusercontent.com/8XHsFB4X2N4I00Nz2cPJG0A22QLfzUiytYpU7aQh5Quvaj6uVZwaszYu2wCmLLKCu32H2inAYB_TEH2qIzxfU9-d1QP1HWEjej2THbDfOYxCWPBadM_iBaS3ogbjTf1K40o6ZR7p)

Create a Swift file. On our example, let's call it `Styles`. On this file, you must import the `UIKit` and the  `BeagleUI` and also create a `Struct` with the name `Styles`, just like the image below: 

```swift
import UIKit
import Beagle

struct Styles {

}
```

This `struct` will contain all the styles Beagle will access. Here, it will be listed the logic that allows Beagle to apply defined styles on iOS into a [**server-driven screen**]({{< ref path="/key-concepts#server-driven-ui" lang="en" >}}).

### Step 2: Create a text style

Once you have created your file, now you must create a static function to define and return a text style. For this example, we'll have one style for a title and another one for the paragraph, so we'll create two different functions. 

This function return will use the `BeagleStyle` class, which is a Beagle's intern class that's available when you import the `beagleUI` class.

It's on these return that's defined the style created for the `text` component. Follow the instructions below to create each function:  

The title text style will return **Courier** font with **size 20** and **orange color**. Implement it like in the example below:

```swift
static func titleTextStyle() -> (UITextView?) -> Void {
    return BeagleStyle.text(
        font: UIFont.init(name: "Courier", size: 20) ?? UIFont.systemFont(ofSize: 20), 
        color: .orange
    )
}
```

{{% alert color="info" %}}
If you can't find the text font, Beagle will define a system default font with size 20. 
{{% /alert %}}

Repeat the same process to create our paragraph style, like in the example below:  

```swift
static func descriptionTextStyle() -> (UITextView?) -> Void {
    return BeagleStyle.text(
        font: UIFont.init(name: "Courier", size: 15) ?? UIFont.systemFont(ofSize: 15), 
        color: .orange
    )
}
```

After you implement both styles, your `Styles` file must be like this:

```swift
import UIKit
import Beagle

struct Styles {

    static func titleTextStyle() -> (UITextView?) -> Void {
        return BeagleStyle.text(
            font: UIFont.init(name: "Courier", size: 20) ?? UIFont.systemFont(ofSize: 20), 
            color: .orange
        )
    }
    
    static func descriptionTextStyle() -> (UITextView?) -> Void {
        return BeagleStyle.text(
            font: UIFont.init(name: "Courier", size: 15) ?? UIFont.systemFont(ofSize: 15), 
            color: .orange
        )
    }
}
```

### Step 3: Register a style on Beagle Config

Now, it is necessary to register Beagle's styles, which is important so Beagle can be able to apply these styles in server-driven screens.

1. Open the `BeagleConfig` file. Register a constant called `theme` 
2. It's on the `theme` constant where the styles will be listed.
3. This constant will receive the `AppTheme` , which is where the styles are registered.
4.  Create the information block below inside the**`static func config`** function.
5. Create the information block below inside the**`static func config`** function.

   ```swift
   let theme = AppTheme(styles: [])
   ```

   6.  To register, list the style name stated on backend and, then, indicate which style must be applied. Each style must be registered like this:

```swift
"Title.Text.Orange": Styles.titleTextStyle
```

{{% alert color="warning" %}}
`"Title.Text.Organge"` is the defined style name `text` component on the server-driven screen. 
{{% /alert %}}

{{% alert color="info" %}}
`Styles.titleTextStyle` is the function created in the beginning of this tutorial. She returns the defined style so `Beagle Config` can be able to render the correct style of each visual component, in our case is the text that must be rendered as a title.
{{% /alert %}}

The **theme constant** with two registered styles must be like this:

```swift
let theme = AppTheme(styles: [
    "Title.Text.Orange": Styles.titleTextStyle,
    "Description.Text.Orange": Styles.descriptionTextStyle
])
```

Still on BeagleConfig, we should refer the **theme** we created on `BeagleDependencies`.

Follow the example below and finish the BeagleConfig's setup as the example below shows:

```swift
import Beagle
import Foundation

class BeagleConfig {
    static func config() {
        
        let theme = AppTheme(styles: [
            "Title.Text.Orange": Styles.titleTextStyle,
            "Description.Text.Orange": Styles.descriptionTextStyle
        ])
        
        let dependencies = BeagleDependencies()
        dependencies.theme = theme
        dependencies.urlBuilder = UrlBuilder(
            baseUrl: URL(string: "http://localhost:8080")    
        )
        Beagle.dependencies = dependencies
    }
}
```

In this way, the frontend is configured and the styles are defined.  

### Step 4: Define styles on backend

On the backend's configuration tutorial, we created a server-driven page with 2 texts: 1 title and 1 paragraph.  

This page was like that when rendered on frontend:

![](/shared/captura_de_tela_2020-04-07_a-s_17-removebg-preview-2-.png)

To attribute a style to these texts, follow these instructions:

1. Open the backend project \(BFF\) and look for the `FirstScreenBeagleBuilder`file. 
2. This is the file that contains the code of your first server-driven screen. 
3. She must be configured like in the image below. 
4. On it, you will notice that it was built a hierarchy's screen components and two text types components. 

```kotlin
class FirstScreenBuilder : ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                Text(
                    text = "Hello Beagle!",
                    styleId = "Title.Text.Orange"
                ).setStyle {
                    margin = EdgeValue.only(top = 16)
                }.setFlex {
                    alignSelf = AlignSelf.CENTER
                },
                Text(
                    text = "Beagle is a cross-platform framework which provides usage of the " +
                        "Server-Driven UI concept, natively in iOS, Android and Web applications. " +
                        "By using Beagle, your team could easily change application's layout and" +
                        " data by just changing backend code.",
                    styleId = "Description.Text.Orange"
                ).setStyle {
                    margin = EdgeValue.only(top = 20, left = 16, right = 16)
                }
            )
        )
    )
}
```

To add a style to a text element, you must list the style name within the text component, as shown below. Don't forget to separate the components with a comma. Hold the `Ctrl` button and place the mouse over the Text component and will see the list of attributes that this component can receive here on the backend. For now, we will only use `Style`.

     1. Put a comma after the text attribute = "Hello Beagle", and write another attribute you want to define, in our case it's `styleId`

     2. Type a `“Title.Text.Orange”` string and done! Your style is defined for this text component.

```kotlin
Text(
        text = "Hello Beagle!",
        styleId = "Title.Text.Orange"
    ).setStyle {
         margin = EdgeValue.only(top = 16)
    }.setFlex {
            alignSelf = AlignSelf.CENTER
    }
```

And done, that's all we're gonna do on our backend so far. 

* Repeat the same process with the other `Text` component - the paragraph -, but name it as `“Description.Text.Orange”`

You can run your backend's application so the service can be available.

{{% alert color="danger" %}}
In case you have any problem, we recommend you to make our backend's implementation tutorial. 
{{% /alert %}}

## What's next?

After you execute the backend, you now have to execute the **Xcode.**

This should be your result:  


![](https://lh3.googleusercontent.com/Sl6dvffp0NMZNjXsdtmoMm67euzWqoRXeu6mJgl4T1HiFWYkR35NDs__B94uS-QGhOPKTcKAaocHyb9Te-tKZUZPgGnggcRxS9mJcoB27bqUi8so2_4ItjksIPl6SLGKWYiM48a7)

Now that is ready, test a little more, try to change sizes, colors and whatever style you want to!

For this example, it was used simple style's elements to explain Design System, but the number of functions is quite big. That means you can develop different **toolBars,** **buttons** and all kinds of components, including customized components to use on Beagle.
