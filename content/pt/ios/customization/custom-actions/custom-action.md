---
title: Ação Customizada
weight: 2
description: Criando e executando uma ação customizada
---

---

**Tópicos abordados:**
- O que é uma ação?
- Como criar uma ação customizada
- Como registrar uma ação.
- Como usar um ação?
 
**Requisitos:**
 - Ter um projeto já configurado com o Beagle.

### **Passo 1: O que é uma ação?** 

No Beagle, uma ação lida com os comportamentos (funções), que serão executadas em sua aplicação assim que um determinado evento for disparado. Essas ações podem ser padrão do próprio Beagle ou customizadas.

[**Tipos de ações do Beagle**]({{< ref path="/api/actions/overview#tipos-de-ações" lang="pt">}})


### **Passo 2: Como criar uma ação customizada:**

Para criar uma custom action, siga os seguintes passos: 

1. Crie uma struct que implemente a **interface** `Action`.

2. Depois disso, a interface solicitará que o método `execute` seja implementado.  É nesse método que deve ser implementado o bloco de código que sua ação irá executar.

```swift
struct CustomAction: Action {
    func execute(controller: BeagleController, origin: UIView) {
            print("Logica da sua ação.")
    }
}
```

Como lógica da ação vamos criar um alert. Abaixo temos o exemplo do alert.

```swift
let alert = UIAlertController(
        title: nil,
        message: "",
        preferredStyle: .alert
        )

controller.present(alert, animated: true)
```

Agora adiconamos a lógica da ação dentro do método `execute`. 
Por fim, basta criar o parametro para receber a mensagem do alert, e o init da struct.

```swift
struct CustomAction: Action {

    var mensagem: String

    init(mensagem: String? = nil) {
        self.mensagem = mensagem
    }

    func execute(controller: BeagleController, origin: UIView) {
        let alert = UIAlertController(
        title: nil,
        message: mensagem
        preferredStyle: .alert 
        )

        controller.present(alert, animated: true)
    }
}
```

### **Passo 3: Como Registrar uma ação.**

É obrigatório registrar ações no Beagle. Dentro do arquivo de configuração do beagle utilize o dependencies para registar.

{{% alert color="info" %}} Para saber mais sobre o dependencies. [Beagle Dependencies]({{< ref path="" lang="pt" >}}). {{% /alert %}}

O método register possui dois construtores, o primeiro passando apenas o `action` e segundo recebendo o `action` e `named`.

**action:** Passa a struct da action.

**named:** Parâmetro para setar o nome da action. Não é obrigatório passar. Um caso é quando o nome da action é registrado diferente com que você criou no backend. Ele será usado na deserializações para encontrar sua ação.

Maneiras de Registrar

1º A primeira maneira de registrar.
```swift
dependencies.decoder.register(action: CustomAction.self)
```

2º A segunda maneira de registar.
```swift 
dependencies.decoder.register(action: CustomAction.self, named: "CustomAction")
```

Após registrar o seu componente de customização, você pode usá-lo via server-driven.

### **Passo 4: Como usar um ação?**

Para usar as ações do beagle basta o componente que for usar ter um parametro do tipo `Action`.

Veja abaixo um exemplo de como usar em um botão que executa a ação customizada no evento de clique:

```swift
Button(
    text: "do request",
    onPress: [
        CustomAction( mensagem: "Eu sou um Alet!")
    ]
)
```
