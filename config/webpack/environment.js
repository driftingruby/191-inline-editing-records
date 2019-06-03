const { environment } = require('@rails/webpacker')
// https://github.com/rails/webpacker/issues/2114
environment.loaders.delete('nodeModules')
module.exports = environment
