---
title: Beagle View
weight: 143
description: >-
  On this section, you find informations about Beagle View for iOS and how to
  use it.
---

---

## Introduction

Beagle View is an `UIView` that must be used when it is necessary to add a Beagle's component in a native screen that has other `views` and use `AutoLayout`.

## Using a Beagle View

### Creating an AutoLayout

Check out below  a native layout that can be used as an example of  `AutoLayout` use with Beagle:

```swift
struct AutoLayoutComponent: ServerDrivenComponent {
    var widgetProperties: WidgetProperties = WidgetProperties()
    
    func toView(renderer: BeagleRenderer) -> UIView {
        return AutoLayoutWrapper(view: AutoLayoutSample())
    }
}

class AutoLayoutSample: UIView {
    let constraintView: UIView
    let heightConstraint: NSLayoutConstraint
    
    override init(frame: CGRect) {
        let view = UIView()
        self.constraintView = view
        self.heightConstraint = view.heightAnchor.constraint(equalToConstant: 100)
        super.init(frame: frame)
        
        backgroundColor = .yellow
        layer.borderWidth = 1
        layer.borderColor = UIColor.black.cgColor
        
        view.backgroundColor = .cyan
        addSubview(view)
        
        translatesAutoresizingMaskIntoConstraints = false
    
        let label = UILabel()
        label.text = "AUTO"
        addSubview(label)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 5).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -5).isActive = true
        label.topAnchor.constraint(equalTo: topAnchor, constant: 5).isActive = true
        
        view.translatesAutoresizingMaskIntoConstraints = false
        view.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 5).isActive = true
        view.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -5).isActive = true
        view.topAnchor.constraint(equalTo: label.bottomAnchor, constant: 5).isActive = true
        view.widthAnchor.constraint(equalToConstant: 50).isActive = true
        heightConstraint.isActive = true
        
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
```

### Creating a BeagleView

A BeagleView can be created with like an `UIView`. Check out below an example of a `ViewController` with a container that has a text and a button:

```swift
class CustomViewController: UIViewController {
    
    private lazy var beagleView = BeagleView(
        Container(
            widgetProperties: WidgetProperties(
                id: "container", 
                style: Style().backgroundColor("#D3D3D3")
                    .margin(EdgeValue(all: 5))
                    .padding(EdgeValue(all: 5))
                    .flex(Flex().flexWrap(.wrap)))
        ) {
            Text("YOGA")
            Button(
                text: "ADD", 
                onPress: [AddChildren(componentId: "container", value: [AutoLayoutComponent()])]
            )
            AutoLayoutComponent()
        }
    )
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = "BeagleView"
        setupView()
    }
    
    private func setupView() {
        view.backgroundColor = .white
        let margin = view.layoutMarginsGuide
        
        view.addSubview(beagleView)
        beagleView.translatesAutoresizingMaskIntoConstraints = false
        beagleView.topAnchor.constraint(equalTo: margin.topAnchor).isActive = true
        beagleView.leadingAnchor.constraint(equalTo: margin.leadingAnchor).isActive = true
        beagleView.trailingAnchor.constraint(lessThanOrEqualTo: margin.trailingAnchor).isActive = true
        beagleView.bottomAnchor.constraint(lessThanOrEqualTo: margin.bottomAnchor).isActive = true
    }
}
```

Notice that the `onPress` of the button is called the `AddChildren` method that adds the native layout, which means that every time the button is pressed, it adds a `view` with native layout.
