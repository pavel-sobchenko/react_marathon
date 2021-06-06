import React from 'react';
import s from './Home.module.scss';

import Layout from '../../components/Layout';

const HomePage = () => {
    return (
      <div className={s.root}>
          <Layout />
      </div>
    );
};

export default HomePage;
