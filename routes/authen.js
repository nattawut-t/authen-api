const { login } = require('../controllers/authen/basic')
const { signinPayload } = require('../schemas/basicAuthen')

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    config: {
      handler: login,
      description: 'Basic Authentication',
      tags: ['api'],
      validate: {
        payload: signinPayload,
      },
      cors: true,
    },
  },
]
