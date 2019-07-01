import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FilterItem extends PureComponent {
  handleInputChange = () => {
    const {
      setFilter,
      filterName,
    } = this.props;
    setFilter(filterName);
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
          checked={isCurrent}
          type="radio"
          name="group"
          id={filterName}
          onChange={this.handleInputChange}
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
  setFilter: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterLabel: PropTypes.string.isRequired,
};
