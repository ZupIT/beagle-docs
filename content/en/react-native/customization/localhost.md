---
title: Accessing the localhost
weight: 191
description: >-
  You will find here information of how to refer to the localhost in React Native.
---

---

## Running a backend in the localhost
By default, after running `beagle init`, the remote views will be loaded from
`https://usebeagle.io/start`. This is just a preview and you will need to replace this address by
your own backend.

### Making HTTP requests
The first problem is making HTTP requests. By default, both Android and iOS will make only HTTPS
(secured) requests. To change this, follow the steps below.

#### Android
Open `android/app/src/main/AndroidManifest.xml` and place the rule `android:usesCleartextTraffic="true"` in `<application>`:

```xml
<application
  android:name=".MainApplication"
  android:label="@string/app_name"
  android:icon="@mipmap/ic_launcher"
  android:roundIcon="@mipmap/ic_launcher_round"
  android:allowBackup="false"
  android:theme="@style/AppTheme"
  android:usesCleartextTraffic="true">
```

#### iOS
Open `ios/{project_name}/info.plist` and make sure the configuration for `NSAppTransportSecurity` is
the following:

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSExceptionDomains</key>
  <dict>
    <key>localhost</key>
    <dict>
      <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
      <true/>
    </dict>
  </dict>
</dict>
```

{{% alert color="warning" %}}
Attention: we don't recommend this configuration for production builds. HTTP requests should be
blocked while not in development.
{{% /alert %}}

### localhost vs 10.0.2.2
Another problem of running your backend in the localhost is that while iOS does work with the
address `localhost`, Android emulator doesn't. On Android emulator, to access the localhost, you need to use the ip
`10.0.2.2`. To solve this problem, you can use react native's `Platform` to decide what address
to use. See the example below:

```typescript
import { Platform } from 'react-native'
// ...

export default createBeagleUIService({
  baseUrl: `http://${Platform.OS === 'android' ? '10.0.2.2' : 'localhost'}:8080`,
  // ...
})
```
