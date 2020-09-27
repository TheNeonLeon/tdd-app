import {mount, shallowMount} from '@vue/test-utils'
import Submit from '@/components/Submit.vue'

describe('Submit.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Submit);
    })
    describe('Submit.vue', () => {
        test('sanity test', () => {
          expect(true).toBe(true)
        })
      })
      it('Submit-page should exist', () => {
        const sub = wrapper.findComponent(Submit);
        expect(sub.exists()).toBe(true);
      })
})