---
title: "Cache"
weight: 1
description: >
  Como o Beagle armazena elementos em cache entre o backend (BFF) e o frontend
---

---

## Camadas de cache

Atualmente, existem **duas camadas de cache** no Beagle: 

* Uma camada volátil
* Uma camada persistente. 

A camada volátil hoje depende da camada persistente, no sentido que apenas itens cacheadas na camada persistente são candidatos para o cache volátil.

### Cache volátil

É o cache que fica na memória da aplicação frontend e que é usado para reduzir a quantidade de chamadas ao backend. 

As entradas nesta camada do cache têm duração por tempo, definida nas configurações gerais de cache de cada plataforma de cliente.

Você pode checar como **configurar o cache** de acordo com sua plataforma, no link abaixo:

* [**Configurando o cache**](configurando-o-cache.md#configurando-o-cache-e-customizacao) ****

### Cache persistente

Nesta camada de cache, existem duas localizações. São elas: 

* Na memória do backend; 
* No armazenamento do frontend.

Este cache é usado para otimizar a resposta do BFF - tanto em tempo quanto em tamanho -, em casos que não há mudança. As entradas neste cache duram até o servidor refazer o deploy ou o cliente ser reinstalado.

A premissa para que este cache funcione é que ele deve sempre retornar o mesmo JSON para a mesma requisição. Para que uma requisição seja considerada igual, é necessário que tenha o mesmo endpoint e a mesma plataforma especificada como mostra nossa [**especificação de plataformas**.](../componentes/platform-sorting.md)

{% hint style="danger" %}
É importante destacar que o mecanismo de cache **não deve** ser utilizado em **endpoints** que não atendam a essa **premissa**. Ele pode ser ativado ou desativado no BFF por endpoint ou para o BFF inteiro.
{% endhint %}

## Como o protocolo de cache funciona? 

O protocolo atua no cabeçalho `beagle-hash`. O BFF, por sua vez, valida os hashes recebidos e envia uma resposta completa ou apenas o `status HTTP 304 Not Modified` \(sem um corpo\). 

Quando o BFF responde com o `status 304`, o aplicativo carrega do elemento em cache. Caso isto não aconteça, ele armazena os dados recebidos \(hash e JSON\) e renderiza os elementos.

![](../../.gitbook/assets/beaglesave.png)
