function pessoa (){
    this.idade = 0
    // criando constante para acessar os atributos do "this"
    const self = this;
    // em comentarios usando bind
    setInterval(function(){
        /*this.idade++*/
        self.idade++
        console.log(self.idade)
        /*console.log(this.idade);*/
    }/*.bind(this)*/,1000)
}

new pessoa 