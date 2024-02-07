export default function validateCity(CITY){
  const city = String(CITY)
  if (city.length < 2) {
    return false
  }
  return true
}