### Endpoints de Alumnos (Desarrollado por [Maximo Moraes])

* getAlumnoAll (GET /alumnos): Aca arme la funcion asincrona para traer a todos los alumnos. Basicamente lee el archivo alumnos.json usando fs.promises, lo parsea y devuelve el array entero. Si sale todo bien tira un estado 200. Si llega a explotar algo leyendo el archivo o falla el server, el catch agarra el error y devuelve un 500.

* getAlumnoById (GET /alumnos/:legajo): Este endpoint es para buscar un alumno en especifico. Agarra el parametro que le pasamos por la URL (req.params) y le manda un .find() al array para buscar ese numero exacto. Si lo encuentra devuelve los datos con un 200. Si pones un legajo cualquiera tira un 404, y si hay algun error raro de fondo devuelve 500.

### Endpoints de Materias (Desarrollado por Lucas rojas)

* getMaterias (GET /materias): aca armamos la funcion asincrona para traer todas las materias. lee el archivo sys-materias.json que esta en la carpeta extras usando fs.promises. parsea la data y te devuelve todo el array. si sale todo de 10 tira un 200, y si llega a fallar algo leyendo el archivo el catch tira un 500.

* postMateria (POST /materias): este es para agregar una materia nueva. primero hace una validacion basica para ver que vengan el idMateria, nombre y cuatrimestre por el body, si falta algo te frena con un 400. despues lee el json y se fija con un find() si el id de la materia ya existe, si ya esta tira un error 409 de conflicto. si pasaste todas esas trabas, pushea la materia al array, lo reescribe en el json y te devuelve la materia creada con un estado 201. cualquier otro error raro va al catch con un 500.
