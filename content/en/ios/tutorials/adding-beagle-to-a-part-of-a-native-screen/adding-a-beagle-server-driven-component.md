---
title: Adding a Beagle server-driven component
weight: 228
description: >-
  In this section, you will find how to add a server-driven component in a native screen.
---

---

It is possible that some screen components are received through server-driven, meaning that on a \(native screen\) you can only receive **one page section** or a **BFF unique server component**.

On the example below, there is a server-driven button in a native screen, and the result is:

<div align="center">
{{< figure src="/shared/screenshot_1594300176.png" width="30%" >}}
</div>

## Requisites

For this configuration to work correctly, you need:

- A configured [**BFF**]({{< ref path="/key-concepts#backend-for-frontend" lang="en" >}}) with Beagle, in case you haven't configured yet, check out this [**tutorial**]({{< ref path="/backend/get-started/creating-a-project-from-scratch" lang="en" >}}).

- A configured frontend with Beagle in Android or iOS. Check out the tutorial below:
  - [**Android**]({{< ref path="/android/getting-started.md" lang="en" >}})
  - [**iOS**]({{< ref path="/ios/getting-started" lang="en" >}})

## Step 1: Create a component in the backend

You will create a button as a server-driven component, so that you are able to display it on a native screen.  

Follow the steps:

1. Create a Kotlin class in your backend.

2. Name it `SingleComponentBuilder`. This is the class that will build your server-driven \(object\)component.

3. Copy and paste the code below:

```kotlin
import br.com.zup.beagle.widget.action.Alert
import br.com.zup.beagle.widget.ui.Button

class SingleComponentBuilder() {

  fun createButton(): Button {
    return Button(
        "I'm a server-based button",
        onPress = listOf(
            Alert(
                "Server-driven Button",
                "I'm a server-based button",
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

Start opening the `ScreenBeagleService.ktclass` (the name was choses for a BFF tutorial, but you can rename it).

After that, copy the line below and paste inside the `ScreenBeagleService` class:

- _`fun createServerDrivenComponent() = SingleComponentBuilder().createButton()`_

```kotlin
import com.example.bff.builder.SingleComponentBuilder
import org.springframework.stereotype.Service

@Service
class ScreenBeagleService {
    fun createServerDrivenComponent() = SingleComponentBuilder().createButton()
}
```


### Update Controller

If the configuration above works, then you will have to update the controller and the component. After that, they will be ready to be sent to the front-end, if there is a request.

Now, on the controller class, it will call the service that has just been configured and define the URL that it will be the component's endpoint you have created.

1. Open the `ScreenController` class. This name was given in the tutorial and this class is responsible for expose the components through API REST.

2. \(This class already has some implemented functions\) and all you have to do is add the other function to this class.

3. You must note the function with `@GetMapping()` and list the endpoint `(Relative path for the URL)` that identifies this component.

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

Now that the component is created and configured, you must test the endpoint and verify the JSON response.

1. Start your application in the backend \(Remember that your backend application it is configured to present the responses in the localhost\).

2. Open it in the browser and access the endpoint: [http://localhost:8080/serverDrivenComponent](http://localhost:8080/serverDrivenComponent)

You have to receive the JSON below:

{{< tabs id="T96" >}}
{{% tab name="JSON" %}}

```typescript
{
  "_beagleComponent_" : "beagle:button",
  "text" : "I'm a server-based button",
  "onPress" : [ {
    "_beagleAction_" : "beagle:alert",
    "title" : "Server-driven Button",
    "message" : "I'm a server-based button",
    "labelOk" : "OoooK"
  } ]
}
```

{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Button(
    "I'm a server-based button",
    onPress = listOf(
        Alert(
            "Server-driven Button",
            "I'm a server-based button",
            labelOk = "OoooK"
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

## Step 3: Display a server-driven component

After the previous steps, your component is ready, now you have to display it on a native screen.

You have to use a view controller to put this BFF component to display a server-driven component in a native iOS screen.

But first, you need to create a view controller on this native screen. To do so, just follow these steps:

1. Make an instance of the server-driven component from the `BeagleScreenViewController` class.

2. Use the `addChild` to add a view controller.

3. Also add a `view` on `beagleScreenViewController` as sub view on the native view controller.

4. Then, you need to add some constraints to `UILabel` and for the view of `beagleScreenViewController`, as in the code below:

```swift
class NativeViewController: UIViewController {

    private let beagleScreenViewController = BeagleScreenViewController(.remote(.init(url: "http://localhost:8080/serverDrivenComponent")))

    private lazy var descriptionText: UILabel = {
        let label = UILabel()
        label.text = "I am a native component"
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

At the end of the process, you will "call" the native screen that will shown up as in the image below. Remember in this example, it was created in a screen composed on a `UILabel` and on a `BeagleScreenViewController` variable type, where it remains the server-driven component.

<div align="center">
{{< figure src="/shared/server-driven-comp-ios.gif" width="50%" >}}
</div>
