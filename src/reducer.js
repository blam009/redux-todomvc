import {Map, fromJS} from 'immutable';

// Helper
function findItemIndex(state, id) {
    return state.get('todos').findIndex((item) => item.get('id') === id);
}

function setState(state, newState) {
    return state.merge(newState);
}

function toggleComplete(state, id) {
    const idx = findItemIndex(state, id);
    const updatedItem = state.get('todos').get(idx).update('status', status => status === 'active' ? 'completed' : 'active');
    return state.update('todos', todos => todos.set(idx, updatedItem));
}

function changeFilter(state, filter) {
    return state.set('filter', filter);
}

function editItem(state, id) {
    const idx = findItemIndex(state, id);
    const updatedItem = state.get('todos').get(idx).set('editing', true);
    return state.update('todos', todos => todos.set(idx, updatedItem));
}

function cancelEditing(state, id) {
    const idx = findItemIndex(state, id);
    const updatedItem = state.get('todos').get(idx).set('editing', false);
    return state.update('todos', todos => todos.set(idx, updatedItem));
}

function doneEditing(state, id, newText) {
    const idx = findItemIndex(state, id);
    const updatedItem = state.get('todos').get(idx).set('text', newText).set('editing', false);
    return state.update('todos', todos => todos.set(idx, updatedItem));
}

function clearCompleted(state) {
    return state.update('todos', (todos) => todos.filterNot((item) => item.get('status') === 'completed'));
}

function addItem(state, text) {
    const newId = state.get('todos').reduce((maxId, item) => Math.max(maxId, item.get('id')), 0) + 1;
    const newItem = Map({id: newId, text: text, status: 'active', editing: false});
    return state.update('todos', (todos) => todos.push(newItem));
}

function deleteItem(state, id) {
    return state.update('todos', (todos) => todos.filterNot((item) => item.get('id') === id));
}

const defaultState = fromJS({
    filter: 'all',
    todos: []
});

export default function(state = defaultState, action) {
    switch(action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_COMPLETE':
            return toggleComplete(state, action.id);
        case 'CHANGE_FILTER':
            return changeFilter(state, action.filter);
        case 'EDIT_ITEM':
            return editItem(state, action.id);
        case 'CANCEL_EDITING':
            return cancelEditing(state, action.id);
        case 'DONE_EDITING':
            return doneEditing(state, action.id, action.newText);
        case 'CLEAR_COMPLETED':
            return clearCompleted(state);
        case 'ADD_ITEM':
            return addItem(state, action.text);
        case 'DELETE_ITEM':
            return deleteItem(state, action.id);
    }
    return state;
}
