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

    getPokemon: async (name) => {
        const request = await fetch(`${url}/pokemon/${name}/`)
            .catch(function(e) {
                console.log('erro '+e);
            });
        const json = request.json();
        return json;
    },

    getPokemonColor: async (name) => {
        const request = await fetch(`${url}/pokemon-species/${name}/`)
            .catch(function(e) {
                console.log('erro '+e);
            });
        const json = request.json();
        return json;
    }
};