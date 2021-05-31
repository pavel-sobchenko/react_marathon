import Url from 'url';
import getUrlWithParamConfig from './getUrlWithParamConfig';

interface IOptions {
    method: string;
    body?: string;
}

interface IGetUrlWithParamsConfig {
    method: string;
    uri: Partial<URL>;
    body: object;
}

async function req<T>(endpoint: string, query: object): Promise<T> {
    const {method, uri, body}: IGetUrlWithParamsConfig = getUrlWithParamConfig(endpoint, query);

    let options: IOptions = {
        method
    };

    if (Object.keys(body).length > 0) {
        options.body = JSON.stringify(body);
    }

    const result = await fetch(Url.format(uri), options).then((res) => res.json());

    return result;
}

export default req;
