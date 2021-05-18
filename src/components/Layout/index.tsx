import React from 'react';
import Button from '../Button';
import Parallax from '../Parallax/intex';
import { ButtonColor, ButtonSize } from '../Button/Button.Interface';

import s from './Layout.module.scss';
import Heading from '../Heading';

const Layout: React.FC = ({children}) => {
    return (
      <div className={s.root}>
          <div className={s.left}>
              <Heading scale={'h1'}>
                  <b>Find</b> all your favorite <b>Pokemon</b>
              </Heading>
              <p>You can know the type of Pokemon</p>
              <Button
                onClick={() => {console.log("Click Button!")}}
                size={ButtonSize.large}
                color={ButtonColor.red}>
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
