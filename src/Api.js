const url = 'https://pokeapi.co/api/v2';

export default {
    getPokedex: async () => {
        const request = await fetch(`${url}/generation/1/`)
            .catch(function(e) {
                console.log('erro '+e);
            });

        const json = request.json();
        return json;
    },

    getPokemon: async (id) => {
        const request = await fetch(`${url}/pokemon/${id}/`)
            .catch(function(e) {
                console.log('erro '+e);
            });
        const json = request.json();
        return json;
    },

    getPokemonColor: async (id) => {
        const request = await fetch(`${url}/pokemon-species/${id}/`)
            .catch(function(e) {
                console.log('erro '+e);
            });
        const json = request.json();
        return json;
    }
};