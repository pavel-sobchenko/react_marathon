import React, { useEffect, useState } from 'react';
import { EmptyPageProps } from '../../components/EmptyPage';
import Heading from '../../components/Heading';
import config from '../../config';
import req from '../../utils/request';

const usePokemons = () => {
    const [data, setData] = useState({ count: 0, results: [{name: ""}]});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const getPokemons = async () => {
            setIsLoading(true);
            const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
            console.log("##URL: ", url);
            try {
                const result = await req('getPokemons');
                console.log(result);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getPokemons();
    }, []);

    return {
        data,
        isLoading,
        isError
    }
};

const Pokedex: React.FC<EmptyPageProps> = () => {

    const {
        data,
        isLoading,
        isError} = usePokemons();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error...</div>
    }

    return (
      <>
            <Heading scale={'h1'}>
                {data.count} <b>Pokemons</b> for you to choose your favorite
            </Heading>
          <div>
              {data.results.map(item => <div key={item.name}>{item.name}</div>)}
          </div>
      </>
    )
};

export default Pokedex;
