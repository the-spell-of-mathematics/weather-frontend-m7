<template>
  <div class="d-flex flex-column min-vh-100">
    <header>
      <nav class="navbar navbar-expand-lg navbar-glass py-3 sticky-top">
        <div class="container d-flex justify-content-between align-items-center">
          <router-link to="/" class="navbar-brand fw-bolder fs-3 text-dark" style="letter-spacing: 1px;">
            ATMOS
          </router-link>
          
          <div class="d-flex align-items-center">
            <template v-if="$store.state.isAuthenticated">
              <span class="me-4 fw-bold text-dark d-none d-sm-inline">Hola, {{ $store.state.usuario.name }}</span>
              <router-link to="/favoritos" class="btn text-dark fw-bold me-3">Favoritos</router-link>
              <button @click="cerrarSesion" class="btn btn-primary-custom btn-custom shadow-sm">Salir</button>
            </template>
            <template v-else>
              <router-link to="/login" class="btn btn-primary-custom btn-custom px-4 shadow-sm">Iniciar Sesión</router-link>
            </template>
          </div>
        </div>
      </nav>
    </header>

    <main class="container my-4 flex-grow-1">
      <router-view></router-view>
    </main>

    <!-- Copyright de la página web -->
    <footer class="text-center py-4 text-white-50 small" style="background: rgba(0,0,0,0.4); backdrop-filter: blur(5px);">
      <div class="container">
        <p class="mb-0 text-outline">&copy; 2026 ATMOS Chile. Todos los derechos reservados. Santiago, Región Metropolitana.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    cerrarSesion() {
      this.$store.commit('LOGOUT');
      this.$router.push('/login');
    }
  },
  mounted() {
    const nombreImagen = '/images.png'; 
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('${nombreImagen}')`;
  }
}
</script>