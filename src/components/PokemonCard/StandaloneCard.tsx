import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';
import { IPokemonDescription } from '../../models/IPokemonDescription';
import { LinkEnum } from '../../../routes';

export interface IPokemonSimple {
    name: string;
    url: string;
    index: number;
}

const StandaloneCard: React.FC<IPokemonSimple> = (item) => {
    return (
      <div className={s.root_simple}>
          <div className={s.infoWrap_simple}>
            <div className={s.heading_container}>
              <Heading scale={'h2'}>
                  {item.name[0].toUpperCase() + item.name.slice(1)}
              </Heading>
            </div>
            <div>
                <img className={s.pictureWrap_simple} alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/>
            </div>
          </div>
      </div>
    );
};

export default StandaloneCard;
