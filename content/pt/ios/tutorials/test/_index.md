---
title: Testes
weight: 235
description: 'Você vai encontrar nesta seção mais detalhes de testes do Beagle e de testes em aplicações com o Beagle.'
---

---

## Testes Unitários

Testes unitários **medem a funcionalidade do código** em sua menor fração ou unidade. O Beagle possui testes unitários embutidos e eles devem ser frequentemente revisados, atualizados ou adicionados para assegurar que importantes unidades de códigos sejam testadas.

## Testes de Interface De Usuário

O Beagle implementa seus próprios testes de interface de usuário para garantir que componentes de interface e seus comportamentos funcionem corretamente. 

Esse tipo de teste pode ser aplicado para plataformas mobile e web e os principais frameworks usados são:
- [Cucumber](https://cucumber.io/)
- [Espresso](https://developer.android.com/training/testing/espresso)
- [XCTest](https://developer.apple.com/documentation/xctest)
- [Appium](http://appium.io/)
- [Cypress](https://www.cypress.io/)

## Testes Instrumentados Mobile

Testes instrumentados, também conhecidos como testes unitários instrumentados, são testes que rodam em devices (aparelhos) reais ou em emuladores. Eles utilizam APIs para encaminhar (instrumentar \ orquestrar) instruções vindas do código de teste para o device ou emulador. Estes testes trazem mais fidelidade se comparados a testes unitários convencionais, porém sua execução é mais lenta. 

Nos testes instrumentados do Beagle, as vezes um componente server-driven não tem um `ID`. Neste caso, nós adicionamos um elemento widget que referencia o componente e um `ID`, para que então possamos identificar o componente pelo `ID` programaticamente gerado.