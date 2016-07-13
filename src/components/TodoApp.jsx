import React from 'react';
import {connect} from 'react-redux';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoTools from './TodoTools';
import Footer from './Footer';
import * as actionCreators from '../action_creators';

var ImmutablePropTypes = require('react-immutable-proptypes');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.getNbActiveItems = this.getNbActiveItems.bind(this);
    }
    getNbActiveItems() {
        if (this.props.todos) {
            const activeItems = this.props.todos.filter(
                (item) => item.get('status') === 'active'
            );
            return activeItems.size;
        }
        return 0;
    }
    render() {
        return <div>
            <section className="todoapp">
                <TodoHeader addItem={(item) => {console.log('=> addItem(' + item + ')');}} />
                <TodoList filter={this.props.filter}
                          todos={this.props.todos}

                          // TodoItem funcs
                          toggleComplete={this.props.toggleComplete}
                          deleteItem={() => {console.log('=> deleteItem()');}}
                          editItem={() => {console.log('=> editItem()');}}

                          // TextInput funcs
                          doneEditing={() => {console.log('=> doneEditing');}}
                          cancelEditing={() => {console.log('=> cancelEditing');}}/>
                <TodoTools filter={this.props.filter}
                           nbActiveItems={this.getNbActiveItems()}
                           changeFilter={(filter) => {console.log('=> changeFilter(' + filter + ')');}}
                           clearCompleted={() => {console.log('=> clearCompleted');}} />
            </section>
            <Footer />
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
    ).isRequired,
    toggleComplete: React.PropTypes.func
};

function mapStateToProps(state) {
    return {
        todos: state.get('todos'),
        filter: state.get('filter')
    };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
