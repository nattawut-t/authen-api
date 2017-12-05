module.exports = {
  cipherKey: process.env.CIPHER || Buffer.from('AbcdeFgHiJKLmnOPQRStuVWXYz234519'),
  hmacKey: process.env.HMAC || Buffer.from('supersecret nattawut'),
  pdkdf2: {
    // size of the generated hash
    hashBytes: 32,
    // larger salt means hashed passwords are more resistant to rainbow table, but
    // you get diminishing returns pretty fast
    saltBytes: 16,
    // more iterations means an attacker has to take longer to brute force an
    // individual password, so larger is better. however, larger also means longer
    // to hash the password. tune so that hashing the password takes about a
    // second
    iterations: 872791,
  },
}
