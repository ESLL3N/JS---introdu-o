// var teste = "Primeira variavel" <-- se declarada, pode dar conflito, pois podemos ter variaveis com nomes iguais 
// let teste_let = "VAriavel com Let" <-- a variavel usando let não está diponivel fora do bloco que ela foi declarada
// const teste_const = "Variavel Const" <-- const é uma variavel que não varia durante a execução do codigo, ele pode ser alterada a cada vex que mudamos o codigo, como por exemplo, pegar a data, a cada vez que executarmos ele nos dara uma data e hora diferente e esse valor não sera alterado, basicamente ele pega o bonde andando e não se altera.
// nos operadores de atribuição o valor que esta a esquerda será o que guardará o valor final.


    //console.log("aoba!!")

    var mensagem = "testando"

     if(true) {
      let mensagem = "Olá VAR"
    }
            

    document.querySelector("#msg").innerHTML = mensagem
