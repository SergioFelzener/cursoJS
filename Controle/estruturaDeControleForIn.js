const notas = [2.5, 8, 5.5, 4.5, 3, 7.8, 10, 9.9]

for (let i in notas){
    console.log (i, notas[i])
}

const pessoas = {
    nome: 'ana',
    sobrenome: 'pereira',
    idade: 20,
    peso: 64
}

for (let atributo in pessoas ) {
    console.log (`${atributo} = ${pessoas[atributo]}`); // `` crase usa para abrir o template string
    console.log ('atributo : ' + atributo + ' = ' + pessoas[atributo]); // escrevendo do mesmo jeito acima 

}