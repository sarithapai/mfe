import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (ele, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, ele);

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      const { pathname } = history.location;
      if (pathname != nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV == 'development') {
  let element = document.querySelector('#auth-dev-root');
  if (element) {
    mount(element, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
