// crtl+ alt + n roda o debug no console embaixo; 

// criando array, separa indices pos "," (virgula);
const valores = [7.1, 4.5, 3.3, 10];
// acessando indices do array ;
console.log (valores[0], valores[3]);
// acessando um indice nao existente ;
console.log (valores[4]);
// atribuindo valor ao indice que nao existia ;
valores [4] = 11;
// mostrando array valores no console ;
console.log(valores);
// 
console.group(valores.length);

valores.push ({id: 3}, false, null, 'teste');
console.log(valores);
// pop tira u ultimo valor do array 
console.log(valores.pop());
// deletando valor do array no indice definido
delete valores [0];

console.log(valores);
// vendo o tipo do array .. em js array e um objeto 
console.log(typeof valores);