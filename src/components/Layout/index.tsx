import React from 'react';
import Button from '../Button';
import Parallax from '../Parallax/intex';

import s from './Layout.module.scss';

const Layout: React.FC = ({children}) => {
    return (
      <div className={s.root}>
          <div className={s.left}>
              <h1>
                  <b>Find</b> all your favorite <b>Pokemon</b>
              </h1>
              <p>You can know the type of Pokemon</p>
              <Button onClick={() => {console.log("Click Button!")}}>
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
