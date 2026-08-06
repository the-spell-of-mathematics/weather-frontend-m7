<template>
  <div v-if="lugar" class="mt-4">
    <!-- Encabezado limpio con delineado -->
    <div class="text-center mb-5">
      <h1 class="display-3 fw-bold mb-2 text-outline">{{ lugar.nombre }}</h1>
      <p class="fs-5 text-uppercase fw-bold text-outline opacity-90">{{ lugar.estadoActual }}</p>
      
      <div class="d-flex justify-content-center gap-3 mt-4">
        <router-link to="/" class="btn btn-light btn-custom px-4 fw-bold shadow">Volver al Inicio</router-link>
        
        <button v-if="$store.state.isAuthenticated" @click="toggleFavorito" class="btn btn-custom px-4 shadow fw-bold" :class="esFavorito ? 'btn-primary-custom text-white' : 'btn-outline-light text-outline'">
          {{ esFavorito ? 'Quitar de Favoritos' : 'Guardar Favorito' }}
        </button>
      </div>
    </div>

    <!-- Pronóstico Minimalista sin recuadro blanco (Estilo bloques flotantes) -->
    <div class="row g-3 justify-content-center mt-4">
      <div class="col-12 text-center mb-2">
        <h3 class="h5 fw-bold text-uppercase text-outline tracking-wider">Pronóstico Semanal</h3>
      </div>
      
      <div v-for="dia in lugar.pronosticoSemanal" :key="dia.dia" class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card-minimal text-center p-3 h-100">
          <div class="card-body p-0 d-flex flex-column justify-content-between">
            <span class="fw-bold text-white text-outline fs-6 mb-2">{{ dia.dia }}</span>
            <span class="small text-white-50 text-outline mb-3">{{ dia.estado }}</span>
            <div>
              <div class="text-white-50 text-outline small">Mín: <span class="fw-bold text-white">{{ $store.getters.temperaturaFormateada(dia.min) }}</span></div>
              <div class="text-white text-outline fs-5 fw-bold mt-1">Máx: {{ $store.getters.temperaturaFormateada(dia.max) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lugar() {
      const idRuta = parseInt(this.$route.params.id);
      return this.$store.state.lugares.find(l => l.id === idRuta);
    },
    esFavorito() {
      return this.$store.state.isAuthenticated && this.$store.state.usuario.favorites.includes(this.lugar.id);
    }
  },
  methods: {
    toggleFavorito() {
      this.$store.commit('TOGGLE_FAVORITE', this.lugar.id);
    }
  }
}
</script>