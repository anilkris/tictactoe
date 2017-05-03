import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tictacApp from './reducers';


let store = createStore(tictacApp);



ReactDOM.render(
    <Provider store = {store}>
     <App />
    </Provider>,
  document.getElementById('root')
);
