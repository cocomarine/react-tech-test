import React from 'react';
import Search from '../components/Search';
import '../styles/app.css';

const App = () => {
  return (
    <div className="App">
      <img className='NASA-logo' src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' alt='Nasa logo in red'/>
      <Search />
    </div>
  );
}
 
export default App;
