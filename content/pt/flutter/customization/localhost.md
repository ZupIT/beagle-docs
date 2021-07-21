---
title: Acessando o localhost
weight: 3
description: >-
  Nesta seção, você encontrará informações sobre como consultar o host local no Beagle Flutter.
---

---

## Rodando um backend no localhost
Nos passos anteriores, a `baseUrl` usada foi `http://yourBffBaseUrl.io`, mas isso é apenas um exemplo e você vai precisar trocá-la pelo endereço do seu backend.

### Fazendo requisições HTTP
Por padrão, ambos Android e iOS vão fazer somente requisições HTTPS (seguras). Para mudar esse comportamento, siga os passos abaixo:

#### Android
1. Abra `android / app / src / main / AndroidManifest.xml`
2. Coloque a regra `android: usesCleartextTraffic =" true "` na tag `<application>`:

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
1. Abra `ios / {project_name} / info.plist`
2. Certifique-se de que a configuração para `NSAppTransportSecurity` é a seguinte:

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
Esta configuração não é recomendada para compilações em produção. As solicitações HTTP devem ser bloqueadas enquanto não estiverem em desenvolvimento.
{{% /alert %}}

### localhost vs 10.0.2.2
Ao executar seu back-end no localhost, o iOS funciona com o endereço `localhost`, mas o emulador Android não.

Para acessar o localhost no emulador Android, você precisa usar o ** IP `10.0.2.2`. ** Para resolver este problema, você pode usar a` Plataforma` do Flutter para decidir qual endereço usar. Veja o exemplo abaixo:

```dart
final localhost = Platform.isAndroid ? '10.0.2.2' : 'localhost';

BeagleSdk.init(
  baseUrl: 'http://$localhost:8080',
);
```
