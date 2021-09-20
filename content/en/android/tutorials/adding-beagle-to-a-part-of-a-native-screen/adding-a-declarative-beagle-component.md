---
title: Adding a local declarative component into a Android Screen
weight: 230
description: >- 
  This section describes how to add a Beagle Declarative component into a
  native screen.
---

---
To create a native screen on Android, follow the next steps: 

## Step 1: Create a native screen

Create a new Activity. Here the `MainActivity` is used as a template:


```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        declarative_content.addView(declarativeComponente().toView(this))
    }
}


```


{{% alert color="info" %}}
At this point, MainActivity.kt will not be modified. Your `activity_main.xml` file needs to be modified first. 
{{% /alert %}}

* Open the **`activity_main.xml`**
* By default, this file comes configured with **`Contraint Layout`** and it can be kept that way. In order for it to be used by Beagle it is necessary to declare a **`Fragment Layout`** in this xml file as well. This fragment will hold the declarative component that will be loaded.

Below you can see the example xml used in this tutorial, which finalizes the creation of the Native screen.


```markup
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">
<FrameLayout
    android:id="@+id/declarative_content"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

</FrameLayout>
</androidx.constraintlayout.widget.ConstraintLayout>
```
## Step 2: Create a declarative component

Use a Container \(a Beagle component that groups other components\), it can be declared as a variable or as a function that returns a container. In this example, the configuration is as a function return:


```text
fun declarativeComponent() =

    Container( children =
        listOf(
            Text(
                text = "These buttons are rendered by Beagle"
            ).applyFlex(
                Flex(
                    alignSelf = AlignSelf.CENTER
                )
            ),
            Button(
                "I'm a server-driven button 1",
                onPress = listOf(
                    Alert(message = "I'm a working button"))
                )
            ),
             Button(
                "I'm a server-driven button too",
                onPress = listOf(
                    Alert(message = "I'm a working as well"))
                )
            )
        )
    )
```
## Step 3: Add the component to the canvas

Call the Android **`addView`** function from the **`Fragment Layout view`** which was declared in `activity_main.xml` as listed in the example below:


```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        declarative_content.addView(declarativeComponent().toView(this))
        
    }
}
```

It's done! Launch your application and the declarative screen renders natively.
