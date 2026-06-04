// const fs = require('fs').promises
const { NotaModel } = require('../../models/extras/nota.model')

const getAllNotas = async (req, res, next) => {
  try {
    // 1. ir a buscar la información al modelo necesario
    const notas = await NotaModel.findAll()
    // 2. devolver los datos encontrados
    if (!notas || notas === undefined || notas === 0) {
      return res.status(400).json({
        msg: 'Error, no se pudieron encontrar notas cargadas en el sistema'
      })
    }
    return res.status(200).json(notas)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const getNotaById = async (req, res, next) => {
  try {
    const { id } = req.params
    const nota = await NotaModel.findById(Number(id))

    if (!nota || nota === undefined) {
      return res.status(400).json({
        msg: `No se encontró la nota con el id ${id}`
      })
    }

    return res.status(200).json(nota)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const postNota = async (req, res, next) => {
  try {
    const { legajo, idMateria, nota, fecha } = req.body

    NotaModel.create({
      legajo: Number(legajo),
      idMateria,
      nota: Number(nota),
      fecha
    })
    const notaCreada = await NotaModel.findLastOne()
    return res.status(201).json({
      msg: 'Nota subida al sistema correctamente',
      notaCreada
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { getAllNotas, getNotaById, postNota }
