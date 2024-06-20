<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <nav class="navbar navbar-dark bg-dark">
    <div class="container">      
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        PokeAPI
      </router-link>
      <div>
        <!-- active-class="active" -->
          <!-- <router-link class="btn btn-outline-primary me-2" to="/">
            Home
          </router-link> -->
          <!-- active-class="active" -->
          <router-link class="btn btn-outline-primary me-2" to="/pokemons">
            Pokemons
          </router-link>
          <!-- active-class="active" -->
          <router-link class="btn btn-outline-primary me-2" to="/favoritos">
            Favoritos
          </router-link>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>

