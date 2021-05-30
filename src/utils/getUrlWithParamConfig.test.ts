import getUrlWithParamConfig from './getUrlWithParamConfig';

describe('getUrlWithParamConfig', () => {
    test('should get two arguments "getPokemons" and empty object and return an object with fields pathname, protocol, host', () => {
       const url = getUrlWithParamConfig('getPokemons', {});
       expect(url).toEqual({
           protocol: 'https',
           host: 'pokeapi.co',
           pathname: '/api/v2/pokemon',
           query: {}
       });
    });

    test('should get two arguments "getPokemon" and id and return an object with fields pathname, protocol, host and empty query', () => {
        const url = getUrlWithParamConfig('getPokemons', {});
        expect(url).toEqual({
            protocol: 'https',
            host: 'pokeapi.co',
            pathname: '/api/v2/pokemon/1',
            query: {}
        });
    });
});
