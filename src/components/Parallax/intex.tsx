import React from 'react';

import s from './Parallax.module.scss';

import PokeballPng from './assets/pokeball1.png';
import CloudPng1 from './assets/cloud1.png';
import CloudPng2 from './assets/cloud2.png';
import PikachuPng from './assets/pikachu.png';

const Parallax: React.FC = ({children}) => {
    return (
      <div className={s.root}>
        <div>
            <img src="{PokeballPng}" alt="Pokeball"/>
        </div>
        <div>
          <img src="{CloudPng1}" alt="CloudPng1"/>
        </div>
        <div>
          <img src="{CloudPng2}" alt="CloudPng2"/>
        </div>
        <div>
          <img src="{PikachuPng}" alt="PikachuPng"/>
        </div>
      </div>
    );
};

export default Parallax;
