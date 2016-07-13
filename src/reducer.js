import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function toggleComplete(state, id) {
    const idx = state.get('todos').findIndex((item) => item.get('id') === id);
    const updatedItem = state.get('todos').get(idx).update('status', status => status === 'active' ? 'completed' : 'active');
    return state.update('todos', todos => todos.set(idx, updatedItem));
}

function changeFilter(state, filter) {
    return state.set('filter', filter);
}

export default function(state = Map(), action) {
    switch(action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_COMPLETE':
            return toggleComplete(state, action.id);
        case 'CHANGE_FILTER':
            return changeFilter(state, action.filter);
    }
    return state;
}
