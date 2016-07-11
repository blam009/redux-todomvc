import React from 'react';

export default class Footer extends React.Component {
    render() {
        return <footer className="info">
            <p>Double-click to edit a todo</p>
            <p>Written by Billy Lam (<a href="http://github.com/blam009" target="_blank">blam009</a>)</p>
            <p>Part of <a href="http://todomvc.com" target="_blank">TodoMVC</a></p>
        </footer>;
    }
}
