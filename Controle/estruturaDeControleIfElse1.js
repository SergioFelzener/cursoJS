const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('aprovado');
    } else {
        console.log('Reprovado');
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('epa'); // cuidado para nao utilizar desta forma linguagem fracamente tipada JS

