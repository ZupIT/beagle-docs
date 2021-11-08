
# **Beagle Documentation**
This project contains **[Beagle's](https://docs.usebeagle.io/v1.10/)** documentation.

## **Table of contents**
1. [**About**](#About)
2. [**Getting Started**](#getting-started)
> #### i. [**Requirements**](#requirements)
> #### ii. [**Installation**](#installation)
> #### iii. [**Build**](#build)
3. [**How to contribute?**](#how-to-contribute)
4. [**Code of Conduct**](#code-of-conduct)
5. [**Community**](#community)


## **About**

Beagle is an open source framework for cross-platform development using the concept of Server-Driven UI.

This framework allows teams to build and alter layouts and data directly through a backend but yet displaying its contents natively in a mobile application and/or through a web one.

It is also possible to create, test and update native application components and screen paths without the need to update the mobile application at the store (App Store or Play Store).

For more information, check out [**Beagle's documentation**](https://docs.usebeagle.io/v1.10/). 


## **Getting started**

### **Requirements**
To edit, run and build this project, you will need:
* [**Yarn**](https://yarnpkg.com/)
    - To check the installation, run `yarn -v` in your terminal.
* [**Node**](https://nodejs.org/en/)
    - To check the installation, run `npm -v` and `node -v` in your terminal.
* [**Hugo**](https://gohugo.io/getting-started/installing/)
    - To check the installation, run `hugo version` in your terminal.

### **Installation**
To start this project, you must run the following commands:

```
git submodule update --init --recursive --remote
```

Install your dependencies using `npm` or `yarn`:

```bash
yarn
```
```
npm install
```

Then run:

```
npm run start 
```
- If you're getting a fatal error: Pipe failed, run: **`npm run start --watch=false`** or apply [**the Docsy settings**](https://github.com/google/docsy-example/issues/89#issuecomment-758311888).
- By default, this command will run the project in development mode. If you want to change the environment use, then run **`npm run start --environment=production.`**

### **Build**

To build the application, run this command after you [**installed hugo**](https://gohugo.io/getting-started/installing) and all dependencies package:

```
npm run build 
```

## **How to contribute?**

You can suggest a change, a fix, or improvements to our documentation, for example: 
- Add missing information.
- Fix a grammar or code error.
- Suggest a new section.
- Translate. 

###  **Contributing Guide**
Check out Beagle's [**contributing guide**](https://github.com/ZupIT/beagle/blob/main/CONTRIBUTING.md). 

### **Open an issue**
Follow the steps below:

**Step 1.** Access [**GitHub Issues**](https://github.com/ZupIT/beagle-docs/issues) and open an issue;

**Step 2.** Describe the issue or change you want to make; 

**Step 3.** Make your changes;

**Step 4.** Open a pull request open a PR to the published branch, i. e., **`release-VERSION`** and fill in the template; 

**Step 5.** Beagle's team will check your issue, review it, and then approve your PR. 
Is this the first Beagle repository you visit? Check out other [**repositories**](https://github.com/ZupIT/beagle).

Every time that a new release is created, we save the current work into a new branch, called `release-VERSION`.

## **Code of Conduct**
Please read the [**code of conduct**](https://github.com/ZupIT/beagle/blob/main/CODE_OF_CONDUCT.md), you will be able to understand what actions will and will not be tolerated.

## **Community**
Feel free to reach out to us at:
- [**GitHub Issues**](https://github.com/ZupIT/beagle-docs/issues).
- [**Zup Open Source Forum**](https://forum.zup.com.br).
