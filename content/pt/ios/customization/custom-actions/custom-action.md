---
title: Ação Customizada
weight: 2
description: Criando e executando uma ação customizada
---

---
 
**Requisitos:**
 - Ter um projeto já configurado com o Beagle.

### **Passo 1: O que é uma ação?** 

No Beagle, uma ação lida com os comportamentos (funções) que serão executadas em sua aplicação assim que um determinado evento for disparado. Essas ações podem ser padrão do próprio Beagle ou customizadas.

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

{{% alert color="warning" %}}
Ultilize a anotação `@AutoCodable` nas propriedades do tipo `Action` ou `ServerDrivenComponent` (sejam elas listas ou opcionais) caso sua acão receba algum componente ou acão, para que o swift consiga sintetizar o inicializador `init(from decoder: Decoder)`.

Em termos técnicos, o `AutoCodable` é um property wrapper que implementa a lógica de serialização e deserialização polimórfica dos tipos genéricos do Beagle, dessa forma, não precisamos implementar o `init(from decoder: Decoder)`, uma vez que, agora o Swift consegue sintetiza-lo, já que todas as propriedades do nosso widget conformam com Codable.
{{% /alert %}}

### **Passo 3: Como Registrar uma ação.**

Por fim precisamos registrar nossa ação customizado no Beagle.

Logo, para **registrá-la no Beagle.** basta chamar a função de registro do Coder (Dependência publica do Beagle) durante o processo de configuração do ambiente do Beagle.

{{% alert color="info" %}} Para saber mais sobre o dependencies. [Beagle Dependencies]({{< ref path="" lang="pt" >}}). {{% /alert %}}

O método `register` pode ser chamado passando somente o tipo do componente, ou também um nome customizado para identifica-lo.

**action:** Tipo da action.

**named:** Parâmetro para setar o nome da ação. Não é obrigatório passar. Um caso é quando o nome do componente é registrado diferente com que você criou no backend. Ele será usado na deserialização para encontrar seu componente.

Veja abaixo as formas que você pode registrar:

**- A primeira forma:**
```swift
coder.register(type: CustomAction.self)
```

**- A segunda forma:** 
```swift 
coder.register(type: CustomAction.self, named: "CustomAction")
```