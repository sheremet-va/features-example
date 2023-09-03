import { assert, describe, expect, it } from 'vitest'
import { sqrt } from '../src/math.ts'

describe('suite name', () => {
  it('foo', () => {
    assert.equal(sqrt(9), 3)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})
