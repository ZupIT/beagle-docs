# **Contributing Guide**
This is Beagle's documentation contributing guide. We'd love to accept your patches and contributions to this project. There are just a few small guidelines you need to follow.

## **Table of contents**
### 1. [**Before you contribute**](#Before-you-contribute)
> #### i. [**Legal**](#Legal)
### 2. [**Prerequisites**](#Prerequisites)
>#### i. [**Pull Request title**](#Pull-Request-title)
> #### ii. [**Developer Certificate of Origin**](#Developer-Certificate-of-Origin)
### 3. [**How to contribute?**](#How-to-contribute?)
### 4. [**Code of Conduct**](#Code-of-Conduct)
### 5. [**Community**](#Community)


## **Before you contribute**


### **Legal**
- Beagle is licensed over [**ASF - Apache License**](https://github.com/ZupIT/charlescd/blob/main/LICENSE), version 2, so new files must have the ASL version 2 header. For more information, please check out [**Apache license**]( https://www.apache.org/licenses/LICENSE-2.0).

## **Prerequisites**
Check out the requisites before contributing to Beagle's documentation:

### **Pull Request title**
When opening a PR, add the title with a prefix of the type of change you are contributing, for example `feat:` for a new feature. You can see other types in the [**How to contribute?**](#how-to-contribute?) section.

Your Pull Request should look like this:

```txt
feat: add field in component image to allow resizing
```
This format is called **conventional commits**. It helps us understand what each modification is actually doing, and allow us to automatically generate better *release notes* and *versions*.

For more information, please read the [**official specifications**](https://www.conventionalcommits.org/).

### **Developer Certificate of Origin - DCO**

This is a security layer for the project and for the developers. It is mandatory.
 
 Follow one of these two methods to add DCO to your commits:
 
**1. Command line**
 Follow the steps: 
 **Step 1:** Configure your local git environment adding the same name and e-mail configured at your GitHub account. It helps to sign commits manually during reviews and suggestions.

 ```
git config --global user.name “Name”
git config --global user.email “email@domain.com.br”
```
**Step 2:** Add the Signed-off-by line with the `'-s'` flag in the git commit command:

```
$ git commit -s -m "This is my commit message"
```

**2. GitHub website**
You can also manually sign your commits during GitHub reviews and suggestions, follow the steps below: 

**Step 1:** When the commit changes box opens, manually type or paste your signature in the comment box, see the example:

```
Signed-off-by: Name < e-mail address >
```

For this method, your name and e-mail must be the same registered to your GitHub account.

## **How to contribute?** 

You can suggest a change, a fix, or improvements to our documentation, such as: 
- Add missing information.
- Fix a grammar or code error.
- Suggest a new section.
- Translate. 

### **Opening issues and pull requests**
Follow the steps below: 

**Step 1.** Access [**GitHub Issues**](https://github.com/ZupIT/beagle-docs/issues) and open an issue;

**Step 2.** Describe the issue or change you want to make; 

- You can also suggest solutions for opened issues following, check steps 3 to 5.

**Step 3.** Commit your changes to a new branch and upload it to the repository;

**Step 4.** Open a pull request to the published branch, i. e., **`release-VERSION`** and fill in the template; 

**Step 5.** Open a pull request to the default branch **`beagle:main`**;

**Step 6.** Beagle's team will check your issue, review it, and then approve your PR. 
Is this the first Beagle's repository you visit? Check out other [**repositories**](https://github.com/ZupIT/beagle).

Every time that a new release is created, we save the current work into a new branch, called `release-VERSION`.

### **Pull Request's approval**
After Beagle's team analyze your contribution, we may add some questions and suggestions, you should:

- Make the required updates.
- Re-run Beagle's test suites and CI workflows to ensure everything is still working properly.
- Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

  ```shell
  git rebase main -i
  git push -f
  ```

## **Code of Conduct**
Please read the [**Code of Conduct**](https://github.com/ZupIT/beagle/blob/main/CODE_OF_CONDUCT.md).

## **Community**
If you have any questions or ideas, let's chat in our [**Zup Open Source Forum**](https://forum.zup.com.br).


**Thank you for your contribution!**

**Beagle Team** 😁
