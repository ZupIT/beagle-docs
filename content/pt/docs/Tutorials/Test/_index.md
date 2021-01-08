---
title: Testes
weight: 235
description: 'Nesta seção, você encontra mais detalhes de testes do Beagle e de testes em aplicações com o Beagle.'
---

---

## Testes Unitários

Testes unitários **medem a funcionalidade do código** em sua menor fração ou unidade. O Beagle possui testes unitários embutidos, e eles precisam ser frequentemente revisados, atualizados ou adicionados para assegurar que importantes unidades de códigos sejam testadas.

## Testes de Interface De Usuário

O Beagle implementa seus próprios testes de interface de usuário para garantir que componentes de interface e seus comportamentos funcionem corretamente. Tanto a plataforma Mobile como WEB são testadas desta forma. Os principais frameworks usados são:
- [Cucumber](https://cucumber.io/)
- [Espresso](https://developer.android.com/training/testing/espresso)
- [XCTest](https://developer.apple.com/documentation/xctest)
- [Appium](http://appium.io/)
- [Cypress](https://www.cypress.io/)

## Testes Instrumentados Mobile

Testes instrumentados, também conhecidos como testes unitários instrumentados, são testes que rodam em devices (aparelhos) reais ou em emuladores, e eles utilizam APIs para encaminhar (instrumentar \ orquestrar) instruções vindas do código de teste para o device ou emulador. Estes testes trazem mais fidelidade se comparados a testes unitários convencionais, porém sua execução é mais lenta. Nos testes instrumentados do Beagle, as vezes um componente server-driven não tem um `ID`. Neste caso, nós adicionamos um elemento widget que referencia o componente, e um `ID`, para que então possamos identificar o componente pelo `ID` programaticamente gerado.

### Testes Instrumentados Mobile: exemplo

![](/gif-teste.gif)

Neste exemplo, fizemos um teste instrumentado na plataforma Android utilizando o framework Espresso. Nós verificamos a funcionalidade de seleção e inserção de valores em um componente `text field`, que é server-driven. 

```java
@Test
    public void TestSelectTextField() {
        new BeagleRobot()
            .checkViewContainsText("Beagle Sample")
            .selectMenuOption()
            .clickOnText("TextField")
            .typeIntoTextField(0,0,"beagle")
            ;
    }
```

### Passo 1: Iniciar o teste

Começamos o teste validando se a aplicação foi devidamente aberta na página principal. Na função `checkViewContainsText`, confirmamos se o  `Header` foi apresentado na tela. 
Como este componente não possui um ID propriamente dito, utilizamos o texto contido no `Header` para localizar essa `view` na página principal. Veja o exemplo a seguir: 

```java
public BeagleTest checkViewContainsText(String text) {
        onView(allOf(withText(text))).check(matches(isDisplayed()));
        return this;
}
```

### Passo 2: Apresentar o menu

Após localizar o `Header`, o próximo passo é utilizar a `selectMenuOption` para selecionar o ícone "hambúrguer" e apresentar as opções do menu. Por ser um componente server-driven e não possuir um ID nesta implementação,  utilizamos o posicionamento do componente para realizar a seleção. Desta forma, buscamos pelo texto presente no `ContentDescription ("More options")` e, em seguida, o seu posicionamento na hierarquia do componente. Confira no exemplo: 

```java
public BeagleTest selectMenuOption() {
        onView(allOf(withContentDescription("More options"), childAtPosition(childAtPosition(withId(R.id.action_bar), 1), 0))).perform(click());
        return this;
}
```

### Passo 3: Selecionar componente

Neste passo, o teste irá clicar em um componente \(novamente localizado a partir do texto que contém\) chamado `text field`, que é um item do menu aberto no passo anterior.

```java
public BeagleTest clickOnText(final String text) {
        onView(allOf(withText(text), isDisplayed())).perform(click());
        return this;
}
```

### Passo 4: Inserir o componente

Neste último passo, vamos inserir um texto no componente `text field`. Uma vez que este componente não possui ID e nem um texto, ele será localizado pelo seu posicionamento na hierarquia do componentes. Veja no exemplo a seguir: 

```java
public BeagleTest typeIntoTextField(int position1, int position2, String text) {
        onView(allOf(childAtPosition(
          childAtPosition(
            withId(R.id.fragment_content), position1), position2)
          )
        ).perform(typeText(text));
                
        Espresso.closeSoftKeyboard();
        return this;
}
```

{{% alert color="success" %}}
Pronto, o seu teste instrumentado foi realizado!
{{% /alert %}}
