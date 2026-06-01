# Documentación #
### El archivo README.md debe incluir lo siguiente: ###
- Número de grupo e integrantes.
- Nombre del proyecto y su descripción.
- Metodología de trabajo con Git y GitHub.
- División de los archivos entre los integrantes.
- Distribución de los archivos y carpetas.
- Un 90% de las funciones explicadas a detalle.
- Documentación con ‘Postman’ de todos los métodos (GET, PUT, DELETE, POST).
- Mínimo un ejemplo de la estructura de cada archivo JSON utilizado (no integrar varios “arrays” en un mismo archivo).
- Link del deploy en Render.
- Link al repositorio con el front-end.


Implentacion de NOTAS - Valentina Guerrieri
hice el GET/notas que obtiene las notas alamcenadas en data/extras/sys-notas.json, con la funcion getNotAll. 
![GET Notas](images/get-notas.jpeg)
Esto significa que lee el archivo sys-notas.json, convierte el contendio JSON a un arreglo de objetos y devuelve todas las notas registradas.
También implemente el endpoint POST /notas, que permite agregar una nueva nota al sistema mediante la funcion postNota.
![POST Notas](images/post-notas.jpeg)
Esta función lee el archivo sys-notas.json, obtiene los datos enviados en req.body, genera un nuevo identificador, agrega la nueva nota al arreglo, guarda los cambios en el archivo JSON y devuelve la nota creada
Pruebas realizadas

Los endpoints fueron probados mediante Postman.

GET/notas
Respuesta exitosa: 200 OK
Devuelve todas las notas registradas.
POST /notas
Respuesta exitosa: 201 Created
Agrega una nueva nota y devuelve el objeto creado.

ejemplo de registro:

{
  "id": 1,
  "legajo": 10001,
  "idMateria": "MAT101",
  "nota": 9,
  "fecha": "03-04-24"
}