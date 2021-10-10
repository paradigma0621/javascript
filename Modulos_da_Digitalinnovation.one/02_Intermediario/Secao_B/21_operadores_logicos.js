// AND logico (&&)
//exp1 && exp2

var a5 = "Gato" && "Cão"; // t && t retorna Cão
var a6 =  false && "Gato"; // f && t retorna false
var a7 =  "Gato" && false; // t && f retorna false

console.log(a5);

    
// OU logico (||)
//exp1 || exp2

var o4 = "Gato" || (3 == 4); // t || f retorna Gato
var o5 = "Gato" || "Cão"; // t || t  retorna Gato
var o6 = false || "Gato"; // f || t retorna Gato
var o7 = "Gato" || false; //t || f retorna Gato
var o8 = false || !!"Gato"; // f || t retorna true, pois !! força a transformação para booleano


console.log("o4:",o4);
console.log("o5:",o5);
console.log("o6:",o6);
console.log("o7:",o7);
console.log('o8:', o8); //saída: true

//NOT logico (!)
var n1 = !true; //!t retorna false
var n2 = !false; // !f retorna true
var n3 = !"Gato"; // !t retorna false

console.log(!undefined); //saída: true
console.log(!null); //saída: true
console.log(!20); //saída: false
console.log(!0); //saída: true
console.log(!NaN); //saída: true
console.log(!{}); //saída: false
console.log(!''); //saída: true
console.log(!'OK'); //saída: false


