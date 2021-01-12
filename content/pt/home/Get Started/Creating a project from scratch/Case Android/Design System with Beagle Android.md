---
title: Design System com Beagle Android
weight: 35
description: >-
  Nesta seção, você encontra um tutorial para configurar o Design System do
  Beagle no Android
---

---

## **Criando um Design System**

No exemplo prático da página "Criando um projeto com Beagle para Android", você pode conferir como fazer a [**implementação do Beagle**](/pt/home/get-started/creating-a-project-from-scratch/case-android) para criar uma tela server-driven simples, com apenas 2 textos: 1 título e 1 parágrafo.

Neste tutorial, a ideia é avançar a partir do [**projeto anterior**](/pt/home/get-started/creating-a-project-from-scratch/case-android/#passo-7-exibir-sua-tela-server-driven) para **criar um Design System na sua biblioteca do Beagle**. Os exemplos que ilustrarão o passo a passo estão nestes [**sample codes**](https://github.com/ZupIT/beagle-examples) que você encontra no nosso repositório.

O Design System que iremos configurar vai permitir que você customize alguns componentes do Beagle, como por exemplo:

- Text
- Button
- Toolbar
- TabBar
- Entre outros.

Além disso, será possível customizar os 2 componentes de textos que criamos na primeira tela feita no tutorial anterior.

## Contexto

Com o Design System deste tutorial, você poderá registrar `estilos (styles)` como fontes, cores, tamanhos de fonte e componentes customizados.

De modo geral, define-se o design system de uma aplicação ao criar uma classe que implemente a sua interface. A partir dela, implementa-se todos os métodos que sobrescrevem as funções responsável por aplicar “estilos” aos componentes. É possível declarar, dentro de uma função, N estilos ou mesmo nenhum \(salvo algumas exceções\).

No caso do Beagle, cada estilo deve ser referenciado de forma que cada um tenha um nome para ser facilmente identificado.

### Exemplo

No exemplo abaixo, temos o método image que está registrando várias imagens que estão sendo utilizadas para construir uma página a partir do backend.

Perceba que nela utilizamos um operador `when` para designar os estilos, ou seja, o primeiro valor é listado como uma `string` que identifica o componente de estilo no Beagle _\(semelhante a uma relação de chave/valor\)_ e com uma`Arrow Function ->` listamos o estilo do componente _\(id do estilo no Android\)_. A lógica aqui se assemelha a um par “chave/valor”.

Com a função estabelecida desta forma, o operador _**else**_ conterá um estilo “default”, como demonstrado no código abaixo.

![](https://lh5.googleusercontent.com/sRycVP6U1ThpjYfz4KJHH1Dp6jCZxONg7u1KC-_CDCiROkOFwhOvF5kGOxuTpOexLUZ8R-J97UCMNKqV16uUz4MBGIO279Dn4vS6LZiqIFn_kOtxtX5wLMo57wKS3_5nKdDoc3gM)

O trecho em amarelo mostra o "nome do estilo" declarado no backend e recuperado no front end \(Android\). Já o trecho em laranja mostra o estilo criado no Android que será executado quando "Nome do estilo" for lido no JSON informado pelo backend

## **Começando**

Vamos à parte prática! Primeiro, você deve localizar a pasta de estilos “Style” em sua IDE Android . Para fazer isso no Android Studio, clique em **res &gt; values &gt; styles**.

Feito essa parte, abra o arquivo de estilos \(styles\) e você verá uma tela semelhante a abaixo. É neste arquivo que listaremos os estilos que serão aplicados nos componentes Android.

Sugerimos manter este arquivo aberto, pois vamos utilizá-lo mais à frente.

![](https://lh4.googleusercontent.com/1ykMjqUpXX3xTPLxPl3H3nNRWkB5nK7shGIaFvx3oRATEJ4eK4yhPG1fpUECPjOnKEdRMhSzaXT5byE5PUFhxZIo1SCqC6j345H4qrjTEv4ShWK1PZsHrUB7GmmEjeW6Mo1-jjvd)

Dividimos a criação do design system em 3 passos que serão vistos a seguir:

### Passo 1: Configurar o Design System no Android

O primeiro passo na criação de um design system é criar uma classe para representá-lo.

{{% alert color="info" %}}
Vale reforçar que o design system que criaremos faz parte do projeto que mencionamos no início do tutorial.
{{% /alert %}}

Com o projeto aberto, clique na pasta beagle com o botão direito do mouse e clique em _**new &gt; kotlin file/clas**_**s.** Feito isso, siga as instruções abaixo:

- Dê o nome de `AppDesignSystem` ao arquivo \(ou outro nome que você preferir\).
- Indique que esta classe deve estender de uma open class do Beagle chamada `DesignSystem`.
- Use a anotação `@BeagleComponent` acima do nome da classe `AppDesignSystem`.

Ao fazer estes passos, já podemos chamar métodos em que vamos registrar componentes que são criados no BFF. Cada método é responsável por aplicar “estilos” aos componentes.

Neste exemplo, vamos chamar o método **`textStyle.`**

```kotlin
@BeagleComponent
class AppDesignSystem: DesignSystem()  {

    override fun textStyle(id: String): Int? {
        return super.textStyle(id)
    }

}
```

Desta forma, o open classe`DesignSystem` tem ao menos seis métodos, onde cada um deles representa um tipo de componente. Cada método deverá então aplicar estilos aos componentes visuais que serão ali registrados.

Demonstraremos mais adiante como esses componentes e seus estilos são listados e organizados dentro desses métodos. Por ora, vamos entender o que cada método faz:

1. O método **`buttonStyle`** é responsável por aplicar estilo a componentes do tipo Botão \(Button\).
2. O método **`image`** é responsável registrar uma imagem para que ela possa ser referenciada em um tela server-driven.
3. O método **`tabBarStyle`** é responsável por aplicar estilos nos componentes do tipo TabBar.
4. O método **`textStyle`** aplica estilos nos componentes do tipo Text… \(perceba que usamos o plural ao falar de componentes… logo logo você saberá o porquê\).
5. E o método **`toolbarStyle`** responsável por aplicar estilo no componente`Toolbar`.
6. O método **`inputTextStyle`** responsavel por aplicar estilo no componente `InputText`.

### **Passo 2: Customizar o componente**

Este momento é o ponto em que o ocorre o [**BFF**](/pt/home/key-concepts#backend-for-frontend), quando frontend se conecta ao backend.

Para isso, você terá de **configurar o frontend do Android e o backend do Intellij**. Caso não o tenha pronto, é só baixar [**o exemplo de configuração do backend**](https://github.com/ZupIT/beagle-examples) e rodá-lo.

Para o nosso backend aqui, criamos uma pagina server-driven com 2 textos, sendo um título e um parágrafo. Ela deve ficar assim quando for renderizada no frontend:

![](https://lh4.googleusercontent.com/Rms7sJWr8_BXtHuaxpxtJwQly1O7qBX79AqhSlrj9TSjTqD_7eqFyavstkbgwQO3BVjoGeVV7W53KTVxUkonTD7R6wYBVhWWqa_tfwDaFBw8AVPu-KLQLcZ0H3A8UDK-X_9JMKyr)

Perceba que nossa tela é praticamente a estrutura e conteúdo somente. O tamanho do texto é padrão e a forma carece de um estilo.

Para atribuir um estilo a esses textos vamos recorrer a nossa tela configurada lá no BFF:

1.  Abra o projeto de BFF e localize o arquivo `FirstScreenBeagleBuilder`.

Esse é o arquivo que contém o código da sua primeira tela server driven, que deve estar configurada como na imagem logo abaixo.

Nela você deve perceber que construímos uma hierarquia de componentes com uma SCREEN e dois componentes do tipo TEXT.

{{% alert color="info" %}}
Para este momento do tutorial, preocupe-se apenas no que deve ser feito para que possamos aplicar um estilo aos nossos componentes.
{{% /alert %}}

![](https://lh3.googleusercontent.com/b3DvRw3pXFnrhgZtHF2kNMzZCY7vno0oqjs7VsxT2l9aukfyBI2KHfSg-5bcb-hgV_RgXqm0HxlVJBeimQ09bFiXc9R-ZFDrKPcV-PTQf7pbs8P1eZApkyldGdmmKJ3kQMgrUfYR)

Para adicionar um estilo a um elemento de texto, você deve listar o nome do estilo dentro do componente texto, conforme mostrado baixo. Não se esqueça de separar os componentes por uma vírgula.

Segure o botão Ctrl e coloque o mouse sobre o componente `Text` e você verá a lista de atributos que esse componente pode receber aqui no back-end. Por ora, utilizaremos apenas o `Style`

     2. Coloque uma virgula após o atributo text = "Hello Beagle", e escreva o outro atributo que quer definir, que é o `styleId`

    3. Digite a string `“Title.Text.Orange”` e pronto! O estilo está definido para esse componente de texto.

```kotlin
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
```

Por enquanto, não se preocupe com os outros elementos, como `.applyStyle` e demais configurações. Apenas garanta que nada mais seja modificado no exemplo e procure mantê-lo como mostramos agora.

{{% alert color="info" %}}
Repita este processo para o outro componente `Text` que é um paragrafo, com a diferença de que, aqui, nomeie-o como `“Description.Text.Orange”`
{{% /alert %}}

Isto é tudo que faremos no back-end nesse momento. Você pode rodar sua aplicação backend para que o serviço fique disponível e, em breve, você verá sua tela com estilo no Android.

{{% alert color="info" %}}
Caso tenha algum problema, recomendamos que faça o tutorial para [**implementar a instalação desse backend.**](/pt/home/get-started/installing-beagle/backend)
{{% /alert %}}

     4. Primeiro, vamos registrar três cores no arquivo color no android.

- Acesse o pacote _res &gt; values &gt; colors_
- Adicione as 3 cores dentro da Tag &lt;resources&gt;&lt;/resources&gt; da seguinte forma.
- Digite o código abaixo, assim criando as cores branca, preta e laranja na sua paleta de cores.

```markup
<color name="colorWhite">#FFFFFF</color>
<color name="colorBlack">#000000</color>
<color name="colorOrange">#FFA500</color>

```

Para encerrar esta etapa, crie no Android os estilos com os nomes que acabamos de atribuir aos textos lá na tela server-driven. acesse arquivo de estilos no pacote **res &gt; values &gt; styles**

Você pode fazer isso adicionando a configuração de estilo dentro da tag &lt;resources&gt;&lt;/resources&gt; como listado abaixo. Perceba que você já tem alguns elementos de estilo definidos e deve adicionar mais esse. Copie e cole o código abaixo para o texto que queremos que seja o `Título`.

```markup
<style name="Title.Text.Orange" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorOrange</item>
        <item name="android:textSize">20sp</item>
        <item name="textAllCaps">true</item>
        <item name="android:textStyle">bold</item>
    </style>
```

Repare que você pode definir muito mais aspectos dentro do estilo. Isso porque todas as opções que o Android permite podem ser configuradas nele.

- **A primeira linha,** define o nome do estilo como "Title.Text.Orange"
- **A segunda** define a cor laranja para o texto, como listado acima
- **A terceira** define o tamanho do texto como: 20 sp
- **A quarta** define que o texto deve ser exibe todo em letras maiúsculas
- **A quinta** linha define que o texto será em negrito

Devemos fazer o mesmo processo com o texto do parágrafo. Para ele, criaremos o seguinte estilo: `Description.Text.Orange`

```markup
 <style name="Description.Text.Orange" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorOrange</item>
        <item name="android:textSize">16sp</item>
        <item name="textAllCaps">true</item>
    </style>
```

{{% alert color="info" %}}
É uma boa prática definirmos um estilo default. No caso deste tutorial, vamos definir um para ser aplicado a textos normais.

O objetivo é que este valor seja aplicado no texto que chegar do backend que não tiver nenhum estilo pré-definido.
{{% /alert %}}

```markup
<style name="Design.System.Text.Default" parent="TextAppearance.AppCompat">
        <item name="android:textColor">@color/colorBlack</item>
        <item name="android:textSize">12sp</item>
    </style>
```

E pronto! Nossos componentes estão customizados! Agora vamos à etapa final.

### **Passo 3: Registrar o componente no Design System**

Uma vez que você já tem todos os estilos criados, é o momento de registrá-los na nossa classe `AppDesignSystem`, pois é lá onde Beagle aplica os estilos definidos no Android Studio nas telas server-driven que você receber do backend.

Para isso, siga estes passos:

1. Abra a classe `AppDesignSystem` e vá ao método `textStyle`.
2. Dentro deste método, crie um operador when. Dentro dele, vamos listar todos os estilos de texto que queremos utilizar agora e depois.

{{% alert color="info" %}}
Em caso de dúvida, veja aqui [**como utilizar o When.**](https://kotlinlang.org/pt/home/reference/control-flow.html#when-expression)
{{% /alert %}}

3. Informe os nomes dos `"styles"` que referenciamos no backend \(BFF\) e o estilo criado no Android, ligando-os programaticamente.

4. No _**else**_ , devemos listar o estilo o `default` que criamos. Siga o exemplo do codigo abaixo:

```kotlin
override fun textStyle(id: String): Int? {
        return when (id) {
            "Title.Text.Orange" -> R.style.Title_Text_Orange
            "Description.Text.Orange" -> R.style.Description_Text_Orange
            else -> R.style.Design_System_Text_Default
        }
    }
```

Perceba que o método textAppearance recebe uma string como parâmetro `name`, que vem da nossa tela server-driven.

No primeiro registro, listamos o nome criado para o estilo do título que foi:

- “Title.Text.Orange”
- Com uma `arrow function` `->` listamos o endereço do estilo no Android, ou seja, a ID do estilo criado como normalmente fazemos no Android Studio, que é : _R.style.Title_Text_Orange._

Faça o mesmo processo no segundo registro, pois agora estamos registrando o estilo que queremos usar para parágrafos com a descrição que criamos na nossa página server-driven. O segundo registro deve ser:

- _“Description.Text.Orange” -&gt; R.style.Description_Text_Orange._

E, por fim, no parâmetro _**else**_ de nosso operador `when`, devemos informar o valor default que criamos para o texto. Isso significa que qualquer requisição de estilo por uma página server-driven que não tenha um estilo definido aqui, terá o estilo default aplicado sobre si.

- Nestes casos, o parâmetro _**else**_ deve retornar _-&gt; R.style.Design_System_Text_Default._

Com os elementos listados desta forma, você pode preparar um Design System com diversas opções de tamanhos de textos, cores, margens. Lembrando que estes estilos podem ser criados para usar agora ou em outro momento.

{{% alert color="success" %}}
Parabéns, o seu DesignSystem está pronto!

Agora, basta executar sua aplicação Android e sua tela apresentará a os estilos customizados que definimos.
{{% /alert %}}

## O que fazer depois de pronto?

Agora que você já criou o seu Design System, é possível alterar o tamanho, cor ou testar os estilos que preferir.

Uma das grandes vantagens em utilizar uma página server-driven é poder trabalhar com um design system maduro. Ou seja, se você altera o modo como os componentes estão posicionados no backend, é possível "mudar sua tela" da maneira que quiser, tudo por meio do backend.

Neste exemplo, utilizamos elementos simples de estilo para explicar o Design system, mas perceba o número de funções nesta classe e, a partir daí, veja o quão amplo um design system pode ser.
