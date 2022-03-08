---
title: Operações customizadas
weight: 3
description: >-
  Nesta seção, você vai encontrar informações de como criar e usar operações customizadas no Beagle Flutter.
---

---

## Como criar as operações customizadas?
1. Declare um mapa do tipo `Map<String, dynamic Function(List<dynamic> args)>`
2. Use este mapa ao inicializar sua instancia do BeagleService.

Essa mapa diz ao beagle quais funções chamar quando o identificador de uma operação vem do JSON.

### O mapa de chaves de operações
O mapa de chaves de operação é uma string e deve ser equivalente ao nome de uma expressão. Se você quiser declarar uma nova operação que formata números de telefone por exemplo, veja abaixo: 

```json
{
  "_beagleComponent_": "beagle:text",
  "text": "@{formatPhoneNumber(5534988745885)}"
}
```

`formatPhoneNumber`, não é uma operação padrão do Beagle, por isso precisamos adicioná-la no mapa de operações

### Os valores no mapa de operações (Operation)
Uma operação é uma funcção que recebe uma lista de argumentos e retorna um resultado. Como podemos aceitar qualquer coisa vinda do JSON, a lista é do tipo `dynamic`. Essa função pode também retornar qualquer tipo desde que seja do tipo `serializable`.

O exemplo para formatar o telefone recebe uma lista dinâmica de argumentos e retorna uma `String`. Veja o exemplo:

```dart
final myOperations = {
  'formatPhoneNumber': (args) => (args[0] as String).replaceAllMapped(RegExp('^(\\w{2})(\\w{2})(\\w)(\\w{4})(\\w{4})\$'), (m) => '+${m[1]} (${m[2]}) ${m[3]} ${m[4]}-${m[5]}'),
}

final beagleService = BeagleService(
  baseUrl: 'http://myBFF.com',
  components: defaultComponents,
  operations: myOperations,
);
```

Como `formatPhonrNumber` aceita apenas um único argumento, usamos a posição `o` do vetor. No caso de multiplos parâmetros basta acessar as posições correspondentes.

Outro caso comum de uso das operações são filtros. Digamos que que temos um vetor de `users` por `city`. Supondo que ambos os valores de `users` e `city` estão disponíveis no context. Para criar um novo vetor com todos os usuários de uma cidade, basta criar uma nova operação customizada chamada por exemplo de `@{filterByCity(Users, city)}`. A lógica desta operação é filtrar os usuários dados os parâmetros. Veja:

```dart
final myOperations = {
  // ...
  'filterByCity': (args) {
    final array = args[0] as Array<Map<String, dynamic>>;
    final city = args[1] as String;
    return array.filter((element) => element['city'] == city);
  }
}
```

Lembre-se que operações sempre trabalham nos valores originais do JSON, por isso ao invés de receber uma instância da classe User, você precisa receber sua estrutura de dados em forma de mapa. Operações também devem sempre retornar valores do tipo `serializable`, então, no caso de retornar um User deve-se usar um mapa e não uma instância da classe.

É isso!, Agora vocÊ já sabe criar operações customizadas com Beagle Flutter!
