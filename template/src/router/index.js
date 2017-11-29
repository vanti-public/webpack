import Vue from 'vue'{{#semi lintConfig}};{{/semi}}
import Router from 'vue-router'{{#semi lintConfig}};{{/semi}}
import HelloWorld from '@/components/HelloWorld'{{#semi lintConfig}};{{/semi}}

Vue.use(Router){{#semi lintConfig}};{{/semi}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#semi lintConfig}};{{/semi}}
