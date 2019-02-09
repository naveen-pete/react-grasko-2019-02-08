import '../node_modules/bootstrap/dist/css/bootstrap.css';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from "./App";
import appReducers from './reducers';

export const appStore = createStore(
   appReducers,
   compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

ReactDOM.render(
   <Provider store={appStore}>
      <App />
   </Provider>,
   document.querySelector("#root")
);
