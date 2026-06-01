### Endpoints de Alumnos (Desarrollado por [Maximo Moraes])

* getAlumnoAll (GET /alumnos): Aca arme la funcion asincrona para traer a todos los alumnos. Basicamente lee el archivo alumnos.json usando fs.promises, lo parsea y devuelve el array entero. Si sale todo bien tira un estado 200. Si llega a explotar algo leyendo el archivo o falla el server, el catch agarra el error y devuelve un 500.

* getAlumnoById (GET /alumnos/:legajo): Este endpoint es para buscar un alumno en especifico. Agarra el parametro que le pasamos por la URL (req.params) y le manda un .find() al array para buscar ese numero exacto. Si lo encuentra devuelve los datos con un 200. Si pones un legajo cualquiera tira un 404, y si hay algun error raro de fondo devuelve 500.
