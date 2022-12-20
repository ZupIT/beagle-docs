> Issues: please post your questions and problems with the documentation in our [main repository](https://github.com/ZupIT/beagle).

# **Beagle Documentation**
This repository uses [**hugo server**](https://gohugo.io/commands/hugo_server/) and contains **[Beagle's](https://docs.usebeagle.io/v1.10/)** official documentation.

## **Table of contents**
### 1. [**About**](#About)
### 2. [**Getting Started**](#getting-started)
> #### i. [**Requirements**](#requirements)
> #### ii. [**Installation**](#installation)
> #### iii. [**Build**](#build)
### 3. [**Contributing Guide**](#contributing-guide)
### 4. [**Code of Conduct**](#code-of-conduct)
### 5. [**Community**](#community)


## **About**

Beagle is an open source framework for cross-platform development using the concept of Server-Driven UI.

This framework allows teams to build and alter layouts and data directly through a backend but yet displaying its contents natively in a mobile application and/or through a web one.

It is also possible to create, test and update native application components and screen paths without the need to update the mobile application at the store (App Store or Play Store).

For more information, check out [**Beagle's documentation**](https://docs.usebeagle.io/v1.10/). 


## **Getting started**

### **Requirements**
To edit, run and build this project, you will need:
* [**Node**](https://nodejs.org/en/)
    - To check the installation, run `npm -v` and `node -v` in your terminal.
* [**Hugo**](https://gohugo.io/getting-started/installing/)
    - To check the installation, run `hugo version` in your terminal.

### **Installation**
To start this project, you must run the following commands:

```
git submodule update --init --recursive --remote
```

Install your dependencies using `npm`:

```
npm install
```

Then run:

```
npm start 
```

- If you're getting a fatal error: Pipe failed, run: **`npm run start --watch=false`** or apply [**the Docsy settings**](https://github.com/google/docsy-example/issues/89#issuecomment-758311888).
- By default, this command will run the project in development mode. If you want to change the environment use, then run **`npm run start --environment=production.`**

### **Build**

To build the application, run this command after you [**installed hugo**](https://gohugo.io/getting-started/installing) and all dependencies package:

```
npm run build 
```
###  **Contributing Guide**
Check out Beagle's documentation [**contributing guide**](https://github.com/ZupIT/beagle/blob/main/CONTRIBUTING.md). 


## **Code of Conduct**
Please read the [**code of conduct**](https://github.com/ZupIT/beagle/blob/main/CODE_OF_CONDUCT.md).

## **Community**
If you have any questions or ideas, let's chat in our [**Zup Open Source Forum**](https://forum.zup.com.br) or [**GitHub Issues**](https://github.com/ZupIT/beagle-docs/issues).
