import { beforeEach, expect, test } from 'vitest';
import { Database } from '../src/db.ts';
import { Server } from '../src/server.ts';

interface Context {
  port: number
  server: Server
  db: Database
}

beforeEach<Context>((ctx) => {
  const port = 8000
  const db = new Database()
  const server = new Server(db, port)

  ctx.db = db
  ctx.port = port
  ctx.server = server

  return async () => {
    await server.close()
    await db.close()
  }
})

test<Context>('GET /', async ({ server }) => {
  const res = await server.get('/')
  expect.soft(res.status).toBe(200)
  expect.soft(res.body).toBe('Hello world!')
})
