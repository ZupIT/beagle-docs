---
title: Start a Beagle flow
weight: 3
description: >-
  In this section, you will find information on how to use openBeagleScreen function and what it does.
---

---

# What is it?
The `openBeagleScreen` is the entrypoint to a Server Driven flow. When it's a called a new Page is pushed to the parent navigator containing the follow widget structure:

- RootNavigator
  - StackNavigator
    - screenBuilder result

Both RootNavigator and StackNavigator are spawned by Beagle to deal with navigations within the server driven flow. The screenBuilder result is the Widget returned by the third parameter passed to `openBeagleScreen`. If no third parameter is passed, then the default screenBuilder is used, which just returns the BeagleWidget. The BeagleWidget is responsible for displaying the server driven content.

We use two navigators (RootNavigator and StackNavigator) so we're able to represent the Beagle Navigation structure, which is composed of a stack of stack of screens. In our implementation, the RootNavigator holds one StackNavigator for each stack and the StackNavigators hold the screens themselves.

## 1st parameter: the route (required)
The first parameter of `openBeagleScreen` is a BeagleRoute. A BeagleRoute can be either a LocalView or a RemoteView. Normally, only remote views will be used, but for testing and some edge cases, it may be interesting to use a LocalView. Local views are JSONs that can be rendered without a fetch operation to the server.

### RemoteView
A RemoteView is instantiated with one required positional parameter (url) and many optional named parameters. For instance, `RemoteView('/home')` is used to fetch the view from the address `GET $baseUrl/home`. Any additional configuration can be passed with the following named parameters:

- **fallback:** Beagle UI tree to render if the request fails.
- **shouldPrefetch:** useless when used for the `openBeagleScreen` function. In other situations, it tells the ViewClient to fetch the view as soon as possible and not wait for an specific action to trigger it.
- **httpAdditionalData:** used to set up the request. An HttpAdditionalData contains:
  - **method:** the HttpMethod, the default is GET.
  - **headers:** a map from string to string with all headers to pass along with the request.
  - **body:** the body of the request. This is only valid for POST requests. The value passed here must be serializable!

### LocalView
The LocalView is a wrapper for a BeagleUIElement. See the example below:

```dart
final myLocalView = LocalView(BeagleUIElement({
  '_beagleComponent_': 'beagle:screen',
  'id': 'myLocalView',
  'child': {
    '_beagleComponent_': 'beagle:text',
    'text': 'Hello World'
  }
}))
```

## 2nd parameter: the context (required)
Like everything in Flutter, we need the BuildContext to set everything up, so just pass the context received by your build method.

## 3rd parameter: the screen builder (optional)
The `screenBuilder` is a function that tells Beagle how to create every screen that comes from Beagle and is the ideal place to implement a UI where part is server driven and part is not. See the example below:

```dart
Widget screenBuilder(BeagleWidget beagleWidget, BuildContext context) => Column(
  children: [
    myHeader,
    myMenu,
    beagleWidget,
    footer,
  ]
)

Widget build(BuildContext context) => ElevatedButton(
  onPressed: () => openBeagleScreen(route: RemoteView('/welcome'), context: context, screenBuilder),
  child: Text('Start beagle flow'),
);
```

In the example above, instead of rendering pure server driven screens, Beagle will render UIs with content that mixes widgets that come from the frontend and the backend. In this case, it will place a header, a menu and then the server driven content. After the server driven content, it also places a footer.

When not provided, Beagle uses the default screen builder, which is: `Widget screenBuilder(BeagleWidget beagleWidget, BuildContext context) => beagleWidget;`

## 4th parameter: the controllerId (optional)
The `controllerId` makes it so the first navigation stack doesn't use the default navigation controller, but instead, the one that corresponds to the provided id. To know more about navigation controllers please read [article about navigation controllers]({{< ref path="/flutter/navigation/navigation-controllers" lang="en" >}}).

# What does it do?
The `openBeagleScreen` function pushes a new page to the parent navigator. This new page contains a RootNavigator which is initialized with a StackNavigator. The StackNavigator is initialized with a page that contains the BeagleWidget.

The stack navigator is responsible for calling the ViewClient service with the BeagleRoute passed as parameter to the function `openBeagleScreen`. When the loading starts, the StackNavigator calls the navigation controller method `onLoading`. The default navigation controller renders a BeagleUITree containing a single component called `custom:loading`. When the loading succeeds, the StackNavigator calls the method `onSuccess` of the navigation controller. The default navigation controller just renders the BeagleUIElement that has come from the backend. If an error happens, the StackNavigator calls `onError` on the navigation controller. The default navigation controller renders a BeagleUIElement containing the component `custom:error`. For more information on navigation controllers, check this [link]({{< ref path="/flutter/navigation/navigation-controllers" lang="en" >}}).

The stack navigator is also responsible for instantiating the BeagleWidget. Each page in the Stack Navigator must have a different BeagleWidget.

The BeagleWidget is the widget responsible for rendering the server driven UI itself. It holds a reference to a BeagleView, which is the main structure of Beagle. The BeagleView stores the Beagle UI tree and is responsible for making changes and re-rendering it whenever necessary. To know more about the BeagleView, check [this article]({{< ref path="/flutter/other/beagle-view" lang="en" >}}).
