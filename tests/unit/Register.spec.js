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
it('Register-page should exist', () => {
    const reg = wrapper.findComponent(Register);
    expect(reg.exists()).toBe(true);
  })

it('should show empty name-form when rendered', () => {
    let content = wrapper.find('.name').text();

    expect(content).toBe('');
})

it('should show empty age-form when rendered', () => {
  let content = wrapper.find('.age').text();

  expect(content).toBe('');
})

it('should show empty email-form when rendered', () => {
  let content = wrapper.find('.email').text();

  expect(content).toBe('');
})

})