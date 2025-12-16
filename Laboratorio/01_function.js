// Autor: Lucas Favaro Borsatto  (paradigma0621@gmail.com)
// https://github.com/paradigma0621/javascript
// Código pessoal para aprender sobre os possíveis usos de functions

this.name = 'Fulano';
this.linguagem = 'javascript';

var carro = [{ modelo: 'BMW',
                ano: 2010
}];

var logUserName = function() {
 return this.name; 
}

const returnLinguagem = () => this.linguagem;  //esse "this" (de modo geral: os "this" das Arrows Functions) vão sempre se referenciar ao escopo onde elas são declaradas. Ou seja: ela vai apontar para o "this" da linha 6.  


var user = {
    name: 'usuario123',
    linguagem: 'Angular',
    logUserName,
    returnLinguagem
  }
 
carro.acelerar = function() {
    console.log('acelerando');
}

const showMsg = function() {
    console.log('msg');
}

function showDate() {
    console.log('26/09/2021');
}

carro.acelerar();
showMsg();
showDate();
console.log(user.logUserName()); //quando executamos uma função: ela lê as variáveis de dentro do contexto "this" de onde ela é executada. Se for a partir de um objeto, como está sendo o caso aqui (objeto "user"), o "this" lido de dentro da função getName() vai se referir ao objeto "user", vai ler o "name" de dentro desse objeto (o "name" da linha 20).
console.log(user.returnLinguagem()); //Ler comentário na declaração da linha 16
