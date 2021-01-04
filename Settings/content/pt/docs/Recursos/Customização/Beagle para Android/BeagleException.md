---
title: BeagleException
weight: 121
description: >-
  E uma classe de exceção, que é lançada quando ocorre um erro no Beagle
---

---

## Introdução

A Beagle Exception é uma classe de exceção lançada quando ocorre um erro no Beagle.

```kotlin
open class BeagleException
constructor(
    override val message: String,
    override val cause: Throwable? = null
) : Exception(message, cause)
```

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :--- |
| message | String | ✓ | Mensagem da exceção lançada. |
| cause | Throwable |   | Causa da exceção. |
