module.exports = function validateFileName(FILENAME){
  if (FILENAME < 2) {
    return false
  }
  return true
}