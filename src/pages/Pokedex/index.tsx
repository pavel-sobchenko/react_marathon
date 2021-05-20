import React from 'react';
import { EmptyPageProps } from '../../components/EmptyPage';
import PokemonCard from '../../components/PokemonCard';
import { pokemons } from '../../models/pokemons';
import { IPokemonDescription } from '../../models/IPokemonDescription';
import s from './Pokedex.module.scss';

const Pokedex: React.FC<EmptyPageProps> = () => {
     const pokemonItems = pokemons.map(
       (item: IPokemonDescription) =>
         <PokemonCard key={item.id} {...item}/>
       );
     return(
       <div className={s.root}>
           {pokemonItems}
       </div>
     );

};

export default Pokedex;
