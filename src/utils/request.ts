import Url from 'url';
import getUrlWithParamConfig from './getUrlWithParamConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
    const uri = Url.format(getUrlWithParamConfig(endpoint, query));
    return await fetch(uri).then(
      (res) => {
          console.log('### RES: ', res);
          return res.json();
      }
    );
}

export default req;
