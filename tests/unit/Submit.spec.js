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
      it('should show header message when rendered', () => {
        const msg = wrapper.find('h1').text();

        expect(msg).toBe('Thank you for signing up for this event!')
      })
      it('should show more information message when rendered', () => {
        const msg = wrapper.find('h3').text();

        expect(msg).toBe('You will receive an email shortly which contains more information about the upcoming event')
      })
})