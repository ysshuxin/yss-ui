import { expect } from 'chai'
import C from '../../src/components/button/index.vue'
import { mount } from '@vue/test-utils'
import {createNamespace} from '../../utils/dev/index'

const {classNamespace}=createNamespace('button')
describe('test2 App.vue', ()=>{
    const wrapper = mount(C)
    let txt= wrapper.find('p').text()


    console.log(classNamespace())
    console.log(classNamespace('activity','wwww'))
    console.log(classNamespace(classNamespace('activity'),['dis']))
    it('1', () => {
        expect(txt).contains('test')
    })
    it('2', () => {
        expect(txt).contains('test')
    })
})
