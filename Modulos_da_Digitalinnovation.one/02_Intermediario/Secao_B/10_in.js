//in

//something in somethingItems

//array
var arvores = new Array("pau-brasil","loureiro", "cedro", "carvalho", "sicômoro");
console.log(0 in arvores);          //retorna true
console.log(3 in arvores);         //retorna true
console.log(6 in arvores);         //retorna false
console.log("cedro" in arvores);   //retorna false (voce deve especificar o numero do indice,nao o valor naquele indice)
console.log("length" in arvores);  //retorna true (length é uma propriedade de Array)

//objetos predefinidos
console.log("PI" in Math);   //retorna true
var minhaString = new String("Coral");
console.log("length" in minhaString); //retorna true

//objetos personalizados
var meucarro = {marca:"Honda", modelo: "Accord", ano: 1998};
console.log("marca" in meucarro);  // retorna true
console.log("modelo" in meucarro); // retorna true



//-------------------------------------------------------------

let arr = [3,5,7];

arr.foo ="Hello";

for (let i in arr) {
    console.log(i);  // log  "0", "1", "2", "foo"
 }

for (let i in arr) {
    console.log(arr[i]); // log "3", "5", "7", "Hello"
}


