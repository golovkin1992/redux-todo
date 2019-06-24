import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SelectAllTodo.css';

export default class SelectAllTodo extends PureComponent {
  handleClick = () => {
    const { selectAllTodos, saveTodo } = this.props;
    selectAllTodos();
    saveTodo();
  }

  render() {
    const { total, active } = this.props;
    return (
      <label
        className="label-select-all"
        hidden={total === 0}
        htmlFor="select-all"
      >
        <input
          onClick={this.handleClick}
          onChange={() => {}}
          checked={active === 0}
          type="checkbox"
          id="select-all"
          className="select-all"
        />
        <span className="select-all-pseudo" />
      </label>
    );
  }
}


SelectAllTodo.propTypes = {
  selectAllTodos: PropTypes.func.isRequired,
  saveTodo: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};
