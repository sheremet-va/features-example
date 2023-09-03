import { test, expectTypeOf, assertType } from 'vitest'
import { sqrt } from '../src/math.ts'

test('sqrt uses correct types', () => {
  expectTypeOf(sqrt).parameter(0).toEqualTypeOf<number>()
  expectTypeOf(sqrt).parameter(0).not.toEqualTypeOf<string>()

  expectTypeOf(sqrt).returns.toEqualTypeOf<number>()
  expectTypeOf(sqrt).returns.not.toEqualTypeOf<string>()

  assertType<number>(sqrt(3))
  // @ts-expect-error return type is number
  assertType<string>(sqrt(3))
})
