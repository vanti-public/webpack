{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#semi lintConfig}};{{/semi}}
import App from './App'{{#semi lintConfig}};{{/semi}}
{{#router}}
import router from './router'{{#semi lintConfig}};{{/semi}}
{{/router}}

Vue.config.productionTip = false{{#semi lintConfig}};{{/semi}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: {
    App{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }
  {{/if_eq}}
}){{#semi lintConfig}};{{/semi}}
