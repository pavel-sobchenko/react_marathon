import React from 'react';
import Button from '../Button';
import Parallax from '../Parallax/intex';
import {navigate} from 'hookrouter';
import { ButtonColor, ButtonSize } from '../Button/Button.Interface';

import s from './Layout.module.scss';
import Heading from '../Heading';
import { LinkEnum } from '../../../routes';

const Layout: React.FC = ({children}) => {
    return (
      <div className={s.root}>
          <div className={s.left}>
              <Heading scale={'h2'}>
                  <b>Find</b> all your favorite <b>Pokemon</b>
              </Heading>
              <p>You can know the type of Pokemon</p>
              <Button
                onClick={() => {navigate(LinkEnum.POKEDEX)}}
                size={ButtonSize.middle}
                color={ButtonColor.green}>
                  See pokemons
              </Button>
              <div className={''}>We&apos;ll see Parallax here soon...</div>
          </div>

          <div className={s.right}>
              <Parallax />
          </div>
      </div>
    );
};

export default Layout;
