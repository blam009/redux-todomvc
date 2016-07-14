import React from 'react';
import {connect} from 'react-redux';
import {fromJS} from 'immutable';

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
                <TodoHeader addItem={this.props.addItem} />
                <TodoList filter={this.props.filter}
                          todos={this.props.todos}

                          // TodoItem funcs
                          toggleComplete={this.props.toggleComplete}
                          deleteItem={this.props.deleteItem}
                          editItem={this.props.editItem}

                          // TextInput funcs
                          doneEditing={this.props.doneEditing}
                          cancelEditing={this.props.cancelEditing}/>
                <TodoTools filter={this.props.filter}
                           nbActiveItems={this.getNbActiveItems()}
                           changeFilter={this.props.changeFilter}
                           clearCompleted={this.props.clearCompleted} />
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
    ),
    toggleComplete: React.PropTypes.func,
    changeFilter: React.PropTypes.func,
    editItem: React.PropTypes.func,
    doneEditing: React.PropTypes.func,
    cancelEditing: React.PropTypes.func,
    clearCompleted: React.PropTypes.func,
    addItem: React.PropTypes.func,
    deleteItem: React.PropTypes.func
};

TodoApp.defaultProps = {
    filter: 'all',
    todos: fromJS([])
};

function mapStateToProps(state) {
    return {
        todos: state.get('todos'),
        filter: state.get('filter')
    };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
