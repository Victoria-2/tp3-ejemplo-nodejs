const { Router } = require('express')
const {
  getAlumnoAll,
  getAlumnoById,
  postAlumno,
  getAlumnoBySearch
} = require('../controllers/alumno.controller')

const rutas = Router()

rutas.get('/search', getAlumnoBySearch)
rutas.get('/', getAlumnoAll)
rutas.get('/:legajo', getAlumnoById)
rutas.post('/', postAlumno)

module.exports = rutas
