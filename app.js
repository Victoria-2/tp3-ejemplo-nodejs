const Server = require('./core/server')

const servidor = new Server()
servidor.listen()

const materiaRoutes = require('./routes/materia.routes')
app.use('/materias', materiaRoutes)