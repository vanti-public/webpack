import Vue from 'vue'{{#semi lintConfig}};{{/semi}}
import HelloWorld from '@/components/HelloWorld'{{#semi lintConfig}};{{/semi}}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld){{#semi lintConfig}};{{/semi}}
    const vm = new Constructor().$mount(){{#semi lintConfig}};{{/semi}}
    expect(vm.$el.querySelector('.hello h1').textContent)
    {{#if_eq runner "karma"}}.to.equal('Welcome to Your Vue.js App'){{#semi lintConfig}};{{/semi}}{{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to Your Vue.js App'){{#semi lintConfig}};{{/semi}}{{/if_eq}}
  }){{#semi lintConfig}};{{/semi}}
}){{#semi lintConfig}};{{/semi}}
