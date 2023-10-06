module.exports =  function validateFile (FILE){
  if (FILE == "") {
    return false
  }
  if (FILE.type != "application/pdf") {
    FILE.value = ""
    return false
  }
  if (FILE.size > (1024*1024*2)) {
    FILE.value = ""
    return false
  }
  return true
}