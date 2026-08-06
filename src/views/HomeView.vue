<template>
  <div>
    <!-- Recuadro oscuro translúcido para el buscador -->
    <div class="dark-glass-box mb-5 mt-3 text-center">
      <h1 class="h3 fw-bold mb-2 text-outline">Busca tu ciudad</h1>
      <p class="fs-6 fw-medium mb-4 text-outline opacity-90">Monitorea el clima desde el desierto hasta la Patagonia.</p>
      
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <input type="text" v-model="busqueda" class="form-control search-glass text-center" placeholder="Escribe una ciudad (ej. Santiago, Valdivia)...">
        </div>
      </div>

      <div class="mt-4" v-if="$store.state.isAuthenticated">
        <button @click="$store.commit('TOGGLE_UNIT')" class="btn btn-light btn-custom shadow text-dark fw-bold">
          Cambiar a {{ $store.state.usuario.preferences.unit === 'C' ? '°F' : '°C' }}
        </button>
      </div>
    </div>

    <!-- Tarjetas de ciudades minimalistas oscuras (sin fondo blanco) -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <article v-for="lugar in lugaresFiltrados" :key="lugar.id" class="col">
        <div class="card h-100 weather-card-minimal text-center p-4">
          <div class="card-body p-0 d-flex flex-column justify-content-between">
            <div>
                <h2 class="h4 fw-bold text-white text-outline mb-1">{{ lugar.nombre }}</h2>
                <p class="small text-uppercase fw-bold text-white-50 text-outline mb-4 tracking-wider">{{ lugar.estadoActual }}</p>
            </div>
            
            <div class="my-4">
                <h1 class="display-1 fw-bold text-white text-outline mb-0" style="letter-spacing: -3px;">
                  {{ $store.getters.temperaturaFormateada(lugar.tempActual) }}
                </h1>
            </div>
            
            <router-link :to="'/lugar/' + lugar.id" class="btn btn-light btn-custom w-100 mt-3 shadow-sm text-dark fw-bold">Ver Detalles</router-link>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() { return { busqueda: '' } },
  computed: {
    lugaresFiltrados() {
      return this.$store.state.lugares.filter(l => 
        l.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  }
}
</script>