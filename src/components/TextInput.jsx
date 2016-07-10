import React from 'react';
// import classNames from 'classnames';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }
    _handleKeyDown(e) {
        switch(e.key) {
            case 'Enter':
                return this.props.doneEditing(this.props.id);
            case 'Escape':
                return this.props.cancelEditing(this.props.id);
        }
    }
    render() {
        return <input className="edit"
                      autoFocus={true}
                      value={this.props.text}
                      ref="itemInput"
                      type="text"
                      onKeyDown={this._handleKeyDown} />;
    }
}

TextInput.propTypes = {
    id: React.PropTypes.number,
    text: React.PropTypes.string.isRequired,

    // Funcs
    doneEditing: React.PropTypes.func,
    cancelEditing: React.PropTypes.func
};

export default TextInput;
