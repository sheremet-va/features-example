import { expect } from 'vitest';
import { withServer } from './withServer.ts';

withServer('GET /', async ({ server }) => {
  const res = await server.get('/')
  expect.soft(res.status).toBe(200)
  expect.soft(res.body).toBe('Hello world!')
})
