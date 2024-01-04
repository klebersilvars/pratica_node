const fs = require('fs')
const nome = 'kleber'
fs.writeFile('arquivo.txt', nome, (error)=> {
    console.log('arquivo criado com sucesso')
})