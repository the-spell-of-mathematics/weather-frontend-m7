<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-5 col-lg-4">
      <div class="card weather-card border-0 shadow-lg p-5 text-center mt-5">
        <h2 class="fw-bold mb-2" style="letter-spacing: -0.5px;">ATMOS</h2>
        <p class="text-dark fw-medium opacity-75 mb-4">Ingresa a tu cuenta</p>
        
        <p class="text-muted small mb-4">
          Usuario: <strong>demo@clima.cl</strong><br>
          Clave: <strong>123</strong>
        </p>
        
        <form @submit.prevent="iniciarSesion">
          <input type="email" v-model="email" class="form-control mb-3 search-glass text-center shadow-sm" placeholder="Correo electrónico" required>
          <input type="password" v-model="password" class="form-control mb-4 search-glass text-center shadow-sm" placeholder="Contraseña" required>
          
          <div v-if="errorMsg" class="alert alert-dark p-2 mb-3 rounded-pill small border-0 fw-bold">{{ errorMsg }}</div>
          
          <button type="submit" class="btn btn-primary-custom w-100 rounded-pill py-2 fw-bold shadow-sm" :disabled="cargando">
            {{ cargando ? 'Verificando...' : 'Entrar' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { return { email: '', password: '', errorMsg: '', cargando: false } },
  methods: {
    async iniciarSesion() {
      this.cargando = true;
      this.errorMsg = '';
      const resultado = await this.$store.dispatch('procesarLogin', { email: this.email, password: this.password });
      
      if (resultado.exito) {
        this.$router.push('/');
      } else {
        this.errorMsg = resultado.mensaje;
      }
      this.cargando = false;
    }
  }
}
</script>