const { test } = require('../controllers/test')

module.exports = [
  {
    method: 'POST',
    path: '/api/test',
    config: {
      auth: 'jwt',
      handler: test,
      description: 'Test Authentication',
      tags: ['api'],
      validate: {
      },
    }
  },
]