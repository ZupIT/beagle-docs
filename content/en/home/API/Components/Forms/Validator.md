---
title: Validator
weight: 328
description: Validator components description and its attributes
---

---

The validator component is an interface that informs to the Form when to enable the `FormSubmit` button. It is based on the `observability` concept, which FormInput will validate the submitted information and then send them to the Validator.

There are two ways to use Form Validator:

1. Clicking on `FormSubmit`
2. Calling the `notifyObservers` method inside the `FormInput`.

{{% alert color="warning" %}}
Atenção: **Validator** ≠[**FormValidation**](/home/api/actions/formvalidation/)

Despite the similar names, it's important to mention that **Validator** is different of the **FormValidation**, the first one authenticates the filled form and the second returns error messages in case of failed information in the form.
{{% /alert %}}
