# 🏃 UNCo Activa
Aplicación web desarrollada con React y Laravel para la carrera UNCO Activa, en colaboración con la Secretaria de Bienestar Universitario de la Universidad Nacional del Comahue.

<div align="center">
  <img style="width:30%;" src="assets/logos/UNComa.png" alt="Isologo UNComa"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img style="width:30%;" src="assets/logos/UNCo%20Activa%202026%20Celeste.svg" alt="Imagotipo UNCo Activa"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img style="width:30%;" src="assets/logos/Secretaría de Bienestar Universitario.png" alt="Imagotipo Secretaria de Bienestar Universitario"/>
</div>

La carrera UNCo Activa surge en el año 2017 y se ha convertido en un evento emblemático dentro de la comunidad de la Universidad Nacional del Comahue, destacando no solo por su carácter competitivo, sino también por su enfoque en la salud y el bienestar de todos los participantes.

## 🌐 Deploy / Live
El proyecto está desplegado en producción y puede verse en el siguiente enlace: 
https://uncoactiva.fi.uncoma.edu.ar/

## 🎯 Objetivo
Brindar una herramienta para:
- Exponer información sobre el evento
  - Reglamentación, montos, participantes, resultados, entre otros.
- Inscripción de usuarios
- Gestión de inscripciones

## 🧮 Funcionalidades

### Frontend
- Landing page UNCo Activa
- Inscripción de usuarios al evento
  - Pago mediante links de pago
  - Carga de comprobante
  - Beneficio para comunidad universitaria
- Visualizar:
  - Reglamentación
  - Participantes inscriptos
  - Resultados de eventos
  - Galeria de imagenes (próximamente)
- Interfaz responsive

### Backend
- Interfaz para administrador con:
  - Autenticación de usuario
  - Alta/Baja/Modificación de inscripciones
  - Verificación de comprobantes
  - Exportación a Excel de inscriptos/preinscriptos
- Notificaciones automáticas por correo ante cambios en inscripciones

## 🏗️ Stack Tecnológico

### Frontend
- **Librería UI:** React 17
- **Language:** Javascript
- **Routing:** React Router DOM
- **UI & Estilos:** Tailwind CSS
- **HTTP Requests / API:** Axios
- **Autenticación:**
  - Tokens de Laravel Sanctum (via Laravel Breeze API)
  - Context + Protected Routes
- **Build / Bundler:**
  - Yarn

### Backend
- **Framework:** Laravel 9.35.1
- **Language:** PHP
- **Autenticación y Starter Kit:** Laravel Breeze (API + React)
- **Base de datos:** MySQL con Eloquent ORM
- **API:**
  - Laravel Sanctum (SPA authentication)
  - JSON responses
- **Paquetes útiles:**
  - maatwebsite/excel
