import validatePassword from "./passwordValidations/validatePassword";

export default class passwordValidations{
  static validatePassword(password, click){
    if (validatePassword(password) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static validateEqualPasswords(password,confirmPassword, click){
    if( password == confirmPassword || !click){
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage, ]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
}