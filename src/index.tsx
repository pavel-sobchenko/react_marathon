import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import configStore from './configStore'

const store = configStore({});

ReactDom.render((
  <Provider store={store}>
    <App />
    </Provider>
), document.getElementById('root'));
