module.exports = () => {
  const model = Object.assign({}, require('./model')())
  model.name = 'panit'
  console.log(model)
  return true
}
