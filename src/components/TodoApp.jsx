import React from 'react';

var ImmutablePropTypes = require('react-immutable-proptypes');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    getItems() {
        return this.props.todos || [];
    }
    render() {
        return <div>
            <section className="todoapp">
                <section className="main">
                    <ul className="todo-list">
                        {this.getItems().map(item =>
                            <li className="active" key={item.get('text')}>
                                <div className="view">
                                    <input type="checkbox" className="toggle" />
                                    <label htmlFor="todo">{item.get('text')}</label>
                                    <button className="destroy"></button>
                                </div>
                            </li>
                        )}
                    </ul>
                </section>
            </section>
        </div>;
    }
}

TodoApp.propTypes = {
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
