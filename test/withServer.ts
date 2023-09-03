import { Server } from '../src/server.ts'
import { withDb } from './withDb.ts'

export const withServer = withDb.extend<{ port: number; server: Server }>({
  port: 8000,
  server: async ({ db, port }, use) => {
    const server = new Server(db, port)
    await use(server)
    await server.close()
  }
})
