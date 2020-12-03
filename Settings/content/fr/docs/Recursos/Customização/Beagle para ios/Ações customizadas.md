---
title: Ações customizadas
<<<<<<< HEAD
weight: 129
description: >-
  Nesta seção, você encontra a descrição de como criar uma Custom Action e
  detalhes dos métodos que ela implementa.
=======
weight: 145
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## Introdução

Uma `action` é um bloco de código que pode ser executado quando definido em algum evento. O Beagle já possui algumas por padrão, mas é possível criar sua action personalizada. 

## Exemplo

### Como criar uma custom action?

Para criar uma custom action, siga os seguintes passos: 

1.  Crie uma classe  que implemente a **interface** `Action`;

```text
struct CustomAction: Action {
    func execute(
        controller: BeagleController, 
        origin: UIView) {
            print("Custom action foi chamada!")
    }
}
```

2. Depois disso, a interface solicitará que o método `execute` seja implementado.  É nesse método que deve ser implementado o bloco de código que sua ação irá executar;

3. Agora, é necessário registrar essa nova ação nas dependências do Beagle:

```text
let dependencies = BeagleDependencies()
dependencies.decoder.register(
    action: CustomAction.self,
    named: "CustomAction"
)
Beagle.dependencies = dependencies
```

### Como usar?

Veja abaixo um exemplo de como usar um botão que executa a ação customizada no evento de clique:

```text
Button(
    text: "do request",
    onPress: [
        CustomAction()
    ]
)
```
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
