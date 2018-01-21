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
]
