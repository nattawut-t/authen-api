const JWT = require('jsonwebtoken')
const Boom = require('boom')
const { secretKey } = require('../libs/config')
const user = {
  id: 1,
  username: 'appsynth',
  password: 'P@ssw0rd',
  name: 'Appsynth',
}

const login = (request, reply) => {
  const { payload: { username, password } } = request

  console.log(username, password)

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