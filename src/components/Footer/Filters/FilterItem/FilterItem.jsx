import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FilterItem extends PureComponent {
  handleClick = () => {
    const {
      setFilterAction,
      filterName,
      saveFilterAction,
    } = this.props;
    setFilterAction(filterName);
    saveFilterAction(filterName);
  };

  render() {
    const {
      isCurrent,
      filterName,
      filterLabel,
    } = this.props;
    return (
      <li className="filters__item">
        <input
          className="filter"
          defaultChecked={isCurrent}
          type="radio"
          name="group"
          id={filterName}
          onClick={this.handleClick}
        />
        <label
          htmlFor={filterName}
          className={filterName}
        >
          {filterLabel}
        </label>
      </li>
    );
  }
}
FilterItem.propTypes = {
  setFilterAction: PropTypes.func.isRequired,
  saveFilterAction: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterLabel: PropTypes.string.isRequired,
};
