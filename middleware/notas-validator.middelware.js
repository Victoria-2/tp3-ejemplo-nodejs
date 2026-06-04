const validateInputNotas = (req, res, next) => {
  const { legajo, idMateria, nota, fecha } = req.body
  const error = []

  if (legajo && typeof legajo !== 'number') {
    error.push('error lehajo')
  }

  if (idMateria && typeof idMateria !== 'string') {
    error.push('error id materia.')
  }

  if (nota && typeof nota !== 'number') {
    error.push('error number')
  }
  if (fecha && typeof fecha !== 'string') {
    error.push('error fecha')
  }

  if (error.length > 0) {
    return res.status(400).json({ error })
  }

  next()
}

module.exports = { validateInputNotas }
