import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
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
            <Route path='/' component={MarketingLazy} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
