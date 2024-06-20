<script setup>
    import { useFavoritosStore } from '@/store/favoritos';
    import { storeToRefs } from 'pinia'
    import {RouterLink} from 'vue-router'

    const useFavoritos = useFavoritosStore()
    const {favoritos} = storeToRefs(useFavoritos)
    const {remove} = useFavoritos
</script>

<template>
    <div>
        <h1 v-if="favoritos.length === 0">Sin Favoritos</h1>
        <h1 v-else>Mis Pokemones Favoritos</h1>
        <ul class="list-group mt-2">
            <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
                <div>
                    {{ poke.name }}
                </div>
                <div>
                    <button class="btn btn-danger me-2" @click="remove(poke.id)">Eliminar</button>
                    <router-link class="btn btn-primary text-decoration-none" :to="`/pokemons/${poke.name}`">Ver Información</router-link>
                </div>
            </li>
        </ul>
        

        
    </div>
</template>