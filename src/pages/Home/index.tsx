import React from 'react';
import s from './Home.module.scss';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

const HomePage = () => {
    return (
      <div className={s.root}>
          <Header />
          <Layout />
      </div>
    );
};

export default HomePage;
