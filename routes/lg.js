const { get } = require('../controllers/lg/get')
const { search } = require('../controllers/lg/search')

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/lg/search',
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
    path: '/api/v1/lg/{document_id}',
    config: {
      handler: get,
      description: 'Get LG',
      tags: ['api'],
      validate: {},
      cors: true,
    },
  },
]
