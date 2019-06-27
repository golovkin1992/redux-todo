import React, { PureComponent } from 'react';
import './NewItemTodo.css';
import PropTypes from 'prop-types';

export default class NewItemTodo extends PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  createElement = (e) => {
    const { addTodo } = this.props;
    if (!e.keyCode || e.keyCode === 13) {
      if (e.target.value !== '') {
        const obj = { id: Date.now(), text: e.target.value, isComplete: false };
        addTodo(obj);
        e.target.value = '';
      }
    }
  };

  handleBlur = (e) => {
    this.createElement(e);
  };

  handleKeyDown = (e) => {
    this.createElement(e);
  };

  render() {
    return (
      <input
        className="header__new-item"
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        placeholder="What needs to be done?"
      />
    );
  }
}