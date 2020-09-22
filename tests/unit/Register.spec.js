import {mount, shallowMount} from '@vue/test-utils'
import Register from '@/components/Register.vue'

describe('Register.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Register);
    })
    describe('Register.vue', () => {
        test('sanity test', () => {
          expect(true).toBe(true)
        })
      })

})