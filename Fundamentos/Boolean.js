let isAtivo = false; // usando let quando vamos alterar a variavel ;

console.log (isAtivo);

isAtivo = true;
console.log (isAtivo);

isAtivo = 1;
console.log(!isAtivo);
// verificando se e verdadeiro ou falso com !!, forcando o js respondre se v ou f true ou false
console.log("os verdadeiros .....");
console.log(!!3);
console.log(!!-1);
console.log(!!" "); // string com espaço 
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("os falsos .....");
console.log(!!0);
console.log(!!''); // string vazia 
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
// expressao logica || = OU , OR verdadeiro se pelo menos 1 for verdadeiro
console.log("para finalizar ..... ");
console.log(!!('' || null || 0 || " "));


let nome = '' ;
console.log(nome || "Desconhecido");

nome = 'sergio' ;
console.log(nome || "Desconhecido");
