import { test } from 'vitest'
import { Database } from '../src/db.ts'

export interface Fixtures {
  db: Database
}

export const withDb = test.extend<Fixtures>({
  db: async ({}, use) => {
    const db = new Database()
    await use(db)
    await db.close()
  },
})
