---
title: Beagle Class Creator
weight: 2
description: >-
  Nesta seção, você encontra a implementação do Plugin Beagle Class Creator
---

---

## O que esse Plugin faz?
![JetBrains Plugins](https://img.shields.io/jetbrains/plugin/v/br.com.zup.beagle-template-intellij-plugin?color=green&label=Beagle%20Class%20Creator&style=plastic)

Com esse plugin o desenvolvedor consegue criar componentes customizados do Beagle automaticamente com apenas dois cliques.

Além disso, ele provém uma serie de live templates com componentes padrão do Beagle que podem ser utilizados na construção de uma tela, como por exemplo Containers, ScrollViews, etc... 

## Com instalar?

Para instalar, abra o Intellij ou Android Studio e clique em:
* *File > Settings*

![](/shared/plugin/settings.png)

* *Procure* no marketplace por 'Beagle Class Creator' como indicado abaixo

![](/shared/plugin/search.png)
* *Instale* e aproveite.

## Como utilizar o Class Creator?

Após a instalação, siga as instruções abaixo:

* Clique com o botão direito do mouse no pacote onde se quer criar o componente customizado.
* Ao clicar em NEW, você verá a opção **Beagle**, que contem o grupo de opções para ANDROID ou BACKEND.
* Selecione a opção de acordo com o seu ambiente (Backend ou Android).
* Uma tela com diversas opções de componentes do Beagle que podem ser customizados aparecerá. 
* Selecione um componente, escolha o nome dele e aperte ENTER.
* O novo componente será criado nesse pacote, assim como no exemplo abaixo.

![](/shared/plugin/plugin.gif)

## Como utilizar os Live Templates?

Para ver/ou utilizar os templates, aperte as teclas:

* *CTRL + ALT + J* para abrir o painer com os Live Template (WINDOWS) ou 
* *⌘ + ⌥ + J* (command + option + J para iOS).

* Um painel com os live templates disponiveis será aberto. Ao clicar em um template ele será adicionado ao seu código. Por exemplo, clicar em `Surround with CONTAINER` fará com que um `Container` do Beagle seja adicionado a tela. 
* Se você tiver selecionado um outro elemento qualquer na tela, como um **TEXT** no exemplo abaixo, o Container encapsulará o componente. 
* Lembre-se que alguns componentes, como por exemplo o `CENTER`, ou `TOUCHABLE`, aceitam somente um FILHO, ou seja, se você selecionar dois elementos e clicar no `apply-CENTER-style` a IDE vai te indicar algum tipo de erro pois esse componente aceita somente um filho.

![](/shared/plugin/plugin-live-template.gif)

## Como utilizar o autocomplete?

O autocomplete é muito fácil de utilizar neste plugin.
Tudo o que você precisa fazer é começar a escrever o nome do componente que deseja chamar, por exemplo, `cont` para `Container`, e apertar `TAB` para criar esse componente.

Todos os componentes e ações do Beagle estão configurados nesse autocomplete. 
A regra geral para chamá-los é:

* Comece a escrever o nome do componente/ação
* A maioria das abreviações tem cerca de 4 a 5 letras.
* Se você esperar um segundo antes de clicar em `TAB`, uma lista aparecerá informando sobre a opção de criar um componente Beagle ou uma ação Beagle.

![](/shared/plugin/autocomplete.gif)

<!-- # Quer saber mais sobre o nosso plugin? 
👉 Acesse o repositório do nosso [Beagle Class Creator Plugin](https://github.com/ZupIT/beagle-template-intellij-plugin) e fique a vontade para contribuir e nos dar sugestões! -->