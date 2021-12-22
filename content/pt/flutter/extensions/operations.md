---
title: Custom Operations
weight: 3
description: >-
  In this section, you will find information on how to create and use your own operations in Beagle Flutter.
---

---

## How to create custom operations?
1. Declare a map of type `Map<String, dynamic Function(List<dynamic> args)>`;
2. Pass this map to your BeagleService instance.

This map tells Beagle which function to trigger when a given operation name comes in an expression of the JSON.

### The keys on a map of operations
The key in a map of actions is a string and it must be equivalent to the operation name in an expression. For instance, if we want to declare a new operation that formats phone numbers, we'd use it like this in the JSON:

```json
{
  "_beagleComponent_": "beagle:text",
  "text": "@{formatPhoneNumber(5534988745885)}"
}
```

`formatPhoneNumber`, by default, is not a supported operation, so we need to declare it using its name as the key in the map of operations.

### The values on a map of operations (Operation)
An operation is a function that receives a list of arguments and returns a result. Since we can accept anything coming from an expression in the JSON, the list of arguments is of type `dynamic`. This function can also return any type, as long as it's serializable.

The example to format a phone number would receive a list of dynamic arguments and return a String. See the example below:

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

Since `formatPhoneNumber` accepts a single argument, we use only the position `0` of the array. If we wanted create a multiplication between 2 numbers, for example, we'd use `args[0]` and `args[1]`.

Another common use case for operations is filtering. Let's say we want to filter the array `users` by a given `city`. Suppose `users` and `city` are both values available in the context. To create a new array with all users filtered by the city, we could use the expression `@{filterByCity(users, city)}`. Since there's no default operation for this filter, we create a new custom operation:

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

Remember that operations always work over the original JSON, so instead of receiving an instance of the class User, for instance, you will receive its map representation. Operations must also only return serializable data, so, if it's gonna work over a user, it should never return an instance of the class user, but instead, it should return a map.

That's it! Now you can use your custom operations with Beagle Flutter!
