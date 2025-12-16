// Retorna verdadeiro caso os operadores sejam iguais. 3 == var1
var var1 = 3;
console.log("3" == var1); //saída: true

//Não igual 
//Retorna verdadeiro caso os operandos nao sejam iguais.
const var2 = 1;
console.log(var2 != "3"); //saída: true

//Estritamente igual (===)
//Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.
console.log(3 === var1); //saída: true

//Estritamente nao igual (!==)
// Retorna verdadeiro caso os operando nao sejam iguais e/ou nao sejam do mesmo tipo.
var1 = "texto";
console.log(var1 !== "3"); //saída: true
console.log(3 !== '3'); //saída: true
console.log(3 !== 3); //saída: false
