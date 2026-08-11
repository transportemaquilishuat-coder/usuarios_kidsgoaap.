# KidsGo App Web

Aplicación web moderna para el portal de administración del sistema de transporte escolar.

## Configuración

- El frontend usa el backend en la URL definida en BACKEND_URL.
- El sitio está preparado para publicarse en https://www.kidsgoapp.com.

## Variables de entorno

- PORT: puerto del frontend.
- BACKEND_URL: URL del backend de producción o local, por ejemplo http://127.0.0.1:8080.
- SITE_URL: URL pública del frontend, por ejemplo https://www.kidsgoapp.com.

## Despliegue

- En Render, configura el servicio web con el comando de inicio apropiado y define BACKEND_URL y SITE_URL.
- El dominio www.kidsgoapp.com debe apuntar a Render mediante un registro CNAME en el proveedor del dominio.
- Si el backend real aún no está disponible, la web seguirá funcionando en modo demo para permitir la navegación.
