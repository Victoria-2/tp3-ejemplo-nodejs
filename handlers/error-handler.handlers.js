const errorHandler = (err, req, res, next) => {
  console.error(`[SERVER ERROR]: ${err.message}`)

  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      error: 'Error de validación en la base de datos',
      detalles: err.errors.map((e) => e.message)
    })
  }

  return res.status(500).json({
    error: 'Ocurrió un error interno en el servidor'
  })
}

module.exports = errorHandler
