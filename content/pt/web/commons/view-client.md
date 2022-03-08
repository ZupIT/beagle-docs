---
title: View Client
weight: 3
description: >-
  Nesta seção, você encontrará informações sobre como configurar um ViewClient no Beagle Web.
---

---

## O que é isso?

O `View Client` é muito semelhante ao HttpClient. Enquanto o HttpClient é responsável por gerenciar todas as requisições (views, dados json, imagens, etc), o ``ViewClient`` é responsável apenas por buscar *views*, ou seja, Páginas Server Driven.

O ``ViewClient`` cria um ``BeagleRequest`` que é enviado ao HttpClient. A implementação padrão do view client faz duas ações:

1. Cria o ``BeagleRequest`` de acordo com o que foi solicitado de quem o requisitou (geralmente o navegador);
2. Quando a resposta chega do HttpClient, ele verifica se a propriedade de navegação `preFetch` é ``verdadeira`` (``true``) e, *de ​​forma assíncrona*, faz uma busca prévia de seus resultados.

Ele não faz nada além disso, e geralmente é o suficiente para a maioria das aplicações. Mas, alguns sistemas podem precisar de um comportamento extra ao buscar as novas `views`, e este é o lugar onde ele deve ser customizado.

## Como usá-lo?

### Criando um novo ViewClient

Um bom exemplo é o cache. Digamos que queremos armazenar uma ``view`` localmente para quando o Beagle chamar `viewClient.fetch` novamente, ele retorne o resultado em cache ao invés de chamar o HttpClient. Para fazer isso, podemos implementar um novo ``ViewClient`` que possui um armazenamento e implementa `fetch` da seguinte forma:

```typescript
import { ViewClient } from '@zup-it/beagle-web'

const key = 'view_client_cache'

function createMyViewClient(): ViewClient {
  async function fetchView(): Promise<BeagleUIElement> {
    // ...
  }
  
  return {
    fetch: async (route) => {
      const routeKey = `$key:${route.url}`
      const stored = localStorage.getItem(key)
      if (stored) return JSON.parse(stored);
      const view = await fetchView(route);
      localStorage.setItem(routeKey, JSON.stringify(view));
      return view;
    }
  }
}
```

Implementamos uma lógica acima que armazenará cada resultado de busca no disco usando o *localStorage*. Esta é uma implementação simples e apenas *para teste*, pois esse cache nunca expiraria.

### Registrando o novo ViewClient

Depois de criar seu ``ViewClient`` personalizado acima, você precisa passá-lo para sua instância do ``BeagleService``:

{{< tabs >}}
{{% tab name="Angular" %}}

```typescript
@BeagleModule({
  viewClient: createMyViewClient(),
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
  viewClient: createMyViewClient(),
  // ...
})
```

{{% /tab %}}
{{< /tabs >}}
