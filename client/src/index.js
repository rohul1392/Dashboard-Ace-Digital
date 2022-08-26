import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import AuthContextProvider from '../src/contexts/AuthContext';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </Provider>,
  document.getElementById('root'),
);
