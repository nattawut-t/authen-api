const mockDatas = require('../../data/lgs')

const get = (req, res) => {
  const { params: { document_id } } = req

  if (!document_id) {
    return response(boom.wrap(new Error('Bad Request'), 400))
  }

  const lgs = _map([mockDatas[0]])
  return res(lgs[0])
}

const _map = (docs, page, limit) => {
  if (Array.isArray(docs) && docs.length > 0) {
    return docs.map(
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
  get,
}
