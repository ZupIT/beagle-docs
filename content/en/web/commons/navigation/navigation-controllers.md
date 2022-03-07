---
title: Navigation controllers
weight: 3
description: >-
  In this section, you will find information about the Navigation Controllers and how to handle the navigation feedback.
---

---

{{% alert color="warning" %}}
Attention: If you just need to change the loading and error components, read [this article]({{< ref path="/web/commons/navigation/loading-error-components" lang="pt" >}}) instead.
{{% /alert %}}

## What is it?

The navigation controllers are responsible for implementing the screen loading behavior, errors and success events, from the navigation between Beagle pages.

If you don´t set a custom navigation controller, Beagle will use the `Default NavigationController`, which implements the following behavior:

- **onLoading**: renders a Beagle UI tree with a single component called `custom:loading`.
- **onError**: renders a Beagle UI tree with a single component called `custom:error`.
- **onSuccess**: renders a Beagle UI tree with the UI tree returned from the backend.

{{% alert color="success" %}}
All these behaviors can be customized by implementing a custom `NavigationController`. You can have multiple navigation controllers in a single application, one for each section if you wish. The Beagle framework present in your Frontend can tell which ``NavigationController`` must be called for each set of screens that comes from an Backend, by using a property called `controllerId`
{{% /alert %}}

When navigating to a new Stack (using, for example, actions like PushStack, ResetStack or ResetApplication), the backend may provide a `controllerId` to the navigation action being triggered (You will only list an controller id in your Screen if you wish to use a `Custom Navigation controller`).

Beagle will use this id to find the corresponding ``NavigationController`` in the front-end application. In this way, you would be able to have an entire stack of screens with a different loading feedback behaviour.

## How to use it?

The NavigationController interface

### onLoading

Called when Beagle loads a new view. It receives the following object as a parameter:

- `view: BeagleView`: the [BeagleView]({{< ref path="/web/commons/advanced-topics/the-beagle-view" lang="pt" >}}) that renders this server driven UI.
- `completeNavigation: () => void`: a function to complete the navigation, i.e. to finally push the new page to the navigator with the `BeagleWidget`. You need to call it as soon as you want to render a Beagle JSON. For instance, if your loading feedback is to render a beagle component, you must call completeNavigation from within the `onLoading` method. If you'll render a Beagle UI only in the success event, you don't need to ever call `completeNavigation` because it gets automatically called after `onSuccess`.

### onError

Called when an error happens while loading a new view. It receives the same parameters as the `onLoading` method plus:

- `error: any`: the error thrown while making the request or processing the response.
- `retry: () => Promise<void>`: a function that, when called, tries to fetch the view again.

### onSuccess

Called whenever a view is successfully loaded. To render this view, the method must call `beagleView.getRenderer().doFullRenderer(screen)`. This this functionality renders the server driven screen to the current `BeagleView`. The `onSuccess` method accepts the same parameters as the `onLoading` plus:

- `screen: BeagleUIElement`: the server driven view recovered from the [ViewClient]({{< ref path="/web/commons/view-client" lang="en" >}}).

{{% alert color="success" %}}
`completeNavigation` is the only exception here, since it will be called anyway by Beagle
{{% /alert %}}

## Example

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

This is simple navigation controller with the sole purpose of demonstrating this feature.

- It shows a dialog every time a page starts loading. If an error happens.
- it shows an error dialog, which offers an option to retry.
- When the page is successfully loaded, it renders the page.

The only non-intuitive parameter in the NavigationController is the `completeNavigation`.

{{% alert color="success" %}}
You can ignore this if you don't intent to show a Beagle UI before the success event.
{{% /alert %}}

By default, if you don't call the `completeNavigation` function, the navigation will occur after the success event. But, navigation controllers, like the default one, uses the Beagle Structure to render the feedback.

The `Default NavigationController` renders the `custom:loading` Beagle component whenever a loading event happens and that is why it needs to call the `completeNavigation` function inside the `onLoading` method. In this way, Beagle can properly render the component.

## Registering the navigation controllers

1. You must create a map to handle all `navigation controllers` that can be used by the backend, where the keys are the *controller ids* and the values are instances of `NavigationController`.

2. To tell Beagle what NavigationController is the default, you need to set the property `defaultNavigationController`. The default navigation controller is used whenever no controllerId is provided or whenever no controller corresponding to the provided id is found.

If you have three navigation controllers: `inYourFace`, `secured` and `public`. `inYourFace` is the default, while `secured` and `public` are used in specific sections of the app and are referenced via controllerId, set on your Screen on the backend. The configuration would be as following:

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
