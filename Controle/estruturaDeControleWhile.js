// while apropriado para quantidade indeterminada de repetições 
// funcao retorna inteiro aleatorio 
function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
let opcao = 0;

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,100)
    console.log(`opcao escolhida foi ${opcao}.`)
}
console.log ('ate a proxima');