import React from 'react';
import ReactDOM from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
import './index.css';
import App from './App';
import rootReducer from './reducers/root';
import { rootEpic } from './epics/index';

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer,applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

//export const appWithProvider = (
    
//);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
