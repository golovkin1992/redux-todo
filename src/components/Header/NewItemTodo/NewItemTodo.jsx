import React, { PureComponent } from 'react';
import './NewItemTodo.css';
import PropTypes from 'prop-types';

export default class NewItemTodo extends PureComponent {
  state = {
    text: '',
  }

  createElement = (e) => {
    const { addTodo } = this.props;
    const { text } = this.state;
    if (!e.keyCode || e.keyCode === 13) {
      if (text !== '') {
        const newItem = { id: Date.now(), text, isComplete: false };
        addTodo(newItem);
        this.setState({ text: '' });
      }
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleBlur = (e) => {
    this.createElement(e);
  };

  handleKeyDown = (e) => {
    this.createElement(e);
  };

  render() {
    const { text } = this.state;
    return (
      <input
        className="header__new-item"
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        placeholder="What needs to be done?"
        value={text}
      />
    );
  }
}
NewItemTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
