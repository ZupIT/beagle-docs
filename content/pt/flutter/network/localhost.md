---
title: Acessando o localhost
weight: 3
description: >-
  Nesta seção, você encontra informações de como acessar o localhost pelo Beagle Flutter.
---

---

## Rodar um backend no localhost
Nas documentações anteriores, o `baseUrl` usado foi o `https://usebeagle.io/start`, mas foi apenas apra exemplificar e em aplicações reais você usaria sua própria URL.

### Fazendo requisições HTTP
Por padrão, ambos Android e iOS fazem apenas requisições seguras com o protocolo HTTPS. Para mudar este comportamento, siga os passos a seguir:

#### Android
1. Abra `android/app/src/main/AndroidManifest.xml` 
2. Adicione a regra `android:usesCleartextTraffic="true"` na `<application>` tag:

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
1. Abra `ios/{project_name}/info.plist` 
2. Veja se a configuração `NSAppTransportSecurity` tem o seguinte valor:

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
Esta configuração é apenas para testes e não deveser usada em builds finais de produção.
{{% /alert %}}

### localhost vs 10.0.2.2
Ao rodar o backend no localhost, o iOS funciona no endereço `localhost`, no entando o emulador do Android não funciona assim.

Para acessar o localhost no emulador do Android, você precisa usar o **IP `10.0.2.2`.**. No Flutter se você quiser alterar este comportamento basta seguir o exemplo abaixo e decidir qual endereço usar:

```dart
final localhost = Platform.isAndroid ? '10.0.2.2' : 'localhost';

final beagleService = BeagleService(
  baseUrl: 'http://$localhost:8080',
  // ...
);
```
