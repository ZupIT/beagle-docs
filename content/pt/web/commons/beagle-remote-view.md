---
title: BeagleRemoteView
weight: 176
description: Descrição do BeagleRemoteView e seus parâmetros
---

---

## O que é isso?

`BeagleRemoteView` é o componente de entrada para um fluxo server driven no Beagle Web.

## Como utilizá-lo?

Listamos abaixo um exemplo de uso do ``BeagleRemoveView``

{{< tabs id="T81" >}}
{{% tab name="Angular" %}}

```text
<beagle-remote-view route="/my-server-driven-page"></beagle-remote-view>
```

{{% /tab %}}

{{% tab name="React" %}}

```text
<BeagleRemoteView route="/my-server-driven-page" />
```

{{% /tab %}}
{{< /tabs >}}

## Parâmetros

### route

O `BeagleRemoteView` possui um único parâmetro obrigatório: a rota (route). A rota pode ser uma string com a URL ou um objeto mais complexo do tipo `RemoteView`. Quando é uma string, assumimos que a rota é um simples GET para a URL informada, sem headers adicionais. Se for necessário fazer uma requisição com outro método HTTP, corpo de resposta ou headers específicos, deve-se criar um objeto do tipo `RemoteView`, composto das seguintes propriedades:

- **url:** a única propriedade obrigatória. Indica a URL da requisição.
- **fallback:** árvore de UI para renderizar caso haja falha na requisição.
- **shouldPrefetch:** não é útil quando usado com o componente `BeagleRemoteView`. Em outras situações, pré-carregam a página assim que possível ao invés de esperar por eventos específicos.
- **httpAdditionalData:** usado para configurar a requisição. Um HttpAdditionalData contém:
  - **method:** o método HTTP, o padrão é GET.
  - **headers:** um mapa com os headers da requisição.
  - **body:** o corpo da requisição. Isso não é válido para requisições GET.

### controllerId

O segundo parâmetro aceito pelo `BeagleRemoteView` é opcional e define qual controle de nevagação será usado. Os ``navigation controllers`` são responsáveis por decidir o que fazer nos eventos de carregamento, erro e sucesso de uma tela, se não informado, o controlador padrão é utilizado. Para saber mais sobre ``navigation controllers``, leia [este artigo]({{< ref path="/web/commons/navigation/navigation-controllers" lang="pt" >}}).
