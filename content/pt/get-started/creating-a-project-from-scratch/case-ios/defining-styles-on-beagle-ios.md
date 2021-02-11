---
title: Definindo os estilos no Beagle ios
weight: 40
description: >-
  Nesta seção, você encontra tutorial para configurar o Design System do Beagle
  no IOS.
---

---

## **C**riando estilos para o Beagle iOS

No exemplo prático da página "Criando um projeto com Beagle para iOS", você pode conferir como fazer a [**implementação do Beagle**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="pt" >}}) e criar sua primeira tela server-driven.

Neste tutorial, a ideia é avançar a partir do [**projeto anterior**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios#passo-3-configurar-o-xcode" lang="pt" >}}) para **criar um Design System na sua biblioteca do Beagle**. Os exemplos que ilustrarão o passo a passo estão nestes[ **sample codes**](https://github.com/ZupIT/beagle-examples) que você encontra no nosso repositório.

A ideia aqui é configurar alguns estilos no iOS para que você possa customizar componentes como:

- Text.
- Button.
- Navigation Bar
- Tab View
- Entre outros.

Além disso, vamos aplicar estilos de texto nos 2 componentes textuais.

Para tal, criaremos uma espécie de Design System, ou seja, um arquivo para reunir um conjunto desses estilos guardando os registros dos componentes de estilo criados no frontend.

É dessa forma que sua aplicação iOS “saberá” qual componente de estilo deverá renderizar ao receber uma tela server-driven. Vale lembrar que, no caso da tela server-driven, estarão relacionados os elementos visuais \(views\) utilizados na construção da sua tela.

### **Passo 1: Criar um arquivo Swift**

![](https://lh3.googleusercontent.com/8XHsFB4X2N4I00Nz2cPJG0A22QLfzUiytYpU7aQh5Quvaj6uVZwaszYu2wCmLLKCu32H2inAYB_TEH2qIzxfU9-d1QP1HWEjej2THbDfOYxCWPBadM_iBaS3ogbjTf1K40o6ZR7p)

Crie um arquivo Swift. No nosso exemplo, vamos chamar de `Styles`. Nele, você deve importar o `UIKit` e o `BeagleUI` e criar uma `Struct` com nome `Styles`assim como fizemos no exemplo abaixo:

```swift
import UIKit
import Beagle

struct Styles {

}
```

Essa `struct` irá conter todos os estilos que serão acessados pelo Beagle. Aqui, estará listada a lógica que permite ao Beagle aplicar os estilos definidos no iOS a uma [**tela server-driven**]({{< ref path="/key-concepts#server-driven-ui" lang="pt" >}}).

### Passo 2: Criar um estilo para um texto

Uma vez que você gerou seu arquivo, você deve agora criar função estática para definir e retornar um estilo de texto. Como, no caso deste exemplo, teremos um estilo para título e outro para parágrafo, criaremos duas funções.

O retorno desta função irá utilizar a classe `BeagleStyle,`que é uma classe interna do Beagle que fica acessível quando você importa a classe `beagleUI`.

É neste retorno que estará definido o estilo criado para o componente `text` . Siga o passo abaixo para criar cada função:

O estilo do título irá retornar a fonte **Courier** com **tamanho 20** e com a **cor laranja**. Implemente-o como no exemplo abaixo.

```swift
static func titleTextStyle() -> (UITextView?) -> Void {
    return BeagleStyle.text(
        font: UIFont.init(name: "Courier", size: 20) ?? UIFont.systemFont(ofSize: 20),
        color: .orange
    )
}
```

{{% alert color="info" %}}
Caso a fonte não seja encontrada, o Beagle irá definir como default a fonte do sistema com tamanho 20.
{{% /alert %}}

Realize o mesmo processo para criar o estilo do nosso parágrafo. Exemplo abaixo:

```swift
static func descriptionTextStyle() -> (UITextView?) -> Void {
    return BeagleStyle.text(
        font: UIFont.init(name: "Courier", size: 15) ?? UIFont.systemFont(ofSize: 15),
        color: .orange
    )
}
```

Depois de implementar estes dois estilos, o seu arquivo `Styles` deverá estar assim:

```swift
import UIKit
import Beagle

struct Styles {

    static func titleTextStyle() -> (UITextView?) -> Void {
        return BeagleStyle.text(
            font: UIFont.init(name: "Courier", size: 20) ?? UIFont.systemFont(ofSize: 20),
            color: .orange
        )
    }

    static func descriptionTextStyle() -> (UITextView?) -> Void {
        return BeagleStyle.text(
            font: UIFont.init(name: "Courier", size: 15) ?? UIFont.systemFont(ofSize: 15),
            color: .orange
        )
    }
}
```

### Passo 3: Registrar o estilo no Beagle Config

Agora é necessário registrar os estilo no Beagle, é importante para que ele seja capaz de aplicar esses estilos nas telas server-driven.

1. Abra o arquivo `BeagleConfig` . Registre uma constante com o nome `theme`
2. É na constante `theme` que será listado todos os estilos.
3. Essa constante irá receber o `AppTheme` que é onde os estilos são registrados.
4. Crie o bloco de informações abaixo dentro da função **`static func config`**
5. Crie o bloco de informações abaixo dentro da função **`static func config`**

```swift
let theme = AppTheme(styles: [])
```

6.  Para registrar, liste o nome do estilo, declarado no backend, e indique a qual estilo deve ser aplicado. Cada estilo deverá ser registrado assim:

```swift
"Title.Text.Orange": Styles.titleTextStyle
```

{{% alert color="warning" %}}
`"Title.Text.Organge"` é o nome do estilo definido para o componente `text` na tela server-driven.
{{% /alert %}}

{{% alert color="info" %}}
`Styles.titleTextStyle` é a função criada logo no início desse tutorial. Ela retorna o estilo que está definido nela para que o `Beagle Config` saiba renderizar o estilo correto em cada componente visual, nesse caso o text que será o título.
{{% /alert %}}

A constante **theme** com os dois estilos registrados deve estar assim:

```swift
let theme = AppTheme(styles: [
    "Title.Text.Orange": Styles.titleTextStyle,
    "Description.Text.Orange": Styles.descriptionTextStyle
])
```

Ainda no BeagleConfig devemos referenciar o **theme** que criamos no `BeagleDependencies`.

Siga o exemplo abaixo e finalize a configuração do BeagleConfig como mostrado abaixo:

```swift
import Beagle
import Foundation

class BeagleConfig {
    static func config() {

        let theme = AppTheme(styles: [
            "Title.Text.Orange": Styles.titleTextStyle,
            "Description.Text.Orange": Styles.descriptionTextStyle
        ])

        let dependencies = BeagleDependencies()
        dependencies.theme = theme
        dependencies.urlBuilder = UrlBuilder(
            baseUrl: URL(string: "http://localhost:8080")
        )
        Beagle.dependencies = dependencies
    }
}
```

Assim, o front-end está configurado e os estilos definidos.

### Passo 4: Definir estilos no backend

No tutorial de configuração do backend, uma pagina server driven foi criada com 2 textos, um título e um parágrafo.

A página era assim quando renderizada no frontend:

![](/captura_de_tela_2020-04-07_a-s_17-removebg-preview-2-.png)

Para atribuir um estilo a esses textos siga as instruções:

1. Abra o projeto de backend \(BFF\) e localize o arquivo `FirstScreenBeagleBuilder`.
2. Esse é o arquivo que contém o código da sua primeira tela server driven.
3. Ela deve estar configurada como na foto abaixo.
4. Nela você deve perceber que foi construída uma hierarquia de componentes com uma screen \(tela\) e dois componentes do tipo text.

```kotlin
class FirstScreenBuilder : ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                Text(
                    text = "Hello Beagle",
                    styleId = "Title.Text.Orange"
                ).applyStyle(
                    Style(
                        margin = EdgeValue(
                            top = 16.unitReal()
                        ),
                        flex = Flex(alignSelf = AlignSelf.CENTER)
                    )
                ),
                Text(
                    text = "Beagle is a cross-platform framework which provides " +
                           "usage of the Server-Driven UI concept, natively in " +
                           "iOS, Android and Web applications. By using Beagle, " +
                           "your team could easily change application's layout " +
                           "and data by just changing backend code.",
                    styleId = "Description.Text.Orange"
                ).applyStyle(
                    Style(
                        margin = EdgeValue(
                            left = 16.unitReal(),
                            right = 16.unitReal(),
                            top = 20.unitReal()
                        )
                    )
                )
            )
        )
    )
```

Para adicionar um estilo a um elemento de texto, você deve listar o nome do estilo dentro do componente texto, conforme mostrado baixo. Não se esqueça de separar os componentes por uma vírgula. Segure o botão Ctrl e coloque o mouse sobre o componente `Text` e você verá a lista de atributos que esse componente pode receber aqui no backend. Por hora, utilizaremos apenas o `Style`

     1. Coloque uma virgula após o atributo text = "Hello Beagle", e escreva o outro atributo que quer definir, que é o `styleId`

     2. Digite a string `“Title.Text.Orange”` e pronto! O estilo está definido para esse componente de texto.

```kotlin
Text(
   text = "Hello Beagle"
   styleId = "Title.Text.Orange"
).applyStyle(
      Style(
            margin = EdgeValue( top = 16.unitReal()),
            flex = Flex(alignSelf = AlignSelf.CENTER)
      )
),
```

E pronto, isso é tudo que faremos no backend nesse momento.

- Faça o mesmo para o outro componente `Text` que é um parágrafo, mas nomeie-o como `“Description.Text.Orange”`

Você pode rodar sua aplicação backend para que o serviço fique disponível.

{{% alert color="danger" %}}
Caso tenha algum problema, recomendamos que faça o tutorial para implementação desse backend.
{{% /alert %}}

## O que fazer depois de pronto?

Depois de executar o backend, agora execute o **Xcode.**

E o resultado será esse:

![](https://lh3.googleusercontent.com/Sl6dvffp0NMZNjXsdtmoMm67euzWqoRXeu6mJgl4T1HiFWYkR35NDs__B94uS-QGhOPKTcKAaocHyb9Te-tKZUZPgGnggcRxS9mJcoB27bqUi8so2_4ItjksIPl6SLGKWYiM48a7)

Agora que está pronto, teste um pouco, mude os tamanhos, mude as cores, e teste os estilos que quiser!

Neste exemplo foi utilizado elementos de estilo simples para explicar o Design system, mas o número de funções nessa classe mostra como ela pode ser ampla. Você pode desenvolver **toolBars** diferentes, **botões** e todo o tipo de componentes, inclusive componentes customizados \(que abordaremos em outro codeLab\) e utilizá-los no **Beagle**.
