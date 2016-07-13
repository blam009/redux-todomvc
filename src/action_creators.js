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
