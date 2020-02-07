import './App.css';
import React, { useState } from 'react';
import RestaurantTile from './components/RestaurantTile'

const restaurantData = require('./restaurants.json')

function App() {
  const [ restaurants, setRestaurants ] = useState(restaurantData.restaurants)

  console.log(restaurants)

  const restaurantNamesListed = restaurants.map((restaurant, index) => {
    return (
          <li key={index}>{restaurant.name}</li>
    )
  })

  return (
    <div className="App">
      <RestaurantTile restaurants={restaurants} />
    </div>
  );
}

export default App;
