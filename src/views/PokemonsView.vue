<script setup>

    import {RouterLink} from 'vue-router'
    import {useGetData} from '@/composables/getData.js'

    const { data, loading, getData, errorData } = useGetData()

    // Llevado al composable
    // const getData = async() => {
    //     try {
    //         const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
    //         pokemons.value = data.results
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    getData('https://pokeapi.co/api/v2/pokemon')


    

</script>


<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando información ...</p>
    <div class="alert alert-danger mt-2" v-if="errorData"> {{ errorData }} </div>
    <div v-if="data">
        <ul class="list-group">
            <li class="list-group-item" v-for="pokemon in data.results">
                <RouterLink class="text-decoration-none" :to="`/pokemons/${pokemon.name}`"> {{ pokemon.name }} </RouterLink>
            </li>
        </ul>
        <div class="mt-2 text-center">
            <button class="btn btn-success me-2" @click="getData(data.previous)" :disabled=" !data.previous ">Previous</button>
            <button class="btn btn-primary" @click="getData(data.next)" :disabled=" !data.next " >Next</button>
        </div>
    </div>
</template>
