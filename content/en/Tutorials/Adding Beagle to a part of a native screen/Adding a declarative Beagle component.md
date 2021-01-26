---
title: Adding a declarative Beagle component
weight: 230
description: >-
  This section describes how to add a declarative Beagle component on a native screen
---

---

## Step 1: Create a native screen

{{< tabs id="T98" >}}
{{% tab name="Android" %}}
To create an Android native screen, you have to create a new Activity. Let's use here the `MainActivity` as an example: 

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
At this moment MainActivity.kt won't have modifications. It is necessary to change its `activity_main.xml` file first.
{{% /alert %}}

* Open  **`activity_main.xml`**

* By default, this file it is already configured as a  **`Contraint Layout`** and it can stay this way. In order to be used by Beagle, it is necessary to declare a  **`Fragment Layout`** in this xml file. It is in this fragment that the declarative component will be loaded. 

See below examples of xml used in this tutorial, this ends the creation of the native screen:

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

{{% /tab %}}

{{% tab name="iOS" %}}
On this, it was created the following `UIViewController`:

```swift
class NativeViewController: UIViewController {

    private lazy var firstLabel = makeLabel(text: "I'm a native UILabel")
    
    private lazy var secondLabel = makeLabel(text: "Another native UILabel")

    private func makeLabel(text: String) -> UILabel {
        let label = UILabel()
        label.text = text
        label.textAlignment = .center
        label.font = .systemFont(ofSize: 25, weight: .semibold)
        label.backgroundColor = UIColor(hex: grayColor)
        return label
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = "Beagle Native"
        navigationItem.backBarButtonItem = UIBarButtonItem(
            title: nil, 
            style: .plain, 
            target: nil, 
            action: nil
        )
        setupView()
    }
    
    private func setupView() {
        view.backgroundColor = .white
        
        view.addSubview(firstLabel)
        firstLabel.anchorCenterXToSuperview()
        firstLabel.anchor(
            top: topLayoutGuide.bottomAnchor,
            topConstant: 50
        )
        
        let layoutMargins = view.layoutMarginsGuide
        
        view.addSubview(secondLabel)
        secondLabel.anchorCenterXToSuperview()
        secondLabel.anchor(top: beagleView.bottomAnchor, topConstant: 30)
        secondLabel.bottomAnchor.constraint(lessThanOrEqualTo: layoutMargins.bottomAnchor).isActive = true
    }

    private let grayColor = "#EEEEEE"
}
```
{{% /tab %}}
{{< /tabs >}}

## Step 2: Create a declative component

{{< tabs id="T99" >}}
{{% tab name="Android" %}}
To create a Beagle declarative component, you have to use a Container \(a Beagle component that contains other components\). It can be declared as a variable or a function that returns a container. This example was configured as a function return:


```text
fun declarativeComponente() = 

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

{{% /tab %}}

{{% tab name="iOS" %}}
To create a Beagle declarative component as a `UIView`, the **`BeagleView`** was used and it can be declared as native components created in the previous step. The example below is a `Container` with a text and two buttons:

```swift
private lazy var beagleView = BeagleView(Container(
        widgetProperties: .init(style: Style()
            .backgroundColor(grayColor)
            .margin(.init(all: 20))
            .padding(.init(all: 10))
        )
    ) {
        Text(
            "These buttons are rendered by Beagle",
            widgetProperties: .init(style: .init(
                margin: .init(bottom: 10),
                flex: Flex().alignSelf(.center)
            ))
        )
        Button(
            text: "I'm a server-driven button",
            onPress: [
                Alert(
                    title: "Server-driven button", 
                    message: "I'm a server-driven button"
                )
            ]
        )
        Button(
            text: "Navigate to Navigator",
            onPress: [Navigate.openNativeRoute(.init(route: .navigateStep1Endpoint))]
        )
    })
```
{{% /tab %}}
{{< /tabs >}}

## Step 3: Add the component on the screen

{{< tabs id="T100" >}}
{{% tab name="Android" %}}
To add this component to the screen, it is necessary to call Android's **`addView`** function from **`Fragment Layout view`** that was declared in the `activity_main.xml` as listed in the example below:


```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        declarative_content.addView(declarativeComponente().toView(this))
        
    }
}
```


As an **`addView `** parameter, we listed the function that returns the component created using the Beagle method **`.toView(this)v`**

{{% /tab %}}

{{% tab name="iOS" %}}
BeagleView can be added as an `UIView`, this example the method used `addSubview()` to add this component on the screen.

See the method `setupView()` below, which is responsible to add the components on the screen:

```swift
private func setupView() {
        view.backgroundColor = .white
        
        view.addSubview(firstLabel)
        firstLabel.anchorCenterXToSuperview()
        firstLabel.anchor(
            top: topLayoutGuide.bottomAnchor,
            topConstant: 50
        )
        
        let layoutMargins = view.layoutMarginsGuide
        
        view.addSubview(beagleView)
        beagleView.translatesAutoresizingMaskIntoConstraints = false
        beagleView.topAnchor.constraint(equalTo: firstLabel.bottomAnchor, constant: 50).isActive = true
        beagleView.leadingAnchor.constraint(greaterThanOrEqualTo: layoutMargins.leadingAnchor).isActive = true
        beagleView.trailingAnchor.constraint(lessThanOrEqualTo: layoutMargins.trailingAnchor).isActive = true
        beagleView.centerXAnchor.constraint(equalTo: firstLabel.centerXAnchor).isActive = true
                
        view.addSubview(secondLabel)
        secondLabel.anchorCenterXToSuperview()
        secondLabel.anchor(top: beagleView.bottomAnchor, topConstant: 30)
        secondLabel.bottomAnchor.constraint(lessThanOrEqualTo: layoutMargins.bottomAnchor).isActive = true
    }
```
{{% /tab %}}
{{< /tabs >}}

Done! Now, start your application and the declarative screen will be rendered.
