const Joi = require('joi')

const signinPayload = Joi.object({
  username: Joi
    .string()
    .required()
    .min(5)
    .max(20)
    // .alphanum()
    .description('username'),
  password: Joi
    .string()
    .required()
    .min(8)
    .max(50)
    .regex(/^.*(?=.{8,50})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^_=+]).*$/)
    .description('password'),
})

module.exports = {
  signinPayload,
}
