---
title: Exibindo uma tela
weight: 224
description: >-
  Nesta seção, você encontra um exemplo prático de como exibir uma tela
  Server-Driven
---

---

## Exibindo uma tela a partir de uma URL

Cada plataforma tem sua forma própria para exibir uma tela server-driven no frontend usando o Beagle. Abaixo, listamos exemplos para cada uma delas.

{{< tabs name="T94" >}}
{{% tab name="Android" %}}
Para exibir uma tela **`full server-driven`**, você deve usar o método `this.newServerDrivenIntent<BeagleActivity>()` onde o `this` é a o contexto da sua tela atual. 

Este método requer apenas o parâmetro `ScreenRequest`

Você deve seguir tal como o comando abaixo: 

{{% alert color="warning" %}}
Certifique-se de listar a sua Beagle Activity assim como nomeada em seu AndroidManifest. 

No exemplo abaixo a chamamos somente de &lt;BeagleActivity&gt;. Esse nome é você quem define ao criar sua BeagleActivity. Em nosso tutorial [**Criando um projeto do zero** ](../../../../get-started/criando-um-projeto-do-zero/), chamamos ela de `AppBeagleActivity`
{{% /alert %}}

```kotlin
val intent = this.newServerDrivenIntent<BeagleActivity>(ScreenRequest("/screen"))
startActivity(intent)
```

{{% alert color="info" %}}
Para testar o comando acima, o componente `ScreenRequest` requer somente uma URL que traga o JSON com as informações da tela server-driven que você quer exibir. 

Neste caso, siga estes passos:

* Use o exemplo de tela no link abaixo. Ele traz um JSON de uma tela simples para teste. Basta copiar e colar no lugar da URL `"/screen"` . [https://run.mocky.io/v3/73322be2-96bf-467b-b6dc-e3fff179852c](https://run.mocky.io/v3/73322be2-96bf-467b-b6dc-e3fff179852c)
* Veja como fica o código abaixo. 

```text
val intent = this.newServerDrivenIntent<BeagleActivity>(ScreenRequest("https://run.mocky.io/v3/73322be2-96bf-467b-b6dc-e3fff179852c"))
startActivity(intent)
```
{{% /alert %}}

### A classe Screen Request.

A`ScreenRequest` é uma classe interna do Beagle utilizada para solicitar qual tela você deseja exibir. Você listará apenas o atributo URL referente a página que deseja carregar vinda do BFF. 

No entanto, esse elemento possui outros atributos, que podem ser utilizados na transição e entre telas.  Para saber mais sobre essa classe, veja em [**Screen Request**](../../../api/screen-request) 
{{% /tab %}}

{{% tab name="iOS" %}}
Para renderizar uma tela [**server-driven**](applewebdata://7F9BDDEA-3DF5-44F9-B406-C1ED4549374D/@zup-products/s/beagle/~/drafts/-MCCxDfwkBEyU5SPXYUo/principais-conceitos), basta criar uma instância **`BeagleScreenViewController`** do tipo **`remote`** e fazer a inicialização com a URL do seu [**BFF**](applewebdata://7F9BDDEA-3DF5-44F9-B406-C1ED4549374D/@zup-products/s/beagle/~/drafts/-MCCxDfwkBEyU5SPXYUo/principais-conceitos), como no exemplo abaixo:

```kotlin
let beagleViewController = Beagle.screen(
    .remote(
        .init(url: "// URL AQUI")
    )
)
```

Feito isso, **basta apresentá-la** onde preferir. Neste caso, você deve seguir como no comando de exemplo. 

```swift
present(beagleViewController, animated: true, completion: nil)
```

A **resposta** do seu BFF deve ser um JSON que representa um **componente visual definido localmente** na aplicação. 

{{% alert color="info" %}}
Você também pode [**renderizar uma tela de exemplo**](https://run.mocky.io/v3/2ee29265-5edb-4c61-8a30-827760ae66ca). Para isso, basta passar esta mesma URL na inicialização da**`BeagleScreenViewController`**.
{{% /alert %}}

Por fim, **execute a aplicação** e veja uma tela definida em uma URL remota renderizada na sua aplicação local. 

{{% alert color="success" %}}
Parabéns, você conseguiu exibir uma tela **full server-driven** 🎉 

Desta forma, será possível criar telas com conteúdo dinâmico, e controle no seu backend.
{{% /alert %}}
{{% /tab %}}

{{% tab name="Web" %}}
#### **Para projetos no Angular**

Para definir onde você quer mostrar uma tela server-driven no Angular, você deve usar o componente fornecido pela biblioteca `<beagle-remote-view>`

{{% alert color="info" %}}
Este componente tem outros atributos que podem ser configurados. No entanto nessa implementação você utilizará somente o atributo path, descrito no exemplo abaixo.   


Para mais detalhes sobre esse componente clique no link a seguir e verifique os detalhes do [Remote View](../../features/customizacao/beagle-para-web/parametros-remote-view) 
{{% /alert %}}

No arquivo html do seu componente, adicione o `remote view`. 

```markup
<beagle-remote-view [loadParams]="loadParams"></beagle-remote-view>
```

Feito isso, acesse o controller do componente e crie o `loadParams` que é esperado pelo `remote view.` 

```text
loadParams: LoadParams;

  constructor() {
    this.loadParams = {
      path: '/pathToScreen'
    };
  }
```

{{% alert color="info" %}}
No campo `path`, deve ficar o caminho para seu JSON que será associado com o `baseUrl` definido em `beagle.module.ts`.
{{% /alert %}}

#### **Para projetos no React**

Para definir uma tela server-driven no React, você precisa criar um serviço com uma configuração mínima, como no exemplo:

```javascript
import { createBeagleUIService } from '@zup-it/beagle-react'

export default createBeagleUIService({
  baseUrl: "",
  components: {}
})
```

Feito isso, usamos dois componentes fornecidos pela biblioteca Beagle para definir onde a tela server-driven será renderizada:

1. O `BeagleProvider`
2. O `BeagleRemoteView`

```javascript
...
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView path={'/pathToScreen'} />
    </BeagleProvider>
  );
}

export default App;
```

{{% alert color="info" %}}
No campo`path`, deve ficar o caminho para seu JSON que será associado com o `baseUrl` definido em seu serviço.
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

## Exibindo uma tela a partir de um JSON

{{< tabs name="T95" >}}
{{% tab name="Android" %}}
Para renderizar uma tela a partir de um JSON, é necessário ter uma `Activity` ou  `Fragment` com um `FrameLayout` como no exemplo a baixo:


```markup
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/frame_layout_android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"/>
```


Agora basta chamar o método `renderScreen()` a partir do `frame layout` criado no `xml` passando como parâmetro a sua activity e o `JSON`.


```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        frame_layout_android.renderScreen(
            activity = this, 
            screenJson = "// JSON here"
        )
    }
}
```


{{% alert color="info" %}}
O método `renderScreen()` também pode receber um fragment como parâmetro seguindo o exemplo abaixo:

`renderScreen(fragment = yourFragment, screenJson = "// JSON here")` 
{{% /alert %}}
{{% /tab %}}

{{% tab name="iOS" %}}
Para renderizar uma tela de um JSON, basta criar uma instância **`BeagleScreenViewController`** do tipo **`declarativeText`** e fazer a inicialização com o JSON, como no exemplo abaixo:

```swift
let beagleViewController = Beagle.screen(
    .declarativeText(
        .init(text: "// JSON HERE")
    )
)
```

Feito isso, **basta apresentá-la** onde preferir. Neste caso, você deve seguir como no comando de exemplo. 

```swift
present(beagleViewController, animated: true, completion: nil)
```
{{% /tab %}}
{{< /tabs >}}
