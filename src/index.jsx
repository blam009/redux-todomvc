import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import {TodoAppContainer} from './components/TodoApp';

require('../node_modules/todomvc-app-css/index.css');

// Instantiate a new Redux store
const createStoreWithDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreWithDevTools(reducer);

// Dispatch the SET_STATE action holding the desired initial state
store.dispatch({
    type: 'SET_STATE',
    state: {
        filter: 'all',
        todos: [],
    }
});

ReactDOM.render(
    // Wrap the app in a Provider component to pass the store down to the components
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
);
