const Boom = require('boom')

module.exports = (decoded, request, callback) => {
  console.log('decoded: ', decoded)

  if (!decoded) {
    return callback(Boom.wrap(new Error('Unauthorized'), 401), false)
  }

  return callback(null, true)
}
