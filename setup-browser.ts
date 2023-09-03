if (typeof process === 'undefined') {
  // @ts-ignore
  globalThis.process = { env: { NODE_ENV: 'development' }, argv: [], };
}
