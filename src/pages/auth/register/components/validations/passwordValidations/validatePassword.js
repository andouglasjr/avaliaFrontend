module.exports = function validatePassword (PASSWORD){
  const pass = String(PASSWORD)
  const regex = /^(?=.*\d)(?=.*[._?,!@#$%^&*])(?=.*[A-Z]).{8,}$/
  if (regex.test(pass)){
    return true
  }else{
    return false
  }
}
