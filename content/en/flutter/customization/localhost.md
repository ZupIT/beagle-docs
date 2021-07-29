---
title: Accessing the localhost
weight: 3
description: >-
  In this section, you will find information on how to refer to the localhost on Beagle Flutter.
---

---

## Running a backend in the localhost
In the previous steps, the `baseUrl` used was `http://yourBffBaseUrl.io`, but this is just an example and you will need to replace this address by your own backend.

### Making HTTP requests
By default, both Android and iOS will make only HTTPS (secured) requests. To change this behavior, follow the steps below:

#### Android
1. Open `android/app/src/main/AndroidManifest.xml` 
2. Place the rule `android:usesCleartextTraffic="true"` in `<application>` tag:

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
1. Open `ios/{project_name}/info.plist` 
2. Make sure the configuration for `NSAppTransportSecurity` is the following one:

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
This configuration is not recommended for production builds. HTTP requests should be blocked while not in development.
{{% /alert %}}

### localhost vs 10.0.2.2
When running your backend in the localhost, iOS works with the address `localhost`, however the Android emulator does not. 

To access the localhost in the Android emulator, you need to use the **IP `10.0.2.2`.** To solve this problem, you can use Flutter's `Platform` to decide what address to use. See the example below:

```dart
final localhost = Platform.isAndroid ? '10.0.2.2' : 'localhost';

BeagleSdk.init(
  baseUrl: 'http://$localhost:8080',
);
```
