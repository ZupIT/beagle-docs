---
title: "Como contribuir com a documentação"
linkTitle: "Beagle Docs"
weight: 1
description: >-
  Siga os passos necessários para que sua contribuição seja aceita por nosso time.
---

---

## Introdução ao Hugo

{{% alert color="success" %}}

- Utilizamos a ferramenta [**Hugo**](https://gohugo.io/documentation/) para criar sites estáticos, ideal para nossa documentação. Todo o conteúdo da documentação é feito com markdown. Se você tem dificuldades com essa sintaxe, acesse este [**guia básico**](https://www.markdownguide.org/basic-syntax/).
- É importante lembrar que o hugo possui alguns atalhos para criar componentes úteis à documentação. Esses atalhos são chamados de **shortcodes** e facilitam na hora de criar tabelas, alertas, glossários, vídeos embútidos e outros. Para saber mais como utilizar as shortcodes do hugo no markdown, acesse este [**guia básico**]({{< ref path="/contribute/hugo-shortcodes" lang="pt" >}})).
  {{% /alert %}}

## Requisitos para contribuir

{{% alert color="warning" %}}

- Escreva mensagens GIT claras e significativas.
- Para seus Pull Requests serem aceitos, você precisa seguir as diretrizes de contribuição, [**saiba mais aqui**](https://github.com/ZupIT/beagle/blob/master/CONTRIBUTING.md)
- Certifique-se de incluir Github Special Keywords que faz referência a issue e o fecha automaticamente quando o PR é mergeado.
- Quando você faz uma pequena alteração em um PR, como corrigir um erro de digitação, qualquer alteração de estilo ou gramática, certifique-se de esmagar seus commits (squash) para não obter um grande número de commits por uma alteração relativamente pequena.
- Certifique-se de incluir uma boa descrição de PR explicando as alterações no código, o motivo de alterar um trecho de código e garantir que haja informações suficientes para o revisor entender seu PR.
- Ao abrir uma issue, você pode usar algum dos [**templates**](https://github.com/ZupIT/docs-beagle/issues/new/choose) disponíveis, não esqueça de marcar-la com labels correspondentes.
  {{% /alert %}}

## Como Contribuir
---
### **Editando uma pagina**

- Para editar um conteúdo, basta navegar até a a página a ser editada usando o menu lateral esquerdo ou a barra de pesquisa. Em seguida, clique no botão "Edit this page", localizado no menu lateral direito.

- Feito isso, você será redirecionado(a) para o arquivo fonte hospedado no github em modo de edição. Pronto, agora é só editar o arquivo. Em seguida, abra um pull request usando a própria interface do github, preenchendo o formulário como mostra a imagem abaixo:

![](/shared/contribute-pull-request.jpg)

### **Adicionando imagens**

- As imagens dessa documentação estão em `/static/shared`. Assim, para adicionar novas imagens a documentação, basta copiá-las para esta pasta. Dessa forma, as imagens ficam acessíveis a partir de qualquer página ou sub-página da documentação.

- Para buscar imagens e carregá-las, basta utilizar a interface markdown para imagens (sem adicionar um título) e listar o endereço como `/shared/nome-da-imagem` da seguinte forma:

```
![](/shared/beaglecomp.png)
```

{{% alert color="success" %}}

Ao listar este código, a imagem abaixo será carregada:
![](/shared/beaglecomp.png)

 {{% /alert %}}
### **Criando uma nova página**

- Para criar uma página, o processo é semelhante ao de edição. Vá até o local onde deseja criar uma página (use o menu lateral esquerdo) e, nesse caso, em vez de "Edit this page", clique em "Create child page", localizado no menu lateral direito da página.

### **Abrindo uma issue**

- Para nos ajudar a identificar problemas em geral - seja de estilização, leitura, organização ou arquitetura da documentação - basta abrir uma issue usando o botão "Create a documentation issue" localizado no menu lateral direito da página.

- Em seguida, você será redirecionado(a) para uma página do github com uma label e um template padrão pré-estabelecido para abertura de issue. Fique à vontade para editar o template sugerido e fazer as mudanças que fazem mais sentido para sua contribuição.

## Faça um fork

- Se você ja possui os conhecimentos básicos de markdown, hugo, shortcodes e gitflow, fique à vontade para fazer um fork do nosso repositório e sugerir mudanças usando o editor de texto de sua preferência. Se houver alguma dúvida, leia nosso [**FAQ**]({{< ref path="/faq" lang="pt" >}}), abra uma issue, ou entre em contato pelo nosso [**email**](mailto:beagle@zup.com.br).
