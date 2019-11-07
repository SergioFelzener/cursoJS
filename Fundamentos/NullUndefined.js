
// variavel undefined - nao foi definida 
let valor;
console.log(valor);

valor = null; // ausencia de valor 
console.log(valor);

// nao pode ler dentro da variavel nulla vazia que nao sao undefined 
// console.log(valor.toString()); // erro !

const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.50;
console.log(produto);

produto.preco =  undefined;
console.log(!!produto.preco);
// delete produto.preco //
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);




