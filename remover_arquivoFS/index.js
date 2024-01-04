const fs = require('fs');

fs.unlink('arquivo.txt', (error)=> {
    if(error) {
        console.log(error)
        return;
    }

    console.log("Arquivo deletado com sucesso")
})

//toda vez que eu iniciar o meu script, ele vai deletar o arquivo.txt