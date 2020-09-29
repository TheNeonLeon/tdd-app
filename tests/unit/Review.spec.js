import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Review from '@/components/Review.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Review.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Review);
    })
    describe('Review.vue', () => {
        test('sanity test', () => {

          expect(true).toBe(true)
        })
      })

it('route path review should exist', () => {
  const $route = { path: 'http://localhost:8080/#/review' }
  const wrapper = shallowMount(Review, {
      mocks: {
          $route
      }
  })
  expect(wrapper.vm.$route.path).toBe($route.path)
  })

it('should show header message when rendered', () => {
  const msg = wrapper.find('h1').text();

  expect(msg).toBe('Thank you for telling us about your experience!')
  })

})