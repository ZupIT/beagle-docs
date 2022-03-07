---
title: Controladores de navegação
wight: 3
description: >-
  Nesta seção, você encontrará informações sobre os controladores de navegação (Navigation Controllers) e como lidar com o feedback de navegação.
---

---

{{% alert color="warning" %}}
Atenção: Se você precisa apenas alterar os componentes de loading e error, leia [este artigo]({{< ref path="/web/commons/navigation/loading-error-components" lang="pt" >}}) .
{{% /alert %}}

## O que é isso?

Os controladores de navegação são responsáveis ​​por implementar o comportamento de carregamento da tela, erros e eventos de sucesso, a partir da navegação entre as páginas do Beagle.

Se você não definir um controlador de navegação personalizado, o Beagle usará um `Default NavigationController`, que implementa o seguinte comportamento:

- **onLoading**: renderiza uma árvore de UI do Beagle com um único componente chamado `custom:loading`.
- **onError**: renderiza uma árvore de interface do usuário do Beagle com um único componente chamado `custom:error`.
- **onSuccess**: renderiza uma árvore de IU do Beagle com a árvore de IU retornada do back-end.

{{% alert color="success" %}}
Todos esses comportamentos podem ser personalizados implementando um `NavigationController` customizado. Você pode ter vários controladores de navegação em um único aplicativo, um para cada seção, se desejar. O framework Beagle presente em seu Frontend consegue definir qual `NavigationController` deve ser chamado para cada conjunto de telas que vem de um Backend, usando uma propriedade chamada `controllerId`
{{% /alert %}}

Ao navegar para um novo Stack (usando, por exemplo, ações como PushStack, ResetStack ou ResetApplication), o backend pode fornecer um `controllerId` para a ação de navegação que está sendo acionada (você só listará uma Id se quiser usar um controlador de navegação personalizado (`custom NavigationController`)).

O Beagle usará este id para encontrar o `NavigationController` correspondente no Front end de sua aplicação. Dessa forma, você poderá ter uma pilha inteira de telas com um feedback de carregamento diferente.

## Como usá-lo?

A seguir listamos a interface do NavigationController

### onLoading

Chamada quando o Beagle carrega uma nova visualização. Ela recebe o seguinte objeto como parâmetro:

- `view: BeagleView`: o [BeagleView]({{< ref path="/web/commons/advanced-topics/the-beagle-view" lang="pt" >}}) que renderiza essa IU orientada a servidor.
- `completeNavigation: () => void`: uma função para completar a navegação, ou seja, para finalmente enviar a nova página para o navegador com o `BeagleWidget`. Você precisa chamá-lo assim que quiser renderizar um Beagle JSON. Por exemplo, se seu feedback de carregamento é para renderizar um componente beagle, você deve chamar completeNavigation de dentro do método `onLoading`. Se você renderizar uma interface do usuário do Beagle apenas no evento de sucesso, não precisará chamar `completeNavigation` porque ele é chamado automaticamente após `onSuccess`.

### onError

Chamada quando ocorre um erro ao carregar uma nova visualização. Ela recebe os mesmos parâmetros que o método `onLoading` mais:

- `error: any`: o erro gerado ao fazer a solicitação ou processar a resposta.
- `retry: () => Promise<void>`: uma função que, quando chamada, tenta buscar a visão novamente.

### onSuccess

Chamado sempre que uma visualização é carregada com sucesso. Para renderizar esta visualização, o método deve chamar `beagleView.getRenderer().doFullRenderer(screen)`. Essa funcionalidade renderiza a tela orientada pelo servidor para o `BeagleView` atual. O método `onSuccess` aceita os mesmos parâmetros que o `onLoading` mais:

- `screen: BeagleUIElement`: a visão orientada pelo servidor recuperada do [ViewClient]({{< ref path="/web/commons/view-client" lang="pt" >}}).

{{% alert color="success" %}}
`completeNavigation` é a única exceção aqui, pois será chamado de qualquer maneira pelo Beagle
{{% /alert %}}

## Exemplo

```typescript
import { NavigationController } '@zup-it/beagle-web'

const inYourFace: NavigationController = {
  onError: (_, error, retry) => {
    const shouldRetry = confirm(`An error happened while navigating. ${error}. Click ok to retry or cancel to dismiss.`)
    if (shouldRetry) retry()
  },
  onLoading: () => alert('Loading started. Click ok to continue.'),
  onSuccess: (view, screen) => view.getRenderer().doFullRender(screen),
}
```

Este é um controlador de navegação simples com o único objetivo de demonstrar esse recurso.

- Mostra uma caixa de diálogo sempre que uma página começa a carregar. Se ocorrer um erro.
- mostra uma caixa de diálogo de erro, que oferece a opção de tentar novamente.
- Quando a página é carregada com sucesso, ela renderiza a página.

O único parâmetro não intuitivo no NavigationController é o `completeNavigation`.

{{% alert color="success" %}}
Você pode ignorar isso se não pretender mostrar uma IU do Beagle antes do evento de sucesso.
{{% /alert %}}

Por padrão, se você não chamar a função `completeNavigation`, a navegação ocorrerá após o evento de sucesso. Mas, os controladores de navegação, como o padrão, usam a Estrutura Beagle para renderizar o feedback.

O `Default NavigationController` renderiza o componente `custom:loading` Beagle sempre que um evento de carregamento acontece e é por isso que ele precisa chamar a função `completeNavigation` dentro do método `onLoading`. Dessa forma, o Beagle pode renderizar corretamente o componente.

## Registrando os controladores de navegação

1. Você deve criar um mapa para lidar com todos os `controladores de navegação` que podem ser usados ​​pelo backend, onde as chaves são os *IDs do controlador* e os valores são instâncias de `NavigationController`.

2. Para dizer ao Beagle qual NavigationController é o controlador padrão, você precisa definir a propriedade `defaultNavigationController`. O controlador de navegação padrão é usado sempre que nenhum controllerId for fornecido ou sempre que nenhum controlador correspondente ao id fornecido for encontrado.

Se você tiver três controladores de navegação: `inYourFace`, `secured` e `public`. `inYourFace` é o padrão, enquanto `secured` e `public` serão usados ​​em seções específicas do aplicativo e referenciados via controllerIds, definidos em sua tela no backend. A configuração ficaria da seguinte forma:

{{< tabs >}}
{{% tab name="Angular" %}}

```typescript
@BeagleModule({
  defaultNavigationController: inYourFace,
  navigationControllers: { secured, public },
  // ...
})
export class Beagle {}

createBeagleUIService({
  defaultNavigationController: inYourFace,
  navigationControllers: { secured, public },
  // ...
})

```

{{% /tab %}}

{{% tab name="React" %}}

```typescript
createBeagleUIService({
  defaultNavigationController: inYourFace,
  navigationControllers: { secured, public },
  // ...
})
```

{{% /tab %}}
{{< /tabs >}}
