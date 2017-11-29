// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function (selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count{{#semi lintConfig}};{{/semi}}
  this.expected = count{{#semi lintConfig}};{{/semi}}
  this.pass = function (val) {
    return val === this.expected{{#semi lintConfig}};{{/semi}}
  }
  this.value = function (res) {
    return res.value{{#semi lintConfig}};{{/semi}}
  }
  this.command = function (cb) {
    var self = this{{#semi lintConfig}};{{/semi}}
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length{{#semi lintConfig}};{{/semi}}
    }, [selector], function (res) {
      cb.call(self, res){{#semi lintConfig}};{{/semi}}
    }){{#semi lintConfig}};{{/semi}}
  }
}
