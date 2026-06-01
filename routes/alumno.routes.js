const { Router } = require('express')
const {
  getAlumnoAll,
  getAlumnoById,
  postAlumno,
  getAlumnoBySearch,
  putAlumno
} = require('../controllers/alumno.controller')

const rutas = Router()

rutas.get('/search', getAlumnoBySearch)
rutas.get('/', getAlumnoAll)
rutas.get('/:legajo', getAlumnoById)
rutas.post('/', postAlumno)
rutas.put('/:legajo', putAlumno)

module.exports = rutas
