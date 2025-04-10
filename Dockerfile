# Etapa 1: Build de la aplicación Angular
FROM node:20 AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Construir la app en modo producción
RUN npm run build -- --configuration=production

# Etapa 2: Servir la aplicación con NGINX
FROM nginx:alpine

# Eliminar archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar el build generado en Angular al directorio de NGINX
COPY --from=builder /app/dist/mycv /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
