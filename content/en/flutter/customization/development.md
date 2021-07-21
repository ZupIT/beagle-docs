---
title: Development
weight: 3
description: >-
  In this section, you will find information on how Beagle Flutter's developement is going.
---

---

## Current development status
This is our current development status. Please help us get to a stable version!

To contribute to this project, please use [this repository](https://github.com/ZupIT/beagle).

### Core features
The core features are almost done, see below what is already working:
- Renderization;
- Context;
- Custom components
- Custom actions. 
The layout engine is based on flexbox and it is partially applied. The styling is not implemented either.

| Feature                | Status          | Description  |
|------------------------|-----------------|--------------|
| Fetching and rendering | done            | Only the stylization is missing |
| Layout and styles      | incomplete      | We need Flutter Yoga to be working 100% and integrated to Beagle.|
| Context                | done            | |
| Global context         | done            | |
| Custom components      | done            | |
| Custom actions         | done            | |
| Custom operations      | done            | |
| Renderer API           | incomplete      | Must be updated according to v1.9.0 of Beagle Web. |
| Analytics 2.0          | not implemented |
| Navigation             | incomplete      | We still need to make the system navigation work with the internal Beagle navigation.    |
| Default services       | incomplete      | We still need to decide whether and how they're going to be separated from the main lib. |

### Components
| Component     | Status          | Description                                                     |
|---------------|-----------------|-----------------------------------------------------------------|
| Container     | done            | Only the stylization is missing.                                |
| Screen        | not implemented |                                                                 |
| ScrollView    | not implemented |                                                                 |
| Button        | done            |                                                                 |
| Image         | incomplete      | The remote image without defined size doesen't render properly. |
| TextInput     | incomplete      | There are performance problems.                                 |
| LazyComponent | done            |                                                                 |
| ListView      | not implemented |                                                                 |
| GridView      | not implemented |                                                                 |
| PageView      | done            |                                                                 |
| SimpleForm    | not implemented |                                                                 |
| TabBar        | done            |                                                                 |
| Text          | done            |                                                                 |
| Touchable     | done            |                                                                 |
| WebView       | done            |                                                                 |

We also need to check the styling here. Some of the components, even the ones marked as done, have
way to many styles, which might create some undesired behavior.

### Actions
| Actions         | Status          |
|-----------------|-----------------|
| PushStack       | done            |
| PopStack        | done            |
| PushView        | done            |
| PopView         | done            |
| PopToView       | done            |
| ResetStack      | done            |
| OpenNativeRoute | done            |
| OpenExternalUrl | done            |
| AddChildren     | done            |
| Condition       | done            |
| Alerrt          | done            |
| Confirm         | not implemented |
| SendRequest     | done            |
| SetContext      | done            |
| SubmitForm      | not implemented |
