import React from 'react';
import ReactDOM from 'react-dom';
import {compose, applyMiddleware, createStore} from 'redux';
import createlogger from 'redux-logger';
import {Provider} from 'react-redux';

import reducer from './reducer';
import {setState} from './action_creators';
import {TodoAppContainer} from './components/TodoApp';

require('../node_modules/todomvc-app-css/index.css');

// Instantiate a new Redux store
const logger = createlogger();
const store = createStore(reducer, undefined, compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Dispatch the setState action creator with the desired initial state
store.dispatch(setState({
    filter: 'all',
    todos: [],
}));

ReactDOM.render(
    // Wrap the app in a Provider component to pass the store down to the components
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
);
