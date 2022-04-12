---
title: Componente Customizado Simples
weight: 131
description: Aqui voce aprenderá a criar um componente customizado no backend com o Beagle.
---

---

## Como criar componentes e widgets?

Para criar um componente e registrá-lo no Backend é necessário criar um Widget

## Qual a diferença entre um componente e um widget?

- Um componente guarda toda a lógica referente a funcionalidade do componente. Em nosso exemplo, é onde ficará a lógica para o aumento do tamanha do texto. Essa informação será implementada no front end.
- Um widget é a estrutura pela qual passaremos informações para o nosso componente a partir do backend, como por exemplo, o texto referente ao título e aos botões. É ele quem declaramos na hierarquia de uma tela no backend. Ele também é utilizado para registrar o componente e sua assinatura no Beagle (seu contrato, propriedades e etc, tanto no backend quanto no frontend).

No exemplo abaixo, iremos criar um **componente customizado** e demonstrar como registrá-lo no backend. Esse componente será composto por:

- Um **texto** e Dois **botões** (este mesmo exemplo existe no front end para testes)

Os botões neste componente são responsáveis ​​por aumentar e diminuir o tamanho do texto do título no componente e ele será como a imagem a seguir:

{{< figure src="/shared/customComponentMocked.png" width="400" >}}

{{% alert color="success" %}}
Os elementos criados aqui usarão algumas anotações, como `@RegisterWidget` e algumas extensões, como a classe `Widget`. Abaixo mostraremos o quando e como.
{{% /alert %}}

## Criando o widget

Para criar um widget:

1. Crie uma classe no backend e a nomeie`"CustomWidgetTitleIncrease"`
2. Aplique a anotação`@RegisterWidget` a esta classe;
3. Estenda essa classe utilizando a interface `Widget`

```kotlin
import br.com.zup.beagle.annotation.RegisterWidget
import br.com.zup.beagle.widget.Widget

@RegisterWidget
class CustomWidgetTitleIncrease(
    val title: String,
    val buttonTitle1: String,
    val buttonTitle2: String
) : Widget()
```

Uma vez configurado, já é possivel utilizar esse componente e definir as propriedades listadas acima a partir do backend.

### Criar e configurar o componente no Front end

Ao criar o componente no front end, também será necessário que se crie um Widget de mesmo nome que o utilizado no backend. Isso fará que ele seja registrado no front end e permitirá que se receba as informações enviadas do backend.

- Clique neste [link](/pt/android/customization/widgets/simple-custom-widget/) para ver como criar esse componente ( e toda a sua lógica) em um front end Android.

Após implementa-lo no front basta rodar sua aplicação e a ele será exibido como na imagem abaixo:

{{< figure src="/shared/customComponentMockedGif.gif" width="400" >}}
