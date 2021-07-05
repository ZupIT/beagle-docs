---
title: React Native
weight: 28
description: >-
  This section shows the initial walkthrough to use the Beagle library in React Native projects.
---

---

## **Configuration**

After you finish the installation, you need to **configure the React Native project to use Beagle.**
To do this, just follow the guide below.

Run one of the commands below to generate the files that will be used by the Beagle library. You can
run the command according to your package manager (yarn or npm).

**If you use yarn:**
```text
yarn beagle
```

**If you use npm:**
```text
npx beagle
```

If the files beagle create already exist, a question will be made asking if you wish to replace
them or not.

Two files are created after running this command: `src/app.tsx` and
`src/beagle/beagle-service.ts`. The first is the entry point for your app, while the second is
the beagle configuration.

{{% alert color="warning" %}}
Attention: we highly recommend the use of Typescript, that's why both files are generated using
this language. If you want to use plain javascript, rename the files to `app.jsx` and
`beagle-service.js`. Also remove all typing information.
{{% /alert %}}

{{% alert color="warning" %}}
Attention: if you're using prettier and/or eslint, you'll probably have to format the generated
files according to the project rules. You can also ignore the rules if you don't want to change
the code.
{{% /alert %}}

To view the beagle application in action, make sure that your app renders the component `App` at
`src/app.tsx`. If you created your project via `react-native init`, change your `index.js` file to
the following:

```javascript
import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

Your application is ready to be executed! Once run, the app should show a welcome message loaded
remotely from `https://usebeagle.io/start/welcome`.

{{% alert color="success" %}}
Congrats, you have finished your first Beagle Screen!
{{% /alert %}}

## Other configurations

- [Cache]({{< ref path="/resources/customization/beagle-for-react-native/cache" lang="en" >}})
- [WebView]({{< ref path="/resources/customization/beagle-for-react-native/web-view" lang="en" >}})
- [Accessing the localhost]({{< ref path="/resources/customization/beagle-for-react-native/localhost" lang="en" >}})
- [Local images]({{< ref path="/resources/customization/beagle-for-react-native/local-images" lang="en" >}})

👉 For more details on how to use the Beagle Config and the component BeagleRemoteView, please,
check the [React guide]({{< ref path="/web/react/using-beagle" lang="en" >}}), it works
exactly the same!

👉 Beagle React Native is still Beagle Web! Everything in this documentation for Beagle Web is also
valid for Beagle React Native. To go deeper into the lib, we suggest reading the articles under
[resources > customization > Beagle for React Native]({{< ref path="/resources/customization/beagle-for-react-native" lang="en" >}})
as well as
[resources > customization > Beagle for Web]({{< ref path="/web/commons" lang="en" >}})

👉 If you wish to know the current development status of Beagle React Native, check it
[here]({{< ref path="/resources/customization/beagle-for-react-native/development" lang="en" >}}).
Contributions are welcomed!
