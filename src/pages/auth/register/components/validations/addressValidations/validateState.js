export default function validateState(STATE){

  const state = STATE
  if (
    state =="AC" ||
    state =="AL" ||
    state =="AP" ||
    state =="AM" ||
    state =="BA" ||
    state =="CE" ||
    state =="DF" ||
    state =="ES" ||
    state =="GO" ||
    state =="MA" ||
    state =="MT" ||
    state =="MS" ||
    state =="MG" ||
    state =="PA" ||
    state =="PB" ||
    state =="PR" ||
    state =="PE" ||
    state =="PI" ||
    state =="RJ" ||
    state =="RN" ||
    state =="RS" ||
    state =="RO" ||
    state =="RR" ||
    state =="SC" ||
    state =="SP" ||
    state =="SE" ||
    state =="TO" 
) {
    return true
  }
  return false
}