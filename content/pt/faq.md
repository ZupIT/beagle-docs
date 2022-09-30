---
title: FAQ
toc_hide: true
description: >-
  Nesta seção, você encontra respostas para perguntas frequentes ou dúvidas
  sobre o Beagle.
---

---

## O que é o Beagle?

O Beagle é um **Framework open source** de desenvolvimento **cross-platform** pautado no paradigma de implementação de um Server-Driver UI nativamente no iOS e Android. Você pode facilmente mudar o layout e `DATA`da sua aplicação mudando apenas o código da tela no backend.

## Como o Beagle funciona?

O desenvolvedor declara telas no backend e expõe `endpoints` que representam essas telas. No celular ou na web, esses `endpoints` são chamados usando o Beagle para renderizar os componentes na tela.

Beagle funciona como uma **"ponte" entre o front e o backend** possibilitando que componentes de design da aplicação sejam parametrizado ao backend, com possibilidade de aplicação nativa.

## A arquitetura do meu aplicativo mudará se eu usar o Beagle?

Não, o Beagle é agnóstico em relação a arquitetura e não interfere na arquitetura do projeto em que é utilizado.

## Por que usar o Beagle e não o React Native ou Flutter?

O Beagle tem um objetivo diferente do React Native e do Flutter. O propósito do Beagle é construir Server Driven UI, i.e. representar a interface no
backend, enviar uma versão serializada para o frontend, desserializar e renderizar.

Como precisamos de uma representação da tela no backend, ela se torna agnóstica de plataforma e é esse o motivo de você poder escrever a definição
da UI uma única vez no backend e não programar a mesma lógica em várias linguagens. Com isso em vista, é preciso lembrar que os componentes no
frontend (design system) ainda precisa ser implementado para todas as plataformas.

O React Native e o Flutter não lidam com Server Driven UI, o propósito dessas ferramentas é criar os componentes visuais e o comportamento da tela
uma única vez, mas de maneira tradicional. Se você não precisa de Server Driven UI, você deveria considerar esses frameworks ao invés do Beagle.

## É possível realizar testes em telas server driven?

Sim! Testes unitários como testes instrumentados funcionam da mesma forma com o Beagle.

## Posso usar o Beagle em um aplicativo que já possui vários recursos desenvolvidos?

Sim! Se a sua aplicação já tiver componentes desenvolvidos em um design system você poderá utilizá-los no Beagle. Para tal, basta somente que eles estejam definidos de maneira componentizada e ai serão facilmente registrados no Beagle.

## Um aplicativo que usa o Beagle precisa ser 100% Server Driven?

Não, a aplicação pode utilizar uma tela Server Driven em apenas alguns fluxos do aplicativo. Você pode continuar em um fluxo Server Driven ou voltar à tela nativa normalmente.

## Preciso usar o Beagle em todo o aplicativo?

Não, a sua aplicação continua a mesma e ela pode ser utilizada nativamente mesmo com o Beagle registrado nela. Você pode usar o Beagle onde e quando quiser!

## Meu aplicativo funcionará offline?

Depende. Toda aplicação Server Driven ao requisitar um fluxo do servidor precisa estar conectada a internet no momento da requisição para obter uma resposta do backend. Os fluxos Server Driven não podem ser resolvidos sem uma conexão. Mas a sua aplicação não é 100% Server Driven, a parte dela que não precisa coletar informações online funcionará normalmente. E pode até ser configurada para chamar outras telas caso esteja offline.

### E se a internet cair no meio do fluxo da aplicação?

A maneira de lidar com casos de desconexão é criar telas declarativas locais para `fallback`.

## Terei problemas para fazer o upload do aplicativo com o Beagle na App Store ou na Play Store?

Não! De maneira alguma. Todos os componentes utilizados estarão definidos na aplicação quando o upload para a loja for realizado. Embora o Beagle ofereça dinamismo ao lidar com as atualizações, essa qualidade está atrelada a manipulação do backend e não oferecemos nada na configuração do frontend que seja volúvel o suficiente para justificar algum tipo de bloqueio pela Apple ou Google ao atualizar um aplicativo na loja. Uma das principais propostas do Beagle é exatamente minimizar a necessidade de `deploys` na loja.

## Terei problemas de performance com o Beagle?

Não, muito pelo contrário! Nós fizemos um `benchmark` de renderização com outras estratégias nativas - como `Auto Layout (IOS)` e o `Constraint Layout (Android)` - e o Beagle, usando o mecanismo Yoga Layout para posicionar elementos na tela, teve a melhor resposta.

## Minha aplicação não ficará mais lenta com os tempos de resposta do backend?

Não, pois o Beagle usa o **mecanismo de cache** para armazenar as telas adjacentes à tela atual. Isso permite otimizar as chamadas para o backend e, portanto, não precisa solicitar novamente ao backend no momento do clique do usuário.

## Qual a versão mais atual do Beagle?

A versão mais atual do Beagle:undefined

## O Beagle é gratuito?

Sim! Por ser um **framework de desenvolvimento open source**, o Beagle é totalmente gratuito.

## **Posso criar um BFF em um linguagem diferente que não seja JVM?**

É possível criar um BFF em uma linguagem diferente. Porém, por enquanto não temos `libs` prontas para auxiliar neste processo. Por isso, é necessário que o programador crie algum mecanismo para que os contratos do Beagle sejam respeitados.

## Quais vantagens de usar o Beagle?

Uma das principais vantagens do Beagle é facilitar o desenvolvimento a partir do [**paradigma BFF.**]({{< ref path="/key-concepts#backend-for-frontend" lang="pt" >}})

Isso significa que o Beagle te permite modificar os `layouts` das telas da sua aplicação, os fluxos entre telas e a navegação na sua aplicação. Tudo isso é feito a partir de páginas criadas declarativamente no seu BFF que, a partir de uma biblioteca de componentes definidas no frontend da sua aplicação, auxilia na alteração da interface.

Com isso, você pode:

- Decidir qual componente visual deve ser apresentado: quais textos, legendas ou qualquer outra informação visual que deva ser exibida, centralizada e abstraída no servidor.

Isso evita a replicação em cada plataforma frontend que consome essa API. O servidor aplica essa lógica de negócios e usa seus resultados para montar a resposta da API JSON representando-o.

- Fazer testes A/B para mudar a ordem em que os componentes são apresentados.

## Posso usar o Beagle desenvolver aplicativos para Android, iOS ou Web?

Sim! Por ser um **framework cross-platform,** Beagle te auxilia a desenvolver aplicações nestas três plataformas utilizando o [**conceito de Server-Driven UI,**]({{< ref path="/key-concepts#server-driven-ui" lang="pt" >}}) o que torna possível que um mesmo BFF seja utilizado para as 3 aplicações.

Você pode ver mais sobre como criar projetos no Beagle para as 3 plataformas em:

- [**Beagle for Android** ]({{< ref path="/android/getting-started" lang="pt" >}})
- [**Beagle for iOS**]({{< ref path="/ios/getting-started" lang="pt" >}})
- [**Beagle for Web**]({{< ref path="/web/commons/creating-a-project-from-scratch" lang="pt" >}})

## Posso fazer testes unitários e instrumentados em telas Server-Driven?

Sim! Testes unitários e instrumentais são realizados normalmente quando usamos o Beagle. A estrutura do Beagle não interfere em como os testes são realizados.

## Como fazer testes unitários usando Beagle?

Testes unitários têm o objetivo de aferir a funcionalidade do código, em sua menor fração. Os testes em aplicações que utilizam o Beagle são feitos da mesma forma que em aplicações que não o utilizem. Isso significa que o Beagle não interfere de maneira alguma na realização dos testes.

### Como fazer testes instrumentados?

Testes instrumentados são feitos em aplicações usando Beagle da mesma forma que em outras aplicações que não utilizam. No entanto, é importante salientar que, muitas vezes, um componente `server-driven` pode não conter um ID que geralmente a identifica em um teste instrumentado.

Pensando nisso, adicionamos ao elemento `WIDGET` \(que referencia um componente\) um `atributo ID` para que seja possível identificá-lo programaticamente.

### Como funciona o versionamento do beagle?

A versão do Beagle segue o padrão de [versionamento semântico](https://semver.org/).

Entre plataformas, o último número (**patch**) costuma divergir, uma vez que alguns bugs ocorrem apenas em uma determinada plataforma. Assim, o seguinte exemplo é normal e esperado: ter a versão `1.0.0` no backend com `1.0.2` no Android, `1.0.0` no iOS, e `1.0.3` na web React.

A *documentação* apenas possui versões com números até o **minor**, por exemplo: `1.2`. No entanto, algumas definições de versões minor anteriores ainda podem estar presentes, mesmo que não sejam mais válidas. Se for o caso, tentaremos informar as versões em que essas definições ainda são válidas.
