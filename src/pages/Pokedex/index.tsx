import React, { useEffect, useMemo, useState } from 'react';
import { EmptyPageProps } from '../../components/EmptyPage';
import Heading from '../../components/Heading';
import useData from '../../hooks/useData';
import { IQuery } from '../../models/IQuery';
import useDebounce from '../../hooks/useDebounce';
import { IPokemon } from '../../models/IPokemon';
import s from './Pokedex.module.scss';
import PokemonSimpleCard, { IPokemonSimple } from '../../components/PokemonCard/PokemonSimpleCard';
import { useDispatch, useSelector } from 'react-redux';
import pokemons, { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemon';

const Pokedex: React.FC<EmptyPageProps> = () => {
    const dispatch = useDispatch();
    const types = useSelector(getPokemonsTypes);
    const isTypesLoading = useSelector(getPokemonsTypesLoading);
    console.log('### types: ', types);
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({limit: 10});
    const debouncedValue = useDebounce(searchValue, 500);

    const { data, isLoading, isError} = useData<IPokemon>('getPokemons', query, [searchValue]);

    useEffect(() => {
        dispatch(getTypesAction());
    }, []);


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error...</div>
    }

   /* const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('#####: e', e);
        setSearchValue(e.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: e.target.value
        }))
    };*/

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        console.log('#####: searchValue', searchValue);
    };

    return (
      <>
            <Heading scale={'h1'}>
                {!isLoading && data && data.count} <b>Pokemons</b> for you to choose your favorite
            </Heading>
          <div>
              <input className={s.search} type="text" value={searchValue} onChange={handleSearchChange}/>
          </div>
            <div>
                {
                    isTypesLoading ? '...Loading' : types.map((item: any) => <div>{item}</div>)
                }
            </div>
           <div className={s.root}>
              {!isLoading && data && data.results.map((item, index) => {
                  item['index'] = index;
                  return <PokemonSimpleCard key={item.name} {...item}/>
              })
              }
          </div>

      </>
    )
};

export default Pokedex;
