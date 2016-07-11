import React from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

var ImmutablePropTypes = require('react-immutable-proptypes');

class TodoApp extends React.Component {
    getItems() {
        return this.props.todos || [];
    }
    render() {
        return <div>
            <section className="todoapp">
                <TodoHeader addItem={(item) => {console.log('=> addItem(' + item + ')');}} />
                <TodoList filter={this.props.filter}
                          todos={this.props.todos}

                          // TodoItem funcs
                          toggleComplete={() => {console.log('=> toggleComplete()');}}
                          deleteItem={() => {console.log('=> deleteItem()');}}
                          editItem={() => {console.log('=> editItem()');}}

                          // TextInput funcs
                          doneEditing={() => {console.log('=> doneEditing');}}
                          cancelEditing={() => {console.log('=> cancelEditing');}}/>
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
            editing: React.PropTypes.bool
        })
    ).isRequired
};

export default TodoApp;
