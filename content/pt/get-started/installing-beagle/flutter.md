---
title: Flutter
weight: 13
description: >-
  Nessa seção, você vai encontrar como instalar Beagle na sua aplicação Flutter.
---

---

## Introdução
Esta é a bibilioteca responsável por renderizar um JSON do Beagle em Flutter. 

{{% alert color="info" %}}
Está em estágio alpha, trabalho em andamento, e o time do Beagle quer sua ajuda para fazer melhorias para a API e implementar as funcionalidades que faltam. Confira 
[mais informações]({{< ref path="/flutter/customization/development" lang="pt" >}}) e o atual estado de desenvolvimento.
{{% /alert %}}

## Versionamento
Toda versão alpha e beta do Beagle Flutter vai seguir o padrão `0.x.y`, onde `x` é a versão minor em que o Beagle Web
está e o `y` é toda subsequente versão onde `x` é o mesmo.

No número de versão, `x` se refere a versão do Beagle Web, porque o Beagle Flutter usa essa biblioteca em seu núcleo.

## Compatibilidade com null safety
Por agora, não damos suporte ao null safety para as versões alpha. Vai ser disponibilizado em breve.

## Instalação
Siga os passos para instalar:

1. Abra o arquivo `pubspec.yaml` na raiz do seu projeto;
2. Sob `dependencies`, adicione `beagle: ^0.9.0-alpha`, ou a versão mais recente;
3. Adicione `beagle_components: ^0.9.0-alpha`. Você pode omitir esta dependência se estiver familiar com Beagle e não vai usar nenhum componente padrão;
4. Na sua IDE (Android Studio ou Visual Studio Code), clique em `pub get`. Ou a partir do terminal, escreva `flutter pub get`.

{{% alert color="success" %}}
Muito bem! A biblioteca está istalada. Continue a configuração na seção [**como usar Beagle no Flutter.**]({{< ref path="/get-started/using-beagle/flutter" lang="pt" >}})
{{% /alert %}}

## **Próximos passos**

Nesta seção, você fez a **instalação inicial** do Beagle na sua aplicação!  
Agora, continue configurando o Beagle:

👉 Ir para
[**configurações iniciais** ]({{< ref path="/get-started/using-beagle/flutter" lang="pt" >}}) para habilitar o uso do Beagle em seu projeto Flutter.
