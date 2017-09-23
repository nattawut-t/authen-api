const JWT = require('jsonwebtoken')
const Boom = require('boom')
const { secretKey } = require('../libs/config')
const user = {
  id: 1,
  username: 'user_1',
  password: 'P@ssw0rd',
  name: 'Nattawut',
}

const login = (request, reply) => {
  const { payload: { username, password } } = request

  if (username === user.username && password === user.password) {
    const _user = {
      id: user.id,
      name: user.name,
    }
    const token = JWT.sign(_user, secretKey)

    return reply({ token })
  }

  return reply(Boom.wrap(new Error('Unauthorized'), 401))
}

module.exports = {
  login,
}