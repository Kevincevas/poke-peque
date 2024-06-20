<script setup>
  import { useCounterStore } from '@/store/counter';
  import { storeToRefs } from 'pinia'

  const useCounter = useCounterStore()

  // destructuracion de funcion o acciones
  const { increment } = useCounter

  // destructuracion de getter y referencias reactivas, referencias o propiedades computadas
  const { count, double } = storeToRefs(useCounter)

</script>

<template>
  <main>
    <h1>Home Counter: {{ count }}</h1>
    <h2>double: {{ double }}</h2>

    <button @click="increment">Incrementar</button>
  </main>
</template>
