console.log('env: ', process.env.NODE_ENV)
const { env } = require('./configs')
require('dotenv').config({ path: `.env/${env}` })