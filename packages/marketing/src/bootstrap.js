import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (ele) => {
  ReactDOM.render(<App />, ele);
};

if (process.env.NODE_ENV == 'development') {
  let element = document.querySelector('#marketing-dev-root');
  if (element) {
    mount(element);
  }
}
export { mount };
