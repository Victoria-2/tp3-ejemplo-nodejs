const { Router } = require('express')
const router = Router()
const {
  validateInputNotas
} = require('../../middleware/notas-validator.middelware')
const {
  getAllNotas,
  getNotaById,
  postNota
} = require('../../controllers/extras/notas.controller')

router.get('/', getAllNotas) // este si
router.get('/:id', getNotaById) // no se pide en el proyecoto final
router.post('/', validateInputNotas, postNota) // este si

module.exports = router
