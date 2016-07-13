import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.text};
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleOnBlur = this._handleOnBlur.bind(this);
        this._handleOnChange = this._handleOnChange.bind(this);
    }
    cancelEditing() {
        this.setState({'value': this.props.text});
        return this.props.cancelEditing(this.props.id);
    }
    _handleKeyDown(e) {
        switch(e.key) {
            case 'Enter':
                return this.props.doneEditing(this.props.id, this.state.value);
            case 'Escape':
                return this.cancelEditing();
        }
    }
    _handleOnBlur() {
        return this.cancelEditing();
    }
    _handleOnChange(e) {
        this.setState({value: e.target.value});
    }
    render() {
        return <input className="edit"
                      autoFocus={true}
                      value={this.state.value}
                      onChange={this._handleOnChange}
                      type="text"
                      ref="itemInput"
                      onKeyDown={this._handleKeyDown}
                      onBlur={this._handleOnBlur} />;
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
