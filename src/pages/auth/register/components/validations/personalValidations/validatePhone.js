module.exports = function validatePhone(PHONE) { 
  let phone = String(PHONE)
  const regexNumbers = /^[0-9]+$/; // Expressão regular para dígitos numéricos
  if (phone.length == 0){
    return false
  }
  if (!regexNumbers.test(phone)) {
    return false
  }
  if (phone.length < 11 || phone.length > 11) {
    return false
  }
  return true
}