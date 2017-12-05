const mongoose = require('mongoose')
// const AutoIncrement = require('mongoose-sequence')(mongoose)
let schema

const createSchema = () => {
  const { Schema } = mongoose
  schema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
        // unique: true,
      },
    },
    {
      timestamps: true,
    },
  )
  // schema.plugin(AutoIncrement, { inc_field: 'id' })
  return schema
}

function User() {
  if (!schema) {
    schema = createSchema()
  }
  return mongoose.model('User', schema)
}

module.exports = User
