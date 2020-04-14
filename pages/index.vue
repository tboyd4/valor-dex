<template>
  <div>
    <h1>Hello Poke Bros</h1>
   
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  head() {
    return {
      title: 'Pokemon'
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('pokemons/fetchPokemons')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch pokemons at this time. Please try again.'
      })
    }
  },
  computed: mapState({
    pokemons: state => state.pokemons.pokemons
  })
  
}
</script>
