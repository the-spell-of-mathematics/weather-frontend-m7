# ATMOS - Aplicación del Clima 

> Aplicación web moderna desarrollada en Vue 3 que ofrece el pronóstico del tiempo en distintas ciudades de Chile, integrada con un sistema de autenticación, gestión de estado global mediante Vuex y personalización de preferencias de usuario.

---

### Descripción

El sistema maneja de forma centralizada la sesión activa de la persona conectada a través de **Vuex**. De cada usuario autenticado se almacena y administra:
- Datos básicos: Nombre y correo electrónico para la identificación en la interfaz.
- Preferencias: Configuración personalizada de la unidad de temperatura (permite alternar dinámicamente entre grados Celsius y Fahrenheit).
- Favoritos: Lista de identificadores de ciudades guardadas por el usuario para un acceso rápido y personalizado.

---

### Rutas

La arquitectura SPA utiliza **Vue Router** para gestionar la navegación y proteger las secciones privadas:
- `/` (Home): Vista principal pública con el listado de ciudades de Chile y buscador en tiempo real.
- `/lugar/:id` (Detalle): Pronóstico semanal detallado por ciudad y opción para gestionar favoritos si la sesión está activa.
- `/login` (Inicio de sesión): Formulario interactivo con validación de credenciales (casos de éxito y error).
- `/favoritos` (Ruta Protegida): Sección privada exclusiva para usuarios autenticados. Si se intenta acceder sin sesión, el sistema redirige automáticamente al login.

---

### Herramientas

<p>
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</p>

- Framework: Vue 3 (Options API)
- Gestor de Estado: Vuex
- Enrutamiento: Vue Router
- Estilos: Bootstrap y CSS personalizado (Glassmorphism / Modo Oscuro)

---

### Instrucciones

Sigue estos pasos para clonar y ejecutar el entorno de desarrollo localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/the-spell-of-mathematics/weather-frontend-m7.git](https://github.com/the-spell-of-mathematics/weather-frontend-m7.git)
   

``` 
``` 
2. **Clonar el repositorio:** **Entrar a la carpeta del proyecto:**
```bash
cd weather-frontend-m7

```


3. **Instalar dependencias:**
```bash
npm install

```


4. **Ejecutar el servidor de desarrollo:**
```bash
npm run dev

```



> **Credenciales de prueba para el Login:**
> * Correo: `demo@clima.cl`
> * Contraseña: `123`
> 
> 

---

### Enlace al Repositorio

Puedes revisar el código fuente completo, la estructura de componentes y el historial de commits detallados en el siguiente enlace:
👉 [Repositorio Público en GitHub - Atmos Clima M7](https://www.google.com/search?q=https://github.com/the-spell-of-mathematics/weather-frontend-m7)

---

Hecho con ☕︎ y ❤︎ por Anastasia 

```

```