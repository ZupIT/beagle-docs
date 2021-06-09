---
title: Estado do desenvolvimento
weight: 193
description: >-
  Aqui você encontra informações sobre o atual estado de desenvolvimento do Beagle React Native.
---

---

## Atual estado de desenvolvimento
Esse é o nosso estado atual de desenvolvimento. Por favor, ajude-nos a chegar a uma versão estável!

Para contribuir com este projeto, por favor, use
[este repositório](https://github.com/ZupIT/beagle-web-react).

### Funcionalidades principais (core)
100% implementado. Renderização, contexto, componentes e ações customizadas todos funcionam. Na
veradde, se você não tem intenção de usar os componentes e ações padrões do Beagle, o Beagle RN já
está pronto para produção.

### Componentes
| Componente     | Estado           | Descrição                                                                                                 |
|----------------|------------------|-----------------------------------------------------------------------------------------------------------|
| Container      | concluído        |                                                                                                           |
| Screen         | não implementado | Funcionando como um container                                                                             |
| Button         | concluído        |                                                                                                           |
| Image          | incompleto       | Pode existir alguns problemas com o tamanho da imagem. O placeholder não foi implementado.                |
| TextInput      | concluído        |                                                                                                           |
| Lazy component | concluído        |                                                                                                           |
| ListView       | incompleto       | Extremamente bugado e lento. Principalmente no Android.                                                   |
| GridView       | não implementado |                                                                                                           |
| PageView       | incompleto       | Não renderiza os filhos propriamente. Não é possível navegar entre as páginas.                            |
| SimpleForm     | não implementado | Funcionando como um container                                                                             |
| TabBar         | incompleto       | não é possível rolar a tabbar. Parece que existe um bug que impede uma segunda tabbar de ser renderizada. |
| Text           | concluído        |                                                                                                           |
| Touchable      | concluído        |                                                                                                           |
| WebView        | concluído        |                                                                                                           |

We also need to check the styling here. Some of the components, even the ones marked as done, have
way to many styles, which might create some undesired behavior.

### Actions
| Ações           | Estado           | Descrição                                                             |
|-----------------|------------------|-----------------------------------------------------------------------|
| PushStack       | incompleto       | Funciona exatamente como na web, i.e. o botão de voltar não faz nada. |
| PopStack        | incompleto       | Funciona exatamente como na web, i.e. o botão de voltar não faz nada. |
| PushView        | incompleto       | Funciona exatamente como na web, i.e. o botão de voltar não faz nada. |
| PopView         | incompleto       | Funciona exatamente como na web, i.e. o botão de voltar não faz nada. |
| PopToView       | incompleto       | Funciona exatamente como na web, i.e. o botão de voltar não faz nada. |
| ResetStack      | incompleto       | Funciona exatamente como na web, i.e. o botão de voltar não faz nada. |
| OpenNativeRoute | não implementado | Vai tentar usar o location do browser, que não existe.                |
| OpenExternalUrl | não implementado | Vai tentar usar o location do browser, que não existe.                |
| AddChildren     | concluído        |                                                                       |
| Condition       | concluído        |                                                                       |
| Confirm         | não implementado |                                                                       |
| SendRequest     | concluído        |                                                                       |
| SetContext      | concluído        |                                                                       |
| SubmitForm      | não implementado |                                                                       |
