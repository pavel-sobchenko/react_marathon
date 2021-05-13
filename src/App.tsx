import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';
import obj from './example';

const App = () => (
    <div>
        <div className={cn(s.header, 'color')}>This is App Component Marathon!</div>
        <div>{obj.concat('Goodbye', 'Hell')}</div>
        <div>{obj.arr.map((i: number) => i + 10)}</div>
        <div>{obj.arr.reduce((a,b) => a + b, 0)}</div>
        <div>{JSON.stringify(obj.myHometask)}</div>
    </div>
    );

export default App;
