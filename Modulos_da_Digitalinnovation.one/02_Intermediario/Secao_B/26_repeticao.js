// break
console.log (`Exemplo da utilização de break`);

var index = 0;

while (true) {
    index++;

    if(index > 2){
        break;
    }
    console.log(index);
}


//continue
console.log(`\n Exemplo da utilização de continue`);
const array = [1,2,3,4,5,6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        continue; //Não exibe elementos pares na tela com a linha 26
    }
    console.log(element);
}



//-----------------------------------------------------


/**
 do
 declaracao
 while(condicao);
 */

 let i = 0;
 do {
     i +=1;
     console.log(i);
 } while(i < 5); //Irá mostrar inclusive o elemento 5



