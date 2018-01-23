const mockDatas = require('../../data/lgs')

const search = (req, res) => {
  const { query: { page = 1, limit = 20, status, createDate } } = req

  console.log(page, limit, status, createDate)

  return res({
    status: 'success',
    message: 'search LG successfully',
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

    return docs
      .slice((page - 1) * limit, page * limit)
      .map(
        ({
          documentID,
          revision,
          changeID,
          createDate,
          updateDate,
          data,
          relationship: { issuer, beneficiary, requester, broker },
        }) => ({
          documentID,
          revision,
          changeID,
          createDate,
          updateDate,
          status: data.lgStatus,
          issuer,
          beneficiary,
          requester,
          broker,
          data: _mapData(data),
        }),
      )
  }

  return []
}

const _mapData = data => {
  const {
    documentName,
    issueBranchNumber,
    issueBranchDescription,
    lgNumber,
    lgAmount,
    lgCurrency,
    operationFlag,
    effectiveDate,
    maturityDate,
    issueDate,
    issueHubNumber,
    issuerTaxID,
    issuerNameTH,
    issuerNameEN,
    beneTaxID,
    beneNameTH,
    beneNameEN,
    requesterTaxID,
    requesterNameTH,
    requesterNameEN,
    lgStatus,
    approveDate,
    requestDate,
    modifyDate,
    lgFormNumber,
    lgType,
    referenceNumber,
    referenceName,
    referenceDescription,
    referenceDate,
    lgDescription1,
    lgDescription2,
    lgDescription3,
    lgDescription4,
    lgDescription5,
    lgDescription6,
    lgDescription7,
    lgDescription8,
    lgDescription9,
    lgDescription10,
    lgNote,
    remark,
    $$ref,
  } = data

  return {
    documentName,
    issueBranchNumber,
    issueBranchDescription,
    lgNumber,
    lgAmount,
    lgCurrency,
    operationFlag,
    effectiveDate,
    maturityDate,
    issueDate,
    issueHubNumber,
    issuerTaxID,
    issuerNameTH,
    issuerNameEN,
    beneTaxID,
    beneNameTH,
    beneNameEN,
    requesterTaxID,
    requesterNameTH,
    requesterNameEN,
    lgStatus,
    approveDate,
    requestDate,
    modifyDate,
    lgFormNumber,
    lgType,
    referenceNumber,
    referenceName,
    referenceDescription,
    referenceDate,
    lgDescription1,
    lgDescription2,
    lgDescription3,
    lgDescription4,
    lgDescription5,
    lgDescription6,
    lgDescription7,
    lgDescription8,
    lgDescription9,
    lgDescription10,
    lgNote,
    remark,
    $$ref,
  }
}

module.exports = {
  search,
}
