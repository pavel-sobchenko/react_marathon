export const config = {
    client: {
        server: {
            protocol: 'http',
            host: 'pokeapi.co'
        },
        endpoint: {
          getPokemons: {
              method: 'GET',
              uri: {
                  pathname: '/api/v2/pokemon',
              }
          }
        }
    }
};

export default config;
