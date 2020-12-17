import { Server } from '@hapi/hapi'
import { generateProjectsByLanguage } from './playground'

export function createPlaygroundServer() {
  let files = {}

  async function update() {
    files = await generateProjectsByLanguage()
  }

  function handleRejections() {
    process.on('unhandledRejection', (err) => {
      console.log(err)
      process.exit(1)
    })
  }
  
  async function start() {
    await update()
    
    const server = new Server({
      port: 1314,
      host: 'localhost',
    })

    server.route({
      method: 'GET',
      path: '/{id}.json',
      handler: request => files[request.params.id] || '',
      options:  { cors: true },
    })

    await server.start()
    console.log('Docs playground support server running on %s', server.info.uri)
    handleRejections()
  }

  return {
    start,
    update,
  }
}
