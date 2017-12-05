const mongoose = require('mongoose')
const { mongoUrl } = require('../configs/db')

mongoose.Promise = require('bluebird')

module.exports = () => {
  if (mongoose.connection.readyState === 0) {
    try {
      mongoose.connect(mongoUrl)
    } catch (error) {
      console.log('mongoose connect failed: ', error)
    }
  }
}
