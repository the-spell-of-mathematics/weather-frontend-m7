# ATMOS - Aplicación del Clima

> Aplicación web moderna desarrollada en Vue 3 que ofrece el pronóstico del tiempo en distintas ciudades de Chile, integrada con un sistema de autenticación, gestión de estado global mediante Vuex y personalización de preferencias de usuario.

---

## Descripcion del Sistema de Usuarios

El sistema maneja de forma centralizada la sesión activa de la persona conectada a través de **Vuex**. De cada usuario autenticado se almacena y administra:
- Datos básicos: Nombre y correo electrónico para la identificación en la interfaz.
- Preferencias: Configuración personalizada de la unidad de temperatura (permite alternar dinámicamente entre grados Celsius y Fahrenheit).
- Favoritos: Lista de identificadores de ciudades guardadas por el usuario para un acceso rápido y personalizado[cite: 1, 2].

---

## Rutas de la Aplicacion

La arquitectura SPA utiliza **Vue Router** para gestionar la navegación y proteger las secciones privadas[cite: 1, 2]:
- `/` (Home): Vista principal pública con el listado de ciudades de Chile y buscador en tiempo real.
- `/lugar/:id` (Detalle): Pronóstico semanal detallado por ciudad y opción para gestionar favoritos si la sesión está activa[cite: 1, 2].
- `/login` (Inicio de sesión): Formulario interactivo con validación de credenciales (casos de éxito y error)[cite: 1, 2].
- `/favoritos` (Ruta Protegida): Sección privada exclusiva para usuarios autenticados. Si se intenta acceder sin sesión, el sistema redirige automáticamente al login[cite: 1, 2].

---

## Herramientas Usadas

- Framework: Vue 3 (Options API)[cite: 1, 2]
- Gestor de Estado: Vuex[cite: 1, 2]
- Enrutamiento: Vue Router[cite: 1, 2]
- Estilos: Bootstrap y CSS personalizado (Glassmorphism / Modo Oscuro)

---

## Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para clonar y ejecutar el entorno de desarrollo localmente[cite: 1, 2]:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/weather-frontend-m7.git](https://github.com/tu-usuario/weather-frontend-m7.git)

   Entrar a la carpeta del proyecto:

