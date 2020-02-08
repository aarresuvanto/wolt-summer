import './App.css';
import React, { useState } from 'react';
import Search from './components/Search'

const restaurantData = require('./restaurants.json')

function App() {
  const [ restaurants] = useState(restaurantData.restaurants)

  return (
    <div className="App">
      <Search restaurants={restaurants}/>
    </div>
  );
}

export default App;
