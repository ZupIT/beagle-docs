---
title: "Como contribuir com a documentação"
linkTitle: "Documentação"
weight: 395
description: >-
     Siga os passos necessários para que sua contribuição seja aceita por nosso time.
---

## Introdução ao Hugo
- Utilizamos a ferramenta [Hugo](https://gohugo.io/documentation/) para criar sites estáticos sendo ideal para documentação, por isso optamos por utiliza-lo. Todo o conteúdo da 
documentação é feito em markdown, se você tem dificuldades com essa sintaxe acesse este [guia básico](https://www.markdownguide.org/basic-syntax/).
- É importante lembrar que o hugo possui alguns atalhos para criar alguns componentes uteis na documentação. Esses atalhos são chamados de shortcodes, e são muito práticos na 
hora de criar alguma tabela, alerta, glossário, vídeos embútidos e etc. Para saber mais como utilizar as shortcodes do hugo no markdown, acesse este [guia básico de sintaxe]
(../hugo-shortcodes)

## Requisitos para contribuir

- Escreva mensagens GIT claras e significativas.
- Para seus Pull Requests serem aceitos, você precisa seguir as diretrizes de contribuição, [saiba mais aqui](https://github.com/ZupIT/beagle/blob/master/CONTRIBUTING.md)
- Certifique-se de incluir Github Special Keywords que faz referência a issue e o fecha automaticamente quando o PR é mergeado.
- Quando você faz uma pequena alteração em um PR, como corrigir um erro de digitação, qualquer alteração de estilo ou gramática, certifique-se de esmagar seus commits (squash) 
para não obter um grande número de commits por uma alteração relativamente pequena.
- Certifique-se de incluir uma boa descrição de PR explicando as alterações no código, o motivo de alterar um trecho de código e garantir que haja informações suficientes 
para o revisor entender seu PR.
- Ao abrir uma issue, você pode usar algum dos [templates](https://github.com/ZupIT/docs-beagle/issues/new/choose) disponíveis, não esqueça de marcar-la com labels 
correspondentes.
- Leituras adicionais:
  - chris.beams.io/posts/git-commit/
  - github.com/blog/1506-closing-issues-via-pull-requests
  - davidwalsh.name/squash-commits-git 

## Como Contribuir.

- Editando uma pagina:  
  - Para editar um conteúdo, basta navegar até a a página a ser editada usando o menu lateral esquerdo ou o campo de pesquisa. Em seguida, clique no botão "Edit this page", 
  localizado no menu lateral direito

  - Feito isso, você será redirecionado para o arquivo fonte hospedado no github em modo de edição. Pronto, agora é só editar o arquivo. Em seguida, abra um pull 
  request usando a própria interface do github, preenchendo o formulário como mostra a imagem abaixo:

![](/docs-beagle/contribute-pull-request.jpg)

- Criando uma nova página:  
  - Para criar uma página, o processo é semelhante ao de edição. Navega até o local onde deseja criar uma página (use o menu lateral esquerdo), nesse caso, ao invés de 
  "Edit this page", clique em "Create child page" localizado no menu lateral direito da pagina.

- abrindo uma issue:  
  - Para nos ajudar a identificar problemas em geral, seja de estilização, leitura, organização ou arquitetura de código da documentação, basta abrir uma issue usando o botão
  "Create a documentation issue" localizado no menu lateral direito da página.

  - Em seguida você será redirecionado para uma pagina do github com uma label e um template padrão pré estabelecido para abertura de issue, mas sinta-se a vontade para editar 
  o template sugerido e fazer as mudanças que fazem mais sentido para sua contribuição.
  
  ## Faça um fork
  
  - Se você ja possui os conhecimentos básicos de markdown, hugo, shortcodes e gitflow, sinta-se a vontade para fazer um fork do nosso reposítório e sugerir mudanças usando
  o editor de texto de sua prefêrencia. Se houver alguma dúvida, leia nosso [FAQ](../../FAQ), abra uma issue, ou entre em contato pelo nosso [email](mailto:beagle@zup.com.br)
