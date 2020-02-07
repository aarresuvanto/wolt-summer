import './App.css';
import React, { useState } from 'react';
import RestaurantTile from './components/RestaurantTile'

const restaurantData = require('./restaurants.json')

function App() {
  const [ restaurants, setRestaurants ] = useState(restaurantData.restaurants)

  console.log(restaurants)

  const restaurantTiles = restaurants.map((restaurant, index) => {
    return (
          <RestaurantTile key={index} image={restaurant.image} description={restaurant.description} name={restaurant.name}/>
    )
  })

  return (
    <div className="App">
      {restaurantTiles}
    </div>
  );
}

export default App;
