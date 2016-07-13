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

// Dispatch the SET_STATE action holding the desired state
store.dispatch({
    type: 'SET_STATE',
    state: {
        todos: [
            {id: 1, text: 'React', status: 'active'},
            {id: 2, text: 'Redux', status: 'active'},
            {id: 3, text: 'Immutable', status: 'completed'}
        ],
        filter: 'all'
    }
});

ReactDOM.render(
    // Wrap the app in a Provider component to pass the store down to the components
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
);
