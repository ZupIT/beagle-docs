---
title: Development status
weight: 193
description: >-
  You will find here information about the current development status of Beagle React Native.
---

---

## Current development status
This is our current development status. Please help us get to a stable version!

To contribute to this project, please use
[this repository](https://github.com/ZupIT/beagle-web-react).

### Core features
Fully implemented. Renderization, context, custom components and custom actions all work! In truth,
if you don't intend on using the default components and default actions, Beagle React Native is
ready for production.

### Components
| Component      | Status          | Description                                                                                     |
|----------------|-----------------|-------------------------------------------------------------------------------------------------|
| Container      | done            |                                                                                                 |
| Screen         | not implemented | Working as a container                                                                          |
| Button         | done            |                                                                                                 |
| Image          | incomplete      | There might be some problems with the image size. Placeholder is not implemented.               |
| TextInput      | done            |                                                                                                 |
| Lazy component | done            |                                                                                                 |
| ListView       | incomplete      | Extremely buggy and slow. Mainly on Android.                                                    |
| GridView       | not implemented |                                                                                                 |
| PageView       | incomplete      | Doesn't render the children properly. Can't navigate between pages.                             |
| SimpleForm     | not implemented | Working as a container                                                                          |
| TabBar         | incomplete      | The tabbar doesn't scroll There seems to be a bug where a second tab bar in a page won't render |
| Text           | done            |                                                                                                 |
| Touchable      | done            |                                                                                                 |
| WebView        | done            |                                                                                                 |

We also need to check the styling here. Some of the components, even the ones marked as done, have
way to many styles, which might create some undesired behavior.

### Actions
| Actions         | Status          | Description                                                      |
|-----------------|-----------------|------------------------------------------------------------------|
| PushStack       | incomplete      | It works exactly like in web, i.e. the back button does nothing. |
| PopStack        | incomplete      | It works exactly like in web, i.e. the back button does nothing. |
| PushView        | incomplete      | It works exactly like in web, i.e. the back button does nothing. |
| PopView         | incomplete      | It works exactly like in web, i.e. the back button does nothing. |
| PopToView       | incomplete      | It works exactly like in web, i.e. the back button does nothing. |
| ResetStack      | incomplete      | It works exactly like in web, i.e. the back button does nothing. |
| OpenNativeRoute | not implemented | will try to use the browsers location, which doesn't exist.      |
| OpenExternalUrl | not implemented | will try to use the browsers location, which doesn't exist.      |
| AddChildren     | done            |                                                                  |
| Condition       | done            |                                                                  |
| Confirm         | not implemented |                                                                  |
| SendRequest     | done            |                                                                  |
| SetContext      | done            |                                                                  |
| SubmitForm      | not implemented |                                                                  |
