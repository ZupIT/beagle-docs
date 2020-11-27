---
title: Testes
weight: 235
description: 'Nesta seção, você encontra mais detalhes de testes em aplicações com o Beagle.'
---

---

## Testes Unitários

Testes que têm por objetivo **medir a funcionalidade do código** em sua menor fração. É possível realizar testes unitários no Beagle seguindo o mesmo processo utilizado para caso de aplicações que não utilizem nossa ferramenta, já que o Beagle não interfere na realização dos testes. 

## Testes Instrumentados

Testes que são feitos como os testes unitários, com a diferença de que, em alguns casos, um um componente `server driven` pode não conter um ID, o que que geralmente o identifica como teste instrumentado.

Vale reforçar que estes tipos de testes feitos em aplicações que usam Beagle da mesma maneira que em aplicações que não usam nossa ferramenta.  

Para sanar problemas nos testes instrumentados, adicionamos ao elemento `WIDGET` \(que referencia um componente\) um `atributo ID` para que seja possível identificá-lo programaticamente.

Listamos um exemplo de um caso abaixo em que fizemos testes usando um elemento `server driven`.

### Como testamos?

![](../../.gitbook/assets/gif-teste.gif)

Neste exemplo, fizemos um teste instrumentado na plataforma Android utilizando o `Espresso (Framework de automação)`, em que verificamos a funcionalidade de seleção e inserção de valores em um componente `text field`, que é server-driven. 

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

Você deve começar o teste validando se a aplicação foi devidamente aberta na página principal. Isso é feito para confirmar na função abaixo se o `Header` foi apresentado na tela. 

Como este componente não possui uma ID propriamente dita, utilizamos o texto contido no `Header` para localizar essa `view` na página principal. Veja o exemplo a seguir: 

```java
public BeagleTest checkViewContainsText(String text) {
        onView(allOf(withText(text))).check(matches(isDisplayed()));
        return this;
}
```

### Passo 2: Apresentar o menu

Após localizar o `Header`, o próximo passo é utilizarmos a função abaixo para selecionar o `hamburguer icon`  e apresentar as opções deste menu.

Por ser um componente server driven e não possuir um ID nesta implementação,  utilizamos o posicionamento do componente para realizar a seleção. 

Desta forma, buscamos pelo texto presente no `ContentDescription ("More options")` e, em seguida, o seu posicionamento na hierarquia do componente. Confira no exemplo: 

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

Neste último passo, vamos inserir um texto ao componente `text field`. Uma vez que este componente não possui ID e nem um texto, ele será localizado pelo seu posicionamento na hierarquia do componente. Veja no exemplo a seguir: 

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

{% hint style="success" %}
Pronto, o seu teste instrumento foi realizado!
{% endhint %}
