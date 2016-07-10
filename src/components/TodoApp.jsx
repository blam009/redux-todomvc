import React from 'react';

import TodoList from './TodoList';

var ImmutablePropTypes = require('react-immutable-proptypes');

class TodoApp extends React.Component {
    getItems() {
        return this.props.todos || [];
    }
    render() {
        return <div>
            <section className="todoapp">
                <TodoList filter={this.props.filter} todos={this.props.todos} />
            </section>
        </div>;
    }
}

TodoApp.propTypes = {
    filter: React.PropTypes.string,
    todos: ImmutablePropTypes.listOf(
        ImmutablePropTypes.mapContains({
            id: React.PropTypes.number.isRequired,
            text: React.PropTypes.string.isRequired,
            status: React.PropTypes.string.isRequired,
            editing: React.PropTypes.bool.isRequired
        })
    ).isRequired
};

export default TodoApp;
