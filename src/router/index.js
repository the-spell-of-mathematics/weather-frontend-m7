import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleView from '../views/DetalleView.vue'
import LoginView from '../views/LoginView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import store from '../store' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/lugar/:id', name: 'detalle', component: DetalleView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/favoritos', name: 'favoritos', component: FavoritosView, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuth = store.state.isAuthenticated;
  if (to.meta.requiresAuth && !isAuth) next('/login');
  else if (to.name === 'login' && isAuth) next('/');
  else next();
});

export default router