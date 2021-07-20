---
title: Desenvolvimento
weight: 5
description: >-
  Nesta seção, você encontrará informações sobre como está o desenvolvimento do Beagle Flutter.
---

---

## Estado atual de desenvolvimento
Este é o nosso estado atual de desenvolvimento. Por favor ajude-nos a cheagr na versão estável!

Para contriubir com este projeto, por favor use [esse repositório](https://github.com/ZupIT/beagle).

### Funcionalidades principais
Quase pronto. Renderização, context, componentes customizados e ações customizadas estão todos prontos! Somente o motor de layout que é baseado no flexbox está parcialmente aplicado. A estilização também não está implementada.

| Funcionalidade           | Estado           | Descrição                                                                                  |
|--------------------------|------------------|--------------------------------------------------------------------------------------------|
| Baixando e renderizando  | pronto           | Está faltando somente a estilização.                                                       |
| Layout e estilos         | incompleto       | Precisamos do Flutter Yoga funcionando 100% e integrado com o Beagle.                      |
| Contexto                 | pronto           |                                                                                            |
| Contexto global          | pronto           |                                                                                            |
| Componentes customizados | pronto           |                                                                                            |
| Ações customizadas       | pronto           |                                                                                            |
| Operações customizadas   | pronto           |                                                                                            |
| API de renderização      | incompleto       | Deve ser atualizado de acordo com a v1.9.0 do Beagle Web.                                  |
| Analytics 2.0            | não implementado |                                                                                            |
| Navegação                | incompleto       | Ainda precisamos fazer o sistema de navegação funcionar com a navegação interna do Beagle. |
| Serviços padrões         | incompleto       | Ainda precisamos decidir se e como vamos separá-los da biblioteca principal.               |

### Componentes
| Componente    | Estado           | Descrição                                                                |
|---------------|------------------|--------------------------------------------------------------------------|
| Container     | pronto           | Está faltando somente a estilização.                                     |
| Screen        | não implementado |                                                                          |
| ScrollView    | não implementado |                                                                          |
| Button        | pronto           |                                                                          |
| Image         | incompleto       | A imagem remota sem tamanho definido não está renderizando corretamente. |
| TextInput     | incompleto       | Existem problemas de performance                                         |
| LazyComponent | pronto           |                                                                          |
| ListView      | não implementado |                                                                          |
| GridView      | não implementado |                                                                          |
| PageView      | pronto           |                                                                          |
| SimpleForm    | não implementado |                                                                          |
| TabBar        | pronto           |                                                                          |
| Text          | pronto           |                                                                          |
| Touchable     | pronto           |                                                                          |
| WebView       | pronto           |                                                                          |

Também precisamos checar os estilos. Alguns componentes, mesmo os marcados como pronto, tem muitos estilos, o que podem criar alguns comportamentos não desejados.

### Ações
| Ações           | Estado           |
|-----------------|------------------|
| PushStack       | pronto           |
| PopStack        | pronto           |
| PushView        | pronto           |
| PopView         | pronto           |
| PopToView       | pronto           |
| ResetStack      | pronto           |
| OpenNativeRoute | pronto           |
| OpenExternalUrl | pronto           |
| AddChildren     | pronto           |
| Condition       | pronto           |
| Alerrt          | pronto           |
| Confirm         | não implementado |
| SendRequest     | pronto           |
| SetContext      | pronto           |
| SubmitForm      | não implementado |
