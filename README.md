# TP 4 - Grupo 13

## Integrantes

* Celina Vega - rama_celina
* Gonzalo Herrera - rama_gonza
* Federico Marcenac - rama_fede
* Ulises Fossati - rama_uli
* Ignacio Alvarado - rama_nacho

## Descripcion del proyecto

Este proyecto consiste en el desarrollo de una API REST para la gestion academica de una facultad utilizando Node.js, Express y archivos JSON como almacenamiento de datos.

La aplicacion permite administrar alumnos, profesores, materias y notas mediante operaciones CRUD (Create, Read, Update y Delete).

La informacion se almacena en archivos JSON separados para cada entidad, simulando el funcionamiento de una base de datos.

---

## Tecnologias utilizadas

* Node.js
* Express
* TypeScript
* JavaScript
* JSON
* Nodemon
* Dotenv
* Cors
* Git
* GitHub
* Render

---

## Metodologia de trabajo

Se utilizo una metodologia colaborativa basada en Git y GitHub.

Cada integrante trabajo sobre una rama independiente para evitar conflictos durante el desarrollo.

Una vez finalizada cada funcionalidad se realizaron commits individuales y posteriormente Pull Requests para integrar los cambios al proyecto principal.

### Flujo de trabajo

main
├── rama_celina
├── rama_gonza
├── rama_fede
├── rama_uli
└── rama_nacho

Proceso utilizado:

1. Crear rama propia.
2. Desarrollar funcionalidades.
3. Realizar commits descriptivos.
4. Subir cambios al repositorio remoto.
5. Crear Pull Request.
6. Revisar e integrar cambios.
7. Actualizar rama principal.

---

## Division de tareas

### Celina Vega

* Configuracion inicial del proyecto.
* package.json
* .env
* .gitignore
* tsconfig.json
* app.js
* core/server.js
* Dockerfile

### Gonzalo Herrera

* alumnos.json
* persona.model.ts
* alumno.model.ts
* alumno.controller.js
* alumno.routes.js
* alumno-validator.middleware.js
* alumno-validator-put.middleware.js

### Federico Marcenac

* sys-profesores.json
* profesor.model.ts
* profesor.controller.js
* profesor.routes.js
* profesor-validator.middleware.js

### Ulises Fossati

* sys-notas.json
* sys-materias.json
* nota.model.ts
* materia.model.ts
* nota.controller.js
* materia.controller.js
* nota.routes.js
* materia.routes.js
* nota-validator.middleware.js
* materia-validator.middleware.js

### Ignacio Alvarado

* README.md
* Configuracion de Render
* Documentacion Postman
* Capturas del proyecto

---

## Estructura del proyecto

TP_4_Grupo_13/

├── app.js

├── core/

│ └── server.js

├── controllers/

│ ├── alumno.controller.js

│ ├── profesor.controller.js

│ ├── materia.controller.js

│ └── nota.controller.js

├── models/

│ ├── persona.model.ts

│ ├── alumno.model.ts

│ └── extras/

│ ├── profesor.model.ts

│ ├── materia.model.ts

│ └── nota.model.ts

├── middleware/

│ ├── alumno-validator.middleware.js

│ ├── alumno-validator-put.middleware.js

│ ├── profesor-validator.middleware.js

│ ├── materia-validator.middleware.js

│ └── nota-validator.middleware.js

├── routes/

│ ├── alumno.routes.js

│ └── extras/

│ ├── profesor.routes.js

│ ├── materia.routes.js

│ └── nota.routes.js

├── data/

│ ├── alumnos.json

│ └── extras/

│ ├── sys-profesores.json

│ ├── sys-materias.json

│ └── sys-notas.json

---

## Configuracion del servidor

La clase Server centraliza toda la configuracion de Express.

Funciones principales:

### middleware()

Configura:

* cors()
* express.json()
* express.urlencoded()

Permite recibir solicitudes HTTP y procesar informacion JSON enviada desde clientes externos.

### rutas()

Registra todas las rutas de la API:

* /alumnos
* /profesores
* /materias
* /notas

Tambien incluye middleware de manejo de errores.

### listen()

Inicia el servidor utilizando el puerto definido en las variables de entorno.

---

## Explicacion de Controllers

### Alumnos

#### getAlumnoAll()

Lee alumnos.json y devuelve todos los alumnos.

#### getAlumnoById()

Busca un alumno por legajo y devuelve sus datos.

#### postNewAlumno()

Genera automaticamente un nuevo legajo, crea una instancia de AlumnoModel y guarda el nuevo registro.

#### putAlumnoByLegajo()

Busca un alumno existente, actualiza los datos enviados y registra la fecha de modificacion.

#### deleteAlumnoByLegajo()

Elimina un alumno del archivo JSON.

### Profesores

#### getProfesorAll()

Obtiene todos los profesores.

#### getProfesorById()

Obtiene un profesor segun su legajo.

#### postNewProfesor()

Crea un nuevo profesor y genera automaticamente su legajo.

#### putProfesorByLegajo()

Actualiza la informacion de un profesor.

#### deleteProfesorByLegajo()

Elimina un profesor del sistema.

### Materias

#### getMateriaAll()

Obtiene todas las materias.

#### getMateriaById()

Busca una materia por idMateria.

#### postNewMateria()

Crea una nueva materia validando que no exista previamente.

#### putMateriaById()

Actualiza una materia existente.

#### deleteMateriaById()

Elimina una materia.

### Notas

#### getNotaAll()

Obtiene todas las notas registradas.

#### getNotaById()

Obtiene una nota segun su identificador.

#### postNewNota()

Genera una nueva nota asignando automaticamente un id.

#### putNotaById()

Actualiza la informacion de una nota.

#### deleteNotaById()

Elimina una nota.

---

## Explicacion de Models

### PersonaModel

Clase base utilizada para compartir atributos entre alumnos y profesores.

Funciones:

* getNombre()
* setNombre()
* getApellido()
* setApellido()
* getNombreCompleto()
* getEmail()
* setEmail()
* getAllAttributes()

### AlumnoModel

Hereda de PersonaModel.

Funciones:

* getLegajo()
* getIsActive()
* setIsActive()
* getModificacion()
* setModificacion()
* getAllAttributes()

### ProfesorModel

Hereda de PersonaModel.

Funciones:

* getLegajo()
* getMateria()
* setMateria()
* getIsActive()
* setIsActive()
* getAllAttributes()

### MateriaModel

Funciones:

* getIdMateria()
* getNombre()
* setNombre()
* getCuatrimestre()
* setCuatrimestre()
* getAllAttributes()

### NotaModel

Funciones:

* getId()
* getLegajoAlumno()
* getMateria()
* setMateria()
* getNota()
* setNota()
* getFecha()
* getAllAttributes()

---

### validateInputAlumno

Valida tipos de datos de nombre, apellido, email e isActive.

### validateInputAlumnoPut

Valida actualizaciones y verifica que se envie al menos un campo.

### validateInputProfesor

Valida nombre, apellido, email, materia e isActive.

### validateInputMateria

Valida idMateria, nombre y cuatrimestre.

### validateInputNota

Valida legajoAlumno, materia, nota y fecha.

---

## Ejemplos de archivos JSON

### alumnos.json

```json
{
  "legajo": 10001,
  "nombre": "Mora",
  "apellido": "Garcia",
  "email": "m.garcia@facultad.edu.ar",
  "fechaAlta": "2026-03-02",
  "modificacion": "2026-03-02",
  "isActive": true
}
```

### sys-profesores.json

```json
{
  "legajo": 2,
  "nombre": "Maria",
  "apellido": "Gonzalez",
  "email": "m.gonzalez@facultad.edu.ar",
  "materia": "Base de Datos",
  "isActive": true
}
```

### sys-materias.json

```json
{
  "idMateria": "MAT101",
  "nombre": "Programacion II",
  "cuatrimestre": 2
}
```

### sys-notas.json

```json
{
  "id": 2,
  "legajoAlumno": 10001,
  "idMateria": "PROG1",
  "nota": 8,
  "fecha": "01-07-24"
}
```

---

## Deploy

API desplegada en Render:

https://tp-4-grupo-13-1.onrender.com
