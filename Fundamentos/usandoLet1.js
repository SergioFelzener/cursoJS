var numero = 1;
//let vale dentro do bloco tem escopo de bloco alem de funcao e global
{
    let numero = 2;
    console.log("dentro", numero);
}
console.log("fora", numero);

