---
title: Sourcery
weight: 161
description: 'Nesta seção, você encontra informações sobre o uso e a instalação do Sourcery'
---

---

## O que é o Sourcery?

O [**Sourcery**](https://github.com/krzysztofzablocki/Sourcery) é uma ferramenta de geração de código que auxilia na criação de **código boilerplate**, ou seja, aqueles trechos de código incluídos em mais locais com pouca ou sem alteração.

A instalação dessa biblioteca **é opcional**, apesar de recomendada. Caso queira instalar, siga as instruções abaixo.

## Instalação

Depois de integrar o Beagle ao seu projeto, você pode instalar o Sourcery no seu computador usando o [**Homebrew**](https://brew.sh/).

```bash
$ brew install sourcery
```

## Configuração

Depois da instalação, é necessário configurar o path dos arquivos de template, dos arquivos gerados e o path onde o Sourcery irá escanear o código fonte. Siga os passos a seguir: 

**Passo 1:** Em **Build Phases**, crie um novo **Run Script Phase**;

**Passo 2:** Coloque ACIMA de **Compile Sources**; Isso é importante pois, caso não seja feito, o sourcery não irá compilar os arquivos que foram gerados.

**Passo 3:** Cole o código a seguir: 

```bash
if which sourcery >/dev/null; then
unset SDKROOT
sourcery --config $SRCROOT
else
echo "warning: Sourcery not installed, download using brew install sourcery"
fi
```

Esse script avisa o **Xcode** para procurar por um arquivo `.sourcery.yml` na raiz do seu projeto.  Ele terá algumas propriedades que o Sourcery precisa saber para gerar o código. 

A lista abaixo, mostra os atributos utilizados neste arquivo:

* `sources` : o path de seus arquivos swift. É a raiz do projeto.
* `templates` : o path dos arquivos de template que o Sourcery vai usar para gerar o código.
* `output` : o path dos arquivos gerados.

{{% alert color="info" %}}
Para mais informações e detalhes sobre o Sourcery, acesse a [**documentação oficial**](https://cdn.rawgit.com/krzysztofzablocki/Sourcery/master/docs/usage.html#configuration-file).
{{% /alert %}}

### Configuração do arquivo `.yml`

As configurações do arquivo `.yml` são diferentes devido a forma que Cocoapods e o Carthage lidam com os arquivos do Beagle. 

Para que o Sourcery use os templates do Beagle, você deve especificar o `SourceryProtocols.swif` em **sources** e o path de templates em **templates**.

{{% alert color="warning" %}}
Os atributos escritos dentro do`.yml` consideram que  os arquivos **Cartfile** ou **Podfile** estão no mesmo diretório que o `.xcodeproj` ou `.xcworkspace`
{{% /alert %}}

{{< tabs name="T72" >}}
{{% tab name="Cocoa Pods" %}}
```yaml
sources:
  include:
    - RootOfYourProject
    - Pods/Beagle/iOS/Sources/Beagle/CodeGeneration/SourceryProtocols.swift
templates:
  - Pods/Beagle/iOS/Sources/Beagle/CodeGeneration/Templates
output:
  RootOfYourProject/CodeGeneration/Generated
```
{{% /tab %}}

{{% tab name="Carthage" %}}
```yaml
sources:
  include:
    - RootOfYourProject
    - Carthage/Checkouts/beagle/iOS/Sources/Beagle/CodeGeneration/SourceryProtocols.swift
templates:
  - Carthage/Checkouts/beagle/iOS/Sources/Beagle/CodeGeneration/Templates
output:
  RootOfYourProject/CodeGeneration/Generated
```
{{% /tab %}}
{{< /tabs >}}

## Utilização

Por default, os Custom Widgets precisam implementar  `init(from decoder: Decoder) throws`.  Isso pode ser automatizado com o Sourcery, como no exemplo abaixo:

```swift
import UIKit
import BeagleUI

enum ComponentColorTypes: String, Decodable {
    case veryColorful
    case blackAndWhite
}

struct SomeComponent: Widget {
    
    var widgetProperties: WidgetProperties
    var property1: String
    var property2: Double?
    var colorPallete: ComponentColorTypes = .blackAndWhite
    
    func toView(context: BeagleContext, dependencies: RenderableDependencies) -> UIView {
        return UIView()
    }
}
```

Sem o uso de metaprogramação, é necessário escrever o seguinte trecho de código:

```swift
extension SomeComponent {
    
    enum CodingKeys: String, CodingKey {
        case property1
        case property2
        case colorPallete
    }

    internal init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        widgetProperties = try WidgetProperties(from: decoder)
        property1 = try container.decode(String.self, forKey: .property1)
        property2 = try container.decodeIfPresent(Double.self, forKey: .property2)
        colorPallete = try container.decode(ComponentColorTypes.self, forKey: .colorPallete)
    }
}
```

Com o Sourcery é necessário fazer as structs conformarem com **AutoDecodable** e o mesmo código será gerado. 

Esse mesmo processo funciona para todos os protocolos e também é possível criar templates e protocolos customizados.

{{% alert color="warning" %}}
 Após a geração dos arquivos **AutoDecodable.generated.swift** e **Equality.generated.swift** usando o Sourcery, é necessário inseri-los no projeto.
{{% /alert %}}

## **Protocolos disponíveis**

Alguns protocolos \(protocols\) já estão no Beagle. Eles estão localizados em `SourceryProtocols.swift.` Veja a lista: 

| Protocolo | Uso |
| :--- | :--- |
| AutoEquatable | Implementa [**equatable**](https://developer.apple.com/documentation/swift/equatable) |
| AutoDecodable | Implementa [**decodable**](https://developer.apple.com/documentation/swift/decodable) customizável, de acordo com os padrões do Beagle. Funciona apenas para structs |
| AutoInitiable | Implementa init customizável, de acordo com os padrões do Beagle |
| AutoInitiableAndDecodable | Combinação dos protocolos AutoInitiable and AutoDecodable |
