import React from 'react';
import {useRoutes} from 'hookrouter';
import routes from '../routes';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import req from './utils/request';

const App = () => {
    const match = useRoutes(routes);
    return match ?
          (
            <>
                <Header/>
                {match}
            </>
          )
      :
            <NotFoundPage/>;
};

export default App;
