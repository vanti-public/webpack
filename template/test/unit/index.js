import Vue from 'vue'{{#semi lintConfig}};{{/semi}}

Vue.config.productionTip = false{{#semi lintConfig}};{{/semi}}

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/){{#semi lintConfig}};{{/semi}}
testsContext.keys().forEach(testsContext){{#semi lintConfig}};{{/semi}}

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/){{#semi lintConfig}};{{/semi}}
srcContext.keys().forEach(srcContext){{#semi lintConfig}};{{/semi}}
