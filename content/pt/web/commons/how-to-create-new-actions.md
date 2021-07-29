---
title: Como criar novas actions
weight: 222
description: "Nesta seção, você confere como criar Actions Customizadas para serem usadas em eventos mas sendo tratadas pela aplicação frontend"
---

---

### Criando uma ação do frontend

No Beagle, é possível criar uma [**ação**]({{< ref path="/api/actions" lang="pt" >}}) customizada a partir de uma `CustomAction`.

Cada plataforma possui sua forma especificia de fazer essa implementação no frontend. No exemplo abaixo é mostrado como fazer isso em um projeto Web:


1. Você deve criar a interface com o `_beagleAction_` como uma propriedade obrigatória e com os parâmetros necessários para a sua ação. Para esse exemplo, será criado o atributo `msg` do tipo `string`.

2. No \__`\_beagleAction_`, coloque o nome da ação customizada no padrão: 'custom:nomeDaAção':

```javascript
interface CustomAction {
  _beagleAction_: "custom:CustomAction";
  msg: string;
}
```

3. Depois de ter feito isso, declare a função do tipo `ActionHandler` com a interface que você criou:

```javascript
import { ActionHandler } from "@zup-it/beagle-web";

export const customHandler: ActionHandler<CustomAction> = ({ action }) => {
  /*
       Podemos acessar nosso parâmetro definido na interface, por exemplo 
       action.msg nos traz o valor de msg.
    */
  alert(action.msg);
};
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

### Criando uma ação no backend

Para criar essa ação, o seu código deve estar assim:

```kotlin
@RegisterAction
data class CustomAction(
val msg: String? = null
) : Action
```

Veja abaixo um exemplo de uma Ação em um componente do tipo Button:

{{< tabs id="T93" >}}
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
