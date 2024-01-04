const fs = require('fs');

fs.stat('arquivo.txt', (error, stats)=> { // estou verificando um arquivo
    if(error) {
        console.log(error)
        return
    }

    console.log(stats.ctime) //retorna uma data
    console.log(stats.isFile())//retorna uma booleano
    console.log(stats.isDirectory())//retorna uma booleano
    console.log(stats.size)//retorna uma number (tamanho fica em bytes)
})

fs.stat('pasta', (error, stats)=> { //estou verificando um diretório
    if(error) {
        console.log(error)
        return
    }

    console.log(stats.ctime) //retorna uma data
    console.log(stats.isFile())//retorna uma booleano
    console.log(stats.isDirectory())//retorna uma booleano
    console.log(stats.size)//retorna uma number (tamanho fica em bytes)
})