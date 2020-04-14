import PokeApiService from '@/services/PokeApiService';

export const state = () => ({
    pokemons: []
})
export const mutations = {
    SET_POKEMONS(state, pokemons) {
        state.pokemons = pokemons
    }
}
export const actions = {
    async fetchPokemons({commit}) {
        const results = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon');
        let payload = results.results
        console.log('THE PAYLOAD :  ' + JSON.stringify(payload))
        commit('SET_POKEMONS', payload);
    }
}