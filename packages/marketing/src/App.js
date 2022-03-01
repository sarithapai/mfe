import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider>
        <Route exact path='/pricing' component={Pricing}></Route>
        <Route path='/' component={Landing}></Route>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
