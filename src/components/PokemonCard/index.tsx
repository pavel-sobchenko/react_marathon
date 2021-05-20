import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';
import { IPokemonDescription } from '../../models/IPokemonDescription';

const PokemonCard: React.FC<IPokemonDescription> = (item) => {
    return (
      <div className={s.root}>
          <div className={s.infoWrap}>
              <Heading scale={'h1'}>
                  {item.name_clean}
              </Heading>
              <div className={s.statWrap}>
                  <div className={s.statItem}>
                      <div className={s.statValue}>
                          {item.stats.attack}
                      </div>
                      Attack
                  </div>
                  <div className={s.statItem}>
                      <div className={s.statValue}>
                          {item.stats.defense}
                      </div>
                      Defense
                  </div>
              </div>
              <div className={s.labelWrap}>
                  <span className={s.label}>{item.types.join(',')}</span>
              </div>
          </div>
          <div className={s.pictureWrap}>
              <img src={item.img} alt={item.name_clean} />
          </div>
      </div>
    );
};

export default PokemonCard;
