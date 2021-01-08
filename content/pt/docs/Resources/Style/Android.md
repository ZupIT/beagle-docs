---
title: Android
weight: 204
description: >-
  Nesta seção, você encontra tudo sobre como usar a estilização de componentes
  para projetos Android.
---

---

## Introdução 

Dentro da biblioteca do Beagle, existe a classe `DesignSystem` que pode ser usada para personalizar os componentes utilizados na sua aplicação.

Esta classe serve para mapear os recursos locais de um aplicativo para podermos referenciá-los no [**BFF** ](/pt/docs/key-concepts#backend-for-frontend)ao construir uma tela [**Server-Driven**](/pt/docs/key-concepts#server-driven-ui).

Além de imagens, o [**Design System**](/pt/docs/key-concepts#design-system) do Beagle pode personalizar: 

* A aparência dos textos;
* O estilo dos componentes de input;
* O estilo dos botões;
* O estilo das toolbars e
* Das tabViews. 

## Atributos customizáveis

{{% alert color="info" %}}
Para o Beagle ser capaz de aplicar os estilos customizados aos componentes, quando forem declarados na aplicação seus **pais devem se referir a cada familia correspondente**. Ou seja, para customizar os componentes:

* `Text`, seu estilo deve estender de **`Widget.AppCompat.TextView`**
* `TextInput`, seu estilo deve estender de **`Widget.AppCompat.EditText`**
* `Button`, seu estilo deve estender de **`Widget.AppCompat.Button`**
* `Toolbar`, seu estilo deve estender de **`Widget.AppCompat.Toolbar`**
* `TabView`, seu estilo deve estender de **`Widget.Design.TabLayout`**
{{% /alert %}}

### Text

Os textos no Beagle Android são **totalmente customizáveis**. Para realizar qualquer mudança, basta seguir o padrão abaixo:  


```markup
<!-- Custom style for textual components. -->
    <style name="CustomText" parent="Widget.AppCompat.TextView">
        <item name="android:textColor">#000000</item>
        <item name="android:textSize">20sp</item>
        <item name="android:textStyle">bold</item>
    </style>
```


### TextInput

Os componentes de input no Beagle Android também são **totalmente customizáveis**. Para realizar qualquer mudança, basta seguir o padrão abaixo:  


```markup
<!-- Custom style for textual components. -->
    <style name="CustomInput" parent="Widget.AppCompat.EditText">
        <item name="android:textColor">@color/colorBlack</item>
        <item name="android:background">@drawable/text_input_background</item>
    </style>
```


### Button

Assim como os textos e inputs, os botões no Beagle Android são **totalmente customizáveis**. Para realizar qualquer mudança, basta seguir o padrão abaixo: 


```markup
<!-- Custom style for Button components. -->
    <style name="CustomButton" parent="Widget.AppCompat.Button">
        <item name="android:textColor">#000000</item>
        <item name="android:textSize">18sp</item>
        <item name="android:textAllCaps">false</item>
        <item name="android:background">?attr/selectableItemBackground</item>
    </style>
```


### Toolbar

Dentro da biblioteca Beagle no Android, a barra de ferramentas faz parte da [**classe NavigationBar**.](/pt/docs/api/screen/navigation-bar) Para que ela funcione corretamente no [**BeagleActivity**](/pt/docs/get-started/creating-a-project-from-scratch/case-android#passo-4-criar-o-appbeagleactivity), você precisar informar ao Beagle qual barra irá utilizar na sua aplicação. 

A customização da barra pode ser feita no momento em que ela é passada para o Beagle. A Toolbar, além dos atributos já mencionados, possui outros quatro que são exclusivos: 

1. **backgroundColor:** define a cor de fundo da Barra de Ferramentas.
2. **navigationIcon**: recebe um `drawable` e o atribui ao ícone de navegação da barra de ferramentas. 
3. **titleTextAppearance**: recebe um estilo de texto para personalizar o título da barra de ferramentas.
4. **centerTitle**: quando ativado, centraliza o título na barra de ferramentas.


```markup
<!-- Custom style for Toolbar components. -->
    <style name="CustomToolbar" parent="Widget.AppCompat.Toolbar">
        <item name="backgroundColor">@color/colorPrimaryDark</item>
        <item name="navigationIcon">?attr/homeAsUpIndicator</item>
        <item name="titleTextAppearance">@style/CustomTitleToolbar</item>
        <item name="centerTitle">true</item>
    </style>
    
    <style name="CustomTitleToolbar" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorPrimary</item>
        <item name="android:textSize">20sp</item>
        <item name="android:textStyle">bold</item>
    </style>
```


### TabView

O componente TabView no Beagle representa o `TabLayout` do Android e toda a sua estrutura visual pode ser estilizada com os seguintes atributos:

1. **tabSelectedTextColor**: atribui uma cor diferente ao texto da aba selecionada.
2. **tabTextColor**: atribui uma cor ao texto a todas as guias, ou seja, as abas não selecionadas.
3. **tabBackground**: recebe um `drawable` e atribuí-lo ao plano de fundo do TabView.
4. **tabIndicatorColor**: atribui uma cor ao indicador de seleção de uma aba.
5. **tabIconTint**: recebe um `drawable` para definir as cores dos ícones, sendo selecionados ou não.


```markup
<!-- Custom style for TabLayout components. -->
    <style name="CustomTab" parent="Widget.Design.TabLayout">
        <item name="tabSelectedTextColor">@color/colorWhite</item>
        <item name="tabTextColor">@color/colorBlack</item>
        <item name="tabBackground">@color/colorPrimaryDark</item>
        <item name="tabIndicatorColor">@color/colorWhite</item>
        <item name="tabIconTint">@color/selector_icon_color</item>
    </style>
```


Para gerenciar as abas selecionadas, é recomendado o uso de um seletor para o atributo`tabIconTint`. Como no exemplo abaixo: 


```markup
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:color="@android:color/white" android:state_selected="true" />
    <item android:color="@android:color/black" />
</selector>
```
