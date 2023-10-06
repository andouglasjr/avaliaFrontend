module.exports = function validateCPF(CPF){
  let cpf = String(CPF)
  const regexNumbers = /^[0-9]+$/; // Expressão regular para dígitos numéricos
  const regexEqualsNumbers = /(\d)\1{10}/ // Expressão regular para sequencia de numeros iguais

  if (!regexNumbers.test(cpf)) {
    cpf = CPF.replace(/[\.-]/g, "") // Remove a pontuação deixando apenas os números
    return false
  }
  
  if (regexEqualsNumbers.test(cpf)) { // testa se o CPF enviado é uma sequencia de números iguais
    return false
  }
  
  if (cpf.length < 11 || cpf.length > 11) { // Testa se o valor do CPF enviado está do tamanho correto
    return false
  }

  let numOne = 0 
  for (let i = 0; i < (cpf.length-2); i++) { // Realiza a soma e a multiplicação da verificação do primeiro número verificador
    let x = cpf.length-(i+1)
    numOne = numOne + (cpf[i] * x) 
  }
  const numOneVerif = numOne % 11 < 2 ? 0 : 11 - (numOne % 11) // Calcula qual deve ser o primeiro número verificador  

  let numTwo = 0
  for (let i = 0; i < (cpf.length-1); i++) { // Realiza a soma e multiplicação do segundo número verificador
    let y = cpf.length-i
    numTwo = numTwo + (cpf[i] * y)
  }
  const numTwoVerif = numTwo % 11 < 2 ? 0 : 11 - (numTwo % 11) // Calcula qual deve ser o segundo número verificador

  const numOneValid = numOneVerif == cpf[9] ? true : false // Verifica se o primeiro número calculado é igual o recebido
  const numTwoValid = numTwoVerif == cpf[10] ? true : false // Verifica se o segundo número calculado é igual ao recebido
  if (numOneValid == true && numTwoValid == true) {return true} else {return false} //Retorno final se for igual, true, se não, false
}