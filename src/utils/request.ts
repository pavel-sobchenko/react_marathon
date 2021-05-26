import Url from 'url';
import getUrlWithParamConfig from './getUrlWithParamConfig';

async function req(endpoint: string) {
    const uri = Url.format(getUrlWithParamConfig(endpoint));
    return await fetch(uri).then((res) => res.json());
}

export default req;
