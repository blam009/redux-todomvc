export function toggleComplete(id) {
    return {
        type: 'TOGGLE_COMPLETE',
        id
    };
}

export function changeFilter(filter) {
    return {
        type: 'CHANGE_FILTER',
        filter
    };
}

export function editItem(id) {
    return {
        type: 'EDIT_ITEM',
        id
    };
}

export function cancelEditing(id) {
    return {
        type: 'CANCEL_EDITING',
        id
    };
}

export function doneEditing(id, newText) {
    return {
        type: 'DONE_EDITING',
        id,
        newText
    };
}
