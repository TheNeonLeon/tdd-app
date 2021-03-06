import {mount, shallowMount, createLocalVue} from '@vue/test-utils'
import Register from '@/components/Register.vue'
import VueRouter from "vue-router"
import data from '../../src/server/db.json'

const localVue = createLocalVue()
localVue.use(VueRouter)

const routes = [{ path: '/register:eventId', component: Register }]


it('route path register should exist', () => {
  const $route = { path: 'http://localhost:8080/#/register:eventId' }
  const wrapper = shallowMount(Register, {
      mocks: {
          $route
      }
  })
  expect(wrapper.vm.$route.path).toBe($route.path)
})

describe('Register', () => {
    let wrapper;
    const $route = {params: {eventId: 1}}
    const localStorageMock = {setItem: jest.fn(), getItem: jest.fn()}
    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
        writable: true
      })
        wrapper = shallowMount(Register, {mocks: {$route}});
        jest.clearAllMocks()
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
    let content = wrapper.find('#firstName').text();

    expect(content).toBe('');
})

it('should show empty age-form when rendered', () => {
  let content = wrapper.find('#lastName').text();

  expect(content).toBe('');
})

it('should show empty email-form when rendered', () => {
  let content = wrapper.find('#email').text();

  expect(content).toBe('');
})

it('should show empty review-form when rendered', () => {
  let content = wrapper.find('#review').text();

  expect(content).toBe('');
})

it('should show sign-up button on register page when rendered', () => {
  let content = wrapper.find('#submit');

  expect(content.exists(true)).toBe(true)
})
})