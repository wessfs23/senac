const express = require('express')

const recursoCliente = require('./recursos/clientes')
const recursoApostas = require('./recursos/apostas')

const app = express()
const port = 3000

app.use(express.json())

app.use('/clientes', recursoCliente)
app.use('/apostas', recursoApostas)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
