const fs = require('fs').promises
const path = require('path')
// destructuring para obtener la clase
const { AlumnoModel } = require('../models/alumno.model')

// ruta absoluta del archivo de datos para compatibilidad en diferentes entornos
const dataPath = path.join(__dirname, '../data/alumnos.json')

const getAlumnoAll = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    return res.status(200).json(alumnos)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: `No se pudo obtener el datalle del alumno con legajo n° ${legajo}`
    })
  }
}

const getAlumnoById = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo } = req.params

    const legajoId = alumnos.find(
      (a) => a.legajo /* .toString() */ === Number(legajo)
    )

    if (!legajoId) {
      return res
        .status(404)
        .json({ msg: `No existe el alumno con el legajo ${legajo}` })
    }

    return res.status(200).json(legajoId)
  } catch (error) {
    console.log(error)
    return res.status(500).JSON({
      error: 'No se pudo obtener el datalle del alumno con legajo n° {legajo}'
    })
  }
}

// POST alumnos
const postAlumno = async (req, res) => {
  try {
    const data = await fs.readFile(dataPath, 'utf8')
    const alumnos = JSON.parse(data)

    const { nombre, apellido, email, legajo, isActive } = req.body

    if (!nombre || !apellido || !email || !legajo) {
      return res.status(400).json({
        error: 'Los campos legajo, nombre, apellido y email son obligatorios'
      })
    }

    // verificar si el legajo ya existe
    const legajoExiste = alumnos.find(
      (a) => Number(a.legajo) === Number(legajo)
    )
    if (legajoExiste) {
      return res
        .status(409)
        .json({ error: `Ya existe un alumno con el legajo ${legajo}` })
    }

    const fechaActual = new Date().toISOString().split('T')[0]

    const nuevoAlumnoInstancia = new AlumnoModel(
      nombre,
      apellido,
      email,
      legajo,
      fechaActual, // fechaAlta
      fechaActual, // modificacion
      isActive !== undefined ? isActive : true // por defecto true si no viene en el body
    )

    // obtiene correctamente los atributos protegidos de la clase
    const nuevoAlumno = nuevoAlumnoInstancia.getAllAttributes()

    alumnos.push(nuevoAlumno)
    await fs.writeFile(dataPath, JSON.stringify(alumnos, null, 2))

    console.log(`[POST] Alumno registrado de forma exitosa. Legajo: ${legajo}`)

    return res.status(201).json({
      message: 'Alumno registrado correctamente',
      alumno: nuevoAlumno
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'No se pudo crear el alumno' })
  }
}

// GET alumno por apellido o isActive
const getAlumnoBySearch = async (req, res) => {
  try {
    const data = await fs.readFile(dataPath, 'utf8')
    let alumnos = JSON.parse(data)

    const { apellido, isActive } = req.query

    if (apellido) {
      alumnos = alumnos.filter((a) =>
        a.apellido.toLowerCase().includes(apellido.toLowerCase())
      )
    }

    if (isActive !== undefined) {
      const activo = isActive === 'true'
      alumnos = alumnos.filter((a) => a.isActive === activo)
    }

    console.log(
      `[GET] Buscador ejecutado. Coincidencias devueltas: ${alumnos.length}`
    )

    return res.status(200).json(alumnos)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'No se pudieron obtener los alumnos' })
  }
}

module.exports = {
  getAlumnoAll,
  getAlumnoById,
  postAlumno,
  getAlumnoBySearch
}
