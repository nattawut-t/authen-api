const mockDatas = require('../../data/requests')

const get = (req, res) => {
  const { params: { requestID } } = req

  if (!requestID) {
    return response(boom.wrap(new Error('Bad Request'), 400))
  }

  const request = find(requestID)
  return res(request)
}

const find = id => mockDatas.find(({ requestID }) => requestID === id)

const _map = (docs, page, limit) => {
  if (Array.isArray(docs) && docs.length > 0) {
    return docs.map(
      ({
        requestId,
        requestNo,
        service,
        requestType,
        timestamp,
        requester,
        status,
        data: { relationship, beneNameEN },
      }) => ({
        requestId,
        requestNo,
        service,
        requestType,
        timestamp,
        requester,
        status,
        relationship,
        data: {
          relationship,
          beneNameEN,
        },
      }),
    )
  }

  return []
}

module.exports = {
  get,
}
