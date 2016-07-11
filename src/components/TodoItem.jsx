import React from 'react';
import classNames from 'classnames';
import TextInput from './TextInput';

class TodoItem extends React.Component {
    render() {
        var itemClass = classNames({
            'todo': true,
            'completed': this.props.isCompleted,
            'editing': this.props.isEditing
        });
        return <li className={itemClass}>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    defaultChecked={this.props.isCompleted}
                    onClick={() => this.props.toggleComplete(this.props.id)}
                />
                <label htmlFor="todo"
                       ref="text"
                       onDoubleClick={() => this.props.editItem(this.props.id)}>
                    {this.props.text}
                </label>
                <button className="destroy"
                        onClick={() => this.props.deleteItem(this.props.id)}></button>
            </div>
            <TextInput text={this.props.text}

                       // Passing down the callback functions to TextInput
                       doneEditing={this.props.doneEditing}
                       cancelEditing={this.props.cancelEditing} />
        </li>;
    }
}

TodoItem.propTypes = {
    id: React.PropTypes.number,
    text: React.PropTypes.string.isRequired,
    isCompleted: React.PropTypes.bool,
    isEditing: React.PropTypes.bool,

    // TodoITem Funcs
    toggleComplete: React.PropTypes.func,
    deleteItem: React.PropTypes.func,
    editItem: React.PropTypes.func,

    // TextInput funcs
    doneEditing: React.PropTypes.func,
    cancelEditing: React.PropTypes.func
};

export default TodoItem;
