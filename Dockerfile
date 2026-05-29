# Usamos una imagen oficial de Node.js
FROM node:18

# Creamos y establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalamos pnpm globalmente en el contenedor para poder leer el lockfile
RUN npm install -g pnpm

# Copiamos primero solo los archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalamos las dependencias usando pnpm
RUN pnpm install

# Copiamos el resto del código del proyecto al contenedor
COPY . .

# Exponemos el puerto que usa Express
EXPOSE 3000

# Comando por defecto para iniciar la aplicación en producción
CMD ["pnpm", "start"]