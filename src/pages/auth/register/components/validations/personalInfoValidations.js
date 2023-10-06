const validateCPF = require("./personalValidations/validateCPF")
const validatePhone = require("./personalValidations/validatePhone")
const validateEmail = require("./personalValidations/validateEmail")
const validateProfile = require("./personalValidations/validateProfile")
const validateBirthDate = require("./personalValidations/validateBirthDate")
const validateName = require("./personalValidations/validateName")

module.exports = class validations{
  static cpfValidation(CPF, click){
    if (validateCPF(CPF) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static phoneValidation(phone, click){
    if (validatePhone(phone) || !click){
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static emailValidation(email, click){
    if(validateEmail(email) || !click){
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static nameValidation(name, click){
    if (validateName(name) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static profileValidation(profile, click){
    if(validateProfile(profile) || !click){
      let variant = "select_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "select_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static birthDateValidation(birth_date, click){
    if(validateBirthDate(birth_date) || !click){
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }

}
