var path = require('path')
var eslint = require('eslint')
var pkg = require('./package.json')

module.exports = {
  // cmd, homepage, bugs all pulled from package.json
  cmd: 'spacey-standard',
  eslint: eslint,
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Loosen up on the spacing',
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  }
  ,
  formatter: require('standard'),
  formatterName: 'standard'
}
