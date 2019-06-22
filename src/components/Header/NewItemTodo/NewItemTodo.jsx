import React from 'react';
import './NewItemTodo.css';
import PropTypes from 'prop-types';

const NewItemTodo = ({
  addTodo,
}) => {
  const createElement = (e) => {
    if (!e.keyCode || e.keyCode === 13) {
      if (e.target.value !== '') {
        const obj = { id: Date.now(), text: e.target.value, isComplete: false };
        addTodo(obj);
        e.target.value = '';
      }
    }
  };

  const handleBlur = (e) => {
    createElement(e);
  };

  const handleKeyDown = (e) => {
    createElement(e);
  };


  return (
    <input
      className="header__new-item"
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      placeholder="What needs to be done?"
    />
  );
};

NewItemTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default NewItemTodo;
