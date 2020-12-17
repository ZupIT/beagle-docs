import { exec, ChildProcess } from 'child_process'
import { exit } from 'process'
import * as nodemon from 'nodemon'
import { createPlaygroundServer } from './playground-server'

function startHugo() {
  let argumentString = process.argv.slice(2).join(' ')
  if (!argumentString.match(/--environment/)) argumentString += ' --environment=development'

  return new Promise<ChildProcess>((resolve, reject) => {
    const process = exec(`hugo server ${argumentString}`, (error) => {
      if (error) reject(error)
    })

    process.stdout?.on('data', (data) => {
      console.log(data);
      if (data.match(/Web Server is available at/)) resolve(process)
    })

    process.stderr?.on('data', (data) => {
      console.log(data);
      reject(data)
   })
  })
}

async function start() {
  let playgroundServer = createPlaygroundServer()
  let hugo: ChildProcess | null = null
  let hasError = false
  let hasStarted = false

  const playgroundWatch = nodemon({
    exec: 'echo updating playground support server',
    ext: 'md',
    // @ts-ignore
    watch: './content',
  })

  playgroundWatch.on('start', async () => {
    try {
      if (hasStarted) return
      await playgroundServer.start()
      hugo = await startHugo()
      hasStarted = true
    } catch (error) {
      console.error(error)
      hasError = true
      playgroundWatch.emit('quit')
    }
  })

  playgroundWatch.on('restart', async () => {
    await playgroundServer.update()
    console.log('playground support server updated')
  })

  playgroundWatch.on('quit', () => {
    hugo?.kill()
    exit(hasError ? 1 : 0)
  })
}

start()