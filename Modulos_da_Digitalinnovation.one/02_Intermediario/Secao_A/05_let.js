var exibeMensagem = function() {
    if(true) { 
         var escopoFuncao = 'Escopo_funcao'; 
         let escopoBloco = 'Escopo_bloco';

        console.log(escopoBloco); // saída: "Escopo_bloco"
    } 
    console.log(escopoFuncao); // saída: "Escopo_funcao"
   // console.log(escopoBloco); //Erro nessa linha... as variáveis declaradas usando a palavra-chave "let" (nesse caso: "let escopoBloco") não existem fora do escopo de bloco ("{ ... }") que ela foram declaradas. O mesmo acontece com variáveis declaradas usando a palavra-chave "const". Já variáveis declaradas com a palavra-chave "var" possui escopo global (visível dentro de todo o código do arquivo em questão, independentemente de onde for declarada (salvo porém no caso de hoisting como e exemplificado no aquivo 04_hoisting.js)).
}();

const myConst1 = '12345';
let myLet1 = '6789'; //é possível também usar "let" e "const" fora do escopo de bloco
console.log("const: " + myConst1 + " - let: " + myLet1);  // saída: "const: 12345 - let: 6789"
