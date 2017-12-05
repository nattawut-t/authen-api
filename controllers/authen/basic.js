const jwt = require('jsonwebtoken')
const boom = require('boom')
const bcrypt = require('bcrypt-nodejs')

const { secretKey } = require('../../configs/jwt')
const User = require('../../models/User')()

const login = async (request, reply) => {
  const { payload: { username, password } } = request

  const user = await User
    .findOne({ username })
    .select({
      username: 1,
      password: 1,
      name: 1,
      surname: 1,
    })
    .exec()

  if (user) {
    const compared = bcrypt.compareSync(password, user.password)

    if (user && compared) {
      const { name, surname } = user
      const token = jwt.sign({ username, name, surname }, secretKey)
      return reply({ token })
    }

    return reply(boom.wrap(new Error('Incorrect password'), 401))
  }

  return reply(boom.wrap(new Error('Incorrect username'), 401))
}

module.exports = {
  login,
}
