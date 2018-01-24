const jwt = require('jsonwebtoken')
const boom = require('boom')
const bcrypt = require('bcrypt-nodejs')

const { secretKey } = require('../../configs/jwt')
const User = require('../../models/User')()

function getUser(username) {
  return {
    username: 'PeerAdmin',
    password: '$2a$10$zSlNuh1iH4uETvnDgq/VkeZlPcRyCYT.9jlmrftbll8Els0P0EmFW',
    name: 'Nattawut',
    surname: 'T.',
  }
  // return User
  //   .findOne({ username })
  //   .select({
  //     username: 1,
  //     password: 1,
  //     name: 1,
  //     surname: 1,
  //   })
  //   .exec()
}

const login = async (request, response) => {
  const { payload: { username, password } } = request
  const user = await getUser(username)

  if (user) {
    const compared = bcrypt.compareSync(password, user.password)

    if (user && compared) {
      const { name, surname } = user
      const token = jwt.sign({ username, name, surname }, secretKey)
      return response({ result: { access_token: token } })
    }

    return response(boom.wrap(new Error('Incorrect password'), 401))
  }

  return response(boom.wrap(new Error('Incorrect username'), 401))
}

module.exports = {
  login,
}
