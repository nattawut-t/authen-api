const mockDatas = require('../../data/requests')

const search = (req, res) => {
  const { query: { page = 1, limit = 20, status, createDate } } = req

  console.log(page, limit)

  return res({
    status: 'success',
    message: 'search request successfully',
    total: mockDatas.length,
    result: _map(mockDatas, page, limit, status, createDate),
  })
}

const _map = (docs, page, limit, status = '', createDate = '') => {
  if (Array.isArray(docs) && docs.length > 0) {
    if (status) {
      const value = status.toLowerCase().trim()
      docs = docs.filter(({ data: { lgStatus } }) => lgStatus === value)
      console.log('filter_by_status:', `x${status}x`, docs.length)
    }

    if (createDate) {
      const value = createDate.toLowerCase().trim()
      docs = docs.filter(({ createDate }) => createDate === value)
      console.log('filter_by_createDate:', createDate, docs.length)
    }

    return docs.slice((page - 1) * limit, page * limit)
  }

  return []
}

module.exports = {
  search,
}
