const express = require('express')
const app = express()
const db = require('./db.js')
const clienteRoutes = require('./routes/clientes')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(express.static('public'))

app.use('/', clienteRoutes);

app.listen(4000, () => {
    console.log('¡Server UP! en http://localhost:4000')
})