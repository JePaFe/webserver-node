const http = require('http')

http.createServer((request, response) => {
    console.log(request.url)
    response.write('<h1>Hola Mundo</h1>')
    response.end()
})
.listen(3000)

console.log('Escuchando puerto 3000')