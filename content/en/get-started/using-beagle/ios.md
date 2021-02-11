---
title: IOS
weight: 19
description: "Here, you'll find how to make Beagle's usage configuration for iOS projects."
---

---

## How to display a "Hello Beagle!" screen

After you installed **Beagle** on your project, we'll show how to render a screen and display your first **"Hello Beagle!"**.

{{% alert color="warning" %}}
Check out how to [**install Beagle**]({{< ref path="/get-started/installing-beagle/ios" lang="en" >}}) in case you haven't finished this step.
{{% /alert %}}

Currently, there are two types of approaches to render screens with Beagle: **remote** and **declarative.**

#### Remote Renderization

> Main approach used on Beagle because it's based on [**server-driven UI**]({{< ref path="/key-concepts#server-driven-ui" lang="en" >}}) concept. It allows you to build layouts dynamically, consuming the informations provided by a [**BFF**]({{< ref path="/key-concepts#backend-for-frontend" lang="en" >}}) through a remote URL.

#### Declarative Renderization

> Even if it's an alternative not based on server-driven UI, this renderization is a way you can locally state componentes with **Swift language.** With this, you can use a local component directly or through a JSON that represents it, simulating a response from BFF.

For this example, you will render a screen with **declarative way**, which means that all the processes will be done locally because, on this way, you'll know a little bit about Beagle and, in a few steps, test if your installation worked.

### Step 1: Create a class \(**MyBeagleScreen**\)

Create a class and name it as you wish. Here, we'll call it **`MyBeagleScreen`**.

The class will have only one method responsible to build a **`Screen`**.

```swift
import Beagle
import BeagleSchema

class MyBeagleScreen {
    static func make() -> Screen {
        return Screen(
            child: Container(
                children: [
                    Text("Hello Beagle!")
                ]
            ).applyFlex(
                Flex(
                    justifyContent: .center,
                    alignItems: .center,
                    grow: 1
                )
            )
        )
    }
}
```

{{% alert color="info" %}}
Notice that the **`Screen`** is being build using **`Flex`**. To understand better these components and your proprieties, go to the section **component's layout**.
{{% /alert %}}

### Step 2: Instantiate **BeagleScreenViewController**

Now it's time to display your first screen built using **Beagle**, and to do so you must:

Instantiate a **`BeagleScreenViewController`** with **`declarative`** type that will receive a **`MyBeagleScreen`**.

```swift
let beagleViewController = Beagle.screen(
    .declarative(
        MyBeagleScreen.make()
    )
)
```

{{% alert color="info" %}}
In case you want to use the **`remote`** type, check out [**how to display a server-driven screen.**](#how-to-display-a-hello-beagle-screen)
{{% /alert %}}

Once you made it, you just have to present it as you wish.

```swift
present(beagleViewController, animated: true, completion: nil)
```

{{% alert color="warning" %}}
Don't forget to add **`import Beagle`**.
{{% /alert %}}

### Step 3: Run the application

Now, run your application and, if everything works well, you will see a screen like this:

![](/shared/captura_de_tela_2020-04-07_a-s_17-removebg-preview-2-.png)

{{% alert color="success" %}}
**Congratulations,** you have created you first screen with **Beagle** 🎉
{{% /alert %}}

## Next steps

On this section, you saw how to create your first declarative screen using **Beagle**, on your simplest way, without entering on the server-driven UI concept.

👉To understand more about **how to configure Beagle** and use it applying server-driven UI, [**check out how to create an iOS project from scratch**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="en" >}}).
