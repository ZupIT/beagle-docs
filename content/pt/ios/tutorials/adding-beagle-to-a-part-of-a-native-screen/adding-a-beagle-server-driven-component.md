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
{{< figure src="/shared/screenshot_1594300176.png" width="30%" >}}
</div>

## Pré-requisitos

Para que essa configuração funcione corretamente, você precisa de:

- Um [**BFF**]({{< ref path="/key-concepts#backend-for-frontend" lang="pt" >}}) configurado com o Beagle. Caso não o tenha, veja como configurar nesse [**tutorial**]({{< ref path="/backend/get-started/creating-a-project-from-scratch" lang="pt" >}}).
- Um frontend configurado com o Beagle para Android ou iOS. Caso não o tenha, siga um dos tutoriais de acordo com sistema operacional:
  - [**Android**]({{< ref path="/android/getting-started" lang="pt" >}})
  - [**iOS**]({{< ref path="/ios/getting-started" lang="pt" >}})

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
        "I'm a server-based button",
        onPress = listOf(
            Alert(
                "Server-driven Button",
                "I'm a server-based button",
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

- _`fun createServerDrivenComponent() = SingleComponentBuilder().createButton()`_

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
  "text" : "I'm a server-based button",
  "onPress" : [ {
    "_beagleAction_" : "beagle:alert",
    "title" : "Server-driven Button",
    "message" : "I'm a server-based button",
    "labelOk" : "OoooK"
  } ]
}
```

{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Button(
    "I'm a server-based button",
    onPress = listOf(
        Alert(
            "Server-driven Button",
            "I'm a server-based button",
            labelOk = "OoooK"
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

## Passo 3: Exibir o componente server-driven em uma Tela iOS

Depois dos dois passos anteriores, o seu componente está pronto. Agora, você só precisa exibi-lo em uma tela nativa.

Você deve utilizar uma `BeagleView` para "colocar" esse componente do BFF e, assim, exibí-lo em uma tela iOS nativa.

{{% alert color="success" %}}

# Beagle View

Veja mais sobre o que é, como funciona e como usar a `BeagleView`
[**aqui!**]({{< ref path="/ios/customization/beagle-view" lang="pt" >}})
{{% /alert %}}

1. Crie um **UIViewController**.
2. Adicione o componente nativo, nesse caso será um texto utilizando uma `UILabel`.
3. Crie uma **BeagleView** passando a URL pretendida.
4. Por último, é necessário adicionar algumas constraints para a `UILabel` e para `BeagleView` como no código abaixo:

```swift
class NativeViewController: UIViewController {

     override func viewDidLoad() {
        super.viewDidLoad()
        setupBeagleViewRemote()
        setupDescriptionText()
    }

    private lazy var beagleViewRemote = BeagleView(
        .remote(.init(url: "http://localhost:8080/serverDrivenComponent"))
    )

    private lazy var descriptionText: UILabel = {
            let label = UILabel()
            label.text = "Sou um componente nativo"
            label.numberOfLines = 0
            label.textAlignment = .center
            label.font = .systemFont(ofSize: 25, weight: .semibold)
            return label
    }()

    private func setupDescriptionText() {
        view.addSubview(descriptionText)
        descriptionText.translatesAutoresizingMaskIntoConstraints = false
        descriptionText.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        descriptionText.topAnchor.constraint(equalTo: view.topAnchor, constant: 150).isActive = true
    }

    private func setupBeagleViewRemote() {
        view.addSubview(beagleViewRemote)
        beagleViewRemote.translatesAutoresizingMaskIntoConstraints = false
        beagleViewRemote.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        beagleViewRemote.topAnchor.constraint(equalTo: descriptionText.bottomAnchor, constant: 50).isActive = true
    }
```

Ao final do processo, você poderá "chamar" a tela nativa e a imagem abaixo irá aparecer. Lembrando que, para esse exemplo, foram criadas: uma tela composta de uma `UILabel` e uma `BeagleView` , onde fica o componente server-driven.

<div align="center">
{{< figure src="/shared/server-driven-comp-ios.gif" width="50%" >}}
</div>