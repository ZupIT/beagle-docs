---
  title: Visão Geral
  weight: 1
  description: >-
    Nesta seção, você encontra informações iniciais sobre o Beagle antes de se
    aprofundar no produto.
---

---

## O que é o Beagle?

O Beagle é um **framework open source** de desenvolvimento cross-platform pautado no paradigma de implementação de **Server-Driven UI.**

{{% alert color="warning" %}}
O principal ganho da ferramenta é permitir que as equipes façam **alterações de layout e de dados direto em aplicações nativas mobile e/ou web** modificando apenas o código no backend.
{{% /alert %}}

Dessa forma, é possível criar, testar e atualizar rapidamente os componentes de aplicações nativas sem a necessidade de passar pela loja \(App Store ou Play Store\).

### Versionamento <a id="version"></a>

As versões do Beagle seguem o conceito de [**versionamento semântico**](https://semver.org/). A documentação, em si, é versionada de acordo com a versão major \(maior\) do Beagle, ou seja, com a versão principal. Entre as plataformas, a compatibilidade de features é pela versão minor. Por exemplo, é possível usar a 1.0.0 no backend com a 1.0.1 no Android, a 1.0.2 no iOS e a 1.0.3 no web react.

{{% alert color="info" %}}
As versões de **release atuais** do Beagle são:

- **Android**:[![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)
- **iOS:**[![badge](https://img.shields.io/cocoapods/v/Beagle)]()
- **WEB:**
  - **Angular:**[![badge](https://img.shields.io/npm/v/@zup-it/beagle-angular?logo=Angular)](https://github.com/ZupIT/beagle-web-angular)
  - **React:**[![badge](https://img.shields.io/npm/v/@zup-it/beagle-react?logo=React)](https://github.com/ZupIT/beagle-web-react)
- **Backend**[![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)
  {{% /alert %}}

Algumas definições nessa documentação existem apenas em algumas minors ou patches específicas. Segue a legenda usada para denotar esses casos:

- `x.y.z`: designa uma definição exclusiva da versão x.y.z;
- `>=x.y.z`: designa uma definição existente a partir da versão x.y.z;
- `<=x.y.z`: designa uma definição existente até a versão x.y.z.

## Como funciona o Beagle?

A ferramenta atua como um facilitador do **BFF** \([**Backend For Frontend**](/pt/key-concepts#backend-for-frontend)\) Isso significa que o Beagle, a partir de uma biblioteca de componentes definidos no [**Design System**](/pt/key-concepts#design-system) da aplicação Android, iOS ou Web, faz a alteração visual e comportamental delas ao retornar um arquivo JSON que indica o que e onde deve ser renderizado cada componente e qual a ação que vão executar.

![](/beaglemobileback.png)

O motivo pelo qual o Beagle consegue fazer essa alteração do frontend a partir do backend é porque sua arquitetura está estruturada em [**Server-Driven UI**](/pt/key-concepts#server-driven-ui), onde o BFF constrói os dados, componentes e ações presentes na tela de forma declarativa e os encaminha no formato JSON, enquanto o front o desserializa, renderiza os componentes visuais de forma nativa além de executar e atribuir as ações presentes em cada um deles.

### Pilares do Beagle

Por se tratar de uma ferramenta pautada em Server-Driven UI, os objetos JSON configurados para rodar na sua aplicação podem ser divididos em 3 pilares básicos:

- Conteúdo
- Estrutura Visual
- Flow \(ou Ações\)

Depois de definido no frontend e no backend como será a estrutura visual da aplicação com os componentes e ações customizados, bem como como eles poderão ser alterados, o BFF estará apto a se comunicar com o front.

Dessa forma, novas features, fluxos, customizações e combinações de componentes visuais podem ser testados sem a necessidade de publicar atualizações no aplicativo, otimizando testes de tipo A/B.

![](/images/beaglecomp.png)

## Por que usar o Beagle?

{{% alert color="success" %}}
O Beagle foi criado com objetivo de **otimizar tempo e recurso das equipes** de desenvolvimento, design e negócios para publicar e manter atualizados seus aplicativos sem a necessidade de passar por App Store ou Play Store e, ainda assim, respeitar o Design System da aplicação.
{{% /alert %}}

Sendo assim, as principais vantagens que o Beagle traz para seu projeto são:

- **Maior flexibilidade de trabalho** entre desenvolvedores frontend, backend e UI/UX designers no momento de realizar alterações pontuais.
- **Facilidade de manutenção do app**, além de possibilitar a realização constante de testes para melhoria da sua aplicação.
- **Menos duplicação de códigos**, pois todo o consumo das APIs, fluxos e regras estarão em um único lugar, o BFF.

Outro ganho fundamental que o Beagle traz, é a possibilidade de **reduzir o tempo de feedback do usuário**, já que as mudanças são rapidamente testadas e validadas.
