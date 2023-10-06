module.exports = function validateNumber(NUMBER){
  const number = String(NUMBER)
  if (number.length == 0) {
    return false
  }
  return true
}
