//Esse código diferencia dois tipos de funções: as Arrows Functions e as funções 'normais'
(() => {  
  this.name = 'Nome no contexto de criação';

  const getNameArrowFn = () => this.name; //esse "this" (de modo geral: os "this" das Arrows Functions) vão sempre se referenciar ao escopo onde elas são declaradas. Ou seja: ela vai apontar para o "this" da linha 3.
  

  function getName() {
  return this.name;
}

  const user = {
  name: 'Nome no objeto de execução',
  getNameArrowFn,      // equivalente a escrever: "getNameArrowFn: getNameArrowFn"
  getName		// equivalente a escrever: "getName: getName"  (chave e valor são os mesmos)
}

  console.log(user.getNameArrowFn());
  console.log(user.getName()); //quando executamos uma função: ela lê as variáveis de dentro do contexto "this" de onde ela é executada. Se for a partir de um objeto, como está sendo o caso aqui (objeto "user"), o "this" lido de dentro da função getName() vai se referir ao objeto "user", vai ler o "name" de dentro desse objeto (o "name" da linha 13).
})();

