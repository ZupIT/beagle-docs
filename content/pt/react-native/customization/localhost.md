---
title: Acessando o localhost
weight: 191
description: >-
  Aqui você encontra informações de como referenciar o localhost no React Native
---

---

## Executando um backend no localhost
Por padrão, após rodar `beagle init`, as views remotas serão carregadas de
`https://usebeagle.io/start`. Esse é apenas um exemplo e você vai precisar trocar essa rota pelo
endereço do seu próprio backend.

### Fazendo requisições HTTP
O primeiro problema é permitir que sua aplicação faça requisições HTTP. Por padrão, ambos Android
e iOS fazem apenas requisições HTTPS (seguras). Para mudar isso, siga os passos abaixo:

#### Android
Abra `android/app/src/main/AndroidManifest.xml` e coloque a regra
`android:usesCleartextTraffic="true"` em `<application>`:

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
Abra `ios/{project_name}/info.plist` e certifique-se de que a configuração para
`NSAppTransportSecurity` seja a seguinte:

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
Atenção: não recomendamos essa configuração para builds de produção. requisições HTTP devem mesmo
ser bloqueadas fora do ambiente de desenvolvimento.
{{% /alert %}}

### localhost vs 10.0.2.2
Outro problema que encontramos ao rodar um backend no localhost é a diferença entre iOS e Emulador do Android
sobre o que "localhost" é. No Emulador do Android, para acessar o servidor local da máquina, é necessário usar
o ip `10.0.2.2`, enquanto no iOS, basta escrever `localhost`. Para resolver esse problema, você pode
usar o `Platform` do React Native para decidir qual endereço usar. Veja o exemplo abaixo:

```typescript
import { Platform } from 'react-native'
// ...

export default createBeagleUIService({
  baseUrl: `http://${Platform.OS === 'android' ? '10.0.2.2' : 'localhost'}:8080`,
  // ...
})
```
