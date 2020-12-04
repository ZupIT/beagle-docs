---
title: Parâmetros Beagle Service
weight: 178
description: Aprenda aqui quais são os parâmetros do Beagle Service.
---

---

## Beagle Service

Para usar a biblioteca Beagle se faz necessária a criação de um Beagle Service com as configurações de onde e como buscar as telas server-driven. 

> **No React** você pode facilmente criar um Beagle Service por meio da função `createBeagleService(beagleServiceOptions)`

> **No Angular** o código base é gerado automaticamente e as propriedades podem ser modificadas e adicionadas em beagle.module.ts

O objeto de configuração possui as propriedades a seguir:

| Atributo | Tipo | Default | Obrigatório | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| baseUrl | string |  |      ✓ | URL para o servidor com as telas \(JSON\) no formato Beagle |
| components | Map&lt;string,Component&gt; |  |     ✓ | Um mapa de componentes que serão renderizados através da biblioteca Beagle. Os valores são pares chave e valor onde a chave é o identificador Beagle e sempre começará por `beagle:` ou `custom:`. Já o valor será o componente ligado ao identificador |
| strategy | [**Strategy**](estrategias-de-cache.md) | beagle-with-fallback-to-cache |  | Estratégia de cache aplicada nas requisições de telas ao servidor |
| fetchData | fetch |  |  | Permite adicionar uma função customizada para fazer requisições HTTP. |
| analytics | [**Analytics**](../../../api/analytics.md) |  |  | Permite o uso de handlers para a captura e tagueamento de alguns eventos. |
| customActions | Map&lt;string,[**ActionHandler**](acoes-customizadas.md)**&gt;** |  |  | Um mapa de ações customizadas que podem ser interpretadas pela biblioteca Beagle. É um mapa chave e valor onde a chave será sempre um identificador começado por `beagle:` ou `custom:` e o valor será o [**ActionHandler** ](acoes-customizadas.md#criando-um-actionhandler)ligado aquela ação. |
| lifecycles | [**LifeCycleHook**](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MKkT7mv7ipZKPW7tBUp/v/v1.0-pt/features/customizacao/beagle-para-web/topicos-avancados/renderizacao) |  |  | Um mapa global para adicionar comportamentos aos ciclos de vida dos componentes. Cada ciclo ocorre no processo de renderização das telas, antes dos componentes se tornarem HTML |
| customStorage | Storage | localStorage |  | Substitui o localStorage padrão dos browsers |
| useBeagleHeaders | boolean | true |  | Usar ou não [**headers específicos do Beagle**](headers-padroes.md) ao fazer as requisições de telas para o servidor |
| navigationControllers | Map&lt;string, NavigationController&gt; |  |  | Permite adicionar opções de controle de reposta visual, como mostrar ou não itens de carregamento e componentes de erro |
