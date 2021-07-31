process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
environment.splitChunks();
const config = environment.toWebpackConfig();

module.exports = config
