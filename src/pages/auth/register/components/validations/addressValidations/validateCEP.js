module.exports = async function validarCEP(cep) {
  cep = String(cep)
  cep = cep.replace(/\D/g, '');

  if (cep.length !== 8) {
      const data = ('CEP inválido. Certifique-se de digitar um CEP com 8 dígitos.');
      return [false, data]
  }else{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (!response.ok) {
      const data = 'Não foi possível encontrar informações para o CEP informado.'
      return [false, data]
    }
    
    if (data.hasOwnProperty('erro')) {
      const data = "CEP não encontrado"
      return [false, data]
    }
    return [true, data]
}
}