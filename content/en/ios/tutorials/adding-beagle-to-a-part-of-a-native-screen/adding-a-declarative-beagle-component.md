---
title: Adding a declarative Beagle component
weight: 230
description: >-
  This section describes how to add a declarative Beagle component on a native screen
---

---

## Step 1: Create a native screen

On this tutorial, it was created the following `UIViewController`:

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

## Step 2: Create a declative component

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

## Step 3: Add the component on the screen

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
{{% alert color="success" %}}
Done! Now, start your application and the declarative screen will be rendered.
{{% /alert %}}

