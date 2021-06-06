export const config = {
    client: {
        server: {
            protocol: 'https',
            host: 'pokeapi.co'
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                uri: {
                    pathname: '/api/v2/pokemon'
                }
            },
            getPokemon: {
                method: 'GET',
                uri: {
                    pathname: '/api/v2/pokemon/{id}'
                }
            },
            createPokemon: {
                method: 'POST',
                uri: {
                    pathname: '/api/v2/pokemon/create'
                }
            },
            updatePokemon: {
                method: 'PATCH',
                uri: {
                    pathname: '/api/v2/pokemon/{id}'
                }
            },
            deletePokemon: {
                method: 'DELETE',
                uri: {
                    pathname: '/api/v2/pokemon/{id}/delete'
                }
            },
            getPokemonTypes: {
                method: 'GET',
                uri: {
                    pathname: '/api/v2/type/{id}'
                }
            }
        }
    }
}

export default config;
