---
title: "Hugo Shortcodes"
weight: 2
description: >-
    Learn how hugo shortcuts works to create html components
    without losing the markdown editing experience.
---

---

## What is a shortcode?

Often the markdown is not enough to express good content, for example, adding a video to exemplify a subject or positioning a centralized image, being necessary to add html code for this. Given this limitation, the "Hugo" framework offers us a solution to avoid losing the unique experience using markdown, abstracting the need to use html and css. This solution is called shortcode.

## Available shortcodes

### **Alerts**

Alerts are used to highlight important information when following a configuration step, tutorial, or to highlight requirements necessary for some functionality.

- Syntax example

```go-text-template
{{%/* alert color="info" %}}
  ## Alert example
  - info - color - dark-blue
{{% /alert */%}}

{{%/* alert color="success" %}}
  ## Alert example (2)
  - sucess - color - green
{{% /alert */%}}

{{%/* alert color="warning" %}}
  ## Alert example (2)
  - warning - color - orange
{{% /alert */%}}

{{%/* alert color="danger" %}}
  ## Alert example (2)
  - danger - color - red
{{% /alert */%}}
```

- It will be rendered as:

{{% alert color="info" %}}

## Alert example

- info - color - dark-blue
{{% /alert %}}

{{% alert color="success" %}}

## Alert example (2)

- sucess - color - green

{{% /alert %}}

{{% alert color="warning" %}}

## Alert example (3)

- warning - color - orange
{{% /alert %}}

{{% alert color="danger" %}}

## Alert example (4)

- danger - color - red
{{% /alert %}}

### **Videos**

You can embed youtube videos directly into the documentation. Ideal to complement that tutorial content, or dissemination. To do this, use the video ID located in your url, eg:

in this link: ```https: //www.youtube.com/watch? v = ECNnZ6rP9qk``` the ID is after ``` v = ```, that is: ECNnZ6rP9qk

- Sintax example:

```go-text-template
{{</* youtube ECNnZ6rP9qk */>}}
```

- It will be rendered as:

{{< youtube ECNnZ6rP9qk >}}

### **Tabs**

Tabs are useful for exemplifying source codes that can be made in different programming languages, or some mandatory configuration step on different platforms, such as, for example, android, ios, backend or web.

- Syntax example:

```go-text-template
{{</* tabs id="MyUniqueTabID" >}}

{{% tab name="Tab1" %}}
{{% /tab %}}

{{% tab name="Tab2" %}}
{{% /tab %}}

{{% tab name="Tab3" %}}
{{% /tab %}}
{{< /tabs */>}}
```

- It will be rendered as:

{{< tabs id="MyTabID" >}}

{{% tab name="Tab1" %}}

## This is the first example of TAB

{{% /tab %}}

{{% tab name="Tab2" %}}

## The second example is here

{{% /tab %}}

{{% tab name="Tab3" %}}

## Yeah, this is the TAB 3

{{% /tab %}}

{{< /tabs >}}

---

> If you want to learn more about shortcodes, we recommend that you access Hugo [**official documentation**](https://gohugo.io/content-management/shortcodes/) and learn more about creating custom shortcodes.
