# Despliegue en Render - Frontend

## 1. Crear el servicio
- Ir a Render
- Crear un Web Service
- Conectar este repositorio
- Runtime: Node
- Build Command: npm install
- Start Command: npm start

## 2. Variables de entorno
Agregar estas variables:

- PORT=3000
- BACKEND_URL=https://transporte-backend-prod.onrender.com
- SITE_URL=https://www.kidsgoapp.com

## 3. Dominio
Asignar los dominios:
- kidsgoapp.com
- www.kidsgoapp.com

## 4. Verificación
Después del deploy, probar:
- https://www.kidsgoapp.com
- https://www.kidsgoapp.com/api/health
