---
title: Overview
weight: 1
description: >- 
    In this section, you will find the information about Operations using Beagle's DSL.
---

---

## What is it? 

The operations allow you to create applications with complex screens through your backend with basic operations like:
- Conditionals
- Sum
- Equal
- And others
The advantage is the components don't need this kind of logic in them. 

## How can you use it?

The operations are used when you want to modify values of a component through logic and operations and in a different way from the one that you have received the components with JSON.

Beagle has some default patterns and you can create your own operations.

### **Methods usage** 

{{% alert color="warning" %}}
The DSL does not mean a JSON change when rendering the components. 
{{% /alert %}}

When you use the operators with the DSL, it is necessary to understand the use of the following methods:  

**1. constant:** This method is used when the operations are [Bind.Value](https://docs.usebeagle.io/v1.10/pt/api/context/overview/) type.


**2. expressionOf:** This method is used when the operations are [Bind.Expression](https://docs.usebeagle.io/v1.10/pt/api/context/overview/) type.

**3. toBindString:** This is a Beagle component, it is necessary to add this method after the component to make the operation's conversion to string's Bind type. 

*Exemplo:* ```Text(sum(constant(1), constant(2)).toBindString())```

**4. plus:** This method is used to write a text followed by an operation. 

**5. createOperation:** Through this method it is possible to create [custom operations](https://docs.usebeagle.io/v1.10/pt/api/plugins/dsl-operations/how-to-register-a-new-operation/).

*Example:* ```Text(constant("Sum of 2 + 1 = ").plus(sum(constant(2), constant(1)).toBindString()))``` *ou* ```Text(constant("Sum of 2 + 1 = ") + (sum(constant(2), constant(1)).toBindString()))```

Check out below all the default patterns Beagle offers:
