---
title: Estilização
weight: 206
description: >-
  Nesta seção, você encontra tudo sobre como usar a estilização de componentes
  para projetos iOS.
---

---

## Introdução

Na biblioteca do Beagle para iOS, existe a classe `AppTheme` que permite personalizar os componentes utilizados na sua aplicação.

Esta classe mapeia os estilos de um aplicativo para que seja possível referenciá-los no [**BFF**]({{< ref path="/key-concepts#backend-for-frontend" lang="pt" >}}) ao construir uma tela [**Server-Driven**]({{< ref path="/key-concepts#server-driven-ui" lang="pt" >}}).

Isso possibilita personalizar, por exemplo:

- Aparência dos textos
- Estilo dos botões
- Estilizar o componente TabBar
- Estilizar o componente Container

É importante deixar claro que o Beagle para iOS não mapeia todos os atributos destes componentes, porém os mais já estão mapeados e, portanto, podem ser modificados se necessário.

## Atributos customizáveis

Como nem todos os atributos de customização podem ser estilizados, abaixo você encontra a lista com quais elementos podem ser personalizados pelo Beagle.

Outro ponto importante é o dos estilos criados no iOS e vinculados a componentes vindos do Backend. Nestes casos, você precisa configurar os estilos para que cada um deles esteja referenciado, como no exemplo abaixo:

```swift
    let theme = AppTheme(styles: [

    Styles.customButton.key    : Styles.customButton.style,
    Styles.customText.key      : Styles.customText.style,
    Styles.customTab.key      : Styles.customTab.style,
    Style.customContainer.key : Styles.customContainer.style,
    Style.customTextInput.key : Styles.customTextInput.style
    ])

    dependencies.theme = theme
```

Além de referenciar os estilos, é preciso criar um par chave valor definindo um nome para cada style criado:

```swift
struct StylePair {
    var key: String
    var style: Any
}
class Styles {
    static let customText = StylePair(key: "CustomText", style: customText)
    static let customButton = StylePair(key: "CustomButton", style: customButton)
    static let customTab = StylePair(key: "CustomTab", style: customTab)
    static let customContainer =  StylePair(key: "CustomContainer", style: customContainer)
    static let customTextInput = StylePair(key: "CustomTextInput", style: customTextInput)
}
```

### Text

Os componentes de texto no Beagle iOS são **totalmente personalizáveis.** Quando for realizar qualquer alteração nos atributos, é só seguir o padrão abaixo:

```swift
private static func textH1() -> (UITextView?) -> Void {
    BeagleStyle.text(font: .boldSystemFont(ofSize: 32),
    color: UIColor(named: "ColorText")!)
}
```

### Button

Além da personalização completa para textos, o componente Button possibilita customizar outro atributo: **withTitleColor**, que é responsável por personalizar a cor do botão.

No Swift, você pode ainda adicionar estilos extras ao componente utilizando a anotação `<>` , de acordo com o exemplo abaixo:

```swift
static func defaultStylishButton() -> (UIButton?) -> Void {
    return BeagleStyle.button(withTitleColor: .white)
        <> {
            $0?.titleLabel |> BeagleStyle.label(withFont: .systemFont(ofSize: 16, weight: .regular))
            $0?.layer.cornerRadius = 6
            $0?.clipsToBounds = true
            $0?.backgroundColor = UIColor(hex: "#3C3737")
        }
}
```

### TabBar

O componente TabView no Beagle iOS pode ser estilizado com os seguintes atributos:

1. **backgroundColor**: atribui uma cor ao background selecionado.
2. **indicatorColor**: atribui uma cor diferente ao indicador da aba selecionada.
3. **selectedTextColor**: atribui uma cor ao texto da tab selecionada.
4. **unselectedTextColor**: atribui uma cor ao texto de uma tab não selecionada.
5. **selectedIconColor**: atribui uma cor ao ícone da tab selecionada.
6. **unselectedIconColor**: atribui uma cor ao ícone de uma tab não selecionada.

```swift
static func customTab() -> (UIView?) -> Void {
        return BeagleStyle
                .tabBar(backgroundColor: .blue, 
                        indicatorColor: .white)
    }
```

### Container

O componente TabView no Beagle iOS pode ser estilizado de várias formas. Abaixo têm-se um exemplo de um container que possui uma imagem como background.

```swift
static func customContainer() -> (UIView?) -> Void {
        return {
            guard let container = $0 else { return }
            UIGraphicsBeginImageContext(CGSize(width: 100, height: 100))
            UIImage(named: "image")?.draw(in: CGRect(x: 0, y: 0, width: 100, height: 100))
            guard let image = UIGraphicsGetImageFromCurrentImageContext() else { return }
            UIGraphicsEndImageContext()
            container.backgroundColor = UIColor(patternImage: image)
        }
    }
```

### TextInput

O componente TextInput no Beagle iOS pode ser estilizado com os seguintes atributos:

1. **validInputColor**: atribui uma cor à borda do textInput dada uma entrada válida.
2. **invalidInputColor**: atribui uma cor à borda do textInput dada uma entrada inválida.
3. **borderStyle**: atribui um estilo à borda do textInput.
4. **borderWidth**: atribui uma largura à borda do textInput.
5. **cornerRadius**: atribui cornerRadiud à borda do textInput.

```swift
    static func customTextInput() -> (UITextField?) -> Void {
        return BeagleStyle.textInput(validInputColor: .gray, invalidInputColor: .red, borderStyle: .roundedRect, borderWidth: 1)
    }
```