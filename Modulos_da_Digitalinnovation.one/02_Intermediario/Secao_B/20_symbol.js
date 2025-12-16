const symbol1 =  Symbol();
const symbol2 = Symbol();

//Symbols sao unicos
console.log('Simbol1 é igual a simbol2: ', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'João Pedro',
    [nameSymbol2]: 'Luiz',
    lastName: 'Borsatto'
}

console.log(user);

//Symbols criam propriedades que nao sao enumerables
for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`); //Os objetos symbol não são apresentados, pois não são acessados pelo "for in" (eles são private) - saída: "Valor da chave lastName: Borsatto"
    }                               

}

onsole.log(`Propriedade do objeto user:`, Object.key(user));  //Os objetos symbol não são apresentados, pois não são acessados (eles são private) - saída: "Valor da chave lastName: Borsatto"
console.log('Valores das propriedades do objeto user:',Object.values(user));//Os objetos symbol não são apresentados, pois não são acessados (eles são private) - saída: "Valor da chave lastName: Borsatto"

//Exibir symbols de um objeto
console.log('Symbols registrados no objetos user:', Object.getOwnPropertySymbols(user)); //Aqui sim os symbols são acessados e exibidos

//Acessando todas as propriedades do objetvo
console.log('Todas as prpriedades do objeto user:', Reflect.ownKeys(user)); //Com Reflect nós conseguimos acessar também todas as propriedades

//Criar um enum
const directions = {
    UP : Symbol( 'UP '),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT'),
    RIGHT: Symbol( 'RIGHT'),
};
