---
title: Overview
weight: 1
type: overview
description: "In this section, you will learn more about Beagle built-in tests and tests in Beagle applications."
---

---

## Unit tests

Unit tests measure code functionality at its minor fraction or unit. Beagle has its own unit tests, and they should be frequently reviewed, updated or added to make sure important code units are tested.

## User interface tests

Beagle implements its own UI tests to make sure interface level components and their behavior work as expected. Both mobile and web platforms are tested this way and the main frameworks used are:
- [Cucumber](https://cucumber.io/)
- [Espresso](https://developer.android.com/training/testing/espresso)
- [XCTest](https://developer.apple.com/documentation/xctest)
- [Appium](http://appium.io/)
- [Cypress](https://www.cypress.io/)


## Mobile instrumented tests 

Instrumented tests, also known as instrumented unit tests, are tests that run on physical devices or emulators, and they take advantage of APIs to forward (instrument \ orchestrate) instructions from the code to the device or emulator. These tests provide more fidelity than local unit tests, but they run slower. 
On Beagle instrumented tests, sometimes a server-driven component doesn't or cannot have an ``ID``. In this case we add a widget element that refers to the component, and an ``ID``, so we can identify the component by the programmatically generated ``ID``.