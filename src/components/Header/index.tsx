import React from 'react';
import {A, usePath} from 'hookrouter';
import s from './Header.module.scss'
import cn from 'classnames';
import { ReactComponent as PokemonLogoSvg} from './assets/pokemon.svg';
import { GENERAL_MENU } from '../../../routes';

interface IMenu {
    id: number;
    value: string;
    link: string;
}

const Header = () => {
    const path = usePath();
    console.log('###: path', path);
    return (
      <div className={s.root}>
          <div className={s.wrap}>
              <div className={s.pokemonLogo}>
                  <PokemonLogoSvg />
              </div>
              <div className={s.menuWrap}>
                 {
                     GENERAL_MENU.map(({title, link}) => (
                       <A key={title}
                          href={link}
                          className={cn(s.menuLink, {
                              [s.activeLink]: link === path})}>
                           {title}
                       </A>
                     ))
                 }
              </div>
          </div>
      </div>
    );
};

export default React.memo(Header);
