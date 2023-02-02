import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>
  } else {
      return (
        <div className="search-results">
        {results.map((image) => (
          <img 
            src={image} 
            className="card-image" 
            alt={`${image}`} 
            key={image}
          />
        ))}
        </div>
      );
    };
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string)
};

 
export default SearchResults;
