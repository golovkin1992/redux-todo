import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ToggleAllTodos.css';

export default class ToggleAllTodos extends PureComponent {
  static propTypes = {
    onToggleAll: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const { onToggleAll } = this.props;
    onToggleAll();
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
