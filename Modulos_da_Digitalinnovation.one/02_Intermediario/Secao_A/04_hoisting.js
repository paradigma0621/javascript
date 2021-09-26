/*
Hoisting:
	In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
*/
//--------------------------------------------------- BLOCO DE CÓDIGO 1A -----------------------------------------
var test = "example one"; 

(() => {		 //Arrow Function
  console.log(`Valor dentro da função "${test}"`); //saída: Valor dentro da função  "undefined"

    console.log("como está: " + test); //saída: como está: undefined
	
  if (true)  {
    var test = "example two";
      console.log(`Valor dentro do if "${test}"`); //saída: Valor dentro do if "example two"
  }

  console.log(`Valor após a execução do if "${test}"`); //saída: Valor após a execução do if "example two"
})();





//--------------------------------------------------- BLOCO DE CÓDIGO 1B -----------------------------------------
// O "BLOCO DE CÓDIGO 1A" acima pode ser entendido como sendo equivalente ao abaixo:
(() => { 
 console.log(`Valor dentro da função "${test}"`); //saída: Valor dentro da função "undefined"

    var test; //----------->A declaração de "test" equivalente do "BLOCO DE CÓDIGO 1A" pode ser entendida como sendo aqui (hoisting), pois é dentro desse bloco que é chamada (na linha abaixo). E é inicializada com o valor "undefined". 
    console.log("como está: " + test); //saída: como está: undefined
	
  if (true) {
    test = "example two"; //------------> Só aqui que "test" recebe um valor
    console.log(`Valor dentro do if "${test}"`); //saída: Valor dentro do if "example two"
  }

  console.log(`Valor após a execução do if "${test}"`); //saída: Valor após a execução do if "example two"
})();
