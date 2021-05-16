import React from 'react';
import Button from '../Button';
import Parallax from '../Parallax/intex';

const Layout: React.FC = ({children}) => {
    return (
      <div>
          <h1>
              <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon</p>
          <Button onClick={() => {console.log("Click Button!")}}>
              See pokemons
          </Button>
          <div className={''}>We&apos;ll see Parallax here soon...</div>
          <div>
              <Parallax />
          </div>
      </div>
    );
};

export default Layout;
