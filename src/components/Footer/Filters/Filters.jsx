import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem/index';
import filters from '../../../constants/filters';
import './Filters.css';

const Filters = ({
  selectedFilter,
  setFilterAction,
  saveFilterAction,
}) => {
  const elements = filters.map(({ name, label }) => (
    <FilterItem
      key={name}
      filterName={name}
      filterLabel={label}
      setFilterAction={setFilterAction}
      saveFilterAction={saveFilterAction}
      isCurrent={selectedFilter === name}
    />
  ));
  return <ul className="filters">{elements}</ul>;
};
export default Filters;

Filters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  setFilterAction: PropTypes.func.isRequired,
  saveFilterAction: PropTypes.func.isRequired,
};
