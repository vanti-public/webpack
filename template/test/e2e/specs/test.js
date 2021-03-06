// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function{{#space lintConfig}} {{/space}}{{#if_eq lintConfig "airbnb"}}test{{/if_eq}}(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL{{#semi lintConfig}};{{/semi}}

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end(){{#semi lintConfig}};{{/semi}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#semi lintConfig}};{{/semi}}
