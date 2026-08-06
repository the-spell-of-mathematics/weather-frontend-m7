<template>
  <div v-if="lugar" class="mt-4">
    <div class="text-center mb-5 text-white">
      <h1 class="display-3 fw-bold mb-2 text-shadow">{{ lugar.nombre }}</h1>
      <p class="text-white fs-5 text-uppercase fw-bold text-shadow">{{ lugar.estadoActual }}</p>
      
      <div class="d-flex justify-content-center gap-3 mt-4">
        <router-link to="/" class="btn btn-light btn-custom px-4 fw-bold shadow">Volver al Inicio</router-link>
        
        <button v-if="$store.state.isAuthenticated" @click="toggleFavorito" class="btn btn-custom px-4 shadow fw-bold" :class="esFavorito ? 'btn-primary-custom' : 'btn-outline-light'">
          {{ esFavorito ? 'Quitar de Favoritos' : 'Guardar Favorito' }}
        </button>
      </div>
    </div>

    <div class="row g-4 justify-content-center mt-2">
      <section class="col-lg-8">
        <div class="card shadow-lg weather-card border-0">
          <div class="card-header bg-transparent pt-4 pb-0 border-0 text-center">
            <h2 class="h5 fw-bold text-dark text-uppercase">Pronóstico Semanal</h2>
          </div>
          <div class="card-body p-4">
            <table class="table table-borderless text-center align-middle mb-0">
              <thead class="border-bottom">
                <tr>
                  <th class="fw-bold text-muted py-3">Día</th>
                  <th class="fw-bold text-muted py-3">Estado</th>
                  <th class="fw-bold text-muted py-3">Mínima</th>
                  <th class="fw-bold text-muted py-3">Máxima</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dia in lugar.pronosticoSemanal" :key="dia.dia">
                  <td class="text-dark fw-bold py-3">{{ dia.dia }}</td>
                  <td class="text-muted fw-semibold py-3">{{ dia.estado }}</td>
                  <td class="text-secondary fw-bold py-3">{{ $store.getters.temperaturaFormateada(dia.min) }}</td>
                  <td class="text-dark fw-bolder fs-5 py-3">{{ $store.getters.temperaturaFormateada(dia.max) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
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