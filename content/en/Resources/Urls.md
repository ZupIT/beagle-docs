---
title: Urls
weight: 213
description: >-
  Here, you'll find how Beagle deals with URLs between backend and frontend
  (BFF)
---

---

## Introduction 

Most elements from Beagle make use of a field to define the URLs. This field is sent to backend to indicate HTTP requests that an application needs to do and that are managed by Beagle's client.

## Types of paths

You have **two ways to use these paths** on Beagle: 

* Absolute
* Relative

### Absolute path

A type of path used when you want to ignore the base URL already configured in your frontend application. If you make this indication, Beagle will understand that the URL is already complete and it will use it like this:

Example of absolute path:**`https://api.zup.com.br/my-bff/home`** 

### Relative path

A type of path used when you decide to keep the base URL configured in your frontend application. 

For example, if you define a base URL like  **`https://api.zup.com.br/my-bff`** and receive a relative path somewhere like `/ home`, Beagle will create the complete URL like  **`https://api.zup.com. br /my-bff/home`**.

{{% alert color="info" %}}
It is recommended that you start with the relative path with an inverted bar \(/\), because this is how Beagle's indicates a relative URL. 
{{% /alert %}}

## Encode type

Beagle uses the Encoding type RFC 3986 standard when handling URLs.
