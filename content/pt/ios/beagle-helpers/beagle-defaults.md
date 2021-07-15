---
title: Beagle Defaults
weight: 17
description: 'Este framework fornece implementações padrão de um cliente de rede, controle de cache e logger que podem ser facilmente incorporados e usados ​​em seu projeto Beagle.
'
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleDefaults?label=Beagle-Defaults)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

### Tópicos abordados
<hr>

* O que é?
* Instalação

### Requisitos
<hr>

* Cocoapods instalado.

{{% alert color="warning" %}}
É recomendado para usuários mais avançados do Beagle.
{{% /alert %}}

### O que é?
<hr>

É uma biblioteca que contém implementações padrão de um cliente de rede, controle de cache e um sistema de log. Pode ser usado por usuários do Beagle que não querem implementar essas camadas do zero.


### Instalação
<hr>

Você pode adicionar essa biblioteca como uma dependência via Cocoapods.

```ruby
target 'MyApp' do
  pod 'BeagleDefaults'
end
```

Depois de adicionar BeagleDefaults como uma dependência em seu projeto, você pode usar todas as implementações padrão em seu `Beagle.dependencies`.

Todas as implementações podem ser alteradas de acordo com suas preferências. Ainda não é recomendado usar essas implementações sem verificar as diretrizes de segurança do produto, gerenciamento de cache e sistema de log.


<hr>

##### Para mais sobre Beagle: por favor cheque o nosso repositório [Beagle](https://github.com/ZupIT/beagle).
##### Para mais sobre Beagle-Scaffold: por favor cheque a nossa documentação [Beagle-Scaffold]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-scaffold" lang="en" >}}).