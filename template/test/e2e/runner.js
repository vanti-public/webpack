// 1. start the dev server using production config
process.env.NODE_ENV = 'testing'{{#semi lintConfig}};{{/semi}}

const webpack = require('webpack'){{#semi lintConfig}};{{/semi}}
const DevServer = require('webpack-dev-server'){{#semi lintConfig}};{{/semi}}

const webpackConfig = require('../../build/webpack.prod.conf'){{#semi lintConfig}};{{/semi}}
const devConfigPromise = require('../../build/webpack.dev.conf'){{#semi lintConfig}};{{/semi}}

let server{{#semi lintConfig}};{{/semi}}

devConfigPromise.then(devConfig => {
  const devServerOptions = devConfig.devServer{{#semi lintConfig}};{{/semi}}
  const compiler = webpack(webpackConfig){{#semi lintConfig}};{{/semi}}
  server = new DevServer(compiler, devServerOptions){{#semi lintConfig}};{{/semi}}
  const port = devServerOptions.port{{#semi lintConfig}};{{/semi}}
  const host = devServerOptions.host{{#semi lintConfig}};{{/semi}}
  return server.listen(port, host){{#semi lintConfig}};{{/semi}}
})
.then(() => {
  // 2. run the nightwatch test suite against it
  // to run in additional browsers:
  //    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
  //    2. add it to the --env flag below
  // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
  // For more information on Nightwatch's config file, see
  // http://nightwatchjs.org/guide#settings-file
  let opts = process.argv.slice(2){{#semi lintConfig}};{{/semi}}
  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']){{#semi lintConfig}};{{/semi}}
  }
  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome']){{#semi lintConfig}};{{/semi}}
  }

  const spawn = require('cross-spawn'){{#semi lintConfig}};{{/semi}}
  const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' }){{#semi lintConfig}};{{/semi}}

  runner.on('exit', function (code) {
    server.close(){{#semi lintConfig}};{{/semi}}
    process.exit(code){{#semi lintConfig}};{{/semi}}
  }){{#semi lintConfig}};{{/semi}}

  runner.on('error', function (err) {
    server.close(){{#semi lintConfig}};{{/semi}}
    throw err{{#semi lintConfig}};{{/semi}}
  }){{#semi lintConfig}};{{/semi}}
}){{#semi lintConfig}};{{/semi}}
