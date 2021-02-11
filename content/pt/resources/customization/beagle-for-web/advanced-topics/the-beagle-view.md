---
title: Beagle view
weight: 184
---

---

## Acessar e controlar o BeagleView

{{% alert color="info" %}}
As features descritas aqui estão disponíveis apenas em versões acima de 1.2.0.
{{% /alert %}}

Beagle View é uma entidade responsável por gerenciar a view do server-driven. Pode ser criada por meio do Beagle Service, pela função `createBeagleView`. O BeagleView pode buscar uma nova view, atualizar a sua árvore, navegar, etc.

## Acessando o Beagle View

O Beagle View é criado no Angular ou React quando o componenente`BeagleRemoteView` é usado. Para acessá-lo, você deve usar a propriedade `onCreateBeagleView` no Angular ou a `viewRef` no React. Veja os exemplos abaixo:

### **Angular**

```text
<beagle-remote-view [loadParams]="loadParams" (onCreateBeagleView)="onCreateBeagleView($event)">
beagle-remote-view>
```

```text
import { Component } from '@angular/core'
import { BeagleView } from '@zup-it/beagle-web'

@Component({
  // ...
})
class MyComponent {
  private beagleView: BeagleView | undefined

  // ...

  logBeagleView() {
    if (!this.beagleView) return
    console.log(this.beagleView))
  }

  onCreateBeagleView(beagleView) {
    this.beagleView = beagleView
    this.logBeagleView()
  }
}
```

### **React**

```text
import React, { useRef, MutableRefObject, useEffect } from 'react'
import { BeagleRemoteView } from '@zup-it/beagle-react'
import { BeagleView } from '@zup-it/beagle-web'

const MyComponent: FC = () => {
  const beagleView = useRef() as MutableRefObject<BeagleView | undefined>

  // ...

  logBeagleView() {
    if (!beagleView.current) return
    console.log(beagleView.current)
  }

  useEffect(logBeagleView, [])

  return <BeagleRemoteView path="/my-path" viewRef={beagleView} />
}
```

Nos exemplos acima, o Beagle View foi acessado e logado. É importante lembrar que é preciso checar a disponibilidade do Beagle View antes de usá-lo, uma vez que ele é criado por um componente `child`, ele não estará disponível antes da criação dos componentes `children`.

## Buscando a view

Para buscar uma view do backend e atualizar a view atual, você precisa usar o método `fetch` do `BeagleView`.

A operação de busca por ser em toda a árvore ou apenas nas branch. Se for a primeira, a árvore é toda substituída pelo resultado da requisição. Caso contrário, a árvore é mantida, mas a branch é atualizada pelo fetch, é ela que será substituída pelo resultado da requisição.

Abaixo veja o exemplo da chamada da função `fetch`:

```text
// fetches the remote view at /my-path and uses it to replace the entire current view
beagleView.fetch({ path: '/my-path' })

// fetches the remote view at /my-lazy-container and uses it to replace the component with id 'lazy'
beagleView.fetch({ path: '/my-lazy-container' }, 'lazy')
```

`fetch` aceita 3 parâmetros, e eles são:

1. **loadParams:** obrigatório. Objeto contendo os parâmetros para controlar a requisição, veja as opções a seguir:

- **path:** obrigatório. Caminho para a view no backend.
- **fallback:** opcional. A árvore do Beagle é retornada em caso de erro.
- **method:** opcional. `get` por padrão. Use essa opção se você precisar de um método http.
- **headers:** opcional. Use essa opção para passar headers adicionais para uma única requisição.
- **shouldShowLoading:** opcional. Mostra se você deve usar ou não o loadingComponent. E usará a configuração global caso não for especificado.
- **shouldShowError?:** opcional. Mostra se o componente da requisição falhou. E usará a configuração global caso não for especificado.
- **strategy:** opcional. Mostra qual [**estratégia de cache**]({{< ref path="/resources/customization/beagle-for-web/cache-strategy" lang="pt" >}}) deve ser usada para carregar uma view específica. E usará a configuração global caso não for especificado.
- **loadingComponent:** opcional. O componente de carregamento a ser usado. E usará a configuração global caso não for especificado.
- **errorComponent:** optional. O componente de erro a ser usado.

  2. **anchor:** opcional. Id do node a ser anexado no resultado da view, por padrão use o node raiz. É usado para atualizar apenas uma branch.

  3. **mode:** opcional. Como anexar o resultado da view direto do anchor, veja os quatro modos possíveis:

- `replaceComponent`: default. Substitui a âncora com o resultado da requisição.
- `replace`: substitui os filhos \(children\) da âncora com o resultado da requisição.
- `prepend`: adiciona o resultado da requisição no começo da lista dos filhos da âncora.
- `append`: adiciona o resultado da requisição no final da lista dos filhos.

## Inscrevendo os eventos

Você pode se inscrever a eventos no Beagle View. Há dois tipos de assinatura, a primeira escuta cada atualização da árvore \(`beagleView.subscribe`\) e a outra observa cada erro do processo de busca/renderização \(`beagleView.addErrorListener`\).

Quando o `beagleView.subscribe` é chamado, você deve passar o único parâmetro, onde a função recebe a árvore renderizada atual. Veja o exemplo abaixo:

```text
const unsubscribeLogger = beagleView.subscribe((newTree) => {
  console.log('The tree was updated!')
  console.log(newTree)
})
```

Para remover o ouvinte, apenas chame a função retornada. No exemplo anterior `unsubscribeLogger()`.

Ouvintes de erros são registrados de forma similar, a única diferença é que eles recebem uma lista de erros:

```text
const removeErrorListener = beagleView.addErrorListener((errors) => {
  console.log('Oops! An error just happened!')
  console.log(errors)
})
```

Por padrão, o Beagle loga cada erro que foi renderizado/buscado no processo até o console. Uma vez que o erro do ouvinte é adicionado no Beagle View, o Beagle irá parar de de logar os erros por ele mesmo e usar o tratamento que você adicionou.

## Destruindo o Beagle View

Para evitar vazamento de memória, o Beagle View precisa ser destruído, se não for usado novamente. Se você estiver usando Angular ou React, não há necessidade de se preocupar com isso, porque será feito pelo framework. Se você estiver usando o Beagle Web, você deve chamar o `beagleView.destroy()` quando a remote view é removida da página.

## API

Você encontra abaixo todos os métodos do Beagle View e sua descrição:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Atributo</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>subscribe</b>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">Recebe o ouvinte e retorna a fun&#xE7;&#xE3;o para cancelar a inscri&#xE7;&#xE3;o.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p><b>addErrorListener</b>
        </p>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left"><b>Subscreve aos erros. </b>Recebe o ouvinte e retorna a fun&#xE7;&#xE3;o
        para remov&#xEA;-lo.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>fetch</b>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">Busca a view do backend e a usa para a atualizar a &#xE1;rvore.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>getRenderer</b>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna o redenrizador da view. Pode ser usado para atualizar a &#xE1;rvore
        diretamente.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>getTree</b>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna a c&#xF3;pia da &#xE1;rvore renderizada.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>getBeagleNavigator</b>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna o navegador.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>getBeagleService</b>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna o BeagleService para criar a view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>destroy</b>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">destr&#xF3;i a view.</td>
    </tr>
  </tbody>
</table>
