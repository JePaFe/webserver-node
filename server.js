const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/inicio', (req, res) => {
    res.render('home', {
        nombre: 'Ana'
    })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})