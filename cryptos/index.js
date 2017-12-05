const crypto = require('crypto')
const { cipherKey, hmacKey } = require('../configs/crypto')

const encrypt = text => {
  const encryptor = crypto.createCipher('AES-256-CBC', cipherKey)
  const cipher = encryptor.update(text, 'utf8', 'base64') + encryptor.final('base64')
  const hmac = crypto.createHmac('SHA256', hmacKey)
  hmac.update(cipher)

  return `${cipher}$${hmac.digest('hex')}`
}

const decrypt = text => {
  const blob = text.split('$')
  const ct = blob[0]
  // const hmac = blob[1]
  const chmac = crypto.createHmac('SHA256', hmacKey)

  chmac.update(ct)

  const decryptor = crypto.createDecipher('AES-256-CBC', cipherKey)
  return decryptor.update(ct, 'base64', 'utf8') + decryptor.final('utf8')
}

module.exports = {
  encrypt,
  decrypt,
}
