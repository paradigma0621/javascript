/*
Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried. Por exemplo, uma função que recebe três argumentos, ao sofrer currying, resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento, que por sua vez retorna uma função que recebe um argumento e retorna o resultado da função original.
*/

(() => {

  const soma = a => b => 2 * a + b;
  const soma2 = soma(2);

    console.log(soma2(2)); //6
    console.log(soma2(3)); //7
    console.log(soma2(4)); //8
    console.log(soma2(5)); //9
    
})();
  
  
  
  
const passaX = a => b => x => (a*x+b); //22
const somaDois = passaX(5);
const MultPor4 = somaDois(2);

console.log(MultPor4(4)); // calcula para f(x) = 4*5 + 2 


