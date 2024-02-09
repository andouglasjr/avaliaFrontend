export default function ValidateProfile(PROFILE) {
  if (PROFILE === "student" || PROFILE === "reviewer") {
    return true
  }
  return false
}