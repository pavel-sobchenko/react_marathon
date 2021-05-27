import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';
import { IPokemonDescription } from '../../models/IPokemonDescription';

export interface IPokemonSimple {
    name: string;
}

const PokemonSimpleCard: React.FC<IPokemonSimple> = (item) => {
    return (
      <div className={s.root_simple}>
          <div className={s.infoWrap_simple}>
              <Heading scale={'h2'}>
                  {item.name[0].toUpperCase() + item.name.slice(1)}
              </Heading>
              <a href={`https://www.pokemon.com/us/pokedex/${item.name}`} target="_blank" rel="noreferrer">
                  <img className={s.pictureWrap_simple} alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/>
              </a>
          </div>
      </div>
    );
};

export default PokemonSimpleCard;
