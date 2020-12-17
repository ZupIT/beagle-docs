# docs-beagle
Project: 466 Zup - Relacionamento com Desenvolvedores

# Getting started

To run this project run the following commands: 

`git submodule update --init --recursive --remote`

`cd Settings`

You must have installed Node and then install your dependencies using npm:

`npm install`

You also must have Hugo installed in your machine. Please, check
[their documentation](https://gohugo.io/getting-started/installing) to do so.

Then run:

`npm run start`. If you're getting a fatal error: Pipe failed, run: `npm run start --watch=false`.

By default `npm run start` will run the project in development mode. To change the environment use
`npm run start --environment=production`.

# Build

To build the application, run `npm run build` after
[having installed hugo](https://gohugo.io/getting-started/installing) and all package dependencies
(`npm install`).
