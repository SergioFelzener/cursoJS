const valores = [7.1, 4.5, 3.3, 10];
console.log (valores[0], valores[3])
console.log (valores[4])

valores [4] = 11
console.log(valores)
console.group(valores.length)

valores.push ({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
delete valores [0]
console.log(valores)

console.log(typeof valores)