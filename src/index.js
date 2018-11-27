import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';

import reducers from './reducers';

import App from './App';


const createStoreWithMiddileware = applyMiddleware() (createStore)

ReactDOM.render(
<Provider store = {createStoreWithMiddileware(reducers)}>
<App />
</Provider>
, document.getElementById('root'));

