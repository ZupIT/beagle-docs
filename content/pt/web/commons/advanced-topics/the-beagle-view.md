---
title: Beagle view
weight: 184
---

---

## Acessar e controlar a BeagleView

Beagle View é uma entidade responsável por gerenciar a view do server-driven. Pode ser criada por meio do Beagle Service, pela função `createBeagleView`. A BeagleView pode buscar uma nova view, atualizar a sua árvore, navegar, etc.

## Acessando o Beagle View

O Beagle View é criado no Angular ou React quando o componenente`BeagleRemoteView` é usado. Para acessá-lo, você deve usar a propriedade `onCreateBeagleView` no Angular ou a `viewRef` no React. Veja os exemplos abaixo:

### **Angular**

```typescript
<beagle-remote-view route="/home" (onCreateBeagleView)="onCreateBeagleView($event)">
</beagle-remote-view>
```

```typescript
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

```typescript
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

  return <BeagleRemoteView route="/home" viewRef={beagleView} />
}
```

Nos exemplos acima, o Beagle View foi acessado e logado. É importante lembrar que é preciso checar a disponibilidade do Beagle View antes de usá-lo, uma vez que ele é criado por um componente `child`, ele não estará disponível antes da criação dos componentes `children`.

## Buscando uma view

Para buscar uma view do backend é preciso obter uma referência ao `BeagleService` e então chamar o método `viewClient.fetch(remoteView)`.

Uma referência para o BeagleService pode ser obtida a partir da própria `BeagleView`, pelo método `getBeagleService()`.

O método `viewClient.fetch(remoteView)` aceita um único parâmetro, que é a rota que deve ser acessada no backend para que a view seja recuperada. As propriedades da `RemoteView` podem ser encontradas no [artigo sobre o componente `beagle-remote-view`]({{< ref path="/web/commons/beagle-remote-view" lang="pt" >}}).

Para renderizar a view recuperada pelo view client, deve-se usar o renderizador da `BeagleView`: `view.getRenderer()`. Os métodos do `Renderer` que renderizam a view são `doFullRender` e `doPartialRender`, para saber mais sobre eles, leia o [artigo sobre renderização]({{< ref path="/web/commons/advanced-topics/rendering" lang="pt" >}}), mais especificamente, a seção "Usando o Renderer".

## Escutando mudanças na árvore de UI

Tanto o Beagle React quanto o Beagle Angular escutam mudanças na árvore de UI do Beagle para que possam atualizar a tela de acordo. Se for interessante para sua aplicação, você também pode escutar esse evento da `BeagleView`. Para adicionar um listener, basta chamar o método `onChange` da `BeagleView`.

`beagleView.onChange` deve ser chamado com um único parâmetro: a função listener. Essa função recebe a árvore atual e não deve retornar nada. Veja o exemplo abaixo:

```text
const unsubscribeLogger = beagleView.onChange((newTree) => {
  console.log('The tree was updated!')
  console.log(newTree)
})
```

Para remover o listener, apenas chame a função retornada. No exemplo anterior `unsubscribeLogger()`.

## Destruindo a Beagle View

Para evitar que componentes já destruídos sejam chamados, a Beagle View precisa ser destruída se não for usada novamente. Se você estiver usando Angular ou React, não há necessidade de se preocupar com isso, porque será feito automaticamente pela biblioteca. Se você estiver usando o Beagle Web diretamente, sem usar o beagle-angular ou beagle-react, você deve chamar o `beagleView.destroy()` quando a a página for removida da memória.

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
      <td style="text-align:left"><strong>onChange</strong>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">Recebe o listener e retorna a fun&#xE7;&#xE3;o para cancelar a inscri&#xE7;&#xE3;o.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getRenderer</strong>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna o redenrizador da view. Pode ser usado para atualizar a &#xE1;rvore
        diretamente.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getTree</strong>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna a c&#xF3;pia da &#xE1;rvore renderizada.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getNavigator</strong>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna o navegador.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>getBeagleService</strong>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">retorna o BeagleService para criar a view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>destroy</strong>
      </td>
      <td style="text-align:left">fun&#xE7;&#xE3;o</td>
      <td style="text-align:left">destr&#xF3;i a view.</td>
    </tr>
  </tbody>
</table>
