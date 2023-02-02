import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ({ setSearchResults }) => {
  const [ value, setValue ] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(getImages(value));
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
            className="search-input" 
            type="text" 
            onChange={(e) => setValue(e.target.value)} 
          />
        <button className="search-button" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
}
 
export default Search