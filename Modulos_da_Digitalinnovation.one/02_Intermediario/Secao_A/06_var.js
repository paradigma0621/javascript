void function(){ 
    console.log(mensagem);  // saída: "undefined"

 //   const variavel; //ERRO nessa linha: "Uncaught SyntaxError: missing = in const declaration"  ...  toda constante que for declarada precisa ser inicializada na mesma hora - é o único momento em que é atribuido um valor para ela
//   console.log(variavel);


/*
   var1="valor1";
   console.log(var1); // ERRO... Variáveis criadas com let só podem ser utilizadas após sua declaração, pois, apesar de serem elevadas, elas não são inicializadas.
    let var1;
*/
    


}();
var mensagem; //No caso da palavra-chave "var", além da variável ser içada (hoisting) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor). 

//-----------------------------------------
//function scoped
function fun(){
    console.log(name);
    var name = 'João Pedro';
}
fun(); // saída: "undefined"
