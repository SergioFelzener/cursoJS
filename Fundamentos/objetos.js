
// criando um objeto {} vazio;
const prod1 = {};
// inserindo atributos no objeto;
prod1.nome = 'celular mega';
prod1.preco = 4300.00;

prod1['desconto'] = 0.40;  // evitar atributos com espacos

console.log(prod1);

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
};

console.log(prod2);
