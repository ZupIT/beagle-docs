---
title: Ações customizadas
weight: 102
description: >-
  Nesta seção, você encontra a descrição de como criar uma ação customizada e
  detalhes dos métodos que ela implementa.
---

---

## Introdução

Uma ação \(`Action`\) é um componente do Beagle que pode ser chamado por meio de eventos que são disparados por outros componentes \(inclusive outras ações\).

O Beagle já possui algumas ações pré-definidas, no entanto é possível criar novas ações personalizadas.

## Exemplo

Para criar sua ação personalizada siga os seguintes os passos:

1.  Criar uma classe anotada com `@RegisterAction` que implemente a **interface** `Action`;
2. Depois disso, a interface solicitará que o método `execute` seja implementado.;
3. Agora, declare o resultado da `action`;

O atributo  `value`  é um exemplo de parâmetro que pode ser declarado no construtor dessa classe, você pode usar quantos precisar. O exemplo a seguir mostra uma ação com **Toast** recebendo um texto como parâmetro:


```kotlin
@RegisterAction
data class CustomActionAndroid(
val value: String
) : Action {
    override fun execute(rootView: RootView) {
        Toast.makeText(
            applicationContext, 
            value, 
            Toast.LENGTH_LONG
        ).show()
    }
}
```


Veja abaixo um exemplo de Action em um componente do tipo Botão:

```kotlin
Button(
   text = text,
   styleId = styleId,
   onPress = listOf(
      CustomActionAndroid("Sou uma ação customizada")
   )
)
```
