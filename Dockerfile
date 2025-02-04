# Usar la imagen oficial de Node.js
FROM node:23

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json antes de instalar dependencias
COPY package*.json ./

# Instalar dependencias con --force para evitar conflictos de compilación
RUN npm install --force

# Copiar el resto de los archivos del proyecto
COPY . .

# Copiar el archivo .env al contenedor
COPY .env .env

# Volver a instalar bcrypt para el entorno Docker
RUN npm rebuild bcrypt --build-from-source

# Generar el Cliente de Prisma
RUN npx prisma generate

# Exponer el puerto de la app
EXPOSE 5000

# Aplicar las migraciones y ejecutar la aplicación
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
