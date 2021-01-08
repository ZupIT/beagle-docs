---
title: Estrutura de dados
weight: 182
---

---

## Como o Beagle representa a view? 

{{% alert color="warning" %}}
As features descritas aqui estão disponíveis apenas nas versões acima de 1.2.0.
{{% /alert %}}

Beagle trabalha em uma árvore de componenentes e para fazer funcionar, é preciso seguir algumas regras. Nos termos do Typescript, a árvore do Beagle pode ser definida como:

```text
export interface BeagleUIElement {
  _beagleComponent_: string,
  id: string,
  context?: DataContext,
  children?: BeagleUIElement[],
  style?: Style,
  [key: string]: any,
}
```

Veja abaixo cada componente da árvore:

* `_beagleComponent_` é o nome do componenete UI a ser renderizado; 
* `id` é o identificador único para o node. Observação: mesmo que o `id` é obrigatório pela estrutura interna da árvore, antes de processá-la, o Beagle atribui um id único qualquer para cada node sem um id, tornando-o opcional no json fornecido pelo backend. 
* `context` é um [**contexto** ](/pt/docs/api/context/)definido para um componente e seus filhos. 
* `children` é uma array de nodes representando os filhos que estão no node atual. 
* `style`  é a regra de estilização dos componentes. Essas regras não são CSS, mas [**estruturas definidas pelo Beagle.**](/pt/docs/resources/estilização/) 
* O node possui propriedades esperadas pelo próprio componente, como text, que poderia ter `text` e `justify`, enquanto o botão poderia ter `onPress`, `text` e `disabled`.

Veja abaixo um exemplo da árvore de componentes, pronta para ser processada pelo Beagle:

```text
{
  "_beagleComponent_": "container",
  "id": "container",
  "children": [
    {
      "_beagleComponent_": "image",
      "id": "logo",
      "url": "https://i.ibb.co/rvRN9kv/logo.png"
    },
    {
      "_beagleComponent_": "text",
      "id": "welcome",
      "text": "Welcome to the Beagle playground!"
    },
    {
      "_beagleComponent_": "text",
      "id": "instructions",
      "text": "Use the panel on the left to start coding!"
    },
    {
      "_beagleComponent_": "button",
      "id": "fast-guide",
      "text": "Access the fast guide"
    }
  ]
}
```

O json acima é uma versão simplificada da página inicial do Beagle Playground. Ele renderiza o container para guardar o resto dos elementos: uma imagem, dois textos e um botão. Para ver o exemplo completo e o UI renderizado, [**veja o Beagle Playground**](https://beagle-playground.netlify.app/). 

## O payload do Beagle

No tipo definido anteriormente \(`BeagleUIElement`\), você pode ver que o id é uma propriedade obrigatória e que os filhos de um node devem sempre ser nomeados `children`.  No backend isso não é uma garantia, por essa razão, o Beagle gera internamente ids únicos para cada node sem um e traduz a propriedade children. Uma mesa de componente, por exemplo, pode ter seus filhos em uma propriedade `rows`. Antes de começar o processo da árvore, o Beagle converte o `rows` para o nome esperado `children`, veja a seção abaixo sobre the children property. 

O payload pode retornar para o backend qualquer coisa, mas internamente o Beagle deve trabalhar com a árvore de componentes `BeagleUIElement`. Você deve atravessar a árvore e detectar cada componente e seus filhos. 

É recomendado que o backend retorne o JSON representando a árvore de componentes, como é esperado pelo Beagle, mas se por alguma razão isso não seja possível, o Beagle Web torna possível o pré processamento da resposta e constrói a árvore no front-end antes que o Beagle começe a trabalhar com ela, como em **lifecycles**.

### A propriedade children

É recomendado sempre usar a array com o nome `children` para especificar os filhos nodes de um componente. Mas, o Beagle irá trabalhar fora da caixa, se ao invés de um array de componentes, o único node é passado e o nome `child` também pode ser usado.  Em alguns casos, quando o componente representa uma tabela, os filhos podem ser nomeados `rows` ao invés de `children`, nesse caso você pode informar ao Beagle que é um componente específico e que o nome da propriedade children é diferente. Veja o exemplo abaixo: 

```text
@BeagleChildren({ property: 'rows' })
@Component({
  // ...
})
class Table {
  // ...
}
```

O exemplo acima é para Angular, mas funciona da mesma forma em outras plataformas. Se o componente é funcional ou se você não quiser usar anotações, você pode usá-lo como uma função, veja o exemplo abaixo: 

```text
const Table = (props) => {
  // ...
}

BeagleChildren({ property: 'rows' })(Table)
```
