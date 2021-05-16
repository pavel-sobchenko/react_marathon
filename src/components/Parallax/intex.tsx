import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import PokeballPng from './assets/pokeball1.png';
import CloudPng1 from './assets/cloud1.png';
import CloudPng2 from './assets/cloud2.png';
import PikachuPng from './assets/pikachu.png';

const Parallax: React.FC = ({children}) => {

    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);

    useEffect(() => {

        const handleMouseMove = (event: MouseEvent) => {
            setScreenX(event.screenX);
            setScreenY(event.screenY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [screenX, screenY]);

    return (
      <div className={s.container}>
        <div
          style={{
              transform: `translate(${screenY*0.03}px, ${screenX*0.03}px)`
          }}>
          <img src={PokeballPng} alt="Pokeball"/>
        </div>
        <div
          style={{
              transform: `translate(${screenY*0.02}px, ${screenX*0.02}px)`
          }}>
          <img src={CloudPng1} alt="CloudPng1"/>
        </div>
        <div
          style={{
              transform: `translate(${screenY*0.04}px, ${screenX*0.04}px)`
          }}>
          <img src={CloudPng2} alt="CloudPng2"/>
        </div>
        <div
          style={{
              transform: `translate(${screenY*0.01}px, ${screenX*0.01}px)`
          }}
        >
          <img src={PikachuPng} alt="PikachuPng"/>
        </div>
      </div>
    );
};

export default Parallax;
