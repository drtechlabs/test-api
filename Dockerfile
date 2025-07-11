# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia el resto de la aplicación
COPY . .

# Expone el puerto (puedes cambiarlo si tu app usa otro)
EXPOSE 3000

# Comando por defecto para ejecutar la app
CMD ["npm", "start"] 