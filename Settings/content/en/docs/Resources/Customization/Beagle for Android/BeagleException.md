---
title: BeagleException
weight: 121
description: >-
  An exception class, which is thrown when an error occurs in Beagle
---

---

## Introduction

An exception class, thrown when an error occurs in Beagle.

```kotlin
open class BeagleException
constructor(
    override val message: String,
    override val cause: Throwable? = null
) : Exception(message, cause)
```

| **Attributes** | **Type** | **Required** | **Description** |
| :--- | :--- | :---: | :--- |
| message | String | ✓ | Exception message thrown. |
| cause | Throwable |   | Cause of the exception. |