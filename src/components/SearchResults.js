import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results, isLoading }) => {
  if (!results.length && !isLoading) {
    return <h2>No matching images. Try again.</h2>
  } 
  return (
    <>
    {isLoading && <h2>Please enter search terms</h2>}
    <div className="search-results">
      {results.map((image, index) => (
        <img 
          src={image} 
          className="search-results__image" 
          alt={`${image}`} 
          key={index}
        />
      ))}
    </div>
    </>
  )
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default SearchResults;
