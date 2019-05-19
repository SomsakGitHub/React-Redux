import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import commentReducer from './commentReducer';
import { Provider } from 'react-redux';

const store = createStore(commentReducer); //Store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

