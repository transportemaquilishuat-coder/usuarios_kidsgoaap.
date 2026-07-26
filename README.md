# Transporte Escolar Web

Aplicación web estática para el portal de administración del sistema de transporte escolar.

## Configuración

- El frontend usa el backend en la URL definida en BACKEND_URL.
- El backend ya está configurado para usar la base de datos Neón existente a través de DATABASE_URL.

## Variables de entorno

- PORT: puerto del frontend.
- BACKEND_URL: URL del backend de producción o local.

## Despliegue

- En Render, configura el servicio web con el comando de inicio apropiado y define BACKEND_URL al URL del backend desplegado.
- No se crean nuevas bases de datos: se reutiliza la conexión Neón ya existente en el backend.
