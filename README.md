# docs-beagle

Project: 466 Zup - Relacionamento com Desenvolvedores

## Getting started

To start this project, you must run the following commands:

`git submodule update --init --recursive --remote`

You must have installed Node and then install your dependencies using npm:

`npm install`

You also must have Hugo installed in your machine. Please, check
[their documentation](https://gohugo.io/getting-started/installing) to do so.

Then run:

`npm run start`. If you're getting a fatal error: Pipe failed, run: `npm run start --watch=false`.

npm run start - By default, this command will run the project in development mode. If you want to change the environment use, then run `npm run start --environment=production.`

## Build

`npm run build` - To build the application, run this command after you [installed hugo](https://gohugo.io/getting-started/installing) and all package dependencies (`npm install`).
