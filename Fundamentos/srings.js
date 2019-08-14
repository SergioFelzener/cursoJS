const escola = "Cod3r"
console.log (escola.charAt(4)) // retorna o 4 caracter
console.log (escola.charAt(5)) 
console.log (escola.charCodeAt(3)) // codigo relacionado a tabela unicode 
console.log (escola.indexOf(3))

console.log (escola.substring(1))
console.log (escola.substring(0, 3))

console.log ("escola ".concat(escola).concat("!"))

console.log (escola.replace(3, "e")) // replace 3 posicao pela letra "e
console.log (escola.replace(/\w/g, "e")) // usando rejex

console.log ('dan, paulo, Pedro'.split(",")) // cria array 