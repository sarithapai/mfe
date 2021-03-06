import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App = ({ history }) => {
  return (
    <StylesProvider>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/pricing' component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
