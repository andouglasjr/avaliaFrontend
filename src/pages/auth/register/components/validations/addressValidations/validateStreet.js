module.exports = function validateStreet(STREET){
  const street = String(STREET)
  if (street.length < 2) {
    return false
  }
  return true
}
