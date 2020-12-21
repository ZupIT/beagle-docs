---
title: Como criar novas actions
weight: 222
---

---

### Criando uma ação do frontend 

No Beagle, é possível criar uma [**ação**](../../../api/acoes/) customizada a partir de uma `CustomAction`.

Cada plataforma possui sua forma especificia de fazer essa implementação no frontend. Você pode ver exemplos abaixo de como fazer em cada uma delas: 

{{< tabs name="T92" >}}
{{% tab name="Android" %}}
1. Crie uma classe anotada com `@RegisterAction` que implementa uma interface `Action`. Essa interface irá requistar a implementação do método `execute` e você irá declarar o resultudo da `action`.
2. O atributo `msg` listado, é o único exemplo de parâmetro que deve ser declarado na classe construtora. 

O exemplo abaixo mostra um ação com **Toast**: 


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

{{% /tab %}}

{{% tab name="iOS" %}}
1. Você deve criar a classe que implementa uma `Action`. Essa mesma classe irá fazer a requisição da implementação do método `execute` e irá ditar as ações na `action`. 
2. O atributo listado `msg` é o único parâmetro que deve ser declarado na classe construtora. 

O exemplo abaixo mostra um ação com **`Alert`:**


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


3. Para registrar a ação, apenas crie o método com todo seu custom action e chame o  método do Beagle `registerCustomAction`  para fazer o registro; 

4. Chame o método criado no BeagleConfig, ele pode ser visto nesse [**exemplo**](../../get-started/criando-um-projeto-do-zero/):

```kotlin
private func registerCustomAction() {
   Beagle.registerCustomAction("CustomAction", actionType: CustomAction.self)
}
```
{{% /tab %}}

{{% tab name="Web" %}}
1. Você deve criar a interface com o `_beagleAction_` como uma propriedade obrigatória e com os parâmetros necessários para a sua ação. Para esse exemplo, será criado o atributo `msg` do tipo `string`. 
2. No  __`_beagleAction_`,  coloque o nome da ação customizada no padrão:  'custom:nomeDaAção':

```javascript
interface CustomAction {
  _beagleAction_: 'custom:CustomAction',
  msg: string
}
```

3. Depois de ter feito isso, declare a função do tipo `ActionHandler` com a interface que você criou:  

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

4. Adicione o nome da ação nos arquivos de associação, de acordo com cada framework: 

**Angular:** adicione no beagle.module.ts

```javascript
@BeagleModule({
  ...
  customActions:{
    "custom:CustomAction": customHandler //nome do action handler
  }
})
export class Beagle {}
```

**React:** adicione nos arquivos de configuração do Beagle: 

```javascript
export default createBeagleUIService<any>({
    ...
    customActions:{
        "custom:CustomAction": customHandler //nome do action handler
      }
})

```
{{% /tab %}}
{{< /tabs >}}

### Criando uma ação no backend

Para criar essa ação, o seu código deve estar assim: 


```kotlin
@RegisterAction
data class CustomAction(
val msg: String? = null
) : Action 
```


Veja abaixo um exemplo de uma Ação em um componente do tipo Button:

{{< tabs name="T93" >}}
{{% tab name="JSON" %}}
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
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Button(
   text = "Beagle Button",
   onPress = listOf(CustomAction("Eu sou um Toast"))
)
```
{{% /tab %}}
{{< /tabs >}}
