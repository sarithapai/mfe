import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

const App = ({ history, onSignIn }) => {
  return (
    <StylesProvider>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin'>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path='/auth/signup'>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
