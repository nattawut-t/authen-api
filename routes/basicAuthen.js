const Joi = require('Joi')
const { login } = require('../controllers/basicAuthen')

module.exports = [
  {
    method: 'POST',
    path: '/api/signin',
    config: {
      handler: login,
      description: 'Basic Authentication',
      tags: ['api'],
      validate: {
        payload: {
          username: Joi
            .string()
            .required()
            .description('username'),
          password: Joi
            .string()
            .required()
            .description('password'),
        }
      },
    }
  },
]