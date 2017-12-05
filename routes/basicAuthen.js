const { login } = require('../controllers/basicAuthen')
const { signinPayload } = require('../schemas/basicAuthen')

module.exports = [
  {
    method: 'POST',
    path: '/api/authen',
    config: {
      handler: login,
      description: 'Signin with Basic Authentication',
      tags: ['api'],
      validate: {
        payload: signinPayload,
      },
      cors: true,
    },
  },
]
