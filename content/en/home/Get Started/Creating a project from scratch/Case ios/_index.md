---
title: Case ios
weight: 38
description: "Here, you'll find a tutorial to start an iOS project with Beagle."
---

---

## Starting an iOS project

To create an iOS project for Beagle, you will need a Macbook with Xcode installed. In case you don't have it yet, [**download Xcode on the Apple Store.**](https://apps.apple.com/br/app/xcode/id497799835?mt=12)

Before you start, first it's necessary to create a project on `Xcode`. To do so, your just have to open the program and name a project. For this example, we'll call as **Beagle Sample.**

![](/captura-de-tela-2020-04-08-a-s-10.35.19.png)

After you created the project, we'll need to add the dependencies and, for that, we'll use `CocoaPods`' manager.

{{% alert color="info" %}}
If you wanna know more about how to use Cocoa Pods, [**check out their documentation.**](https://cocoapods.org/)
{{% /alert %}}

### Step 1: Configure Cocoa Pods

You'll use the terminal to install `CocoaPods,` so open your terminal and type _`sudo gem install cocoapods`_

```swift
sudo gem install cocoapods
```

To configure it, go to your folder through the terminal and type: _`pod init`_

```swift
pod init
```

Then, open your project's folder using the _`open`_ command.

```swift
open .
```

Once you made it, you must choose the _`podfile`_ file the same way as it's shown in the image:

![](https://lh3.googleusercontent.com/3zzsq_UBccpGCwaMfyYGC6KR9v4Dj4GD3LO311IOBocCIlj6N9kLiw8M6M6liCf3RnICjHpZL9Grw0JgylSSdp1jTkun-N8UYazKu7Wy0jkvBBohE6biktoz932oNFZpnf8hLrJK)

Open the file and add the following dependencies:

```swift
target 'Beagle Sample' do
     pod 'BeagleUI'
     pod 'YogaKit', :git => 'https://github.com/ZupIT/YogaKit'
 end
```

Open the terminal again and type the _`pod install`_ command so your dependencies can be installed.

```swift
pod install
```

After the installation, you should open a file with a **`workspace.`** extension. For this example, we'll name it as`Beagle Sample.workspace`

![](/captura-de-tela-2020-04-08-a-s-10.23.09.png)

### Step 2: Configure Beagle

Now that your project was created, you must make **Beagle's configuration**. To do so, follow the steps below:

1. Create a class called `BeagleConfig` .

This class will be responsible to contain part of Beagle's initial configuration. On her, we'll implement a **`config`** static function to apply these configurations.

2. On this function, create a constant called **`dependency`** that must be **`BeagleDependencies`** type.

We'll attribute to this constant some project's configurations like, for example, the list of basis URL that lists the `JSON` that will be used to build the the server-driven screen. To configure this constant, use the example below:

```swift
import Beagle
import Foundation

class BeagleConfig {
    static func config() {

        let dependencies = BeagleDependencies()
        dependencies.urlBuilder = UrlBuilder(
            baseUrl: URL(string: "http://localhost")
        )
        Beagle.dependencies = dependencies
    }
}
```

Now, we'll configure the **`SceneDelegate`** class so it can be used to initialize our application with Beagle from a screen through [**BFF**:](/pt/home/key-concepts#backend-for-frontend)

- Create a **`beagleScreen`** constant, that will receive the server-driven screen.
- The `init URL` argument must contain the [**relative URL**](/pt/home/resources/urls#relative-path) address that will be created on backend \(BFF\). For this example, we'll call it "/screen"

Follow the example below:

```swift
let beagleScreen = Beagle.screen(.remote(.init(url: "/screen")))
window = UIWindow(frame: UIScreen.main.bounds)
window?.windowScene = windowScene
window?.rootViewController = beagleScreen
window?.makeKeyAndVisible()
```

At the end of this process, the **`SceneDelegate`** class should be like this:

![](https://lh5.googleusercontent.com/JcpliGK0G3QJyLlZIDcwD8X7TZfO7QKEjCcVmWNjX0NHoS8gHl8XOZrSg6dfVntZkusNGmJxRWTa3Ps_xrhCQsIQPOzsFZ375uLqDx1qvuWJWeOnlnQkQy8EkcvMuWhJ6KU8tF-r)

### Step 3: Configure Xcode

Usually, the Xcode's proprieties are configured so your application can be initialized through `main.storyboard`. Now that will be done by Beagle and, for this configuration works, we must change the proprieties **deleting the references** related to `main.storyboard`.

These references are in the main project file, on**`Info tab`**, and are organized like this:

The first stays in the session:  
_**Custom iOS Target Properties**_ _**&gt;  
`Main storyboard file base name`**_

The second stays in the session:  
_**`Application Scene Manifest>`**_  
_**`Scene Configuration`&gt;**_  
_**`Application Session Role` &gt;  
`Item 0 (Default Configuration)`&gt;  
`Storyboard name`**_.

On the GIF below, you can see better how to remove these references:

![](/main%20%282%29.gif)

Well done, now Beagle is configured for your iOS application! All you have to do is [**set up a backend**](/pt/home/get-started/creating-a-project-from-scratch/case-backend) to answer to your server-driven applications's requests.

Once you finished the configuration, start your application and you'll have your first server-driven screen!  
You will see this screen:

![](/captura_de_tela_2020-04-07_a-s_17-removebg-preview-2-.png)
