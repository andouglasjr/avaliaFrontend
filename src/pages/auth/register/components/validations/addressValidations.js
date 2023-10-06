const validateCity = require("./addressValidations/validateCity")
const validateNeighborhood = require("./addressValidations/validateNeighborhood")
const validateNumber = require("./addressValidations/validateNumber")
const validateState = require("./addressValidations/validateState")
const validateStreet = require("./addressValidations/validateStreet")

module.exports = class AddressValidations {
  static verifyCEP(erro, click) {
    if (!erro || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    } else {
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static validateCity(city, click){
    if (validateCity(city) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    } else {
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static validateNeighborhood(neighborhood, click){
    if (validateNeighborhood(neighborhood) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    } else {
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static validateNumber(number, click){
    if (validateNumber(number) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    } else {
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static validateState(state, click){
    if (validateState(state) || !click) {
      let variant = "select_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    } else {
      let variant = "select_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static validateStreet(street, click){
    if (validateStreet(street) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    } else {
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
}
