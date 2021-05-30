import getUrlWithParamConfig from './getUrlWithParamConfig';

describe('getUrlWithParamConfig', () => {
    test('should get two arguments "getPokemons" and empty object and return an object with fields pathname, protocol, host', () => {
       const url = getUrlWithParamConfig('getPokemons', {});
       expect(url).toEqual({
           method: 'GET',
           uri: {
               protocol: 'https',
               host: 'pokeapi.co',
               pathname: '/api/v2/pokemon',
               query: {}
           },
           body: {}
       });
    });

    test('should get two arguments "getPokemons" and name {name: Pikachu} and return an object with fields pathname, protocol, host', () => {
        const url = getUrlWithParamConfig('getPokemons', {name: 'Pikachu'});
        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'https',
                host: 'pokeapi.co',
                pathname: '/api/v2/pokemon',
                query: {}
            },
            body: {}
        });
    });

    test('should get two arguments "createPokemon" and object {id: 25, name: Pikachu} and return an object with fields pathname, protocol, host', () => {
        const url = getUrlWithParamConfig('createPokemon', {name: 'Pikachu'});
        expect(url).toEqual({
            method: 'POST',
            uri: {
                protocol: 'https',
                host: 'pokeapi.co',
                pathname: '/api/v2/pokemon/create',
                query: {}
            },
            body: {}
        });
    });


    test('should get two arguments "updatePokemon" and object {id: 25, name: Pikachu} and return an object with fields pathname, protocol, host', () => {
        const url = getUrlWithParamConfig('createPokemon', {id: 25, name: 'Pikachu'});
        expect(url).toEqual({
            method: 'PATCH',
            uri: {
                protocol: 'https',
                host: 'pokeapi.co',
                pathname: '/api/v2/pokemon/25',
                query: {}
            },
            body: {}
        });
    });
});
