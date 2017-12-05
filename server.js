require('dotenv').config()

const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Jwt2Auth = require('hapi-auth-jwt2')
const HapiSwagger = require('hapi-swagger')
const Fs = require('fs')
const _ = require('lodash')
const { port, host, ...options } = require('./configs/server')
const { secretKey } = require('./configs/jwt')
const validate = require('./validators/jwt')

const server = new Hapi.Server()

server.connection({
  host,
  port,
})

server.register(
  [
    Inert,
    Vision,
    Jwt2Auth,
    {
      register: HapiSwagger,
      options,
    },
  ],
  () => {
    server.auth.strategy(
      'jwt',
      'jwt',
      {
        key: secretKey,
        validateFunc: validate,
        verifyOptions: { algorithms: ['HS256'] },
      },
    )

    Fs.readdirSync('routes')
      .forEach(file => {
        _.each(require(`./routes/${file}`), route => {
          server.route(route)
        })
      })

    server.start(err => {
      if (err) {
        console.log(err)
      }
      console.log('server is running at:', server.info.uri)
    })
  },
)

module.exports = server
