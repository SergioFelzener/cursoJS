// par nome / valor 

const saudacao = 'Opa'; // contexto Lexico 1 (em que local fisico no seu codigo esse valor foi definido);

function exec (){
    const saudacao = 'Fallaaa'; // contexto Lexico 2 
    return saudacao; 

}

// Os objetos sao grupos alinhados de pares nome / valor 
const cliente = {
    nome : 'Pedro',
    idade : 32,
    peso : 55,
    endereco : {
        lagradouro: 'rua X',
        numero : 123
    }

}

console.log (saudacao);
console.log (exec());
console.log(cliente);