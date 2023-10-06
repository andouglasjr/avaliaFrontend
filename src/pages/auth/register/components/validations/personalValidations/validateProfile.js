module.exports = function validateProfile(PROFILE){
  if (PROFILE === "student" || PROFILE === "reviewer") {
    return true
  }
  return false
}