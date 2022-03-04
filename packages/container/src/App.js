import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();
/* If BrowserRouter is used then accessing history is difficult hence
    Router with browserHistory is used here*/

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <div>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => {
            setIsSignedIn(false);
          }}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/auth'>
              <AuthLazy
                onSignIn={() => {
                  setIsSignedIn(true);
                }}
              />
            </Route>
            <Route path='/dashboard'>
              {!isSignedIn && <Redirect to='/' />}
              <DashboardLazy />
            </Route>

            <Route path='/' component={MarketingLazy} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
