---
title: Adicionando um componente Beagle Declarativo
weight: 216
description: >-
  Esta seção descreve como adicionar um componente Declarativo do Beagle a uma
  tela nativa
---

---

## Pré-requisitos:

## Passo 1: Criar a tela nativa



Para criar a tela nativa no Android basta somente criar uma nova Activity. Aqui usaremos a MainActivity como modelo:


```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        declarative_content.addView(declarativeComponente().toView(this))
    }
}


```


{{% alert color="info" %}}
Por hora a MainActivity.kt não terá modificações. É necessário que modifiquemos o seu arquivo activity\_main.xml primeiro. 
{{% /alert %}}

* Abra o **`activity_main.xml`**
* Por padrão, este arquivo vem configurado com o **`Contraint Layout`** e ele pode ser mantido dessa forma. Para que ele possa ser utilizado pelo Beagle é necessário que se declare um **`Fragment Layout`** nesse  arquivo xml. É nesse fragment que será carregado o componente Declarativo.

Abaixo listamos o exemplo de xml utlizado nesse tutorial, o que finaliza a criação de nossa tela Nativa. 


```markup
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">
<FrameLayout
    android:id="@+id/declarative_content"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

</FrameLayout>
</androidx.constraintlayout.widget.ConstraintLayout>
```




Nesse exemplo criamos a seguinte `UIViewController`:

```swift
class NativeViewController: UIViewController {

    private lazy var firstLabel = makeLabel(text: "I'm a native UILabel")
    
    private lazy var secondLabel = makeLabel(text: "Another native UILabel")

    private func makeLabel(text: String) -> UILabel {
        let label = UILabel()
        label.text = text
        label.textAlignment = .center
        label.font = .systemFont(ofSize: 25, weight: .semibold)
        label.backgroundColor = UIColor(hex: grayColor)
        return label
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = "Beagle Native"
        navigationItem.backBarButtonItem = UIBarButtonItem(
            title: nil, 
            style: .plain, 
            target: nil, 
            action: nil
        )
        setupView()
    }
    
    private func setupView() {
        view.backgroundColor = .white
        
        view.addSubview(firstLabel)
        firstLabel.anchorCenterXToSuperview()
        firstLabel.anchor(
            top: topLayoutGuide.bottomAnchor,
            topConstant: 50
        )
        
        let layoutMargins = view.layoutMarginsGuide
        
        view.addSubview(secondLabel)
        secondLabel.anchorCenterXToSuperview()
        secondLabel.anchor(top: beagleView.bottomAnchor, topConstant: 30)
        secondLabel.bottomAnchor.constraint(lessThanOrEqualTo: layoutMargins.bottomAnchor).isActive = true
    }

    private let grayColor = "#EEEEEE"
}
```



## Passo 2: Criar o componente declarativo



Para criar um componente declarativo do Beagle utilizaremos um Container \(um componente do Beagle que agrupa outros componentes\). Ele pode ser declarado como uma variavel ou como uma função que retorna um container. Nesse exemplo nós o configuramos como retorno de uma função.


```text
fun declarativeComponente() = 

    Container( children = 
        listOf(
            Text(
                text = "These buttons are rendered by Beagle"
            ).applyFlex(
                Flex(
                    alignSelf = AlignSelf.CENTER
                )
            ),
            Button(
                "I'm a server-driven button 1", 
                onPress = listOf(
                    Alert(message = "I'm a working button"))
                )
            ),
             Button(
                "I'm a server-driven button too", 
                onPress = listOf(
                    Alert(message = "I'm a working as well"))
                )
            )
        )
    )
```




Para criar um componente declarativo do Beagle em forma de `UIView` utilizamos o componente **`BeagleView`**, ele pode ser declarado como os componentes nativos criados no passo anterior. Segue um exemplo abaixo com um `Container` que possui um texto e dois botões:

```swift
private lazy var beagleView = BeagleView(Container(
        widgetProperties: .init(style: Style()
            .backgroundColor(grayColor)
            .margin(.init(all: 20))
            .padding(.init(all: 10))
        )
    ) {
        Text(
            "These buttons are rendered by Beagle",
            widgetProperties: .init(style: .init(
                margin: .init(bottom: 10),
                flex: Flex().alignSelf(.center)
            ))
        )
        Button(
            text: "I'm a server-driven button",
            onPress: [
                Alert(
                    title: "Server-driven button", 
                    message: "I'm a server-driven button"
                )
            ]
        )
        Button(
            text: "Navigate to Navigator",
            onPress: [Navigate.openNativeRoute(.init(route: .navigateStep1Endpoint))]
        )
    })
```



## Passo 3: Adicionar o componente na tela



Para adicionar esse componente a tela, será necessário chamar a função **`addView`**do Android a partir do **`Fragment Layout view`** que foi declarado no `activity_main.xml` como listado no exemplo abaixo.  


```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        declarative_content.addView(declarativeComponente().toView(this))
        
    }
}
```


Como parametro do **addView** listamos a função que retorna o componente que criamos aplicando o método do Beagle **`.toView(this)v`**



O BeagleView pode ser adicionado como a UIView , nesse exemplo usamos o método addSubview\(\) para adicionar este componente na tela.

Segue abaixo o método setupView\(\) o qual é responsável por adicionar e ancorar os componentes da tela:

```swift
private func setupView() {
        view.backgroundColor = .white
        
        view.addSubview(firstLabel)
        firstLabel.anchorCenterXToSuperview()
        firstLabel.anchor(
            top: topLayoutGuide.bottomAnchor,
            topConstant: 50
        )
        
        let layoutMargins = view.layoutMarginsGuide
        
        view.addSubview(beagleView)
        beagleView.translatesAutoresizingMaskIntoConstraints = false
        beagleView.topAnchor.constraint(equalTo: firstLabel.bottomAnchor, constant: 50).isActive = true
        beagleView.leadingAnchor.constraint(greaterThanOrEqualTo: layoutMargins.leadingAnchor).isActive = true
        beagleView.trailingAnchor.constraint(lessThanOrEqualTo: layoutMargins.trailingAnchor).isActive = true
        beagleView.centerXAnchor.constraint(equalTo: firstLabel.centerXAnchor).isActive = true
                
        view.addSubview(secondLabel)
        secondLabel.anchorCenterXToSuperview()
        secondLabel.anchor(top: beagleView.bottomAnchor, topConstant: 30)
        secondLabel.bottomAnchor.constraint(lessThanOrEqualTo: layoutMargins.bottomAnchor).isActive = true
    }
```



E pronto. Basta inicializar a sua aplicação e a tela declarativa será renderizada nativamente.
