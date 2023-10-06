function validateEmail (EMAIL){
  let email = String(EMAIL)
  const regexNumbers = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (email.length == 0) {
    return false
  }
  if (!regexNumbers.test(email)) {
    return false
  }
  return true
} 

export default validateEmail;