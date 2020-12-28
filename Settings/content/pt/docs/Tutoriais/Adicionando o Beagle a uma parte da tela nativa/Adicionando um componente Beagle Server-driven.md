---
title: Adicionando um componente Beagle Server-driven
weight: 228
description: >-
  Esta seção descreve como adicionar um componente Server Driven a uma tela
  nativa
---

---

É possível que alguns componentes de uma tela que sejam exibidos via server-driven \(tela nativa\) recebam somente **uma seção da página** , ou mesmo um **único componente do servidor BFF**. 

No exemplo abaixo, vamos exibir um botão server-driven em uma tela nativa. O resultado que deve aparecer na sua aplicação é esse:
<div align="center">
{{< figure src="/screenshot_1594300176.png" width="30%" >}}
</div>

## Pré-requisitos

Para que essa configuração funcione corretamente, você precisa de:

* Um [**BFF**](../../../../../../../principais-conceitos#backend-for-frontend) configurado com o Beagle. Caso não o tenha, veja como configurar nesse [**tutorial**](../../../../../../../get-started/criando-um-projeto-do-zero/case-backend).
* Um frontend configurado com o Beagle para Android ou iOS. Caso não o tenha, siga um dos tutoriais de acordo com sistema operacional:
  * [**Android**](../../../../../../get-started/criando-um-projeto-do-zero/case-android/)
  * [**iOS**](../../../../../get-started/criando-um-projeto-do-zero/case-ios/)

## Passo 1: Criar o componente no backend

Neste exemplo, criaremos um botão como componente server-driven para que possamos exibí-lo em uma tela nativa. 

Para isso, siga os passos a seguir:

1. Crie uma classe Kotlin em seu backend. 
2. Nomeie-o `SingleComponentBuilder`. Essa será a classe que vai construir o seu componente \(objeto\) server-driven. 
3. Feito isso, copie e cole o código abaixo.

```kotlin
import br.com.zup.beagle.widget.action.Alert
import br.com.zup.beagle.widget.ui.Button

class SingleComponentBuilder() {

  fun createButton(): Button {
    return Button(
        "Sou um botão server-driven",
        onPress = listOf(
            Alert(
                "Botão server-driven",
                "Sou um botão server-driven",
                labelOk = "OoooK"
            )
        )
    )
  }
}
```

{{% alert color="info" %}}
Este botão terá uma ação do tipo `"Alert"`, que já está configurada no código acima. 
{{% /alert %}}

## Passo 2: Atualizar a classe Service e Controller no backend

Depois que você criou o componente, será preciso atualizar algumas classes. Veja como fazer essa configuração de acordo com cada uma delas. 

### Atualizando o Service

O `Service` é a classe responsável por configurar o serviço que usaremos, que pode ser de vários tipos. No caso desse exemplo, só será listado o que está sendo configurando.

Comece abrindo a classe `ScreenBeagleService.kt` \(nome escolhido para o tutorial de configuração do `BFF`, mas você pode renomeá-la se quiser\). 

Feito isso, copie a linha abaixo e cole dentro da classe `ScreenBeagleService`:

* _`fun createServerDrivenComponent() = SingleComponentBuilder().createButton()`_


```kotlin
import com.example.bff.builder.SingleComponentBuilder
import org.springframework.stereotype.Service

@Service
class ScreenBeagleService {
    fun createServerDrivenComponent() = SingleComponentBuilder().createButton()
}
```


### Atualizando Controller

Se a configuração acima funcionar, você atualizará o controller e o componente e eles estarão prontos para serem enviados ao frontend, caso haja uma requisição. 

Agora, na classe controller, você deve chamar o serviço que acabamos de configurar e definir a URL que será o endpoint do componente criado. 

Para isso, siga os passos:

1. Abra a classe`ScreenController`. Esse nome foi dado a essa classe no tutorial, ela que é responsável por expor os componentes via API REST. 
2. Adicione outra função à essa classe \(Lembrando que a classe já tem algumas funções implementadas\). 
3. Anote a função com o `@GetMapping()`e listar o endpoint `(Path relativo da URL)` que identifica esse componente.

Veja como deve ficar a configuração:

```kotlin
@RestController
class ScreenController(
        private val screenBeagleService: BeagleService
) {

  @GetMapping("/serverDrivenComponent")
  fun getServerDrivenComponent() = screenBeagleService.createServerDrivenComponent()
}
```

### Teste o endpoint

Agora que o componente esta criado e configurado, você deve testar o endpoint e verificar a resposta JSON. Para isso, realize essas ações:

1. Inicie a sua aplicação no backend \(Lembre-se que sua aplicação Backend está configurada para apresentar as resposta no localhost\). 
2. Abra o um browser e acesse o endpoint: [http://localhost:8080/serverDrivenComponent](http://localhost:8080/serverDrivenComponent)

Você deve receber o JSON abaixo:

{{< tabs id="T96" >}}
{{% tab name="JSON" %}}
```typescript
{
  "_beagleComponent_" : "beagle:button",
  "text" : "Sou um botão server-driven",
  "onPress" : [ {
    "_beagleAction_" : "beagle:alert",
    "title" : "Botão server-driven",
    "message" : "Sou um botão server-driven",
    "labelOk" : "OoooK"
  } ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Button(
    "Sou um botão server-driven",
    onPress = listOf(
        Alert(
            "Botão server-driven",
            "Sou um botão server-driven",
            labelOk = "OoooK"
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

## Passo 3: Exibir o componente server-driven

Depois dos dois passos anteriores, o seu componente está pronto. Agora, você só precisa exibi-lo em uma tela nativa. 

Para essa configuração, siga as orientações específicas para cada plataforma:

{{< tabs id="T97" >}}
{{% tab name="Android" %}}
Você deve utilizar o frame layout para "receber" o componente do BFF e, assim, exibi-lo em uma tela Android nativa.

Para isso, basta seguir esses passos:

* Crie o arquivo `.XML` abaixo que representa uma tela nativa com um título e um frame layout. Nesse exemplo definimos essa pagina como nossa `MainActivity`
* Depois, copie e cole a configuração abaixo:

```markup
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/tv_title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="100dp"
        android:text="Sou componente Nativo!"
        android:textSize="30sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <FrameLayout
        android:id="@+id/fr_server_driven"
        android:layout_width="match_parent"
        android:layout_height="40dp"
        app:layout_constraintTop_toBottomOf="@id/tv_title"
        android:layout_marginTop="40dp"
        />

</androidx.constraintlayout.widget.ConstraintLayout>
```

{{% alert color="info" %}}
Após configurar o frame layout, é preciso informar ao Beagle qual componente será exibido. Para isso, utilize a função `loadView` como listado no exemplo a seguir.
{{% /alert %}}

## O que é loadView?

O método `loadView` é responsável carregar seu conteúdo beagle dentro de sua view.

A estrutura do **loadView** é:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| activity | AppCompatActivity/Fragment | ✓ | Define a activity ou fragment onde estamos usando o loadview |
| screenRequest | [**ScreenRequest**](/pt/docs/api/screen-request/) | ✓ | Define os parâmetros para a chamada da tela remota |
| listener | **OnServerStateChanged = (serverState: ServerDrivenState) -> Unit** |  | Define o o listener que configura os callbacks para os estados da tela  |

<br />

Veja como fazer isso:

1. Abra a activity onde você deseja exibir a sua tela nativa.
2. Crie uma variável do tipo FrameLayout que deve receber a FrameLayout View que configuramos. 
3. Agora basta chamar a função `.loadView` a partir da variável `frameLayout`


```kotlin
val frameLayout = findViewById<FrameLayout>(R.id.fr_server_driven)
frameLayout.loadView(this, ScreenRequest("/serverDrivenComponent"))
```


E pronto: basta iniciar sua aplicação e você verá a tela a seguir! 
<div align="center">
{{< figure src="/server-driven-comp-ios.gif" width="30%" >}}
</div>

Clique no botão e perceba que a função nesse componente está implementada e funcional, ou seja, o Beagle exibe todos os componentes como se fossem nativos.
{{% /tab %}}

{{% tab name="iOS" %}}
Você deve utilizar um view controller para "colocar" esse componente do BFF e, assim, exibí-lo em tela  iOS nativa.

Mas antes, é preciso criar esse view controller para a tela nativa. Para isso, basta seguir os passos:

1. Instancie o componente server-driven a partir da classe `BeagleScreenViewController`.
2. Utilize o `addChild` para adicionar o view controller.
3. Também adicione o `view` do `beagleScreenViewController` como`subview` do nosso view controller nativo.
4. Por último, é necessário adicionar algumas constraints para a `UILabel` e para a view do `beagleScreenViewController`  como no código abaixo:

```swift
class NativeViewController: UIViewController {

    private let beagleScreenViewController = BeagleScreenViewController(.remote(.init(url: "http://localhost:8080/serverDrivenComponent")))

    private lazy var descriptionText: UILabel = {
        let label = UILabel()
        label.text = "Sou um componente nativo"
        label.font = .systemFont(ofSize: 25, weight: .semibold)
        return label
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupView()
    }

    func setupView() {
        view.backgroundColor = .white
        addChild(beagleScreenViewController)

        view.addSubview(descriptionText)
        descriptionText.anchorCenterXToSuperview()
        descriptionText.anchor(top: view.topAnchor, topConstant: 150)

        guard let beagleView = beagleScreenViewController.view else {
            return
        }

        view.addSubview(beagleView)
        beagleView.anchorCenterXToSuperview()
        beagleView.anchor(top: descriptionText.bottomAnchor, topConstant: 50, widthConstant: 300, heightConstant: 50)

        beagleScreenViewController.didMove(toParent: self)
    }
```

Ao final do processo, você poderá "chamar" pela nossa tela nativa que irá aparecer a imagem abaixo. Lembrando que, para esse exemplo, foi criada uma tela  composta de uma `UILabel` e de uma variável do tipo `BeagleScreenViewController` , onde fica o componente server-driven.

<div align="center">
{{< figure src="/server-driven-comp-ios.gif" width="50%" >}}
</div>
{{% /tab %}}

{{% tab name="WEB" %}}
Se você ainda não configurou a biblioteca em seu projeto, [**veja aqui como fazer isso**.](/pt/docs/primeiros-passos/usando-o-beagle/)

Você deve utilizar o [**Remote View**](/pt/docs/recursos/customização/beagle-para-web/parâmetros-remote-view/), fornecido pela biblioteca do Beagle, para criar telas híbridas com alguns componentes server driven na web.


Veja a seguir como funciona para cada framework:

**React**

No React, você só precisa criar uma função que retorna dois componentes. Um deles  é o `BeagleRemoteView` com o caminho para carregar o componente server-driven.

```javascript
import React, { FC } from 'react'
import { LoadParams } from '@zup-it/beagle-web';
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from '../../beagle/beagle.service';
import NativeComponent from '../NativeComponent';

const params: LoadParams = {
    path: '/mypath',
}

const Main = () => {
    return (
        <>
            <NativeComponent text="Sou um componente nativo!"></NativeComponent>
            <BeagleProvider value={BeagleService}>
                <BeagleRemoteView {...params} />
            </BeagleProvider>
        </>
    )
}

export default Main
```

**Angular**

No Angular, basta criar um componente nativo normalmente e adicionar o `beagle-remote-view` junto ao template no local que você quer que os itens server-driven sejam renderizados.

```text
<app-native-component text="Sou um componente nativo"></app-native-component>
<beagle-remote-view [loadParams]="loadParams"></beagle-remote-view>
```

{{% alert color="warning" %}}
No caso do Angular, não é possível usar o componente BeagleRemoteView caso ele seja carregado pela biblioteca de outra forma server-driven porque isso causa uma dependência circular e quebra a aplicação. 
{{% /alert %}}

{{% alert color="info" %}}
Lembre-se de rodar seu projeto Angular usando um dos comandos:

`yarn run serve ou npx run serve`
{{% /alert %}}

A sua tela híbrida com elementos nativos e server driven está pronta
<div align="center">
{{< figure src="/image.png" >}}
</div>
{{% /tab %}}
{{< /tabs >}}
