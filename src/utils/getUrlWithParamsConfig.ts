import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string) {

    let url = {
        ...config.client.server,
        ...config.client.endpoint.getPokemons.uri
    };

    return url;
}

export default getUrlWithParamsConfig;
