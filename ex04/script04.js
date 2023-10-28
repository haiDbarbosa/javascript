    var nome = window.prompt('Digite seu nome!')//Aqui o pop-up pergunta o nome da pessoa e pede pra digitar
    document.write(`Olá <strong>${nome}</strong>, seu nome tem ${nome.length} letras<br>`)//Nessa primeira linha ele escreve no html toda a string e o placeholder ${} usa variavel "nome" pra aplicar as funções
    document.write(`Ele escrito totalmente em maiuscula fica ${nome.toUpperCase()}<br>`)//Aqui ele escreve a segunda linha e o placeholder ${} precisa de um () pra aplicar uma função nula ou ele não funcionaria, pq aparentemente o toUpperCase só funciona em função nomeada
    document.write(`Ele escrito totalmente em minusculo fica ${nome.toLowerCase()}<br>`)//Aqui escreve a terceira linha e repete o mesmo processo com os mesmos motivos da linha de codigo 03
