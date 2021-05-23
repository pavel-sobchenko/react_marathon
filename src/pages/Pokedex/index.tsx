import React, { useEffect, useState } from 'react';
import { EmptyPageProps } from '../../components/EmptyPage';
import PokemonCard from '../../components/PokemonCard';
import { pokemons } from '../../models/pokemons';
import { IPokemonDescription } from '../../models/IPokemonDescription';
import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import config from '../../config';
import req from '../../utils/request';

const usePokemons = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true);
            try {
                const result = await req('getPokemons');

                setData(result);
            } catch (e) {
                console.log('!!!!Error: ', e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getPokemons();
    }, []);

    return {data, isLoading, isError};
};

const Pokedex: React.FC<EmptyPageProps> = () => {

    const {data, isLoading, isError} = usePokemons();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error...</div>
    }

    return(
      <>
          <div>
             {/* {data.count} <b>Pokemons</b> for you to choose your favorite
              { data.results.map((item, index) =>
                <div key={item.name}>
                    {item.name}
                    <div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`} alt={item.name}/>
                    </div>
                </div>)}*/}
          </div>
      </>
    );
};

export default Pokedex;
