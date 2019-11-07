const escola = "Cod3r";
console.log (escola.charAt(4)); // retorna o 4 caracter todo array comeca no indice 0
console.log (escola.charAt(5));
console.log (escola.charCodeAt(3)); // codigo relacionado a tabela unicode TABELA ASCII 
console.log (escola.indexOf(3));// sabendo se existe o valor 3 dentro da const escola e retorna a posicao dele no vetor 

console.log (escola.substring(1));
console.log (escola.substring(0, 3));

console.log ("escola ".concat(escola).concat("!")); // concatenando com o concat 

console.log (escola.replace(3, "e")); // replace 3 posicao pela letra "e
console.log (escola.replace(/\w/g, "e")); // usando rejex expressao regular !

console.log ('Jon, paulo, Pedro'.split(",")); // split converte string no array cria array com elementos da string