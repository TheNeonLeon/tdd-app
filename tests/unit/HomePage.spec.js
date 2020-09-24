import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

const routes = [{ path: '/', component: HomePage }]

const router = new VueRouter({
    routes
})

const wrapper = mount(component, HomePage, {
    localVue,
    mocks: { events: data.events },
    router
  })
  expect(wrapper.vm.events).toBe(true)
  expect(wrapper.vm.$route).toBeInstanceOf(Object)

//Globals
describe('HomePage.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(HomePage);
    })

it('home-page should exist', () => {
    const home = wrapper.findComponent(HomePage);
    expect(home.exists()).toBe(true);
})

/*it('should render list on HomePage from database', async () => {
    const wrapper = mount('#list')
    expect(wrapper.text()).toBe(true)

    await wrapper.setData({
        events: data.events
    })
    expect(wrapper.text()).toBe(true)
})*/

})