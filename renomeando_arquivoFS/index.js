const fs = require('fs')

fs.rename('arquivonovo.txt', 'arquivonovoooooo.txt', (error)=> {
    if(error) {
        console.log(error)
        return
    }

    console.log('arquivo renomeado com sucesso!')
})

// passo como parâmetros o nome do arquivo antigo como string, o nome do arquivo novo como string e a função de callback para verificar o meu erro

//crio uma verificação com o if verificando se o erro existe, se existir vai mostrar um console.log de erro

// se não existir, vai mostrar que o arquivo foi renomeado com sucesso