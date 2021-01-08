---
title: Sourcery
weight: 161
description: Information about how to use and install Sourcery
---

---

## What is Sourcery?

[**Sourcery**](https://github.com/krzysztofzablocki/Sourcery) is a code generator that helps boilerplate code creation.

It is recommended, however the installation of this library **is optional**. If you want to install, follow the instructions below.

## Installation

After you have integrated Beagle, now you can intall Sourcery in your computer using [**Homebrew**](https://brew.sh/).

```bash
$ brew install sourcery
```

## Configuration

It is necessary to configure the path files template, the generated files and the path where Sourcery will scan the font code. Follow the next steps:

**Step 1:** in **Build Phases**, create a new **Run Script Phase**;

**Step 2:** put **ABOVE** **Compile Sources**; If you don't do this, sourcery won't be able to compile the generated code.

**Step 3:** paste the following code:

```bash
if which sourcery >/dev/null; then
unset SDKROOT
sourcery --config $SRCROOT
else
echo "warning: Sourcery not installed, download using brew install sourcery"
fi
```

This script warns **Xcode** to look for a `.sourcery.yml` file in your project root. It will have some properties that Sourcery will have to know to generate the code.

The list below shows the attributes used in this file:

- `sources` : path for your swift files. It is the root of the project.
- `templates` : path for your template files that Sourcery will use to generate the code.
- `output` : o path for generates files.

{{% alert color="info" %}}
For more information and details about Sourcery, check their [**documentation**](https://cdn.rawgit.com/krzysztofzablocki/Sourcery/master/pt/home/usage.html#configuration-file).
{{% /alert %}}

### `.yml` file configuration

The `.yml` file configuration are different due to the way Cocoapods and Carthage deals with the Beagle's files.

For the Sourcery to use the Beagle's templates, you must specify the `SourceryProtocols.swif` in sources and the template path in **templates**.

{{% alert color="warning" %}}
The attributes written inside the`.yml` consider that **Cartfile** or **Podfile** file are in the same directory that `.xcodeproj` or `.xcworkspace`
{{% /alert %}}

{{< tabs id="T71" >}}
{{% tab name="Cocoapods" %}}

```yaml
sources:
  include:
    - RootOfYourProject
    - Pods/BeagleUI/iOS/Sources/BeagleUI/CodeGeneration/SourceryProtocols.swift
templates:
  - Pods/BeagleUI/iOS/Sources/BeagleUI/CodeGeneration/Templates
output: RootOfYourProject/CodeGeneration/Generated
```

{{% /tab %}}

{{% tab name="Carthage" %}}

```yaml
sources:
  include:
    - RootOfYourProject
    - Carthage/Checkouts/beagle/iOS/Sources/BeagleUI/CodeGeneration/SourceryProtocols.swift
templates:
  - Carthage/Checkouts/beagle/iOS/Sources/BeagleUI/CodeGeneration/Templates
output: RootOfYourProject/CodeGeneration/Generated
```

{{% /tab %}}
{{< /tabs >}}

## Use

By default, custom widgets need to implement`init(from decoder: Decoder) throws`. This can be automated with Sourcery, like the example below:

```swift
import UIKit
import BeagleUI

enum ComponentColorTypes: String, Decodable {
    case veryColorful
    case blackAndWhite
}

struct SomeComponent: Widget {

    var widgetProperties: WidgetProperties
    var property1: String
    var property2: Double?
    var colorPallete: ComponentColorTypes = .blackAndWhite

    func toView(context: BeagleContext, dependencies: RenderableDependencies) -> UIView {
        return UIView()
    }
}
```

Without the metaprogramming, it is necessary to write the following code:

```swift
extension SomeComponent {

    enum CodingKeys: String, CodingKey {
        case property1
        case property2
        case colorPallete
    }

    internal init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        widgetProperties = try WidgetProperties(from: decoder)
        property1 = try container.decode(String.self, forKey: .property1)
        property2 = try container.decodeIfPresent(Double.self, forKey: .property2)
        colorPallete = try container.decode(ComponentColorTypes.self, forKey: .colorPallete)
    }
}
```

It is necessary with Sourcery, to do the structs in accordance with **AutoDecodable** and the same code will be generated

This same process works for all protocols and it is also possible to create templates and customized protocols.

{{% alert color="warning" %}}
After the file generation **AutoDecodable.generated.swift** and **Equality.generated.swift** using Sourcery, it is necessary to insert them in the project.
{{% /alert %}}

## **Available protocols**

Some protocols are already on Beagle. They are located in `SourceryProtocols.swift.` See the list below:

| Protocol                  | Use                                                                                                                                                        |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutoEquatable             | Implements [equatable](https://developer.apple.com/documentation/swift/equatable)                                                                          |
| AutoDecodable             | Implements customized [decodable](https://developer.apple.com/documentation/swift/decodable), according to the Beagle's pattern. It only works for structs |
| AutoInitiable             | Implements customized init, according to the Beagle's pattern                                                                                              |
| AutoInitiableAndDecodable | Protocols combination AutoInitiable and AutoDecodable                                                                                                      |
