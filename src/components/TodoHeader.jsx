import React from 'react';

class TodoHeader extends React.Component {
    constructor(props) {
        super(props);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }
    _handleKeyPress(e) {
        if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
            return this.props.addItem(this.refs.addTodoInput.value);
        }
    }
    render() {
        return <header className="header">
            <h1>todos</h1>
            <input className="new-todo"
                   ref="addTodoInput"
                   autoFocus={true}
                   autoComplete="off"
                   placeholder="What needs to be done?"
                   onKeyPress={this._handleKeyPress} />
        </header>;
    }
}

TodoHeader.propTypes = {
    addItem: React.PropTypes.func
};

export default TodoHeader;
