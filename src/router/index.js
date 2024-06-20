// Importante añadir el archivo _redirects en public para que todas las rutas se redirijan al index.html, debido al router

import { createRouter, createWebHistory } from 'vue-router'
import PokemonsView from '../views/PokemonsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      // sin lazy-loaded: carga todo los componentes al entrar a la página
      component: PokemonsView
    },
    {
      path: '/about',
      name: 'about',
      // lazy-loaded: carg al momento de ir al vista
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      // lazy-loaded: carga al momento de ir al vista
      component: () => import('../views/PokemonsView.vue')
    }, 
    {
      path: '/pokemons/:name',
      name: 'pokemon',
      // lazy-loaded: carga al momento de ir al vista
      component: () => import('../views/PokeView.vue')
    }, 
    {
      path: '/favoritos',
      name: 'favoritos',
      // lazy-loaded: carga al momento de ir al vista
      component: () => import('../views/FavoritosView.vue')
    }, 
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound ',
      // lazy-loaded: carga al momento de ir al vista
      component: () => import('../views/NotFoundView.vue')
    }, 
  ]
})

export default router
