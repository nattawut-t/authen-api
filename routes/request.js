const { get } = require('../controllers/request/get')
const { search } = require('../controllers/request/search')

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/requests/search',
    config: {
      handler: search,
      description: 'Search LG',
      tags: ['api'],
      validate: {},
      cors: true,
    },
  },
  {
    method: 'GET',
    path: '/api/v1/requests/{requestID}',
    config: {
      handler: get,
      description: 'Get Request',
      tags: ['api'],
      validate: {},
      cors: true,
    },
  },
]
