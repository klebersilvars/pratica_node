const http = require('http');
const url = require('url');
const fs = require('fs');

const porta = 3000

const server = http.createServer((req, res)=> {

    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)

    if(filename.includes('html')) {

        if(fs.existsSync(filename)) {
            fs.readFile(filename, (error, data)=> {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            })

        }else {
            
            fs.readFile('404.html', (error, data)=> {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(porta, ()=> { 
    console.log(`servidor iniciado na porta ${porta}`)
})

