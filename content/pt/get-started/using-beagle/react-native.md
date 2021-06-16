---
title: React Native
weight: 28
description: >-
  Esta seção mostra como usar o Beagle em projetos React Native
---

---

## **Configuração**
Após finalizar a instalação, você precisa **configurar o React Native para usar o Beagle.** Para isso,
siga o guia a abaixo.

Rode um dos comandos abaixo para gerar os arquivos necessários para a biblioteca do Beagle.

**Se você usa yarn:**
```text
yarn beagle
```

**Se você usa npm:**
```text
npx beagle
```

Se os arquivos do Beagle já existem, o programa irá perguntar se você deseja substítui-los.

Dois arquivos serão criados após rodar esse comando: `src/app.tsx` e `src/beagle/beagle-service.ts`.
O primeiro é o ponto de entrada para o app, enquanto o segundo é a configuração do Beagle.

{{% alert color="warning" %}}
Atenção: nós recomendamos o uso de typescript, por isso os arquivos gerados usam essa linguagem. Se
você quer usar javascript puro, renomeie os arquivos para `app.jsx` e `beagle-service.js`. Remova
também as informações de tipo.
{{% /alert %}}

{{% alert color="warning" %}}
Atenção: se você estiver usando prettier e/ou eslint, você  precisará reformatar esses arquivos
gerados de acordo com as regras do seu projeto. Você pode também ignorar essas regras e evitar a
reformatação do código.
{{% /alert %}}

Para ver a aplicação Beagle em ação, faça com que seu app renderize o componente `App` em
`src/app.tsx`. Se você tiver criado o projeto com o comando `react-native init`, mude o arquivo
`index.js` para o seguinte:

```javascript
import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

Sua aplicação está pronta para ser executada! Assim que executado, o app deve mostrar uma mensagem
de boas vindas carregada remotamente de `https://usebeagle.io/start/welcome`.

{{% alert color="success" %}}
Parabéns! Você criou sua primeira tela com o Beagle!
{{% /alert %}}

## Outras consigurações

- [Cache]({{< ref path="/resources/customization/beagle-for-react-native/cache" lang="pt" >}})
- [WebView]({{< ref path="/resources/customization/beagle-for-react-native/web-view" lang="pt" >}})
- [Acessando o localhost]({{< ref path="/resources/customization/beagle-for-react-native/localhost" lang="pt" >}})
- [Imagens locais]({{< ref path="/resources/customization/beagle-for-react-native/local-images" lang="pt" >}})

👉 Para mais detalhes em como usar a configuração do Beagle e o componente BeagleRemoteView, por
favor, leia o [guia para React]({{< ref path="/get-started/using-beagle/web/react" lang="pt" >}}),
funciona da mesma maneira!

👉 O Beagle React Native ainda é Beagle Web! Tudo nesta documentação para Beagle Web também é válido
para o Beagle React Native. Para obter um conhecimento mais profundo da lib, sugerimos a leitura
dos artigos em
[recursos > customização > Beagle para React Native]({{< ref path="/resources/customization/beagle-for-react-native" lang="pt" >}})
assim como
[recursos > customização > Beagle para Web]({{< ref path="/resources/customization/beagle-for-web" lang="pt" >}})

👉 Se você deseja saber do estado atual de desenvolvimento do Beagle RN, veja
[aqui]({{< ref path="/resources/customization/beagle-for-react-native/development" lang="pt" >}}).
a lista de recursos já implementados e o que ainda falta fazer. Contribuições são bem vindas!
