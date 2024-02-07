export default function ValidateCPF(CPF) {
  let cpf = String(CPF).replace(/[\.-]/g, ""); // Remove a pontuação deixando apenas os números
  const regexNumbers = /^[0-9]+$/; // Expressão regular para dígitos numéricos
  const regexEqualsNumbers = /(\d)\1{10}/; // Expressão regular para sequencia de numeros iguais

  if (!regexNumbers.test(cpf) || regexEqualsNumbers.test(cpf)) {
    return false;
  }

  if (cpf.length !== 11) {
    return false;
  }

  const calculateVerifierDigit = (sliceLength) => {
    let sum = 0;
    for (let i = 0; i < sliceLength; i++) {
      sum += parseInt(cpf[i]) * (sliceLength + 1 - i);
    }
    const verifierDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return verifierDigit === parseInt(cpf[sliceLength]);
  };

  const numOneValid = calculateVerifierDigit(9);
  const numTwoValid = calculateVerifierDigit(10);

  return numOneValid && numTwoValid;
}