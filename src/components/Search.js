import React, { useState } from 'react';
import '../styles/search.css';

const Search = () => {
  return (
    <>
      <input className='search' type='text' />
      <button type='submit'>Search</button>
    </>
  );
}
 
export default Search