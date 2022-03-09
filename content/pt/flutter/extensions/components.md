---
title: Componentes customizados
weight: 3
description: >-
  Nesta seção, você aprende como criar e usar seus próprios componentes customizados no Beagle Flutter.
---

---

## Como criar componentes customizados?
1. Declare um mapa do tipo `Map<String, ComponentBuilder Function()>`;
2. Adicione este mapa na inicialização do BeagleService.

Este mapa mostra ao Beagle quais componentes renderizar a partir de um identificador no JSON

### A chave em um mapa de componentes
A chave representa o nome da ação e deve ser equivalente a propriedade `_beagleComponent_` do JSON. A única restrição para criação do nome é utilizar o prefixo "custom"

### Os valores no mapa de componentes (factories of component builders)
O `ComponentBuilder` É uma classe abstrata que deve ser implementada, a subclasse deve implementar o método `buildForBeagle` que retorna um Widget e recebe os seguintes parâmetros:
1. `BeagleUIElement element`: O elemento a ser renderizado, contém todas as propriedades vindas do JSON
2. `List<Widget> children`: Os filhos deste component. Se este componente for a raiz, ignore este parâmetro. Se este componente sempre tiver apenas um filho acesse com `children[0]`.
3. `BeagleView view`: A BeagleView que iniciou o elemento. esta propriedade é raramente utilizada, e serve para alterar o Beagle UI a partir do componente.

Veja um exemplo de um "component builder" que expõe o ElevatedButton widget do Flutter:

```dart
class _ElevatedButtonBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => ElevatedButton(
    child: children[0],
    onPressed: element.getAttributeValue('onPressed'),
    clipBehavior: EnumUtils.fromString(Clip.values, element.getAttributeValue('clipBehavior')) ?? Clip.none,
    autofocus: element.getAttributeValue('autofocus'),
    onLongPress: element.getAttributeValue('onLongPress'),
  );
}

final myComponents = {
  'custom:elevatedButton': () => _FlexBuilder()
}

final beagleService = BeagleService(
  baseUrl: 'http://myBFF.com',
  components: {...myComponents, ...defaultComponents},
  actions: {...myActions, ...defaultActions},
);
```

No exemplo acima, As propriedades `style` e `focusNode` foram omitidas do `ElevatedButton`. Isso foi feito porque os objetos possuem muitas propriedades e as outras propriedades são suficientes para  exemplificar o uso do componente customizado.

Preste atenção que `onPressed` é uma função e podemos chamá-la com `element.getAttributeValue('onPressed')`. Isso não é um problema, a biblioteca do Beagle irá transformar qualquer ação declarada no JSON para uma função.

Esta configuração do Beagle Flutter pode se tornar repetitiva para muitos componentes, mas uma vez feita você não precisa recadastrá-los. Se você quer contribuir com o projeto e dar ideias de como melhorar esse processo, dê uma olhada em [nosso github](https://github.com/ZupIT/beagle)!

É isso! Você pode usar essa mesma estratégia para expor qualquer componente customizado que você criar.