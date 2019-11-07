// armazenando uma função em uma variável;

const imprimiSoma = function (a, b) {
    console.log(a + b);
}
imprimiSoma(2, 3);

// Armazenando uma função arrow numa variável => chama função

const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));

//retorno implícito; (a, b) = parametros => = arrow function a - b = retorno (forma bem reduzida de escrever)
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('legal');