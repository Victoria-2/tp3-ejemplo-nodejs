    const validateInputAlumnoPut = (req, res, next) => {
    const { nombre, apellido, email, isActive } = req.body

    const error = []

    // Verificar que venga al menos un campo para actualizar
    if (nombre === undefined && apellido === undefined && email === undefined && isActive === undefined) {
        return res.status(400).json({ error: ['Debe enviar al menos un campo para actualizar.'] })
    }

    if (nombre !== undefined && typeof nombre !== 'string') {
        error.push('El nombre debe ser un texto válido.')
    }
    if (apellido !== undefined && typeof apellido !== 'string') {
        error.push('El apellido debe ser un texto válido.')
    }
    if (email !== undefined && typeof email !== 'string') {
        error.push('El email debe ser un formato de texto válido.')
    }
    if (isActive !== undefined && typeof isActive !== 'boolean') {
        error.push('El campo isActive debe ser un booleano (true/false).')
    }

    if (error.length > 0) {
        return res.status(400).json({ error })
    }

    next()
    }

    module.exports = { validateInputAlumnoPut }
    /*En un PUT no es obligatorio mandar todos los campos, solo los que querés
    actualizar. Por eso se valida con !== undefined en vez de solo if(campo),
    así también acepta strings vacíos o false como valores válidos.
    Además se verifica que venga al menos un campo, sino no tiene sentido el update.*/