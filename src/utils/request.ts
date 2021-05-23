import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoing: string) {
    const uri = Url.format(getUrlWithParamsConfig('getPokemons'));
    return await fetch(uri,
      {
          mode: "no-cors",
          method: "GET",
          headers: {
              "Accept": "application/json"
          }
      })
      .then((res) => res.json())
}

export default req;
