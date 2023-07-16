import { useState } from 'react';
import css from './SearchFilter.module.css';
export default function SearchFilter({ searchChange }) {
  const [filter, setFilter] = useState('')
  function onFilterChange(e) {
    setFilter(e.currentTarget.value)
    searchChange(filter)
  }
  return (
    <div className={css.filterContainer}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" id="filter" onChange={() => onFilterChange} />
    </div>
  );
}
