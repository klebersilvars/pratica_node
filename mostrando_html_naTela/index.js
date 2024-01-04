const http = require('http')
const fs = require('fs')


const porta = 3000

const server = http.createServer((req, res)=> {
    fs.readFile('index.html', (error, data)=> {
        res.writeHead(200, {"Content-Type" : "text/html"}) //definindo para mostrar html na tela e o status code para 200 {OK}
        res.write(data)
        return res.end()
    })
})  

server.listen(porta, ()=> {
    console.log(`servidor iniciado na porta ${porta}`)
})