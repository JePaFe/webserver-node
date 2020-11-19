const http = require('http')

http.createServer((request, response) => {
    let producto = {
        id: 1,
        title: 'Articulo Nro 1'
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(JSON.stringify(producto))
    response.end()
})
.listen(3000)

console.log('Escuchando puerto 3000')