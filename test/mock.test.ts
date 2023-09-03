import { expect, test, vi } from 'vitest';
import { sqrt } from '../src/math.ts';

const { mockedMath } = vi.hoisted(() => {
  const mockedMath = {
    sqrt: vi.fn(),
  }
  return { mockedMath }
})

vi.mock('../src/constants.ts', () => ({ Math: mockedMath }))

test('sqrt uses mocked Math', () => {
  mockedMath.sqrt.mockReturnValue(200)

  expect(sqrt(2)).toEqual(200)
  expect(mockedMath.sqrt).toHaveBeenCalledWith(2)
})
