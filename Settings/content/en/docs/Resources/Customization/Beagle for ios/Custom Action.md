---
title: Custom Action
weight: 135
description: >-
  You will find here how to create a CustomAction class and a description about
  the methods
---

---

## Introduction

`action` is a code block that can run when some event is defined. Beagle already has some by pattern, however it is possible to create your own customized action. 

## Example

### How to create a custom action?

To create a custom action, follow the next steps: 

1.  Create a class that implements an `action` **interface**: 

```text
struct CustomAction: Action {
    func execute(
        controller: BeagleController, 
        origin: UIView) {
            print("Custom action foi chamada!")
    }
}
```

2. After that, the interface will request that the method `execute` is implemented. On this method the code block will be implemented, then your action will run; 

3. Now, it is necessary to register this new action on Beagle's dependencies: 

```text
let dependencies = BeagleDependencies()
dependencies.decoder.register(
    action: CustomAction.self,
    named: "CustomAction"
)
Beagle.dependencies = dependencies
```

### How to use it?

See below an example on how to use the button that runs the customized action on the click event: 

```text
Button(
    text: "do request",
    onPress: [
        CustomCAction()
    ]
)
```
