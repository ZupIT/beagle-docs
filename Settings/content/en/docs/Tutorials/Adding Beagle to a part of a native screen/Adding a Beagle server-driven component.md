---
title: Adding a Beagle server-driven component
weight: 228
description: >-
  In this section, you will find how to add a server-driven component in a native screen.
---

---

It is possible that some screen components are received through server-driven, meaning that on a \(native screen\) we can only receive **one page section** or a **BFF unique server component**.

On the example below, we will show a server-drive button in a native screen, and the result is:

![](/docs-beagle/screenshot_1594300176.png)

## Requisites

To this configuration works correctly, you have to:

* A configured [**BFF**](/docs/key-concepts#backend-for-frontend) with Beagle, in case you haven't configured yet, check out this [**tutorial**](/docs/get-started/creating-a-project-from-scratch/case-backend).

* A configured frontend with Beagle in Android or iOS. Check out the tutorial below:
  * [**Android**](/docs/get-started/creating-a-project-from-scratch/case-android/)
  * [**iOS**](/docs/get-started/creating-a-project-from-scratch/case-ios/)

## Step 1: Create a component in the backend

We will create on this step, a button as a server-driven component, so we are able to display it on a native screen.  

Follow the steps:

1. Create a Kotlin class in your backend.

2. Name it `SingleComponentBuilder`, that is the class that will build your server-driven \(object\)component.

3. Copy and paste the code below:

```kotlin
import br.com.zup.beagle.widget.action.Alert
import br.com.zup.beagle.widget.ui.Button

class SingleComponentBuilder() {

  fun createButton(): Button {
    return Button(
        "Sou um botão server-driven",
        onPress = listOf(
            Alert(
                "Botão server-driven",
                "Sou um botão server-driven",
                labelOk = "OoooK"
            )
        )
    )
  }
}
```

{{% alert color="info" %}}
This button will have an action type `"Alert"` that it is configured in the code above. 
{{% /alert %}}

## Step 2: Update the Service class and the Controller in the backend

After you have created the component, it will be necessary to update some classes. See how to make this configuration according to each one of them.


### Updating the Service

The `Service` is responsible to configure the service you will use, it can be several types. In this case, it will be only listed what it is being configured.

Start opening  the `ScreenBeagleService.ktclass` (the name was choses for a BFF tutorial, but you can rename it).

After that, copy the line below and paste inside the `ScreenBeagleService` class:

* _`fun createServerDrivenComponent() = SingleComponentBuilder().createButton()`_


```kotlin
import com.example.bff.builder.SingleComponentBuilder
import org.springframework.stereotype.Service

@Service
class ScreenBeagleService {
    fun createServerDrivenComponent() = SingleComponentBuilder().createButton()
}
```


### Updating Controller

If the configuration above works, then you will update the controller and the component and they will be ready to be sent to frontend, in case there is a request.

Now, on the controller class, we will call the service that has just been configured and define the URL that it will be the component's endpoint we have created.

1. Open the `ScreenController` class. This name was given in the tutorial and this class is responsible for expose the components through API REST. 

2. \(This class already has some implemented functions\) and all you have to do is add the other function to this class.

3. You must note the function with `@GetMapping()` and list the endpoint `(Path relativo da URL)` that identifies this component.

Follow the example below:

```kotlin
@RestController
class ScreenController(
        private val screenBeagleService: BeagleService
) {

  @GetMapping("/serverDrivenComponent")
  fun getServerDrivenComponent() = screenBeagleService.createServerDrivenComponent()
}
```

### Test the endpoint

Now that the component it is created and configured, you must test the endpoint and verify the JSON response.

1. Start your application in the backend \(Remember that your backend application it is configured to present the responses in the localhost\).

2. Open it in the browser and access the endpoint: [http://localhost:8080/serverDrivenComponent](http://localhost:8080/serverDrivenComponent)


You have to receive the JSON below:

{{< tabs id="T96" >}}
{{% tab name="JSON" %}}
```typescript
{
  "_beagleComponent_" : "beagle:button",
  "text" : "Sou um botão server-driven",
  "onPress" : [ {
    "_beagleAction_" : "beagle:alert",
    "title" : "Botão server-driven",
    "message" : "Sou um botão server-driven",
    "labelOk" : "OoooK"
  } ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Button(
    "Sou um botão server-driven",
    onPress = listOf(
        Alert(
            "Botão server-driven",
            "Sou um botão server-driven",
            labelOk = "OoooK"
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

## Step 3: Display a server-driven component

After the previous steps, your component is ready you have to display it on a native screen.

To this configuration, follow the instructions for each platform:

{{< tabs id="T97" >}}
{{% tab name="Android" %}}
You have to use a frame layout that will receive this BFF component to display a server-driven component on an Android native screen.

Follow the steps:

* Create the  `.XML` file below, that represents a native screen with one title and a frame layout. On this example we defined this page as our  `MainActivity`. 

* Copy and paste the configuration below

```markup
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/tv_title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="100dp"
        android:text="Sou componente Nativo!"
        android:textSize="30sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <FrameLayout
        android:id="@+id/fr_server_driven"
        android:layout_width="match_parent"
        android:layout_height="40dp"
        app:layout_constraintTop_toBottomOf="@id/tv_title"
        android:layout_marginTop="40dp"
        />

</androidx.constraintlayout.widget.ConstraintLayout>
```

{{% alert color="info" %}}
After configuring the `frameLayout`, we have to tell Beagle which component will be displayed. For that, use the `loadView` function as listed below.
{{% /alert %}}

Follow the steps:

1. Open the activity you want to display in your native screen. 

2. Create a variable, type FrameLayout that must receive the que deve receber a FrameLayout View that has been configured.

3. Now, call the function `.loadView` from the variable `frameLayout`



```kotlin
val frameLayout = findViewById<FrameLayout>(R.id.fr_server_driven)
frameLayout.loadView(this, ScreenRequest("/serverDrivenComponent"))
```

And done: now, just start your application and you will see the following screen!

                                                              .![](/docs-beagle/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-MC8IwWJstYtvxLbosfv%2F-MC8QfhsPkq60mGJKtfy%2Fserver-driven-comp-ios.gif?alt=media&token=b5500211-e2bc-477d-aea4-835245be1531).

Click on the button and you will se the function of this component implemented and functional, Beagle displays all the components as they are natives.
{{% /tab %}}

{{% tab name="iOS" %}}
You have to use a view controller to put this BFF component to display a server-driven component in a native iOS screen.

But first, you need to need to create a view controller on this native screen. To do so, just follow these steps:

1. Make an instancy to the server-driven component from the `BeagleScreenViewController` class.

2. Use the `addChild` to add a view controller. 

3. Also add a `view` on `beagleScreenViewController` assubview on the native view controller.

4. Then, it's necessary to add some constraints to `UILabel` and for a view of `beagleScreenViewController` , as in the code below:

```swift
class NativeViewController: UIViewController {
    
    private let beagleScreenViewController = BeagleScreenViewController(.remote(.init(url: "http://localhost:8080/serverDrivenComponent")))

    private lazy var descriptionText: UILabel = {
        let label = UILabel()
        label.text = "Sou um componente nativo"
        label.font = .systemFont(ofSize: 25, weight: .semibold)
        return label
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupView()
    }
    
    func setupView() {
        view.backgroundColor = .white
        addChild(beagleScreenViewController)
        
        view.addSubview(descriptionText)
        descriptionText.anchorCenterXToSuperview()
        descriptionText.anchor(top: view.topAnchor, topConstant: 150)
        
        guard let beagleView = beagleScreenViewController.view else {
            return
        }

        view.addSubview(beagleView)
        beagleView.anchorCenterXToSuperview()
        beagleView.anchor(top: descriptionText.bottomAnchor, topConstant: 50, widthConstant: 300, heightConstant: 50)
    
        beagleScreenViewController.didMove(toParent: self)
    }
```

At the end of the process, you will "call" our native screen that will shown up as in the image below.  Remember in this example, it was created in a screen composed on a `UILabel` and in a `BeagleScreenViewController` variable type, where it remains the  server-driven component.

![](/docs-beagle/server-driven-comp-ios.gif)
{{% /tab %}}

{{% tab name="WEB" %}}
If you haven't configured you library yet, [**check out on how to do it**.](/docs/get-started/using-beagle/web)

You have to use [**Remote View**](/docs/resources/customization/beagle-for-web/remote-view-parameters), you can find on Beagle's library, to create hybrid screen with some server-driven components on the web.

See below how each framework works:

**React**

On React, you need to create a function that returns two components. One of them is `BeagleRemoteView` with the path to load the server-driven component.

```javascript
import React, { FC } from 'react'
import { LoadParams } from '@zup-it/beagle-web';
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from '../../beagle/beagle.service';
import NativeComponent from '../NativeComponent';

const params: LoadParams = {
    path: '/mypath',
}

const Main = () => {
    return (
        <>
            <NativeComponent text="Sou um componente nativo!"></NativeComponent>
            <BeagleProvider value={BeagleService}>
                <BeagleRemoteView {...params} />
            </BeagleProvider>
        </>
    )
}

export default Main
```

**Angular**

On Angular, you need to create a native component and add `beagle-remote-view` with the local template where you want your server-driven elements to be rendered.

```text
<app-native-component text="Sou um componente nativo"></app-native-component>
<beagle-remote-view [loadParams]="loadParams"></beagle-remote-view>
```

{{% alert color="warning" %}}
With Angular, it is not possible to use the  BeagleRemoteView  component, in case it is loaded by the library in other server-driven way, because this it will cause a dependency and an application crash.
{{% /alert %}}

{{% alert color="info" %}}
Remember to run your Angular project using the comands: 

`yarn run serve ou npx run serve`

{{% /alert %}}

Your hybrid screen with native and server-drven elements is ready:

![](/docs-beagle/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-ME4OQaHp-v_V78YeLiC%2F-ME7uUduHSFMpidOFn9E%2Fimage.png?alt=media&token=974fe2f0-0964-4d68-a16b-414e3fdd9d67)
{{% /tab %}}
{{< /tabs >}}
