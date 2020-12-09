---
title: Beagle Service Parameter
weight: 187
description: 'You will find here, what are the Beagle Service parameters.'
---

---

## Beagle Service

To use the Beagle library, it is necessary to create a Beagle Service with the configurarion where and how to search server-driven screens. 

> **On React** you can easily create a Beagle Service through the function**`createBeagleService(beagleServiceOptions)`**

> **On Angular**  the base code is automatically generated and the properties can be modify and added on **beagle.module.ts.**

The configuration object has the following properties: 

| Attribute | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| baseUrl | string |  |   ✓ | URL to the server with screens \(JSON\) on Beagle format.  |
| components | Map&lt;string,Component&gt; |  |   ✓  | A components map that will be rendered through Beagle's library. The values are key pairs and value where the key is identifier Beagle will always start by `beagle:` or `custom:`.  The value will always be the component connected to identifier. |
| strategy | [**Strategy**](cache-strategy) | beagle-with-fallback-to-cache |  | Cache strategy applied on requests of the server screen.  |
| fetchData | fetch |  |  | It allows to add a customized function t to make HTTP requests. |
| analytics | [**Analytics**](../../../../../api/analytics) |  |  | It allows the use of handlers to the tag capture of some events.  |
| customActions | Map&lt;string,[**ActionHandler**](../../beagle-for-android/custom-action-handler/)&gt; |  |  | A customized action map that can be interpreted by Beagle's library. It is a key and value map where the key will always be an identifier starting by `beagle:` or `custom:` and the value will be the [**ActionHandler**](../beagle-for-android/custom-action-handler/) connected to that action. |
| lifecycles | [**LifeCycleHook**](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MKkT7mv7ipZKPW7tBUp/v/v1.0-pt/features/customizacao/beagle-para-web/topicos-avancados/renderizacao) |  |  | A global map to add lifecycles behaviors of the components. Each cycle happens on the screen renderization process, before the components become HTML. |
| customStorage | Storage | localStorage |  | It replaces the localStorage default of the browsers. |
| useBeagleHeaders | boolean | true |  |  It uses or not Beagle's specific headers when it requests to the server screens.   |
| navigationControllers | Map&lt;string, NavigationController&gt; |  |  | It allows you to add control options of the visual response, like show the no items of loading and errors components.  |
