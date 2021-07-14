---
title: Acessando o localhost
weight: 4
description: >-
  Aqui você encontra informações sobre como referenciar o localhost no Beagle Flutter.
---

---

## Rodando um backend no localhost
Nos passos anteriores, a `baseUrl` usada foi `http://yourBffBaseUrl.io`, mas isso é apenas um exemplo e você vai precisar trocá-la pelo endereço do seu backend.

### Fazendo requisições HTTP
Por padrão, ambos Android e iOS vão fazer somente requisições HTTPS (seguras). Para mudar esse comportamento, siga os passos abaixo:

#### Android
Abra o arquivo `android/app/src/main/AndroidManifest.xml` e coloque a regra `android:usesCleartextTraffic="true"` na tag `<application>`:

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
Abra `ios/{project_name}/info.plist` e certifique da configuração para `NSAppTransportSecurity` seja a seguinte:

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
Atenção: nós não recomendamos esta configuração para produção. Requisições HTTP devem ser bloqueadas quando não estiverem em desenvolvimento.
{{% /alert %}}

### localhost vs 10.0.2.2
Outro ponto de atenção em rodar um backend no localhost é que enquanto iOS trabalha com o endereço `localhost`, o emulador Android não. No emulador Android, para acessar o localhost, voce precisa usar o ip `10.0.2.2`. Para resolver esse problema, você pode usar o `Platform` do Flutter para decidir qual endereço usar. Veja o exemplo abaixo:

```dart
final localhost = Platform.isAndroid ? '10.0.2.2' : 'localhost';

BeagleSdk.init(
  baseUrl: 'http://$localhost:8080',
);
```
