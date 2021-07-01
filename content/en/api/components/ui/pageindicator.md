---
title: Pageindicator
weight: 344
description: You will find here a description of PageIndicatorComponent.
---

---

## What is it?

`PageIndicatorComponent` is a component that indicates the amount of pages and which one is the current [**PageView**]({{< ref path="/api/components/layout/pageview" lang="en" >}}).

| Attribute       | Type            | Required | Definition                                                        |
| :-------------- | :-------------- | :------: | :---------------------------------------------------------------- |
| selectedColor   | String          |    ✓     | Hexadecimal value to represent the color when selected.           |
| unselectedColor | String          |    ✓     | Hexadecimal value to represent the color when it is not selected. |
| numberOfPages   | Int             |          | Indicates the amount of pages.                                    |
| currentPage     | Bind&lt;Int&gt; |          | Indicates the page.                                               |

## How to use it?

An example on how to use `PageIndicator` can be foun on [**PageView**]({{< ref path="/api/components/layout/pageview#how-to-use-it" lang="en" >}}).
