function getName(){
    return "João Pedro";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName); // saída: "João Pedro"
