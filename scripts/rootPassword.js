require('dotenv').config()

const bcrypt = require('bcrypt-nodejs')

const password = process.env.ROOT_PASSWORD
const hashed = bcrypt.hashSync(password)

console.log(hashed)
