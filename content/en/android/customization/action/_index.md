---
title: Ações
weight: 102
description: >-
 In this section, you will find how to create a customized action and which methods it implements.
## Introduction 

An action \(`Action`\) is a Beagle component that can be called through events triggered by other components, \(including other actions\)

Beagle already has some default actions and it is possible to create custom actions.

{{% alert color="danger" %}}
It is **mandatory** to add the `@Transient` tag for **all attributes** in the classes. It will represent the actions so they are not taken into account in the component serialization and deserialization.
{{% /alert %}}
