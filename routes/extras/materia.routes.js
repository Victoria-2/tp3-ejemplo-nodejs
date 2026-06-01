const { Router } = require('express')

const {
  getMateriaAll,
  postMateria
} = require('../../controllers/materia.controller')

const rutas = Router()

rutas.get('/', getMateriaAll)
rutas.post('/', postMateria)

module.exports = rutas