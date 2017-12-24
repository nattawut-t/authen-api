require('../../../../env')

const chai = require('chai')
// const sinon = require('sinon')
const rewire = require('rewire')
const jwt = require('jsonwebtoken')
const { secretKey } = require('../../../../configs/jwt')
const controller = rewire('../../../../controllers/authen/basic')

chai.should()

describe('/api/authen', () => {
  describe('POST /', () => {
    let status
    let resp
    const fakeResp = _resp => {
      status = 200
      resp = _resp
    }

    it('should LOGIN with basic authen SUCCESS', async () => {
      const fakeReq = {
        payload: {
          username: 'nattawut',
          password: 'P@ssw0rd',
        },
      }

      controller.__set__('getUser', () => ({
        username: 'nattawut',
        password: '$2a$10$2juIpEpr2VMYKXzn4nfpmuOlQ/gNxqbuyuuoQtFM7LLqWIO0Xdp9S',
        name: 'Nattawut',
        surname: 'T',
      }))

      await controller.login(fakeReq, fakeResp)

      const { token } = resp
      const { iat, ...rest } = jwt.verify(token, secretKey)

      status.should.be.eql(200);
      ({ ...rest }).should.be.deep.equal({
        username: 'nattawut',
        name: 'Nattawut',
        surname: 'T',
      })
    })
  })
})
