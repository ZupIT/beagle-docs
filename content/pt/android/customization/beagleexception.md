---
title: BeagleException
weight: 121
description: >-
  Nesta seção, você encontra informações sobre a classe BeagleException.
---

---

## Introdução

A Beagle Exception é uma classe de exceção lançada quando ocorre um erro no Beagle:

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
