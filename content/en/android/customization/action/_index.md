---
title: Ações
weight: 102
description: >-
  Nesta seção, você encontra a descrição de como criar uma ação customizada e
  detalhes dos métodos que ela implementa.
---

## Introdução

An action \(`Action`\) is a Beagle component that can be called through events triggered by other components, \(including other actions\)

Beagle already have some defaults actions, however it is possible to create custom actions.

{{% alert color="danger" %}}
It is **mandatory** to add the `@Transient` tag for **all attributes** present in the classes that will represent the actions so that they are not taken into account in the component serialization and deserialization.
{{% /alert %}}