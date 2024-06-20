<script setup>

    import { useGetData } from '@/composables/getData';
    import { useFavoritosStore } from '@/store/favoritos';
    import {useRoute, useRouter} from 'vue-router'

    const route = useRoute()
    const router = useRouter()
    const useFavoritos = useFavoritosStore()

    const {add, findPoke} = useFavoritos


    const {data, loading, getData, errorData} = useGetData()

    // redirecciona al usuario a otro lado de la pagina, desde el script, similar al RouterLink, RouterLink es para el template
    const back = () => {
        router.push('/pokemons')
    }

    // Llevado al composable
    // const getData = async() => {
    //     try {
    //         const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    //         // console.log(data)
    //         poke.value = data
    //     } catch (error) {
    //         console.log(error)
    //         poke.value = null
    //     }   
    // }

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    // console.log(data)

</script>


<template>
    <p v-if="loading">Cargando información ...</p>
    <div class="alert alert-danger mt-2" v-if="errorData"> No existe el Pokemon </div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="Imagen pokemon">
        <h1>Poke name: {{ $route.params.name }}</h1>
        <button class="btn btn-primary mb-2" @click="add(data)" :disabled="findPoke(data.name)">Añadir a Favoritos</button>
    </div>

    <button class="btn btn-outline-primary" @click="back">Volver</button>

</template>