import React from 'react';

import TodoItem from './TodoItem';

var ImmutablePropTypes = require('react-immutable-proptypes');
    
class TodoList extends React.Component {
    getItems() {
        if (this.props.todos) {
            return this.props.todos.filter(
                (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
            );
        }
        return [];
    }
    isCompleted(item) {
        return item.get('status') == 'completed';
    }
    render() {
        return <section className="main">
            <ul className="todo-list">
                {this.getItems().map(item =>
                    <TodoItem
                        key={item.get('text')}
                        text={item.get('text')}
                        isCompleted={this.isCompleted(item)}
                        isEditing={item.get('editing')}

                        // Passing down the callback functions
                        toggleComplete={this.props.toggleComplete}
                        deleteItem={this.props.deleteItem}
                        editItem={this.props.editItem}
                    />
                )}
            </ul>
        </section>;
    }
}

TodoList.propTypes = {
    filter: React.PropTypes.string,
    todos: ImmutablePropTypes.listOf(
        ImmutablePropTypes.mapContains({
            id: React.PropTypes.number.isRequired,
            text: React.PropTypes.string.isRequired,
            status: React.PropTypes.string.isRequired,
            editing: React.PropTypes.bool
        })
    ).isRequired,

    toggleComplete: React.PropTypes.func,
    deleteItem: React.PropTypes.func,
    editItem: React.PropTypes.func
};

export default TodoList;
