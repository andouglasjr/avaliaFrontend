export default function validateNeighborhood(NEIGHBORHOOD){
  const neighborhood = String(NEIGHBORHOOD)
  if (neighborhood.length < 2) {
    return false
  }
  return true
}
