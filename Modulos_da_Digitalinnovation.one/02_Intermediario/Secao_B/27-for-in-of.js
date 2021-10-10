let arr = [3, 5, 7];
arr.foo = "helo";

console.log(arr);

for (let i in arr) {
    console.log(i); // logs "0", "1", "2", "foo" (faz para cada propriedade que "arr" tem)
};

for (let i of arr) {
    console.log(i); // logs "3", "5", "7" (só executa para as propriedades que estão enumeradas)
};
