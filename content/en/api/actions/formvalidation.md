---
title: FormValidation
weight: 244
description: >-
  You will find here the definition of FormValidation and details about its
  attributes.
---

---

{{% alert color="warning" %}}
This action has been **deprecated** alongside Form.
{{% /alert %}}

## What is it?  <a id="o-que-e"></a>

‌This action is used to configure the error messages returned toby the external service to submit the form, for example, verify the CPF register status when it is submitted.  

FormValidation structure is:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| errors | List&lt;FieldError&gt; | ✓ | Errors list. |

‌

### FieldError <a id="fielderror"></a>

 `FieldError` is class that defines error. 

The  `FieldError`  structure is:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| inputName | String | ✓ | Name of the component which the error refers to.  |
| message | String | ✓ | Error message to be displayed.  |
