const fs = require('fs').promises
const path = require('path')

const { MateriaModel } = require('../models/materia.model')

const dataPath = path.join(
  __dirname,
  '../data/extras/sys-materias.json'
)

const getMateriaAll = async (req, res) => {
  try {
    const data = await fs.readFile(dataPath, 'utf8')
    const materias = JSON.parse(data)

    return res.status(200).json(materias)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'No se pudieron obtener las materias'
    })
  }
}

const postMateria = async (req, res) => {
  try {
    const data = await fs.readFile(dataPath, 'utf8')
    const materias = JSON.parse(data)

    const { idMateria, nombre, cuatrimestre } = req.body

    if (!idMateria || !nombre || !cuatrimestre) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios'
      })
    }

    const existe = materias.find(
      (m) => m.idMateria === idMateria
    )

    if (existe) {
      return res.status(409).json({
        error: `Ya existe la materia ${idMateria}`
      })
    }

    const nuevaMateria = new MateriaModel(
      idMateria,
      nombre,
      cuatrimestre
    )

    materias.push(nuevaMateria.getAllAttributes())

    await fs.writeFile(
      dataPath,
      JSON.stringify(materias, null, 2)
    )

    return res.status(201).json({
      message: 'Materia creada correctamente',
      materia: nuevaMateria.getAllAttributes()
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'No se pudo crear la materia'
    })
  }
}

module.exports = {
  getMateriaAll,
  postMateria
}