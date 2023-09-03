// @ts-expect-error not typed
import Counter from '../src/Counter.vue'
import { flushPromises, mount } from '@vue/test-utils'
import { test, expect } from 'vitest'

test('works correctly in the browser', async () => {
  const wrapper = mount(Counter)
  expect(wrapper.element).toMatchInlineSnapshot(`
    <div
      data-v-app=""
    >
      
      <button>
         -1 
      </button>
      <span
        data-test-id="counter"
      >
        Count is 0
      </span>
      <button>
         +1 
      </button>
      
    </div>
  `)
  const textElement = wrapper.find('[data-test-id="counter"]')
  wrapper.findAll('button').find(el => el.text() === '+1').trigger('click')
  await flushPromises()
  expect(textElement.text()).toEqual('Count is 1')

  wrapper.findAll('button').find(el => el.text() === '-1').trigger('click')
  await flushPromises()
  expect(textElement.text()).toEqual('Count is 0')
})
