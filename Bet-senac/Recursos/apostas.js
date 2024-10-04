const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

let apostas = []

router.post('/', (req, res) => {
    const { idCliente, valor, evento } = req.body
    const aposta = {
        id: uuidv4(),
        idCliente,
        valor,
        evento
    }
    apostas.push(aposta)
    res.send(aposta)

})

router.get('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = aposta[i]
        if (aposta.id === id) {
            res.send(aposta)
            return
        }
    }
    res.status(404).send('Aposta não encontrado!')
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = aposta[i]
        if (aposta.id === id) {
            apostas.splice(i, 1)
            res.send(aposta)
            return
        }
    }
    res.status(404).send('Aposta não encontrado!')
})

router.get('/', (req, res) => {
    let resultado = []
    apostas.forEach((aposta) => {
        const { idCliente, valor, evento } = req.query
        if (
            aposta.idCliente.includes(idCliente) ||
            
aposta.evento.includes(evento)
        ) {
            resultado.push(aposta)
        }
    })
    res.send(apostas)
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]
        if (aposta.id === id) {
            const { idCliente, valor, evento } = req.body
            aposta.idCliente = idCliente
            aposta.valor = valor
            aposta.evento = evento
            res.send(aposta)
            return
        }
    }
    res.status(404).send('Aposta não encontrado!')
})

module.exports = router