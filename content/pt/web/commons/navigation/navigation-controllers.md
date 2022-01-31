---
title: Navigation controllers
weight: 3
description: >-
  In this section, you will find information on how to control the navigation feedback.
---

---

{{% alert color="warning" %}}
Attention: If you just wanna change the loading and error components, read [this article]({{< ref path="/web/commons/navigation/loading-error-components" lang="pt" >}}) instead.
{{% /alert %}}

# Introduction
The navigation controllers are responsible for implementing the behavior of the loading, error and success events of the navigation between Beagle pages.

If not set, Beagle will use the `DefaultNavigationController`, which implements the following behavior:

- **onLoading**: render a Beagle UI tree with a single component called `custom:loading`.
- **onError**: render a Beagle UI tree with a single component called `custom:error`.
- **onSuccess**: render a Beagle UI tree with the UI tree returned from the backend.

This behavior can be customized by implementing your own NavigationController. You can have multiple navigation controllers in a single application, one for each section, for instance. Beagle, from the backend, can tell which NavigationController must be used for the next set of screens.

When navigating to a new Stack (PushStack, ResetStack or ResetApplication), the backend can provide a controllerId to the navigation action and Beagle uses this id to find the corresponding NavigationController in the front-end. We can have an entire stack that has a totally different loading feedback, for example.

# The NavigationController interface

## onLoading
Called whenever Beagle is loading a new view. It receives the following object as a parameter:

- `view: BeagleView`: the [BeagleView]({{< ref path="/web/commons/advanced-topics/the-beagle-view" lang="pt" >}}) that renders this server driven UI.
- `completeNavigation: () => void`: a function to complete the navigation, i.e. to finally push the new page to the navigator with the `BeagleWidget`. You need to call it as soon as you want to render a Beagle JSON. For instance, if your loading feedback is to render a beagle component, you must call completeNavigation from within the `onLoading` method. If you'll render a Beagle UI only in the success event, you don't need to ever call `completeNavigation` because it gets automatically called after `onSuccess`.

## onError
Called whenever an error happens while loading a new view. It receives the same parameters as the `onLoading` method plus:

- `error: any`: the error thrown while making the request or processing the response.
- `retry: () => Promise<void>`: a function that, when called, tries to fetch the view again.

## onSuccess
Called whenever a view is successfully loaded. To render the view, this method must call `beagleView.getRenderer().doFullRenderer(screen)`. This renders the server driven screen to the current `BeagleView`. With the exception of `completeNavigation`, which will be called anyway by Beagle, the `onSuccess` method accepts the same parameters as the `onLoading` plus:

- `screen: BeagleUIElement`: the server driven view recovered from the [ViewClient]({{< ref path="/web/commons/view-client" lang="en" >}}).

# Example

```typescript
import { NavigationController } '@zup-it/beagle-web'

const inYourFace: NavigationController = {
  onError: (_, error, retry) => {
    const shouldRetry = confirm(`An error happened while navigating. ${error}. Click ok to retry or cancel to dismiss.`)
    if (shouldRetry) retry()
  },
  onLoading: () => alert('Loading started. Click ok to continue.'),
  onSuccess: (view, screen) => view.getRenderer().doFullRender(screen),
}
```

This is a terrible navigation controller with the sole purpose of demonstrating the feature. It shows a dialog every time a page starts loading. If an error happens, it shows an error dialog, which offers an option to retry. When the page is successfully loaded, it renders the page.

The only non-intuitive parameter of the functions in a NavigationController is the `completeNavigation`. You can ignore this if you don't intend to show a Beagle UI before the success event. By default, i.e., if you don't call `completeNavigation`, the navigation with the Beagle structure of the new view will only happen after the success event. But, some navigation controllers, like the default one, uses the Beagle Structure to render the feedback. The DefaultNavigationController renders the Beagle component `custom:loading` whenever a loading event happens and because of this, it needs to call `completeNavigation` right on the method `onLoading`, so Beagle can properly render the component.

# Registering the navigation controllers
To provide all navigation controllers that can be used by the backend, you must create a map where the keys are the controller ids and the values are instances of `NavigationController`.

To tell Beagle what NavigationController is the default, you need to set the property `defaultNavigationController`. The default navigation controller is used whenever no controllerId is provided or whenever no controller corresponding to the provided id is found.

Suppose you have three navigation controllers: `inYourFace`, `secured` and `public`. `inYourFace` is the default, while `secured` and `public` are used in specific sections of the app and are referenced via the controllerId, from the backend. The configuration would be as following:

{{< tabs >}}
{{% tab name="Angular" %}}
```typescript
@BeagleModule({
  defaultNavigationController: inYourFace,
  navigationControllers: { secured, public },
  // ...
})
export class Beagle {}

createBeagleUIService({
  defaultNavigationController: inYourFace,
  navigationControllers: { secured, public },
  // ...
})
```
{{% /tab %}}

{{% tab name="React" %}}
```typescript
createBeagleUIService({
  defaultNavigationController: inYourFace,
  navigationControllers: { secured, public },
  // ...
})
```
{{% /tab %}}
{{< /tabs >}}