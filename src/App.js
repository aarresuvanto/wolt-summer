import './App.css';
import React, { useState } from 'react';
import RestaurantTile from './components/RestaurantTile'
import Search from './components/Search'

const restaurantData = require('./restaurants.json')

function App() {
  const [ restaurants, setRestaurants ] = useState(restaurantData.restaurants)

  console.log(restaurants)

  return (
    <div className="App">
      <Search restaurants={restaurants}/>
    </div>
  );
}

export default App;
