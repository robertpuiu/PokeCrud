'use client';
import React, { useCallback, useState } from 'react';
import './PokeSearchBar.css';
import { debounce } from 'lodash';

export default function PokeSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchDebounced(event.target.value);
  };

  const onSearchDebounced = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm);
    }, 500),
    []
  );

  return (
    <div className="PokeSearchBar">
      <input
        type="text"
        placeholder="Search your Pokemon!"
        className="search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
