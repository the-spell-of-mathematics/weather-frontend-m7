import { createStore } from 'vuex'

export default createStore({
  state: {
    // Datos mock definidos directamente en JS para evitar errores de carga[cite: 1]
    lugares: [
        { id: 1, nombre: "San Pedro de Atacama", tempActual: 28, estadoActual: "Soleado", pronosticoSemanal: [ { dia: "Lunes", min: 12, max: 28, estado: "Despejado" }, { dia: "Martes", min: 11, max: 27, estado: "Soleado" }, { dia: "Miércoles", min: 13, max: 29, estado: "Soleado" } ] },
        { id: 2, nombre: "Santiago", tempActual: 22, estadoActual: "Despejado", pronosticoSemanal: [ { dia: "Lunes", min: 8, max: 22, estado: "Despejado" }, { dia: "Martes", min: 9, max: 24, estado: "Soleado" }, { dia: "Miércoles", min: 10, max: 25, estado: "Nubosidad parcial" } ] },
        { id: 3, "nombre": "Valparaíso", tempActual: 16, estadoActual: "Nublado", pronosticoSemanal: [ { dia: "Lunes", min: 10, max: 16, estado: "Nublado" }, { dia: "Martes", min: 11, max: 17, estado: "Vaguada costera" }, { dia: "Miércoles", min: 9, max: 15, estado: "Llovizna" } ] },
        { id: 4, "nombre": "Valdivia", tempActual: 12, estadoActual: "Lluvia", pronosticoSemanal: [ { dia: "Lunes", min: 6, max: 12, estado: "Lluvia fuerte" }, { dia: "Martes", min: 5, max: 13, estado: "Chubascos" }, { dia: "Miércoles", min: 7, max: 14, estado: "Lluvia" } ] },
        { id: 5, "nombre": "Punta Arenas", tempActual: 5, estadoActual: "Viento y Frío", pronosticoSemanal: [ { dia: "Lunes", min: -2, max: 5, estado: "Viento" }, { dia: "Martes", min: -1, max: 4, estado: "Nevadas débiles" }, { dia: "Miércoles", min: -3, max: 3, estado: "Frío extremo" } ] }
    ],
    usuario: null,
    isAuthenticated: false
  },
  mutations: {
    LOGIN_SUCCESS(state, usuario) { state.usuario = usuario; state.isAuthenticated = true; },
    LOGOUT(state) { state.usuario = null; state.isAuthenticated = false; },
    TOGGLE_UNIT(state) {
      if (state.usuario) state.usuario.preferences.unit = state.usuario.preferences.unit === 'C' ? 'F' : 'C';
    },
    TOGGLE_FAVORITE(state, lugarId) {
      if (state.usuario) {
        const index = state.usuario.favorites.indexOf(lugarId);
        if (index === -1) state.usuario.favorites.push(lugarId);
        else state.usuario.favorites.splice(index, 1);
      }
    }
  },
  actions: {
    // Login con validación frontal simulada
    procesarLogin({ commit }, credenciales) {
      // Usuarios mock simulados
      const usuarios = [
        { id: 101, email: "demo@clima.cl", password: "123", name: "Usuario Demo", preferences: { unit: "C" }, favorites: [1, 2] }
      ];
      const usuarioValido = usuarios.find(u => u.email === credenciales.email && u.password === credenciales.password);
      
      if (usuarioValido) {
        commit('LOGIN_SUCCESS', usuarioValido);
        return { exito: true };
      }
      return { exito: false, mensaje: "Usuario o contraseña incorrectos" };
    }
  },
  getters: {
    lugaresFavoritos: (state) => {
      if (!state.usuario) return [];
      return state.lugares.filter(lugar => state.usuario.favorites.includes(lugar.id));
    },
    temperaturaFormateada: (state) => (tempCelsius) => {
      if (state.usuario && state.usuario.preferences.unit === 'F') {
        return `${Math.round((tempCelsius * 9/5) + 32)}°F`;
      }
      return `${tempCelsius}°C`;
    }
  }
})