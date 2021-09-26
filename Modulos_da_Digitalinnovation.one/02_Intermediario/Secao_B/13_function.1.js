function fn() {
  return 'Code here';
}

const arrowFn = () => 'Code here'; //código equivalente à function fn() acima
const arrowFn2 = () => {
  //mais de uma expressão
  return 'Code here';
}

//funções também são objetos
fn.prop = 'Posso criar propriedades'; //é possível atribuir propriedades para function pois a mesma é um objeto

console.log(fn());
console.log(fn.prop);

//receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);



//receber e retorna funções
const controlFnExec = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //executará a função fn
handleFnExecution(); //não executará a funçao fn


//controlFnExec como função (obs: implementação equivalente à das linhas 27 à 31)
function controlFnExec(fnParam) {
  return function(allowed) {
    if (allowed) {
      fnParam();
    }
  }
}
