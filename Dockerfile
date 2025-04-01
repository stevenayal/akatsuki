# Usar la imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Exponer el puerto que usará la app (ajustar si es diferente)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"] 