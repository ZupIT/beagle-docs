---
title: Processador de Anotações do Android
weight: 2
description: "Aqui, você encontrará mais informações sobre o processador de anotações do Beagle."
---

---
## **Introdução**

O Beagle precisa conhecer todos os componentes (Widgets, Actions, Operations, Logger, …) que você define no seu projeto para funcionar corretamente.

Embora seja possível criar a sua própria implementaçao da interface `BeagleSdk` e registrar os componentes, o processador de anotações do Beagle pode lhe poupar muito tempo. Ele utiliza as anotações do Beagle para gerar uma implementação da interface `BeagleSdk` chamada `BeagleSetup`, que reúne todos os componentes anotados dentro do seu projeto.

## Configuração

Para adicionar o processador de anotações do Beagle no seu projeto, você deve seguir os seguintes passos:

1. Incluir o kotlin kapt plugin
2. Incluir o processador de anotações do Beagle como dependência.

```groovy
apply plugin: 'kotlin-kapt'
dependencies {
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
}
```

## Projetos Multi-Modulo

O processador de anotações do Beagle consegue encontrar componentes anotados no seu projeto e em suas dependências. Para funcionar corretamente, todos os módulos ou dependências que anotam componentes com anotações do Beagle precisam incluir o processador de anotações do Beagle em suas dependências.

### Parâmetros Kapt

O processador de anotações do Beagle aceita dois parâmetros:
* beagle.moduleName
* beagle.generateSetupClasses

Eles podem ser utilizados conforme exemplo abaixo:
```groovy
kapt {
    arguments {
        arg("beagle.moduleName", "sample")
        arg("beagle.generateSetupClasses", "false")
    }
}
```

#### beagle.moduleName

Esse parâmetro é utilizado para dar nomes significativos para algumas classes geradas. Não é obrigatório, porém recomendamos fortemente utilizá-lo.

Os nomes das classes geradas dinamicamente serão semelhantes à: `RegisteredActionsRegistrar59c20e58331c4f11b84d377475593739`. Isso torna difícil identificar em qual módulo do seu projeto essas classes foram geradas.

#### O problema de BeagleSetup e BeagleConfig - beagle.generateSetupClasses ao resgate

Por padrão, todo módulo que usa o processador de anotações do Beagle gera a classe `BeagleSetup`. Isso é um problema quando você deseja criar um módulo que, por exemplo, terá apenas widgets.

A classe `BeagleSetup` declara uma propriedade do tipo `BeagleConfig` que não pode receber valores nulos, e acabamos tendo que criar uma implementação de `BeagleConfig` sem utilidade dentro desse módulo. Isso leva ao seguinte problema: Essa implementação de `BeagleConfig` irá conflitar com a implementação oficial de `BeagleConfig` do seu projeto, pois você pode ter uma, e apenas uma, implementação de `BeagleConfig` dentro do seu projeto. 

Para resolver essa situação, é possível desabilitar a geração da classe `BeagleSetup` nos módulos em que ela não é necessária. Isso é feito adicionando o seguinte argumento ao kapt no arquivo gradle do módulo:
```groovy
kapt {
    arguments {
        arg("beagle.generateSetupClasses", "false")
    }
}
```

### Propriedades Únicas

Algumas propriedades são únicas dentro de um projeto Beagle. Isso significa que apenas um componente daquele tipo pode ser registrado em toda estrutura do projeto (incluindo outros módulos e dependências que utilizam o processador de anotações do Beagle). Propriedades que são únicas incluem:
* DesignSystem;
* HttpClient;
* BeagleConfig;
* …

Se você registrar um componente que deveria ser único mais de uma vez na estrutura do seu projeto, o processador de anotações do Beagle irá criticar e o seu projeto não irá compilar. A mensagem de erro será semelhante a:

{{% alert color="info" %}}
error: BeagleConfig defined multiple times: 1 - br.com.zup.beagle.android.moduleb.ModuleBBeagleConfig 2 - br.com.zup.beagle.android.modulec.ModuleCBeagleConfig. You must remove one implementation from the application.
{{% /alert %}}