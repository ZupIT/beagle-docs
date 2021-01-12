---
title: IOS
weight: 206
description: >-
  Nesta seção, você encontra tudo sobre como usar a estilização de componentes
  para projetos iOS.
---

---

## Introdução

Na biblioteca do Beagle para iOS, existe a classe `AppTheme` que permite personalizar os componentes utilizados na sua aplicação.

Esta classe mapeia os estilos de um aplicativo para que seja possível referenciá-los no [**BFF**](/pt/home/key-concepts#backend-for-frontend) ao construir uma tela [**Server-Driven**](/pt/home/key-concepts#server-driven-ui).

Isso possibilita personalizar, por exemplo:

- Aparência dos textos
- Estilo dos botões
- TabView

É importante deixar claro que o Beagle para iOS não mapeia todos os atributos destes componentes, porém os mais já estão mapeados e, portanto, podem ser modificados se necessário.

## Atributos customizáveis

Como nem todos os atributos de customização podem ser estilizados, abaixo você encontra a lista com quais elementos podem ser personalizados pelo Beagle.

Outro ponto importante é o dos estilos criados no iOS e vinculados a componentes vindos do Backend. Nestes casos, você precisa configurar os estilos para que cada um deles esteja referenciado, como no exemplo abaixo:

```swift
    let theme = AppTheme(styles: [

    Styles.customButton.key    : Styles.customButton.style,
    Styles.customText.key      : Styles.customText.style,
    Styles.customTab.key      : Styles.customTab.style
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

### TabView

O componente TabView no Beagle iOS pode ser estilizado com os seguintes atributos:

1. **backGroundColor**: atribui uma cor diferente ao background da aba selecionada.
2. **indicatorColor**: atribui uma cor ao background selecionado.

```swift
static func customTab() -> (UIView?) -> Void {
        return BeagleStyle
                .tabView(backgroundColor: .blue,
                        indicatorColor: .white)
    }
```
