const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Jwt2Auth = require('hapi-auth-jwt2')
const HapiSwagger = require('hapi-swagger')
const Fs = require('fs')
const _ = require('lodash')

const Pack = require('./package')
const { port, host } = require('./libs/config')
const server = new Hapi.Server()

server.connection({
  host,
  port,
})

const options = {
  info: {
    'title': Pack.name,
    'version': Pack.version,
  },
  basePath: '/api',
  documentationPath: '/',
  security: [{ 'jwt': [] }],
  securityDefinitions: {
    'jwt': {
      'type': 'apiKey',
      'name': 'Authorization',
      'in': 'header'
    }
  },
}

server.register([
  Inert,
  Vision,
  Jwt2Auth,
  {
    'register': HapiSwagger,
    'options': options,
  }],
  () => {
    Fs.readdirSync('routes')
      .forEach(file => {

        _.each(require('./routes/' + file), route => {
          server.route(route)
        })

      })

    server.start(err => {
      if (err) {
        console.log(err)
      }
      console.log('Server running at:', server.info.uri)
    })
  })

module.exports = server