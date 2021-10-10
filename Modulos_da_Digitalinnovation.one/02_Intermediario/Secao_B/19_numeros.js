const myNumber = 12.4032;

//Transformar numero para  String
const numberAsString = myNumber.toString();
console.log('Numero transformar em string', numberAsString);

//Retorna numero com um numero de casa decimais
const fixedTwoDecimais = myNumber.toFixed(2);
console.log('\nNumero com duas casas decimais:',  fixedTwoDecimais);

//Transformar uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

//Transformar uma string em int
console.log('\nString parseada para int:',  parseInt('13.20'));

