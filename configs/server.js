const Pack = require('../package')

module.exports = {
  port: process.env.PORT || 3000,
  host: '0.0.0.0',
  info: {
    title: Pack.name,
    version: Pack.version,
  },
  basePath: '/api',
  documentationPath: '/',
  security: [],
  grouping: 'tags',
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
}
