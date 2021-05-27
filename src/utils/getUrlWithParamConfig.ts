import config from '../config';

function getUrlWithParamConfig(endpoint: string, query: object) {
    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpoint].uri,
        query: {
            ...query
        }
    };
    //url =  url.protocol + '://' + url.host + config.client.endpoint.getPokemons.uri.pathname + '/pikachu';
    console.log('#### url:', url);
    return url;
}

export default getUrlWithParamConfig;
