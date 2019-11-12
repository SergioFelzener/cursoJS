// funcao em JS é First-Class Object (Citzenns)
// Higher-order Function

// criando de forma literal 
function func1(){ };

// armazenar funcao em variavel 
const func2 = function (){ };

// Armazenar funcao dentro de ARRAY 
const array = [function (a,b) { return a + b }, func1, func2];
console.log (array[0](2,3));

// armazenar em atributo de objeto 

const obj = {};
obj.falar = function (){ return 'opa' };
console.log(obj.falar());

// Passar funcao como parametro 
function run(fun) {
    fun()
}
run(function () {
    console.log('Executando');
});
// funcao que retorna outra funcao 
function soma (a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma (2,3)(4);
const cincoMais = soma (2,3);
cincoMais (4);


