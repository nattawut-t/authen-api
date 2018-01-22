const mockDatas = require('../../data/lgs')

// const fields = [
//   'documentID',
//   'lgNumber',
//   'lgAmount',
//   'operationFlag',
//   'effectiveDate',
//   'maturityDate',
//   'issueDate',
//   'issueBranchNumber',
//   'issueBranchDescription',
//   'issueHubNumber',
//   'serviceBranchNumber',
//   'subgroupCode',
//   'issueTerm',
//   'renewNumber',
//   'customsFlag',
//   'beneTaxID',
//   'beneNameTH',
//   'beneNameEN',
//   'lgType',
//   'issuerTaxID',
//   'issuerNameEN',
//   'issuerNameTH',
//   'requesterTaxID',
//   'requesterNameTH',
//   'requesterNameEN',
//   'lgStatus',
//   'renewDate',
//   'projectValue',
//   'requestDate',
//   'modifyDate',
//   'lgFormNumber',
//   'lgDescription1',
//   'lgDescription2',
//   'lgDescription3',
//   'lgDescription4',
//   'lgDescription5',
//   'lgApproveDate',
//   'projectNo',
//   'projectName',
//   'remark',
// ]

const search = (req, res) => {
  const { query: { page = 1, limit = 20 } } = req

  console.log(page, limit)

  return res({
    status: 'success',
    message: 'search LG successfully',
    total: mockDatas.length,
    result: _map(mockDatas, page, limit),
  })
}

const _map = (docs, page, limit) => {
  if (Array.isArray(docs) && docs.length > 0) {
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
