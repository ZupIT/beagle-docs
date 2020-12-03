---
title: Criação de novas ações
<<<<<<< HEAD
weight: 186
description: >-
  Nesta seção, você encontra como criar uma ação customizada e detalhes dos
  métodos que ela implementa.
=======
weight: 200
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
### Criando a ação no frontend

No Beagle, é possível criar uma [**ação**](../api/api-acoes/) **customizada** a partir de uma `CustomAction` . 

Cada plataforma tem sua forma própria para fazer esta implementação no frontend. Abaixo, listamos exemplos para cada uma.



Primeiro, você deve criar uma classe anotada com `@RegisterAction` que implemente a **interface** `Action`. Esta mesma interface solicitará que o método `execute` seja implementado e, aqui, você irá declarar o resultado da `action`.

O atributo `msg` listado é apenas um exemplo de parâmetro que pode ser declarado no construtor desta classe. O exemplo a seguir mostra uma ação com **Toast:**


```kotlin
@RegisterAction
data class CustomAction(
val msg: String? = null
) : Action {
    override fun execute(rootView: RootView) {
        Toast.makeText(
            rootView.getContext(),
            msg, 
            Toast.LENGTH_LONG).show()
    }
}
```




Primeiro, você deve criar uma classe que implemente o tipo `Action`. Esta mesma classe solicitará que o método `execute` seja implementado e irá ditar as ações da `action` . 

O atributo `msg` listado é apenas um exemplo de parâmetro que pode ser declarado no construtor desta classe. O exemplo a seguir mostra uma ação com **`Alert`:**


```swift
class CustomAction: Action {
    let msg: String?
    
    init(msg: String? = nil) {
        self.msg = msg
    }
    
    func execute(controller: BeagleController, sender: Any) {   
        let alert = UIAlertController(
        title: nil, 
        message: msg, 
        preferredStyle: .alert
        )
        
        controller.present(alert, animated: true)
    }

}
```


Para registrar a ação, basta criar um método onde terá todas suas `custom action` e chamar o método do Beagle `registerCustomAction` que fará o registro.

Chame o [**método criado no BeagleConfig**](../get-started/new-project/case-ios/#passo-2-configurando-o-beagle), tal como no tutorial da seção [**"Criando um projeto do zero".** ](../get-started/new-project/case-ios/#iniciando-um-projeto-ios)

```kotlin
private func registerCustomAction() {
   Beagle.registerCustomAction("CustomAction", actionType: CustomAction.self)
}
```



Primeiro, você deve criar uma interface com a propriedade obrigatória `_beagleAction_` __e os parâmetros necessários para sua ação. Para este exemplo, criaremos o atributo `msg` do tipo `string`.

Em __`_beagleAction_` , coloque o nome da ação customizada seguindo o padrão 'custom:nomeDaAção'

```javascript
interface CustomAction {
  _beagleAction_: 'custom:CustomAction',
  msg: string
}
```

Feito isso, declare uma função do tipo `ActionHandler` com a interface que você acabou de criar.

```javascript
import { ActionHandler } from '@zup-it/beagle-web'


export const customHandler: ActionHandler<CustomAction> = ({ action }) => {
    /*
       Podemos acessar nosso parâmetro definido na interface, por exemplo 
       action.msg nos traz o valor de msg.
    */
    alert(action.msg)
}
```

Por fim, adicione o nome da ação no arquivo de associações de acordo com cada framework:

**Para o Angular,** adicione em beagle.module.ts

```javascript
@BeagleModule({
  ...
  customActions:{
    "custom:CustomAction": customHandler //nome do action handler
  }
})
export class Beagle {}
```

**Para o React,** adicione ao seu arquivo de configurações do Beagle

```javascript
export default createBeagleUIService<any>({
    ...
    customActions:{
        "custom:CustomAction": customHandler //nome do action handler
      }
})

```



### Criando a referência da ação no backend

Para criar a referência, o seu código deve ficar assim: 


```kotlin
@RegisterAction
data class CustomAction(
val msg: String? = null
) : Action 
```


Abaixo, temos um exemplo de Action em um componente do tipo Botão. 



```kotlin
{
  "_beagleComponent_": "beagle:button",
  "text": "Beagle Button",
  "onPress": [
    {
      "_beagleAction_": "custom:customAction",
      "msg": "Eu sou um Toast."
    }
  ]
}
```



```kotlin
Button(
   text = "Beagle Button",
   onPress = listOf(CustomAction("Eu sou um Toast"))
)
```
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
