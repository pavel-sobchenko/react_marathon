import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';

const App = () => {
  console.log('SOME LOG');
  return <div className={cn(s.header, 'color')}>This is App Component Marathon!</div>;
};

export default App;
