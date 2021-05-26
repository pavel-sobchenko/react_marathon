import React, { useEffect, useState } from 'react';
import { EmptyPageProps } from '../../components/EmptyPage';
import Heading from '../../components/Heading';
import useData from '../../hooks/useData';
import { IQuery } from '../../models/IQuery';
import useDebounce from '../../hooks/useDebounce';
import { IPokemon } from '../../models/IPokemon';

const Pokedex: React.FC<EmptyPageProps> = () => {

    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({limit: 12});
    const debouncedValue = useDebounce(searchValue, 500);
    //const { data, isLoading, isError} = useData();
    const { data, isLoading, isError} = useData<IPokemon>('getPokemons', query, [debouncedValue]);


    /*useEffect(() => {
        console.log('####: debouncedValue', debouncedValue);
    }, [debouncedValue]);
*/
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error...</div>
    }

    /*const handleSearchChange = (value: string) => {
      setSearchValue(value);
      setQuery((state: IQuery) => ({
            ...state,
            name: value
      }))
    };*/

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: e.target.value
        }))
    };

    return (
      <>
            <Heading scale={'h1'}>
                {data && data.count} <b>Pokemons</b> for you to choose your favorite
            </Heading>
          <div>
              <input type="text" value={searchValue} onChange={handleSearchChange}/>
          </div>
          <div>
              {data && data.results.map(item => <div key={item.name}>{item.name}</div>)}
          </div>
      </>
    )
};

export default Pokedex;
