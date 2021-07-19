---
title: Exibindo uma tela
weight: 224
description: >-
  Nesta seção, você encontra um exemplo prático de como exibir uma tela
  Server-Driven
---

---

## Exibindo uma tela a partir de uma URL

#### **Para projetos no Angular**

Para definir onde você quer mostrar uma tela server-driven no Angular, você deve usar o componente fornecido pela biblioteca `<beagle-remote-view>`

{{% alert color="info" %}}
Este componente tem outros atributos que podem ser configurados. No entanto nessa implementação você utilizará somente o atributo path, descrito no exemplo abaixo.

Para mais detalhes sobre esse componente clique no link a seguir e verifique os detalhes do [**Remote View**]({{< ref path="/web/commons/remote-view-parameters" lang="pt" >}})
{{% /alert %}}

No arquivo html do seu componente, adicione o `remote view`.

```markup
<beagle-remote-view [loadParams]="loadParams"></beagle-remote-view>
```

Feito isso, acesse o controller do componente em que você adicionou o remote view e crie o `loadParams` que é esperado pelo `remote view.`

```text
loadParams: LoadParams;

  constructor() {
    this.loadParams = {
      path: '/pathToScreen'
    };
  }
```

{{% alert color="info" %}}
No campo `path`, deve ficar o caminho para seu JSON que será associado com o `baseUrl` definido em `beagle.module.ts`.
{{% /alert %}}

#### **Para projetos no React**

Para definir uma tela server-driven no React, você precisa criar um serviço com uma configuração mínima, como no exemplo:

```javascript
import { createBeagleUIService } from "@zup-it/beagle-react";

export default createBeagleUIService({
  baseUrl: "",
  components: {},
});
```

Feito isso, usamos dois componentes fornecidos pela biblioteca Beagle para definir onde a tela server-driven será renderizada:

1. O `BeagleProvider`
2. O `BeagleRemoteView`

```javascript
...
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView path={'/pathToScreen'} />
    </BeagleProvider>
  );
}

export default App;
```

{{% alert color="info" %}}
No campo `path`, deve ficar o caminho para seu JSON que será associado com o `baseUrl` definido em seu serviço.
{{% /alert %}}