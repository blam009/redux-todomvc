import React from 'react';
import classNames from 'classnames';

class TodoTools extends React.Component {
    constructor(props) {
        super(props);
        this.getNbItemsLeft = this.getNbItemsLeft.bind(this);
        this.setSelectedClass = this.setSelectedClass.bind(this);
    }
    getNbItemsLeft() {
        return this.props.nbActiveItems || 0;
    }
    setSelectedClass(filter) {
        return classNames({'selected': this.props.filter === filter});
    }
    render() {
        return <footer className="footer">
            <span className="todo-count">
                <strong>{this.getNbItemsLeft()}</strong> items left
            </span>
            <ul className="filters">
                <li>
                    <a href="#"
                       onClick={() => this.props.changeFilter('all')}
                       className={this.setSelectedClass('all')}>All
                    </a>
                </li>
                <li>
                    <a href="#"
                       onClick={() => this.props.changeFilter('active')}
                       className={this.setSelectedClass('active')}>Active
                    </a>
                </li>
                <li>
                    <a href="#"
                       onClick={() => this.props.changeFilter('completed')}
                       className={this.setSelectedClass('completed')}>Completed
                    </a>
                </li>
            </ul>
            <button className="clear-completed"
                    onClick={this.props.clearCompleted}>Clear Completed
            </button>
        </footer>;
    }
}

TodoTools.propTypes = {
    nbActiveItems: React.PropTypes.number,
    filter: React.PropTypes.string,
    changeFilter: React.PropTypes.func,
    clearCompleted: React.PropTypes.func
};

export default TodoTools;
