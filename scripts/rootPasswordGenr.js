require('dotenv').config({ path: '.env/dev'})

const bcrypt = require('bcrypt-nodejs')

const password = process.env.ROOT_PASSWORD
const hashed = bcrypt.hashSync(password)

console.log(hashed)
