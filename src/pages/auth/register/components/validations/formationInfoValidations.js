import validateFileName from "./formationValidations/validateFileName";
import validateFile from "./formationValidations/validateFile";

export default class formationValidations{
  static fileNameValidation(fileName, click){
    if (validateFileName(fileName) || !click) {
      let variant = "input_primary"
      let validationErrorMensage = false
      return [variant, validationErrorMensage]
    }else{
      let variant = "input_invalid"
      let validationErrorMensage = true
      return [variant, validationErrorMensage]
    }
  }
  static fileValidation(file, click){
    if (validateFile(file) || !click) {
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