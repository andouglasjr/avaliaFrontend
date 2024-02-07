export default function ValidateBirthDate(BIRTH_DATE) {
  let birth_date = String(BIRTH_DATE)
  let pattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!pattern.test(birth_date)){
    return false
  }
  return true
}