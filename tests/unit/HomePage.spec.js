import {mount, shallowMount} from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'

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

it('should render list on HomePage from database', async () => {
    const wrapper = mount('#list')
    expect(wrapper.text()).toBe(true)

    await wrapper.setData({
        events: data.events
    })
    expect(wrapper.text()).toBe(true)
})

})