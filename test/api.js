var path = require('path')
var spaceystandard = require('../')
var test = require('tape')
var filePath = path.resolve('./bin/cmd.js')

test('api usage', function (t) {
  t.plan(4)
  spaceystandard.lintFiles([], { cwd: 'bin' }, function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 0, 'error count 0')
    t.equal(result.warningCount, 0, 'warning count 0')
  })
})
