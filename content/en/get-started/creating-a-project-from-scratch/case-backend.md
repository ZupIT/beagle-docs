---
title: Case Backend
weight: 45
description: "Here, you'll find a tutorial to start a backend project with Beagle."
---

---

## Starting a Backend project

In this tutorial, the Backend will be implemented with Beagle so that it can respond to requests from your server-driven application, be it on Android, iOS or WEB.

### Requirements

To create a Beagle project for backend, it is necessary:

- IDE Intelij IDE Community

### Step 1: Configure using Spring initializr

The first step to configure your backend is to access [**Spring**](https://start.spring.io/) **website.**  
It will create a`Maven` project that will help your project's configuration.

![](https://lh5.googleusercontent.com/ZshvFubtunY4x0JWWBLgSmFesUx7G2AVlSrCcS96efc2lJtAakhYJ-zxgDx7CkcCMOC6zedwUAS3ThBpVXfS8jyvieNLgL3ZJIxWnHJFLE77IOXZs3UqOR8TQazINC_enzoO4Y4Q)

**Spring configuration**

- Choose `Maven` as your project option;
- Check `kotlin` as a language;
- Choose the initial version bigger than 2.1.
- **Group** is the name it will be used as a hierarchy in the beginning. For this example, it can be **com.example;**
- **Artifact** is the project's name. You will name it BFF;
- **Description** contain a simple description of the project;
- **Packaging** must be checked as JAR;
- **Java** must be chosen as the java version of your system;
- Click on **`generate`** and it will download your project as.zip;
- Extract the file in your chosen folder.

### Step 2: Import your project to Intellij

Follow the steps below to import the project you have created. First, open **intellij** and click on `Import project`.

![](https://lh3.googleusercontent.com/EIBFU3xFKyN_ng7DsAEcdoip3xYH6gIKIbLRWbg6LRbITQMd_6tcwyp5iApKn2KPDSnasioiYyb48fMNfcEW9G3pyRE0lSXGXQHPk_FBvKO21wto8qvYSa7Jwi2eNEp5XVSxQmCQ)

1. Choose the file where you put your`Spring project` and click **`ok`**.
2. Click on **Import projects from external model** and choose `Maven` and then, click **finish**.

![](https://lh6.googleusercontent.com/6gOx1UCq-ZUK0yckdUAO2-Jb1YWOjw6kNijGu8-LVPyaDJuYAC2J7DcugsKgFDVqSkhF1RN5zKQ0s47l0ZmFgrq9ln7SPL-isTczLb9h5PQnXhUyWl6S7_QaUyUPGN-SyYVK_AZC)

## Configuring Beagle

### Step 1: Configure the project

As a starting point, follow this step by step to [**install the backend**]({{< ref path="/get-started/installing-beagle/backend" lang="en" >}}).

### Step 2: Define the structure

The second step is to create some packages to better organize the project. They will be named: **`builder`**,**`service`** and **`controller`**

1. Click `src> main> kotlin` until you find the name of your project.
2. Right-click `new> package`
3. Name it **`builder`** and press enter.
4. Repeat the process creating the other two packages, naming them **`service`** and **`controller`**
5. After creating the packages, your screen should look like this:

{{% alert color="warning" %}}
  Please, take notice that you must create theses packages at the same package that contains your application file, just like in the picture below
{{% /alert %}}

![](/shared/image%20%2829%29.png)

### Step 3: ‌ Create the application service

The first class that we will create is the Builder. It is in this file that the Server-Driven screen must be structured:

1. Right-click the builder package and click **`new> Kotlin File / Class`** and name it `ScreenBeagleBuilder`
2. This class must extend from `ScreenBuilder` \(which is an internal Beagle class\).
3. Note that it will replace the `build method` and this is where the Server-Driven screen will be implemented.
4. In this step, you can copy and paste the code below into your class:

```kotlin
import br.com.zup.beagle.core.Style
import br.com.zup.beagle.ext.applyStyle
import br.com.zup.beagle.ext.unitReal
import br.com.zup.beagle.widget.Widget
import br.com.zup.beagle.widget.action.Alert
import br.com.zup.beagle.widget.core.AlignSelf
import br.com.zup.beagle.widget.core.EdgeValue
import br.com.zup.beagle.widget.core.Flex
import br.com.zup.beagle.widget.core.TextAlignment
import br.com.zup.beagle.widget.layout.Container
import br.com.zup.beagle.widget.layout.Screen
import br.com.zup.beagle.widget.layout.ScreenBuilder
import br.com.zup.beagle.widget.ui.ImagePath
import br.com.zup.beagle.widget.ui.Text

object ScreenBeagleBuilder : ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                    Text(
                            text = "Hello Beagle!"
                    ).applyStyle(
                            Style(margin = EdgeValue(top = 16.unitReal()),
                                    flex = Flex(alignSelf = AlignSelf.CENTER)
                            )
                    ),
                    Text(
                            text = "Beagle is a cross-platform framework which provides usage of the " +
                                    "Server-Driven UI concept, natively in iOS, Android and Web applications. " +
                                    "By using Beagle, your team could easily change application's layout and" +
                                    " data by just changing backend code."
                    ).applyStyle(
                            Style(margin = EdgeValue(
                                    left = 16.unitReal(),
                                    right = 16.unitReal(),
                                    top = 20.unitReal()
                                    )
                            )
                    )
            )
        )
    )
}
```

The next class we will create is **`Service`**:

1. Right-click the service package and click `New> Kotlin File / Class.`
2. Name it `ScreenBeagleService`. This class must be annotated with `@Service`, which is a Spring annotation
3. **Implement** a method called `createScreenBeagle` that returns the `ScreenBeagleBuilder` class:

```kotlin
import com.example.bff.builder.ScreenBeagleBuilder
import org.springframework.stereotype.Service

@Service
class ScreenBeagleService {
  fun createScreenBeagle() = ScreenBeagleBuilder
}
```

And then the **`Controller`** class.

1. In the controller package, create a class and name it `ScreenController`. It must be annotated with `@RestController` to expose its components through the Rest API.
2. He will receive a `ScreenBeagleService` through his main builder, so Spring can inject it for you.
3. Create your class as in the example below:

```kotlin
import com.example.bff.service.ScreenBeagleService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ScreenController(
        private val screenBeagleService: ScreenBeagleService
) {
    @GetMapping("/screen")
    fun getFirstScreen() = screenBeagleService.createScreenBeagle()
}
```

- The `@RestController` annotation defines this class as a controller class
- The `screenBeagleService` parameter must have its type defined as: `ScreenBeagleService`
- The `getScreen` method needs to annotate `@ GetMapping ("/ screen")` to create the `"/ screen"` path in the application's URL and receive the result of the `createScreenBeagle` function

The backend is ready to serve as the BFF of your Server-Driven application.

## Initializing the application

Now it's time to start your application, follow the next steps:

### **Step 1: Run the project**

Click on the green triangle named **`run`**, or press and hold SHIFT + F10 to run your back-end application.

Your screen should look like this:

![](/shared/sem-titulo2.png)

### **Step 2: Make a request**

Open your browser and type: localhost: 8080 / screen

A JSON structure must appear on your screen similar to the structure below:

```kotlin
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Hello Beagle!",
      "style" : {
        "margin" : {
          "top" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        },
        "flex" : {
          "alignSelf" : "CENTER"
        }
      }
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "Beagle is a cross-platform framework which provides usage of the Server-Driven UI concept, natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code.",
      "style" : {
        "margin" : {
          "left" : {
            "value" : 16.0,
            "type" : "REAL"
          },
          "top" : {
            "value" : 20.0,
            "type" : "REAL"
          },
          "right" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        }
      }
    } ]
  }
}
```

### **Step 3: Check the process**

If that is not the answer you had, it is necessary to check the configuration process again. Go back to the previous steps and start with the classes that have the biggest mistakes when configured for the first time.

Or, if you prefer, take the finished project from our repository and compare it with yours. You can access the [**repository here.** ](https://github.com/ZupIT/beagle/tree/master/backend/sample)

{{% alert color="info" %}}
In order to use the backend service, you must have the front end prepared for Beagle, whether Android, iOS or Web. Everything will work using a JSON from the Backend.
{{% /alert %}}

To learn more about configuring your frontend environment, see more at:

👉 Beagle implementation tutorial for [**Android**]({{< ref path="/get-started/creating-a-project-from-scratch/case-android/" lang="en" >}}).

👉Beagle implementation tutorial for [**iOS**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="en" >}}).

👉Beagle implementation tutorial for [**Web**]({{< ref path="/get-started/creating-a-project-from-scratch/case-web" lang="en" >}}).
