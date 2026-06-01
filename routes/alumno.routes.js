const { Router } = require('express')
const {
  getAlumnoAll,
  getAlumnoById,
  createAlumno,
  getAlumnoBySearch
} = require('../controllers/alumno.controller')

const rutas = Router()

rutas.get('/', getAlumnoAll)
rutas.get('/:legajo', getAlumnoById)
rutas.post('/', createAlumno)
rutas.get('/search', getAlumnoBySearch)

module.exports = rutas
