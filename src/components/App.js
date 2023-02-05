import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/app.css";

const App = () => {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  return (
    <div className="app">
      <img 
        className="nasa-logo" 
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
        alt="Nasa logo in red"
      />
      <Search 
        setSearchResults={setSearchResults} 
        setIsLoading={setIsLoading} 
      />
      <SearchResults 
        results={searchResults} 
        isLoading={isLoading}
      />
    </div>
  );
}
 
export default App;
