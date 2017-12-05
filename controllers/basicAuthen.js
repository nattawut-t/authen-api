const JWT = require('jsonwebtoken')
const Boom = require('boom')
const { secretKey } = require('../configs/jwt')

const mockUser = {
  id: 1,
  username: 'appsynth',
  password: 'P@ssw0rd',
  name: 'Appsynth',
}

const login = (request, reply) => {
  const { payload: { username, password } } = request

  console.log(username, password)

  if (username === mockUser.username && password === mockUser.password) {
    const user = {
      id: mockUser.id,
      name: mockUser.name,
    }
    const token = JWT.sign(user, secretKey)

    return reply({ token })
  }

  return reply(Boom.wrap(new Error('Unauthorized'), 401))
}

module.exports = {
  login,
}
