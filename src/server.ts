import { Database } from './db.ts';

export class Server {
  constructor(
    public db: Database,
    public port: number
  ) {}

  close() {
    return Promise.resolve()
  }

  get(path: string) {
    return Promise.resolve({
      status: 200,
      body: 'Hello world!',
      url: path,
    })
  }
}
