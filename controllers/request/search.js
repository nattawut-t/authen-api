const mockDatas = require('../../data/requests')

const search = (req, res) => {
  const { query: { page = 1, limit = 20 } } = req

  console.log(page, limit)

  return res({
    status: 'success',
    message: 'search request successfully',
    total: mockDatas.length,
    result: _map(mockDatas, page, limit),
  })
}

const _map = (docs, page, limit) => {
  if (Array.isArray(docs) && docs.length > 0) {
    return docs.slice((page - 1) * limit, page * limit)
  }

  return []
}

module.exports = {
  search,
}
