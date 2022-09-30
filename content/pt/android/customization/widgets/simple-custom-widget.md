---
title: Widget Customizado Simples
weight: 131
description: Aqui voce aprenderá como criar e utilizar um widget no Beagle.
---

---

## Como criar componentes e widgets?

Para criar um componente e registrá-lo no Front end é necessário criar um `Widget` e um `Componente` que retornará uma view.

## Qual a diferença entre um componente e um widget?

- Um componente guarda toda a lógica referente a funcionalidade do componente. Em nosso exemplo, é onde ficará a lógica para o aumento do tamanha do texto. Essa informação geralmente é implementada no front end.
- Um widget é a estrutura pela qual passaremos informações para o nosso componente, como por exemplo, o texto referente ao título e aos botões. É ele quem declaramos na hierarquia de uma tela no backend. Ele também é utilizado para registrar o componente e sua assinatura no Beagle (seu contrato, propriedades e etc, tanto no backend quanto no frontend).

No exemplo abaixo, implementaremos um **componente customizado** e um Widget que o registrará. Esse componente será composto por:

- Um texto
- Dois botões dentro de um layout linear.

Os botões neste componente serão responsáveis ​​por aumentar e diminuir o tamanho do texto do título e a tela será como a imagem a seguir:

{{< figure src="/shared/customComponentMocked.png" width="400" >}}

{{% alert color="info" %}}
Os elementos criados aqui usarão algumas anotações, como `@RegisterWidget` e algumas extensões, como a classe `WidgetView`. Abaixo mostraremos quando e como.
{{% /alert %}}

## Criando um widget

Para criar um widget:

1. Crie uma classe e a nomeie`"CustomWidgetTitleIncrease"`
2. Aplique a anotação`@RegisterWidget` a esta classe;
3. Estenda essa classe utilizando a interface `WidgetView`
4. A classe agora requisitará que você implemente o método `buildView` . Nesse momento, deixe a classe como listada abaixo, pois a configuração desse método será finalizada depois:

```kotlin
CustomWidgetTitleIncrease.kt

@RegisterWidget
class CustomWidgetTitleIncrease: WidgetView() {
    override fun buildView(rootView: RootView): View {
        TODO("Not yet implemented")
    }
}
```

## Passo 2: Criando e configurando o componente

Comece criando um arquivo de configuração`.XML`e copie e cole o conteúdo abaixo, pois ela cria o layout escolhido para esse exemplo:

```markup
title_increase_component_layout.xml

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:gravity="center"
    android:orientation="vertical">

    <TextView
        android:id="@+id/tv_example_title"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center"
        android:padding="20dp"
        android:text="Example" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center">

        <Button
            android:id="@+id/bt_increase"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="5dp"
            android:text="B1" />

        <Button
            android:id="@+id/bt_decrease"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="5dp"
            android:text="B2" />
    </LinearLayout>
</LinearLayout>
```

Agora, é hora de criar o componente:

1. Crie uma classe e a nomeie: `TitleIncreaseComponent`. É nessa classe que ficará registrado como o componente funciona e a regra de negócio dele. Lembrando que a regra de negócio desse componente é unicamente aumentar e dimunir o tamanho do seu Título.
2. Copie e cole a classe abaixo:

```kotlin
class TitleIncreaseComponent(context: Context) : LinearLayout(context) {

    init {
        View.inflate(context, R.layout.title_increase_component_layout, this)
        changeTitleSize()
    }

    fun setTitleText(title: String) {
        tv_example_title.text = title
    }

    fun setTitleButton1(titleButton: String) {
        bt_increase.text = titleButton
    }

    fun setTitleButton2(titleButton: String) {
        bt_decrease.text = titleButton
    }

    private fun changeTitleSize() {

        var size = tv_example_title.textSize
        tv_example_title.textSize = size
        Toast.makeText(context, size.toString(), Toast.LENGTH_SHORT).show()

        bt_increase.setOnClickListener {
            if (size < 50) {
                size += 5f
                tv_example_title.textSize = size
            }
            Toast.makeText(context, size.toString(), Toast.LENGTH_SHORT).show()
        }

        bt_decrease.setOnClickListener {
            if (size > 5) {
                size -= 5f
                tv_example_title.textSize = size
            }
            Toast.makeText(context, size.toString(), Toast.LENGTH_SHORT).show()
        }
    }
}
```

## Passo 3: Configurando o Widget

Agora que o layout e o componente estão definidos, é preciso terminar a configuração do Widget customizado

Analise a função abaixo e observe que algumas *variáveis de texto* foram adicionadas.

- Essas variavéis vão receber os valores dos textos que definirão o título que mudará de tamanho e o título dos botões.
- Os valores dos textos serão definidos a partir de um JSON que representará uma tela com o componente criado aqui (O código do JSON será dado no próximo passo)

```kotlin
CustomWidgetTitleIncrease.kt

@RegisterWidget
class CustomWidgetTitleIncrease(
    private val title: String,
    private val buttonTitle1: String,
    private val buttonTitle2: String
) : WidgetView() {

    override fun buildView(rootView: RootView) =
        TitleIncreaseComponent(rootView.getContext()).apply {
            setTitleText(title)
            setTitleButton1(buttonTitle1)
            setTitleButton2(buttonTitle2)
        }
}
```

## Passo 4: Exibindo o componente

Agora que o Widget customizado está pronto, o componente pode ser exibido.

Para que não seja preciso configurar todo um backend somente para testes, você pode mockar o JSON abaixo, que simulará um endpoint com uma tela que contém o componente que você acabou de criar. (Para criar esse componente em um backend, clique [aqui](/backend/kotlin/customization/simple-custom-widget/))

```json
{
  "_beagleComponent_":"beagle:screenComponent",
  "child":{
    "_beagleComponent_":"beagle:container",
    "children":[
      {
        "_beagleComponent_":"custom:customWidgetTitleIncrease",
        "title":"Title",
        "buttonTitle1":"Button 1",
        "buttonTitle2":"Button 2"
      }
    ],
    "style":{
      "backgroundColor":"#000000",
      "cornerRadius":{
        
      },
      "size":{
        
      },
      "flex":{
        "justifyContent":"SPACE_AROUND",
        "alignItems":"CENTER",
        "grow":1
      }
    }
  }
}
```

Agora basta carregá-lo a partir de uma Activity no Android, como no exemplo abaixo:

```kotlin
MainActivity.kt

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val intent = this.newServerDrivenIntent<ServerDrivenActivity>(RequestData(url = "yourMockedJSONAddress"))
        startActivity(intent)
    }
}
```

- Execute a aplicação e seu componente customizado \(nesse caso uma tela\) será exibido:

{{< figure src="/shared/customComponentMockedGif.gif" width="400" >}}
