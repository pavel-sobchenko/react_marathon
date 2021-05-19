import React from 'react';
import { EmptyPageProps } from '../../components/EmptyPage';
import PokemonCard from '../../components/PokemonCard';
import { pokemons } from '../../models/pokemons';

const Pokedex: React.FC<EmptyPageProps> = ({title}) => {
     const pokemonItems = pokemons.map(
       (item) => <PokemonCard key={item.name_clean} value={item} />
       );
     return(
       <div>
           {pokemonItems}
       </div>
     );

};

export default Pokedex;
