import config from '../config';

function getUrlWithParamConfig(endpoint: string, query: object) {
    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpoint].uri
    }
    return url;
}

export default getUrlWithParamConfig;
