
{{{{ var sera = 'sera'}}}};

{
    {
        {
            {
                var sera = 'sera'
                console.log(sera);
            }
        }
    }
};

console.log(sera);
//criando variavel na funcao estara disponivel somente na funcao 
function teste (){
    var local = 123;
    console.log(local);
}
var local = 0;
teste();
console.log(local);

console.log (typeof window);